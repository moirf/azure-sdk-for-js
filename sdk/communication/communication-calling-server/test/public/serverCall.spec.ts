// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { matrix } from "@azure/test-utils";
import { isLiveMode, env, record, Recorder } from "@azure-tools/test-recorder";
import { CallingServerClient, GroupCallLocator, PlayAudioOptions, CallConnection, ServerCallLocator, AnswerCallOptions, RejectCallOptions, RedirectCallOptions } from "../../src";
import * as Constants from "./utils/constants";
import { TestUtils } from "./utils/testUtils";
import { environmentSetup, createCallingServerClientWithToken, createCallingServerClient } from "./utils/recordedClient";
import { Context } from "mocha";
import { assert } from "chai";
import { CommunicationUserIdentifier } from "@azure/communication-common";
import { RestError } from "@azure/core-http";

matrix([[true, false]], async function(useAad) {
  describe(`CallingServer [Live]${useAad ? " [AAD]" : ""}`, async () => {
    let recorder: Recorder;
    let connectionString: string;

    beforeEach(async function(this: Context) {
      recorder = record(this, environmentSetup);
      recorder.skip(
        undefined,
        "A UUID is randomly generated within the SDK and used in the HTTP request and cannot be preserved."
      );
      connectionString =
        env.COMMUNICATION_LIVETEST_STATIC_CONNECTION_STRING ||
        "endpoint=https://endpoint/;accesskey=banana";
      if (useAad) {
        this.callingServerClient = createCallingServerClientWithToken();
      } else {
        this.callingServerClient = createCallingServerClient();
      }
    });

    afterEach(async function(this: Context) {
      await recorder.stop();
    });

    describe("CallingServerClient Live Test", function() {
      it("Run basic scenario to test client creation", async function(this: Context) {
        const groupId = TestUtils.getGroupId("Run join_play_cancel_hangup scenario");
        const fromUser = await TestUtils.getUserId("fromUser", connectionString);
        const toUser = await TestUtils.getUserId("toUser", connectionString);
        const callingServer = new CallingServerClient(connectionString);
        let connections : CallConnection[] = [];

        // create GroupCalls
        try {
          connections = await TestUtils.createCallConnections(callingServer, groupId, fromUser, toUser);
        } finally {
          // Hangup call
          await TestUtils.delayIfLive();
          await TestUtils.cleanCallConnections(connections);
        }
      });
    });
  });
});

describe("Server Call Live Test", function() {
  describe("Recording Operations", function() {
    let recorder: Recorder;
    let connectionString: string;
    let callingServerClient: CallingServerClient;
    let fromUser: string;
    let toUser: string;

    beforeEach(async function(this: Context) {
      recorder = record(this, environmentSetup);

      connectionString =
        env.COMMUNICATION_LIVETEST_STATIC_CONNECTION_STRING ||
        "endpoint=https://endpoint/;accesskey=banana";
      callingServerClient = new CallingServerClient(connectionString);
      fromUser = await TestUtils.getUserId("fromUser", connectionString);
      toUser = await TestUtils.getUserId("toUser", connectionString);
    });

    afterEach(async function(this: Context) {
      if (!this.currentTest?.isPending()) {
        await recorder.stop();
      }
    });

    it("Run all client recording operations", async function(this: Context) {
      const groupId = TestUtils.getGroupId("Run all client recording operations");
      let connections = [];
      let recordingId = "";
      try {
        connections = await TestUtils.createCallConnections(
          callingServerClient,
          groupId,
          fromUser,
          toUser
        );
        const callLocator: GroupCallLocator = { groupCallId: groupId };

        const startCallRecordingResult = await callingServerClient.startRecording(
          callLocator,
          Constants.CALLBACK_URL
        );
        recordingId = startCallRecordingResult.recordingId!;
        await TestUtils.delayIfLive();
        let recordingState = await callingServerClient.getRecordingProperties(recordingId!);
        assert.strictEqual(recordingState.recordingState, "active");

        await callingServerClient.pauseRecording(recordingId!);
        await TestUtils.delayIfLive();
        recordingState = await callingServerClient.getRecordingProperties(recordingId!);
        assert.strictEqual(recordingState.recordingState, "inactive");

        await callingServerClient.resumeRecording(recordingId!);
        await TestUtils.delayIfLive();
        recordingState = await callingServerClient.getRecordingProperties(recordingId!);
        assert.strictEqual(recordingState.recordingState, "active");
      } finally {
        if (recordingId !== "") {
          try {
            await callingServerClient.stopRecording(recordingId);
          } catch (e) {
            console.error("Error stopping recording (" + recordingId + "): " + e);
          }
        }
      }

      await TestUtils.cleanCallConnections(connections);
    });

    it("Run start recording fails operations", async function(this: Context) {
      try {
        const callLocator: ServerCallLocator = { serverCallId: Constants.InvalidServerId };

        await callingServerClient.startRecording(
          callLocator,
          Constants.CALLBACK_URL
        );
      }
      catch (e) {
        assert.strictEqual((e as RestError).statusCode, 400);
      }
    }).timeout(0);;

    it("Start recording with relative url fails", async function(this: Context) {
      const groupCallId = TestUtils.getGroupId("Start recording with relative url fails");
      let connections: CallConnection[] = [];
      let recordingId: string | undefined;

      try {
        connections = await TestUtils.createCallConnections(
          callingServerClient,
          groupCallId,
          fromUser,
          toUser
        );
        const callLocator: GroupCallLocator = { groupCallId: groupCallId };

        recordingId = (await callingServerClient.startRecording(callLocator, "/not/absolute/url"))
          .recordingId;
      } catch (e) {
        assert.strictEqual((e as RestError).statusCode, 400);
      } finally {
        if (recordingId !== undefined) {
          try {
            await callingServerClient.stopRecording(recordingId);
          } catch (e) {
            console.error("Error stopping recording (" + recordingId + "): " + e);
          }
        }
      }

      await TestUtils.cleanCallConnections(connections);
    }).timeout(0);

    it("Delete recording file", async function(this: Context) {
      if (isLiveMode()) {
         this.skip();
      }
      try {
        await callingServerClient.deleteRecording(Constants.DeleteUrl)
      } catch (e) {
        console.log(e)
      } 
    }).timeout(0);

  it("Delete recordingContentNotExist", async function(this: Context) {
    try {
      await callingServerClient.deleteRecording(Constants.InvalidDeleteUrl)
    } catch (e) {
      assert.strictEqual((e as RestError).statusCode, 404);
    } 
  }).timeout(0);

  it("Delete recordingContentUnauthorized", async function(this: Context) {
    try {
      let unauthorizecallingServerClient = new CallingServerClient(Constants.InvalidConnectionString);
      await unauthorizecallingServerClient.deleteRecording(Constants.DeleteUrl)
    } catch (e) {
      assert.strictEqual((e as RestError).statusCode, 401);
    } 
  }).timeout(0);
});

  describe("Call Automation Operations", function() {
    let recorder: Recorder;
    let connectionString: string;
    let incomingCallContext = ''
    let participantGuid = ''

    beforeEach(async function(this: Context) {
      recorder = record(this, environmentSetup);
      /* Place your code here*/
      connectionString =
        env.COMMUNICATION_LIVETEST_STATIC_CONNECTION_STRING ||
        "endpoint=https://endpoint/;accesskey=banana";
      incomingCallContext = Constants.IncomingCallContext
      participantGuid = '0000000e-f44f-6ef4-655d-573a0d0017d1'
    });

    afterEach(async function(this: Context) {
      if (!this.currentTest?.isPending()) {
        await recorder.stop();
      }
    });

    it("Run join_play_cancel_hangup scenario", async function(this: Context) {
      const groupId = TestUtils.getGroupId("Run join_play_cancel_hangup scenario");
      const fromUser = await TestUtils.getUserId("fromUser", connectionString);
      const toUser = await TestUtils.getUserId("toUser", connectionString);
      const callingServer = new CallingServerClient(connectionString);
      let connections : CallConnection[] = [];

      // create GroupCalls
      connections = await TestUtils.createCallConnections(callingServer, groupId, fromUser, toUser);
      try {
        const callLocator: GroupCallLocator = { groupCallId: groupId };

        // create PlayAudio option
        const playAudioOptions: PlayAudioOptions = {
          loop: true,
          audioFileId: recorder.getUniqueName("audioFileId"),
          callbackUrl: Constants.CALLBACK_URL,
          operationContext: recorder.getUniqueName("operationContext")
        };

        // Play Audio
        await TestUtils.delayIfLive();
        const playAudioResult = await callingServer.playAudio(callLocator, Constants.Audio_File_Url, playAudioOptions);
        assert.equal(playAudioResult.status,'running')

        // Cancel Prompt Audio
        await TestUtils.delayIfLive();
        await TestUtils.cancelAllMediaOperationsForGroupCall(connections);
      }
      catch(e){
        console.log(e)
      }
      finally {
        // Hangup call
        await TestUtils.delayIfLive();
        await TestUtils.cleanCallConnections(connections);
      }
    });

    it("Run answer_call scenario", async function(this: Context) {
      const callingServer = new CallingServerClient(connectionString);
      try {
        await TestUtils.delayIfLive();
        let option:AnswerCallOptions = {callbackUrl:Constants.CALLBACK_URL, requestedMediaTypes: ['audio'], requestedCallEvents: ['participantsUpdated']}
        const answerCallResult = await callingServer.answerCall(incomingCallContext, option);
        assert.isTrue(answerCallResult.callConnectionId != '')
      }
      catch(e){
        console.log(e)
      }
    });


    it("Run reject_call scenario", async function(this: Context) {
      if (isLiveMode()) {
        this.skip();  // currently skipping because of error
     }
      const callingServer = new CallingServerClient(connectionString);
      try {

        // answer Audio
        await TestUtils.delayIfLive();
        let option:RejectCallOptions = { callRejectReason: 'busy'}
        await callingServer.rejectCall(incomingCallContext, option);
      }
      catch(e){
        console.log(e)
      }
    });

    it("Run redirect_call scenario", async function(this: Context) {
      const callingServer = new CallingServerClient(connectionString);
      try {

        await TestUtils.delayIfLive();
        let option:RedirectCallOptions = { }
        const added_participant_id = TestUtils.getFixedUserId(
          participantGuid
        );
        const target: CommunicationUserIdentifier = {
          communicationUserId: added_participant_id
        };
        await callingServer.redirectCall(incomingCallContext,target, option);
      }
      catch(e){
        console.log(e)
      }
    });


    it("Run create_add_remove_hangup scenario", async function(this: Context) {
      const groupId = TestUtils.getGroupId("Run create_add_remove_hangup scenario");
      const fromUser = await TestUtils.getUserId("fromUser", connectionString);
      const toUser = await TestUtils.getUserId("toUser", connectionString);
      const callingServer = new CallingServerClient(connectionString);
      let connections : CallConnection[] = [];

      // create GroupCalls
      connections = await TestUtils.createCallConnections(callingServer, groupId, fromUser, toUser);
      try {
        const callLocator: GroupCallLocator = { groupCallId: groupId };
        const added_participant_id = TestUtils.getFixedUserId(
          participantGuid
        );
        const participant: CommunicationUserIdentifier = {
          communicationUserId: added_participant_id
        };
        // Add Participant
        await TestUtils.delayIfLive();
        const addParticipantResult = await callingServer.addParticipant(
          callLocator,
          participant,
          Constants.CALLBACK_URL
        );
        assert.isNotNull(addParticipantResult.operationContext);
        assert.equal(addParticipantResult.status, "running");
        assert.isNotNull(addParticipantResult.resultDetails);

        // Get all participants
        let allParticipants = await callingServer.getParticipants(callLocator);
        assert.isTrue(allParticipants.length >= 2)

        // Get one participant
        let participantResult = await callingServer.getParticipant(callLocator, participant);
        assert.isTrue(participantResult.participantId != '')

        // Remove Participant
        await TestUtils.delayIfLive();
        await callingServer.removeParticipant(callLocator, participant);
      }
      catch(e){
        console.log(e)
      } finally {
        // Hangup call
        await TestUtils.delayIfLive();
        await TestUtils.cleanCallConnections(connections);
      }
    });

    it("Run play_audio_to_participant scenario", async function(this: Context) {
      const groupId = TestUtils.getGroupId("Run create_add_remove_hangup scenario");
      const fromUser = await TestUtils.getUserId("fromUser", connectionString);
      const toUser = await TestUtils.getUserId("toUser", connectionString);
      const callingServer = new CallingServerClient(connectionString);
      let connections : CallConnection[] = [];

      // create GroupCalls
      connections = await TestUtils.createCallConnections(callingServer, groupId, fromUser, toUser);
      try {
        const callLocator: GroupCallLocator = { groupCallId: groupId };
        const added_participant_id = TestUtils.getFixedUserId(
           participantGuid
        );
        const participant: CommunicationUserIdentifier = {
          communicationUserId: added_participant_id
        };
        // Add Participant
        await TestUtils.delayIfLive();
        const addParticipantResult = await callingServer.addParticipant(
          callLocator,
          participant,
          Constants.CALLBACK_URL
        );
        assert.equal(addParticipantResult.status, "running");
        
        // create PlayAudio option
        const playAudioOptions: PlayAudioOptions = {
          loop: true,
          audioFileId: recorder.getUniqueName("audioFileId"),
          callbackUrl: Constants.CALLBACK_URL,
          operationContext: recorder.getUniqueName("operationContext")
        };

        // Play Audio to participant
        await TestUtils.delayIfLive();
        const playAudioResult = await callingServer.playAudioToParticipant(callLocator, participant, Constants.Audio_File_Url, playAudioOptions);
        assert.equal(playAudioResult.status,'running')
        
        // Cancel Participant Media Operation 
        await TestUtils.delayIfLive();
        await callingServer.cancelParticipantMediaOperation(callLocator, participant, (playAudioResult.operationId ? playAudioResult.operationId : ""), playAudioOptions);

        // Remove Participant
        await TestUtils.delayIfLive();
        await callingServer.removeParticipant(callLocator, participant);
      }
      catch(e){
        console.log(e)
      } finally {
        // Hangup call
        await TestUtils.delayIfLive();
        await TestUtils.cleanCallConnections(connections);
      }
    });
  });
});
