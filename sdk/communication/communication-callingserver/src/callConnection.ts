// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.
/// <reference lib="esnext.asynciterable" />

import { CallConnections } from "./generated/src/operations";
import {
  PlayAudioRequest,
  PlayAudioResult,
  AddParticipantRequest,
  CallConnectionsAddParticipantResponse,
  RemoveParticipantRequest,
  PlayAudioToParticipantRequest,
  CancelParticipantMediaOperationRequest,
  TransferCallRequest
} from "./generated/src/models";
import {
  HangUpOptions,
  PlayAudioOptions,
  CancelAllMediaOperationsOptions,
  AddParticipantOptions,
  RemoveParticipantOptions,
  CancelMediaOperationOptions,
  TransferCallOptions
} from "./models";
import {
  CommunicationIdentifier,
  serializeCommunicationIdentifier
} from "@azure/communication-common";

import { createSpan } from "./tracing";
import { operationOptionsToRequestOptionsBase } from "@azure/core-http";
import { SpanStatusCode } from "@azure/core-tracing";
import { extractOperationOptions } from "./extractOperationOptions";

/**
 * A CallConnection interface represents call connection based APIs.
 */
export interface CallConnection{

  /**
   * Returns the call connection id.
   */
  getCallConnectionId(): string;

  /**
   * Disconnect the current caller in a group-call or end a p2p-call.
   *
   * @param options - Additional request options contains hangUp api options.
   */
  hangUp(options?: HangUpOptions): Promise<void>;

  /**
   * Cancel all media operations in the call.
   *
   * @param options - Additional request options contains hangUp api options.
   */
  cancelAllMediaOperations(
    options?: CancelAllMediaOperationsOptions
  ): Promise<void>;

  /**
   * Play audio.
   *
   * @param audioFileUri - The id for the media in the AudioFileUri, using which we cache the media resource.
   * @param options - Additional request options contains playAudio api options.
   */
  playAudio(
    audioFileUri: string,
    options: PlayAudioOptions
  ): Promise<PlayAudioResult>;

  /**
   * Add participant to the call.
   *
   * @param participant - The identifier of the participant.
   * @param options - Additional request options contains addParticipant api options.
   */
  addParticipant(
    participant: CommunicationIdentifier,
    options?: AddParticipantOptions
  ): Promise<CallConnectionsAddParticipantResponse>;

  /**
   * Remove participant from the call.
   *
   * @param participant - The identifier of the participant.
   * @param options - Additional request options contains removeParticipant api options.
   */
  removeParticipant(
    participant: CommunicationIdentifier,
    options?: RemoveParticipantOptions
  ): Promise<void>;

  /**
   * Play audio to a participant.
   *
   * @param participant - The identifier of the participant.
   * @param audioFileUri - The id for the media in the AudioFileUri, using which we cache the media resource.
   * @param options - Additional request options contains playAudioToParticipant api options.
   */
  playAudioToParticipant(
    participant: CommunicationIdentifier,
    audioFileUri: string,
    options: PlayAudioOptions
  ): Promise<PlayAudioResult>;

  /**
   * Cancel media operation of a participant.
   *
   * @param participant - The identifier of the participant.
   * @param mediaOperationId - The operationId of the media operation to cancel.
   * @param options - Additional request options contains cancelMediaOperation api options.
   */
  cancelParticipantMediaOperation(
    participant: CommunicationIdentifier,
    mediaOperationId: string,
    options?: CancelMediaOperationOptions
  ): Promise<void>;

  /**
   * Transfer a call.
   *
   * @param targetParticipant - The identity of the target where call should be transfer to.
   * @param userToUserInformation - The user to user information.
   * @param options - Additional request options contains transferCall api options.
   */
  transferCall(
    targetParticipant: CommunicationIdentifier,
    userToUserInformation: string,
    options?: TransferCallOptions
  ): Promise<void>;
}

/**
 * The client to do call connection operations
 */
export class CallConnectionImpl implements CallConnection {
  private readonly callConnectionId: string;
  private readonly callConnectionRestClient: CallConnections;

  constructor(callConnectionId: string, callConnectionRestClient: CallConnections) {
    this.callConnectionId = callConnectionId;
    this.callConnectionRestClient = callConnectionRestClient;
  }

  /**
   * Returns the call connection id.
   */
  public getCallConnectionId(): string {
    return this.callConnectionId;
  }

  /**
   * Disconnect the current caller in a group-call or end a p2p-call.
   *
   * @param options - Additional request options contains hangUp api options.
   */
  public async hangUp(options: HangUpOptions = {}): Promise<void> {
    const { span, updatedOptions } = createSpan("CallConnectionRestClient-HangUp", options);

    try {
      await this.callConnectionRestClient.hangupCall(
        this.callConnectionId,
        operationOptionsToRequestOptionsBase(updatedOptions)
      );
    } catch (e) {
      span.setStatus({
        code: SpanStatusCode.ERROR,
        message: e.message
      });
      throw e;
    } finally {
      span.end();
    }
  }

  /**
   * Cancel all media operations in the call.
   *
   * @param options - Additional request options contains hangUp api options.
   */
  public async cancelAllMediaOperations(
    options: CancelAllMediaOperationsOptions = {}
  ): Promise<void> {
    const { span, updatedOptions } = createSpan(
      "CallConnectionRestClient-CancelAllMediaOperations",
      options
    );

    try {
      await this.callConnectionRestClient.cancelAllMediaOperations(
        this.callConnectionId,
        operationOptionsToRequestOptionsBase(updatedOptions)
      );
    } catch (e) {
      span.setStatus({
        code: SpanStatusCode.ERROR,
        message: e.message
      });
      throw e;
    } finally {
      span.end();
    }
  }

  /**
   * Play audio.
   *
   * @param audioFileUri - The id for the media in the AudioFileUri, using which we cache the media resource.
   * @param options - Additional request options contains playAudio api options.
   */
  public async playAudio(
    audioFileUri: string,
    options: PlayAudioOptions
  ): Promise<PlayAudioResult> {
    const { operationOptions, restOptions } = extractOperationOptions(options);
    const { span, updatedOptions } = createSpan(
      "CallConnectionRestClient-PlayAudio",
      operationOptions
    );

    const request: PlayAudioRequest = {
      audioFileUri: audioFileUri,
      loop: restOptions.loop,
      operationContext: restOptions.operationContext,
      audioFileId: restOptions.audioFileId,
      callbackUri: restOptions.callbackUri
    };
    try {
      const { ...result } = await this.callConnectionRestClient.playAudio(
        this.callConnectionId,
        request,
        operationOptionsToRequestOptionsBase(updatedOptions)
      );
      return result;
    } catch (e) {
      span.setStatus({
        code: SpanStatusCode.ERROR,
        message: e.message
      });
      throw e;
    } finally {
      span.end();
    }
  }

  /**
   * Add participant to the call.
   *
   * @param participant - The identifier of the participant.
   * @param options - Additional request options contains addParticipant api options.
   */
  public async addParticipant(
    participant: CommunicationIdentifier,
    options: AddParticipantOptions = {}
  ): Promise<CallConnectionsAddParticipantResponse> {
    const { operationOptions, restOptions } = extractOperationOptions(options);
    const { span, updatedOptions } = createSpan("CallConnectionRestClient-playAudio", operationOptions);
    const alternate_caller_id =
      typeof restOptions?.alternateCallerId === "undefined"
        ? restOptions?.alternateCallerId
        : serializeCommunicationIdentifier({ phoneNumber: restOptions.alternateCallerId }).phoneNumber;

    const request: AddParticipantRequest = {
      participant: serializeCommunicationIdentifier(participant),
      alternateCallerId: alternate_caller_id,
      operationContext: restOptions?.operationContext
    };

    try {
      const { ...result } = await this.callConnectionRestClient.addParticipant(
        this.callConnectionId,
        request,
        operationOptionsToRequestOptionsBase(updatedOptions)
      );
      return result;
    } catch (e) {
      span.setStatus({
        code: SpanStatusCode.ERROR,
        message: e.message
      });
      throw e;
    } finally {
      span.end();
    }
  }

  /**
   * Remove participant from the call.
   *
   * @param participant - The identifier of the participant.
   * @param options - Additional request options contains removeParticipant api options.
   */
  public async removeParticipant(
    participant: CommunicationIdentifier,
    options: RemoveParticipantOptions = {}
  ): Promise<void> {
    const { span, updatedOptions } = createSpan(
      "CallConnectionRestClient-removeParticipant",
      options
    );

    const request: RemoveParticipantRequest = {
      identifier: serializeCommunicationIdentifier(participant)
    };

    try {
      await this.callConnectionRestClient.removeParticipant(
        this.callConnectionId,
        request,
        operationOptionsToRequestOptionsBase(updatedOptions)
      );
    } catch (e) {
      span.setStatus({
        code: SpanStatusCode.ERROR,
        message: e.message
      });
      throw e;
    } finally {
      span.end();
    }
  }

  /**
   * Play audio to a participant.
   *
   * @param participant - The identifier of the participant.
   * @param audioFileUri - The id for the media in the AudioFileUri, using which we cache the media resource.
   * @param options - Additional request options contains playAudioToParticipant api options.
   */
  public async playAudioToParticipant(
    participant: CommunicationIdentifier,
    audioFileUri: string,
    options: PlayAudioOptions
  ): Promise<PlayAudioResult> {
    const { operationOptions, restOptions } = extractOperationOptions(options);
    const { span, updatedOptions } = createSpan(
      "CallConnectionRestClient-playAudio",
      operationOptions
    );

    const request: PlayAudioToParticipantRequest = {
      identifier: serializeCommunicationIdentifier(participant),
      audioFileUri: audioFileUri,
      loop: restOptions.loop,
      operationContext: restOptions.operationContext,
      audioFileId: restOptions.audioFileId,
      callbackUri: restOptions.callbackUri
    };

    try {
      const { ...result } = await this.callConnectionRestClient.participantPlayAudio(
        this.callConnectionId,
        request,
        operationOptionsToRequestOptionsBase(updatedOptions)
      );
      return result;
    } catch (e) {
      span.setStatus({
        code: SpanStatusCode.ERROR,
        message: e.message
      });
      throw e;
    } finally {
      span.end();
    }
  }

  /**
   * Cancel media operation of a participant.
   *
   * @param participant - The identifier of the participant.
   * @param mediaOperationId - The operationId of the media operation to cancel.
   * @param options - Additional request options contains cancelMediaOperation api options.
   */
  public async cancelParticipantMediaOperation(
    participant: CommunicationIdentifier,
    mediaOperationId: string,
    options: CancelMediaOperationOptions = {}
  ): Promise<void> {
    const { span, updatedOptions } = createSpan(
      "CallConnectionRestClient-cancelParticipantMediaOperation",
      options
    );

    const request: CancelParticipantMediaOperationRequest = {
      identifier: serializeCommunicationIdentifier(participant),
      mediaOperationId: mediaOperationId
    };

    try {
      await this.callConnectionRestClient.cancelParticipantMediaOperation(
        this.callConnectionId,
        request,
        operationOptionsToRequestOptionsBase(updatedOptions)
      );
    } catch (e) {
      span.setStatus({
        code: SpanStatusCode.ERROR,
        message: e.message
      });
      throw e;
    } finally {
      span.end();
    }
  }

  /**
   * Transfer a call.
   *
   * @param targetParticipant - The identity of the target where call should be transfer to.
   * @param userToUserInformation - The user to user information.
   * @param options - Additional request options contains transferCall api options.
   */
  public async transferCall(
    targetParticipant: CommunicationIdentifier,
    userToUserInformation: string,
    options: TransferCallOptions = {}
  ): Promise<void> {
    const { span, updatedOptions } = createSpan("CallConnectionRestClient-transferCall", options);

    const request: TransferCallRequest = {
      targetParticipant: serializeCommunicationIdentifier(targetParticipant),
      userToUserInformation: userToUserInformation
    };

    try {
      await this.callConnectionRestClient.transfer(
        this.callConnectionId,
        request,
        operationOptionsToRequestOptionsBase(updatedOptions)
      );
    } catch (e) {
      span.setStatus({
        code: SpanStatusCode.ERROR,
        message: e.message
      });
      throw e;
    } finally {
      span.end();
    }
  }
}
