// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { matrix } from "@azure/test-utils";
import { isLiveMode, isPlaybackMode, env, record, Recorder } from "@azure-tools/test-recorder";
import {
  CallingServerClient,
  GroupCallLocator,
  PlayAudioOptions,
  CallConnection,
  ServerCallLocator
} from "../../src";
import * as Constants from "./utils/constants";
import { TestUtils } from "./utils/testUtils";
import {
  environmentSetup,
  createCallingServerClientWithToken,
  createCallingServerClient
} from "./utils/recordedClient";
import { Context } from "mocha";
import { assert } from "chai";
import { CommunicationUserIdentifier } from "@azure/communication-common";
import { RestError } from "@azure/core-http";

matrix([[true, false]], async function(useAad) {
  describe(`CallingServer [Live]${useAad ? " [AAD]" : ""}`, async () => {
    let recorder: Recorder;
    let connectionString: string;

    beforeEach(async function(this: Context) {
      // because we have only one test case here, "before each" will hook for the test.
      // hence, need below block to disable beforeEach block.
      if (isPlaybackMode()) {
        // tslint:disable-next-line:no-invalid-this
        this.skip();
      }
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
      // because we have only one test case here, "after each" will hook for the test.
      // hence, need below block to disable afterEach block.
      if (isPlaybackMode()) {
        // tslint:disable-next-line:no-invalid-this
        this.skip();
      }
      await recorder.stop();
    });

    describe("CallingServerClient Live Test", function() {
      it("Run basic scenario to test client creation", async function(this: Context) {
        this.timeout(0);
        const groupId = TestUtils.getGroupId(
          `Run join_play_cancel_hangup scenario ${useAad ? " [AAD]" : ""}`
        );
        const fromUser = await TestUtils.getUserId("fromUser", connectionString);
        const toUser = await TestUtils.getUserId("toUser", connectionString);
        const callingServer = new CallingServerClient(connectionString);
        let connections: CallConnection[] = [];

        // create GroupCalls
        try {
          connections = await TestUtils.createCallConnections(
            callingServer,
            groupId,
            fromUser,
            toUser
          );
        } finally {
          // Hangup call
          await TestUtils.waitForOperationCompletion();
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
      this.timeout(0);
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
        await TestUtils.waitForOperationCompletion();
        let recordingState = await callingServerClient.getRecordingProperties(recordingId!);
        assert.strictEqual(recordingState.recordingState, "active");

        await callingServerClient.pauseRecording(recordingId!);
        await TestUtils.waitForOperationCompletion();
        recordingState = await callingServerClient.getRecordingProperties(recordingId!);
        assert.strictEqual(recordingState.recordingState, "inactive");

        await callingServerClient.resumeRecording(recordingId!);
        await TestUtils.waitForOperationCompletion();
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

    it("Run start recording fails operations", async function(this: Context) {
      this.timeout(0);
      try {
        const callLocator: ServerCallLocator = { serverCallId: Constants.InvalidServerId };

        await callingServerClient.startRecording(callLocator, Constants.CALLBACK_URL);
      } catch (e) {
        assert.strictEqual((e as RestError).statusCode, 400);
      }
    }).timeout(0);

    it("Delete recording file", async function(this: Context) {
      this.timeout(0);
      if (isLiveMode() || isPlaybackMode()) {
        this.skip();
      }
      try {
        await callingServerClient.deleteRecording(Constants.DeleteUrl);
      } catch (e) {
        console.log(e);
      }
    }).timeout(0);

    it("Delete recordingContentNotExist", async function(this: Context) {
      this.timeout(0);
      try {
        await callingServerClient.deleteRecording(env.INVALID_DELETE_URL);
      } catch (e) {
        assert.strictEqual(e.name, "RestError");
      }
    }).timeout(0);

    it("Delete recordingContentUnauthorized", async function(this: Context) {
      this.timeout(0);
      try {
        const unauthorizecallingServerClient = new CallingServerClient(
          Constants.InvalidConnectionString
        );
        await unauthorizecallingServerClient.deleteRecording(env.DELETE_URL);
      } catch (e) {
        assert.strictEqual((e as RestError).statusCode, 401);
      }
    }).timeout(0);
  });

  describe("Call Automation Operations", function() {
    let recorder: Recorder;
    let connectionString: string;

    beforeEach(async function(this: Context) {
      recorder = record(this, environmentSetup);
      /* Place your code here*/
      connectionString =
        env.COMMUNICATION_LIVETEST_STATIC_CONNECTION_STRING ||
        "endpoint=https://endpoint/;accesskey=banana";
    });

    afterEach(async function(this: Context) {
      if (!this.currentTest?.isPending()) {
        await recorder.stop();
      }
    });

    it("Run join_play_cancel_hangup scenario", async function(this: Context) {
      this.timeout(0);
      const groupId = TestUtils.getGroupId("Run join_play_cancel_hangup scenario");
      const fromUser = await TestUtils.getUserId("fromUser", connectionString);
      const toUser = await TestUtils.getUserId("toUser", connectionString);
      const callingServer = new CallingServerClient(connectionString);
      let connections: CallConnection[] = [];

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
        await TestUtils.waitForOperationCompletion();
        await callingServer.playAudio(callLocator, env.AUDIO_FILE_URI, playAudioOptions);

        // Cancel Prompt Audio
        await TestUtils.waitForOperationCompletion();
        await TestUtils.cancelAllMediaOperationsForGroupCall(connections);
      } finally {
        // Hangup call
        await TestUtils.waitForOperationCompletion();
        await TestUtils.cleanCallConnections(connections);
      }
    });

    it("Run create_add_remove_hangup scenario", async function(this: Context) {
      if (isLiveMode()) {
        this.skip();
      }

      this.timeout(0);
      const groupId = TestUtils.getGroupId("Run create_add_remove_hangup scenario");
      const fromUser = await TestUtils.getUserId("fromUser", connectionString);
      const toUser = await TestUtils.getUserId("toUser", connectionString);
      const callingServer = new CallingServerClient(connectionString);
      let connections: CallConnection[] = [];

      // create GroupCalls
      connections = await TestUtils.createCallConnections(callingServer, groupId, fromUser, toUser);
      try {
        const callLocator: GroupCallLocator = { groupCallId: groupId };
        const added_participant_id = TestUtils.getFixedUserId(
          "0000000f-3adc-c3b2-290c-113a0d00ad92"
        );
        const participant: CommunicationUserIdentifier = {
          communicationUserId: added_participant_id
        };
        // Add Participant
        await TestUtils.waitForOperationCompletion();
        const addParticipantResult = await callingServer.addParticipant(
          callLocator,
          participant,
          Constants.CALLBACK_URL
        );
        assert.isNotNull(addParticipantResult.operationContext);
        assert.equal(addParticipantResult.status, "running");
        assert.isNotNull(addParticipantResult.resultDetails);

        // Remove Participant
        await TestUtils.waitForOperationCompletion();
        await callingServer.removeParticipant(callLocator, participant);
      } finally {
        // Hangup call
        await TestUtils.waitForOperationCompletion();
        await TestUtils.cleanCallConnections(connections);
      }
    });

    it("Run play_audio_to_participant scenario", async function(this: Context) {
      this.timeout(0);
      const groupId = TestUtils.getGroupId("Run create_add_remove_hangup scenario");
      const fromUser = await TestUtils.getUserId("fromUser", connectionString);
      const toUser = await TestUtils.getUserId("toUser", connectionString);
      const callingServer = new CallingServerClient(connectionString);
      let connections: CallConnection[] = [];

      // create GroupCalls
      connections = await TestUtils.createCallConnections(callingServer, groupId, fromUser, toUser);
      try {
        const callLocator: GroupCallLocator = { groupCallId: groupId };
        const added_participant_id = TestUtils.getFixedUserId(env.PARTICIPANT_GUID);
        const participant: CommunicationUserIdentifier = {
          communicationUserId: added_participant_id
        };
        // Add Participant
        await TestUtils.waitForOperationCompletion();
        const addParticipantResult = await callingServer.addParticipant(
          callLocator,
          participant,
          Constants.CALLBACK_URL
        );
        assert.equal(addParticipantResult.status, "running");

        // create PlayAudio option
        const playAudioOptions: PlayAudioOptions = {
          loop: Constants.PlayAudioOptionsLoop,
          audioFileId: recorder.getUniqueName("audioFileId"),
          callbackUrl: Constants.CALLBACK_URL,
          operationContext: recorder.getUniqueName("operationContext")
        };

        // Play Audio to participant
        await TestUtils.waitForOperationCompletion();
        const playAudioResult = await callingServer.playAudioToParticipant(
          callLocator,
          participant,
          env.AUDIO_FILE_URI,
          playAudioOptions
        );
        assert.equal(playAudioResult.status, "running");

        // Cancel Participant Media Operation
        await TestUtils.waitForOperationCompletion();
        await callingServer.cancelParticipantMediaOperation(
          callLocator,
          participant,
          playAudioResult.operationId!,
          playAudioOptions
        );

        // Remove Participant
        await TestUtils.waitForOperationCompletion();
        await callingServer.removeParticipant(callLocator, participant);
      } catch (e) {
        console.log(e);
      } finally {
        // Hangup call
        await TestUtils.waitForOperationCompletion();
        await TestUtils.cleanCallConnections(connections);
      }
    });
  });
});
