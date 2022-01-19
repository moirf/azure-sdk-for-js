/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import * as coreHttp from "@azure/core-http";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { CallingServerApiClientContext } from "../callingServerApiClientContext";
import {
  CallConnectionsGetAudioGroupsResponse,
  UpdateAudioGroupRequest,
  CreateCallRequest,
  CallConnectionsCreateCallResponse,
  CallConnectionsGetCallResponse,
  PlayAudioRequest,
  CallConnectionsPlayAudioResponse,
  TransferToParticipantRequest,
  CallConnectionsTransferToParticipantResponse,
  TransferToCallRequest,
  CallConnectionsTransferToCallResponse,
  AudioGroupRequest,
  CallConnectionsCreateAudioGroupResponse,
  CallConnectionsGetParticipantsResponse,
  AddParticipantRequest,
  CallConnectionsAddParticipantResponse,
  RemoveParticipantRequest,
  GetParticipantRequest,
  CallConnectionsGetParticipantResponse,
  PlayAudioToParticipantRequest,
  CallConnectionsParticipantPlayAudioResponse,
  CancelParticipantMediaOperationRequest,
  MuteParticipantRequest,
  UnmuteParticipantRequest,
  RemoveFromDefaultAudioGroupRequest,
  AddToDefaultAudioGroupRequest
} from "../models";

/** Class representing a CallConnections. */
export class CallConnections {
  private readonly client: CallingServerApiClientContext;

  /**
   * Initialize a new instance of the class CallConnections class.
   * @param client Reference to the service client
   */
  constructor(client: CallingServerApiClientContext) {
    this.client = client;
  }

  /**
   * Get audio groups from a call.
   * @param callConnectionId The call connection id.
   * @param audioGroupId The audio group id.
   * @param options The options parameters.
   */
  getAudioGroups(
    callConnectionId: string,
    audioGroupId: string,
    options?: coreHttp.OperationOptions
  ): Promise<CallConnectionsGetAudioGroupsResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      callConnectionId,
      audioGroupId,
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.client.sendOperationRequest(
      operationArguments,
      getAudioGroupsOperationSpec
    ) as Promise<CallConnectionsGetAudioGroupsResponse>;
  }

  /**
   * Delete audio group from a call.
   * @param callConnectionId The call connection id.
   * @param audioGroupId The audio group id.
   * @param options The options parameters.
   */
  deleteAudioGroup(
    callConnectionId: string,
    audioGroupId: string,
    options?: coreHttp.OperationOptions
  ): Promise<coreHttp.RestResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      callConnectionId,
      audioGroupId,
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.client.sendOperationRequest(
      operationArguments,
      deleteAudioGroupOperationSpec
    ) as Promise<coreHttp.RestResponse>;
  }

  /**
   * Update audio group.
   * @param callConnectionId The call connection id.
   * @param audioGroupId The audio group id.
   * @param updateAudioGroupRequest The update audio group request.
   * @param options The options parameters.
   */
  updateAudioGroup(
    callConnectionId: string,
    audioGroupId: string,
    updateAudioGroupRequest: UpdateAudioGroupRequest,
    options?: coreHttp.OperationOptions
  ): Promise<coreHttp.RestResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      callConnectionId,
      audioGroupId,
      updateAudioGroupRequest,
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.client.sendOperationRequest(
      operationArguments,
      updateAudioGroupOperationSpec
    ) as Promise<coreHttp.RestResponse>;
  }

  /**
   * Create a new call.
   * @param callRequest Create call request.
   * @param options The options parameters.
   */
  createCall(
    callRequest: CreateCallRequest,
    options?: coreHttp.OperationOptions
  ): Promise<CallConnectionsCreateCallResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      callRequest,
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.client.sendOperationRequest(
      operationArguments,
      createCallOperationSpec
    ) as Promise<CallConnectionsCreateCallResponse>;
  }

  /**
   * Get call connection.
   * @param callConnectionId The call connection id.
   * @param options The options parameters.
   */
  getCall(
    callConnectionId: string,
    options?: coreHttp.OperationOptions
  ): Promise<CallConnectionsGetCallResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      callConnectionId,
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.client.sendOperationRequest(
      operationArguments,
      getCallOperationSpec
    ) as Promise<CallConnectionsGetCallResponse>;
  }

  /**
   * Delete the call.
   * @param callConnectionId The call connection id.
   * @param options The options parameters.
   */
  deleteCall(
    callConnectionId: string,
    options?: coreHttp.OperationOptions
  ): Promise<coreHttp.RestResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      callConnectionId,
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.client.sendOperationRequest(
      operationArguments,
      deleteCallOperationSpec
    ) as Promise<coreHttp.RestResponse>;
  }

  /**
   * Hangup the call.
   * @param callConnectionId The call connection id.
   * @param options The options parameters.
   */
  hangupCall(
    callConnectionId: string,
    options?: coreHttp.OperationOptions
  ): Promise<coreHttp.RestResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      callConnectionId,
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.client.sendOperationRequest(
      operationArguments,
      hangupCallOperationSpec
    ) as Promise<coreHttp.RestResponse>;
  }

  /**
   * Play audio in the call.
   * @param callConnectionId The call connection id.
   * @param playAudioRequest The play audio request.
   * @param options The options parameters.
   */
  playAudio(
    callConnectionId: string,
    playAudioRequest: PlayAudioRequest,
    options?: coreHttp.OperationOptions
  ): Promise<CallConnectionsPlayAudioResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      callConnectionId,
      playAudioRequest,
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.client.sendOperationRequest(
      operationArguments,
      playAudioOperationSpec
    ) as Promise<CallConnectionsPlayAudioResponse>;
  }

  /**
   * Cancel all media operations.
   * @param callConnectionId The call connection id
   * @param options The options parameters.
   */
  cancelAllMediaOperations(
    callConnectionId: string,
    options?: coreHttp.OperationOptions
  ): Promise<coreHttp.RestResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      callConnectionId,
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.client.sendOperationRequest(
      operationArguments,
      cancelAllMediaOperationsOperationSpec
    ) as Promise<coreHttp.RestResponse>;
  }

  /**
   * Keep the call alive.
   * @param callConnectionId The call connection id.
   * @param options The options parameters.
   */
  keepAlive(
    callConnectionId: string,
    options?: coreHttp.OperationOptions
  ): Promise<coreHttp.RestResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      callConnectionId,
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.client.sendOperationRequest(
      operationArguments,
      keepAliveOperationSpec
    ) as Promise<coreHttp.RestResponse>;
  }

  /**
   * Transfer the call to a participant.
   * @param callConnectionId The call connection id.
   * @param transferToParticipantRequest The transfer to participant request.
   * @param options The options parameters.
   */
  transferToParticipant(
    callConnectionId: string,
    transferToParticipantRequest: TransferToParticipantRequest,
    options?: coreHttp.OperationOptions
  ): Promise<CallConnectionsTransferToParticipantResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      callConnectionId,
      transferToParticipantRequest,
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.client.sendOperationRequest(
      operationArguments,
      transferToParticipantOperationSpec
    ) as Promise<CallConnectionsTransferToParticipantResponse>;
  }

  /**
   * Transfer the current call to another call.
   * @param callConnectionId The call connection id.
   * @param transferToCallRequest The transfer to call request.
   * @param options The options parameters.
   */
  transferToCall(
    callConnectionId: string,
    transferToCallRequest: TransferToCallRequest,
    options?: coreHttp.OperationOptions
  ): Promise<CallConnectionsTransferToCallResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      callConnectionId,
      transferToCallRequest,
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.client.sendOperationRequest(
      operationArguments,
      transferToCallOperationSpec
    ) as Promise<CallConnectionsTransferToCallResponse>;
  }

  /**
   * Create audio group in a call.
   * @param callConnectionId The call connection id.
   * @param audioGroupRequest The audio group request.
   * @param options The options parameters.
   */
  createAudioGroup(
    callConnectionId: string,
    audioGroupRequest: AudioGroupRequest,
    options?: coreHttp.OperationOptions
  ): Promise<CallConnectionsCreateAudioGroupResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      callConnectionId,
      audioGroupRequest,
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.client.sendOperationRequest(
      operationArguments,
      createAudioGroupOperationSpec
    ) as Promise<CallConnectionsCreateAudioGroupResponse>;
  }

  /**
   * Get participants from a call.
   * @param callConnectionId The call connection id.
   * @param options The options parameters.
   */
  getParticipants(
    callConnectionId: string,
    options?: coreHttp.OperationOptions
  ): Promise<CallConnectionsGetParticipantsResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      callConnectionId,
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.client.sendOperationRequest(
      operationArguments,
      getParticipantsOperationSpec
    ) as Promise<CallConnectionsGetParticipantsResponse>;
  }

  /**
   * Add a participant to the call.
   * @param callConnectionId The call connection id.
   * @param addParticipantRequest Add participant request.
   * @param options The options parameters.
   */
  addParticipant(
    callConnectionId: string,
    addParticipantRequest: AddParticipantRequest,
    options?: coreHttp.OperationOptions
  ): Promise<CallConnectionsAddParticipantResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      callConnectionId,
      addParticipantRequest,
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.client.sendOperationRequest(
      operationArguments,
      addParticipantOperationSpec
    ) as Promise<CallConnectionsAddParticipantResponse>;
  }

  /**
   * Remove participant from the call using identifier.
   * @param callConnectionId The call connection id.
   * @param removeParticipantRequest The identifier of the participant to be removed from the call.
   * @param options The options parameters.
   */
  removeParticipant(
    callConnectionId: string,
    removeParticipantRequest: RemoveParticipantRequest,
    options?: coreHttp.OperationOptions
  ): Promise<coreHttp.RestResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      callConnectionId,
      removeParticipantRequest,
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.client.sendOperationRequest(
      operationArguments,
      removeParticipantOperationSpec
    ) as Promise<coreHttp.RestResponse>;
  }

  /**
   * Get participant from the call using identifier.
   * @param callConnectionId The call connection id.
   * @param getParticipantRequest The identifier of the participant to get from the call.
   * @param options The options parameters.
   */
  getParticipant(
    callConnectionId: string,
    getParticipantRequest: GetParticipantRequest,
    options?: coreHttp.OperationOptions
  ): Promise<CallConnectionsGetParticipantResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      callConnectionId,
      getParticipantRequest,
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.client.sendOperationRequest(
      operationArguments,
      getParticipantOperationSpec
    ) as Promise<CallConnectionsGetParticipantResponse>;
  }

  /**
   * Play audio to a participant.
   * @param callConnectionId The callConnectionId.
   * @param playAudioToParticipantRequest The play audio to participant request.
   * @param options The options parameters.
   */
  participantPlayAudio(
    callConnectionId: string,
    playAudioToParticipantRequest: PlayAudioToParticipantRequest,
    options?: coreHttp.OperationOptions
  ): Promise<CallConnectionsParticipantPlayAudioResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      callConnectionId,
      playAudioToParticipantRequest,
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.client.sendOperationRequest(
      operationArguments,
      participantPlayAudioOperationSpec
    ) as Promise<CallConnectionsParticipantPlayAudioResponse>;
  }

  /**
   * Cancel media operation for a participant.
   * @param callConnectionId The callConnectionId.
   * @param cancelMediaOperationRequest The cancel media operation for participant request.
   * @param options The options parameters.
   */
  cancelParticipantMediaOperation(
    callConnectionId: string,
    cancelMediaOperationRequest: CancelParticipantMediaOperationRequest,
    options?: coreHttp.OperationOptions
  ): Promise<coreHttp.RestResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      callConnectionId,
      cancelMediaOperationRequest,
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.client.sendOperationRequest(
      operationArguments,
      cancelParticipantMediaOperationOperationSpec
    ) as Promise<coreHttp.RestResponse>;
  }

  /**
   * Mute participant in the call
   * @param callConnectionId The call connection id.
   * @param muteParticipantRequest The identifier of the participant to mute in the call.
   * @param options The options parameters.
   */
  muteParticipant(
    callConnectionId: string,
    muteParticipantRequest: MuteParticipantRequest,
    options?: coreHttp.OperationOptions
  ): Promise<coreHttp.RestResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      callConnectionId,
      muteParticipantRequest,
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.client.sendOperationRequest(
      operationArguments,
      muteParticipantOperationSpec
    ) as Promise<coreHttp.RestResponse>;
  }

  /**
   * Unmute participant in the call
   * @param callConnectionId The call connection id.
   * @param unmuteParticipantRequest The identifier of the participant to unmute in the call.
   * @param options The options parameters.
   */
  unmuteParticipant(
    callConnectionId: string,
    unmuteParticipantRequest: UnmuteParticipantRequest,
    options?: coreHttp.OperationOptions
  ): Promise<coreHttp.RestResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      callConnectionId,
      unmuteParticipantRequest,
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.client.sendOperationRequest(
      operationArguments,
      unmuteParticipantOperationSpec
    ) as Promise<coreHttp.RestResponse>;
  }

  /**
   * Remove a participant from default audio group.
   * @param callConnectionId The call connection id.
   * @param removeFromDefaultAudioGroupRequest The request payload for removing a participant from
   *                                           default audio group.
   * @param options The options parameters.
   */
  removeParticipantFromDefaultAudioGroup(
    callConnectionId: string,
    removeFromDefaultAudioGroupRequest: RemoveFromDefaultAudioGroupRequest,
    options?: coreHttp.OperationOptions
  ): Promise<coreHttp.RestResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      callConnectionId,
      removeFromDefaultAudioGroupRequest,
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.client.sendOperationRequest(
      operationArguments,
      removeParticipantFromDefaultAudioGroupOperationSpec
    ) as Promise<coreHttp.RestResponse>;
  }

  /**
   * Add a participant to default audio group.
   * @param callConnectionId The call connection id.
   * @param addToDefaultAudioGroupRequest The request payload for adding a participant to default audio
   *                                      group.
   * @param options The options parameters.
   */
  addParticipantToDefaultAudioGroup(
    callConnectionId: string,
    addToDefaultAudioGroupRequest: AddToDefaultAudioGroupRequest,
    options?: coreHttp.OperationOptions
  ): Promise<coreHttp.RestResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      callConnectionId,
      addToDefaultAudioGroupRequest,
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.client.sendOperationRequest(
      operationArguments,
      addParticipantToDefaultAudioGroupOperationSpec
    ) as Promise<coreHttp.RestResponse>;
  }
}
// Operation Specifications
const serializer = new coreHttp.Serializer(Mappers, /* isXml */ false);

const getAudioGroupsOperationSpec: coreHttp.OperationSpec = {
  path:
    "/calling/callConnections/{callConnectionId}/audioGroups/{audioGroupId}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.AudioGroupResult
    },
    400: {
      bodyMapper: Mappers.CommunicationErrorResponse,
      isError: true
    },
    401: {
      bodyMapper: Mappers.CommunicationErrorResponse,
      isError: true
    },
    403: {
      bodyMapper: Mappers.CommunicationErrorResponse,
      isError: true
    },
    404: {
      bodyMapper: Mappers.CommunicationErrorResponse,
      isError: true
    },
    500: {
      bodyMapper: Mappers.CommunicationErrorResponse,
      isError: true
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.endpoint,
    Parameters.callConnectionId,
    Parameters.audioGroupId
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const deleteAudioGroupOperationSpec: coreHttp.OperationSpec = {
  path:
    "/calling/callConnections/{callConnectionId}/audioGroups/{audioGroupId}",
  httpMethod: "DELETE",
  responses: {
    200: {},
    400: {
      bodyMapper: Mappers.CommunicationErrorResponse,
      isError: true
    },
    401: {
      bodyMapper: Mappers.CommunicationErrorResponse,
      isError: true
    },
    403: {
      bodyMapper: Mappers.CommunicationErrorResponse,
      isError: true
    },
    404: {
      bodyMapper: Mappers.CommunicationErrorResponse,
      isError: true
    },
    500: {
      bodyMapper: Mappers.CommunicationErrorResponse,
      isError: true
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.endpoint,
    Parameters.callConnectionId,
    Parameters.audioGroupId
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const updateAudioGroupOperationSpec: coreHttp.OperationSpec = {
  path:
    "/calling/callConnections/{callConnectionId}/audioGroups/{audioGroupId}",
  httpMethod: "PATCH",
  responses: {
    200: {},
    400: {
      bodyMapper: Mappers.CommunicationErrorResponse,
      isError: true
    },
    401: {
      bodyMapper: Mappers.CommunicationErrorResponse,
      isError: true
    },
    403: {
      bodyMapper: Mappers.CommunicationErrorResponse,
      isError: true
    },
    404: {
      bodyMapper: Mappers.CommunicationErrorResponse,
      isError: true
    },
    500: {
      bodyMapper: Mappers.CommunicationErrorResponse,
      isError: true
    }
  },
  requestBody: Parameters.updateAudioGroupRequest,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.endpoint,
    Parameters.callConnectionId,
    Parameters.audioGroupId
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const createCallOperationSpec: coreHttp.OperationSpec = {
  path: "/calling/callConnections",
  httpMethod: "POST",
  responses: {
    201: {
      bodyMapper: Mappers.CreateCallResult
    },
    400: {
      bodyMapper: Mappers.CommunicationErrorResponse,
      isError: true
    },
    401: {
      bodyMapper: Mappers.CommunicationErrorResponse,
      isError: true
    },
    403: {
      bodyMapper: Mappers.CommunicationErrorResponse,
      isError: true
    },
    500: {
      bodyMapper: Mappers.CommunicationErrorResponse,
      isError: true
    }
  },
  requestBody: Parameters.callRequest,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.endpoint],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const getCallOperationSpec: coreHttp.OperationSpec = {
  path: "/calling/callConnections/{callConnectionId}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.CallConnectionProperties
    },
    400: {
      bodyMapper: Mappers.CommunicationErrorResponse,
      isError: true
    },
    401: {
      bodyMapper: Mappers.CommunicationErrorResponse,
      isError: true
    },
    403: {
      bodyMapper: Mappers.CommunicationErrorResponse,
      isError: true
    },
    404: {
      bodyMapper: Mappers.CommunicationErrorResponse,
      isError: true
    },
    500: {
      bodyMapper: Mappers.CommunicationErrorResponse,
      isError: true
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.endpoint, Parameters.callConnectionId],
  headerParameters: [Parameters.accept],
  serializer
};
const deleteCallOperationSpec: coreHttp.OperationSpec = {
  path: "/calling/callConnections/{callConnectionId}",
  httpMethod: "DELETE",
  responses: {
    202: {},
    400: {
      bodyMapper: Mappers.CommunicationErrorResponse,
      isError: true
    },
    401: {
      bodyMapper: Mappers.CommunicationErrorResponse,
      isError: true
    },
    403: {
      bodyMapper: Mappers.CommunicationErrorResponse,
      isError: true
    },
    404: {
      bodyMapper: Mappers.CommunicationErrorResponse,
      isError: true
    },
    500: {
      bodyMapper: Mappers.CommunicationErrorResponse,
      isError: true
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.endpoint, Parameters.callConnectionId],
  headerParameters: [Parameters.accept],
  serializer
};
const hangupCallOperationSpec: coreHttp.OperationSpec = {
  path: "/calling/callConnections/{callConnectionId}/:hangup",
  httpMethod: "POST",
  responses: {
    202: {},
    400: {
      bodyMapper: Mappers.CommunicationErrorResponse,
      isError: true
    },
    401: {
      bodyMapper: Mappers.CommunicationErrorResponse,
      isError: true
    },
    403: {
      bodyMapper: Mappers.CommunicationErrorResponse,
      isError: true
    },
    404: {
      bodyMapper: Mappers.CommunicationErrorResponse,
      isError: true
    },
    500: {
      bodyMapper: Mappers.CommunicationErrorResponse,
      isError: true
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.endpoint, Parameters.callConnectionId],
  headerParameters: [Parameters.accept],
  serializer
};
const playAudioOperationSpec: coreHttp.OperationSpec = {
  path: "/calling/callConnections/{callConnectionId}/:playAudio",
  httpMethod: "POST",
  responses: {
    202: {
      bodyMapper: Mappers.PlayAudioResult
    },
    400: {
      bodyMapper: Mappers.CommunicationErrorResponse,
      isError: true
    },
    401: {
      bodyMapper: Mappers.CommunicationErrorResponse,
      isError: true
    },
    403: {
      bodyMapper: Mappers.CommunicationErrorResponse,
      isError: true
    },
    404: {
      bodyMapper: Mappers.CommunicationErrorResponse,
      isError: true
    },
    500: {
      bodyMapper: Mappers.CommunicationErrorResponse,
      isError: true
    }
  },
  requestBody: Parameters.playAudioRequest,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.endpoint, Parameters.callConnectionId],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const cancelAllMediaOperationsOperationSpec: coreHttp.OperationSpec = {
  path: "/calling/callConnections/{callConnectionId}/:cancelAllMediaOperations",
  httpMethod: "POST",
  responses: {
    200: {},
    400: {
      bodyMapper: Mappers.CommunicationErrorResponse,
      isError: true
    },
    401: {
      bodyMapper: Mappers.CommunicationErrorResponse,
      isError: true
    },
    403: {
      bodyMapper: Mappers.CommunicationErrorResponse,
      isError: true
    },
    404: {
      bodyMapper: Mappers.CommunicationErrorResponse,
      isError: true
    },
    500: {
      bodyMapper: Mappers.CommunicationErrorResponse,
      isError: true
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.endpoint, Parameters.callConnectionId],
  headerParameters: [Parameters.accept],
  serializer
};
const keepAliveOperationSpec: coreHttp.OperationSpec = {
  path: "/calling/callConnections/{callConnectionId}/:keepAlive",
  httpMethod: "POST",
  responses: {
    200: {},
    400: {
      bodyMapper: Mappers.CommunicationErrorResponse,
      isError: true
    },
    401: {
      bodyMapper: Mappers.CommunicationErrorResponse,
      isError: true
    },
    403: {
      bodyMapper: Mappers.CommunicationErrorResponse,
      isError: true
    },
    404: {
      bodyMapper: Mappers.CommunicationErrorResponse,
      isError: true
    },
    500: {
      bodyMapper: Mappers.CommunicationErrorResponse,
      isError: true
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.endpoint, Parameters.callConnectionId],
  headerParameters: [Parameters.accept],
  serializer
};
const transferToParticipantOperationSpec: coreHttp.OperationSpec = {
  path: "/calling/callConnections/{callConnectionId}/:transferToParticipant",
  httpMethod: "POST",
  responses: {
    202: {
      bodyMapper: Mappers.TransferCallResult
    },
    400: {
      bodyMapper: Mappers.CommunicationErrorResponse,
      isError: true
    },
    401: {
      bodyMapper: Mappers.CommunicationErrorResponse,
      isError: true
    },
    403: {
      bodyMapper: Mappers.CommunicationErrorResponse,
      isError: true
    },
    404: {
      bodyMapper: Mappers.CommunicationErrorResponse,
      isError: true
    },
    500: {
      bodyMapper: Mappers.CommunicationErrorResponse,
      isError: true
    }
  },
  requestBody: Parameters.transferToParticipantRequest,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.endpoint, Parameters.callConnectionId],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const transferToCallOperationSpec: coreHttp.OperationSpec = {
  path: "/calling/callConnections/{callConnectionId}/:transferToCall",
  httpMethod: "POST",
  responses: {
    202: {
      bodyMapper: Mappers.TransferCallResult
    },
    400: {
      bodyMapper: Mappers.CommunicationErrorResponse,
      isError: true
    },
    401: {
      bodyMapper: Mappers.CommunicationErrorResponse,
      isError: true
    },
    403: {
      bodyMapper: Mappers.CommunicationErrorResponse,
      isError: true
    },
    404: {
      bodyMapper: Mappers.CommunicationErrorResponse,
      isError: true
    },
    500: {
      bodyMapper: Mappers.CommunicationErrorResponse,
      isError: true
    }
  },
  requestBody: Parameters.transferToCallRequest,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.endpoint, Parameters.callConnectionId],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const createAudioGroupOperationSpec: coreHttp.OperationSpec = {
  path: "/calling/callConnections/{callConnectionId}/:createAudioGroup",
  httpMethod: "POST",
  responses: {
    201: {
      bodyMapper: Mappers.CreateAudioGroupResult
    },
    400: {
      bodyMapper: Mappers.CommunicationErrorResponse,
      isError: true
    },
    401: {
      bodyMapper: Mappers.CommunicationErrorResponse,
      isError: true
    },
    403: {
      bodyMapper: Mappers.CommunicationErrorResponse,
      isError: true
    },
    404: {
      bodyMapper: Mappers.CommunicationErrorResponse,
      isError: true
    },
    500: {
      bodyMapper: Mappers.CommunicationErrorResponse,
      isError: true
    }
  },
  requestBody: Parameters.audioGroupRequest,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.endpoint, Parameters.callConnectionId],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const getParticipantsOperationSpec: coreHttp.OperationSpec = {
  path: "/calling/callConnections/{callConnectionId}/participants",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: {
        type: {
          name: "Sequence",
          element: { type: { name: "Composite", className: "CallParticipant" } }
        }
      }
    },
    400: {
      bodyMapper: Mappers.CommunicationErrorResponse,
      isError: true
    },
    401: {
      bodyMapper: Mappers.CommunicationErrorResponse,
      isError: true
    },
    403: {
      bodyMapper: Mappers.CommunicationErrorResponse,
      isError: true
    },
    404: {
      bodyMapper: Mappers.CommunicationErrorResponse,
      isError: true
    },
    500: {
      bodyMapper: Mappers.CommunicationErrorResponse,
      isError: true
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.endpoint, Parameters.callConnectionId],
  headerParameters: [Parameters.accept],
  serializer
};
const addParticipantOperationSpec: coreHttp.OperationSpec = {
  path: "/calling/callConnections/{callConnectionId}/participants",
  httpMethod: "POST",
  responses: {
    202: {
      bodyMapper: Mappers.AddParticipantResult
    },
    400: {
      bodyMapper: Mappers.CommunicationErrorResponse,
      isError: true
    },
    401: {
      bodyMapper: Mappers.CommunicationErrorResponse,
      isError: true
    },
    403: {
      bodyMapper: Mappers.CommunicationErrorResponse,
      isError: true
    },
    404: {
      bodyMapper: Mappers.CommunicationErrorResponse,
      isError: true
    },
    500: {
      bodyMapper: Mappers.CommunicationErrorResponse,
      isError: true
    }
  },
  requestBody: Parameters.addParticipantRequest,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.endpoint, Parameters.callConnectionId],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const removeParticipantOperationSpec: coreHttp.OperationSpec = {
  path: "/calling/callConnections/{callConnectionId}/participants:remove",
  httpMethod: "POST",
  responses: {
    202: {},
    400: {
      bodyMapper: Mappers.CommunicationErrorResponse,
      isError: true
    },
    401: {
      bodyMapper: Mappers.CommunicationErrorResponse,
      isError: true
    },
    403: {
      bodyMapper: Mappers.CommunicationErrorResponse,
      isError: true
    },
    404: {
      bodyMapper: Mappers.CommunicationErrorResponse,
      isError: true
    },
    500: {
      bodyMapper: Mappers.CommunicationErrorResponse,
      isError: true
    }
  },
  requestBody: Parameters.removeParticipantRequest,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.endpoint, Parameters.callConnectionId],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const getParticipantOperationSpec: coreHttp.OperationSpec = {
  path: "/calling/callConnections/{callConnectionId}/participants:get",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.CallParticipant
    },
    400: {
      bodyMapper: Mappers.CommunicationErrorResponse,
      isError: true
    },
    401: {
      bodyMapper: Mappers.CommunicationErrorResponse,
      isError: true
    },
    403: {
      bodyMapper: Mappers.CommunicationErrorResponse,
      isError: true
    },
    404: {
      bodyMapper: Mappers.CommunicationErrorResponse,
      isError: true
    },
    500: {
      bodyMapper: Mappers.CommunicationErrorResponse,
      isError: true
    }
  },
  requestBody: Parameters.getParticipantRequest,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.endpoint, Parameters.callConnectionId],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const participantPlayAudioOperationSpec: coreHttp.OperationSpec = {
  path: "/calling/callConnections/{callConnectionId}/participants:playAudio",
  httpMethod: "POST",
  responses: {
    202: {
      bodyMapper: Mappers.PlayAudioResult
    },
    400: {
      bodyMapper: Mappers.CommunicationErrorResponse,
      isError: true
    },
    401: {
      bodyMapper: Mappers.CommunicationErrorResponse,
      isError: true
    },
    403: {
      bodyMapper: Mappers.CommunicationErrorResponse,
      isError: true
    },
    404: {
      bodyMapper: Mappers.CommunicationErrorResponse,
      isError: true
    },
    500: {
      bodyMapper: Mappers.CommunicationErrorResponse,
      isError: true
    }
  },
  requestBody: Parameters.playAudioToParticipantRequest,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.endpoint, Parameters.callConnectionId],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const cancelParticipantMediaOperationOperationSpec: coreHttp.OperationSpec = {
  path:
    "/calling/callConnections/{callConnectionId}/participants:cancelMediaOperation",
  httpMethod: "POST",
  responses: {
    200: {},
    400: {
      bodyMapper: Mappers.CommunicationErrorResponse,
      isError: true
    },
    401: {
      bodyMapper: Mappers.CommunicationErrorResponse,
      isError: true
    },
    403: {
      bodyMapper: Mappers.CommunicationErrorResponse,
      isError: true
    },
    404: {
      bodyMapper: Mappers.CommunicationErrorResponse,
      isError: true
    },
    500: {
      bodyMapper: Mappers.CommunicationErrorResponse,
      isError: true
    }
  },
  requestBody: Parameters.cancelMediaOperationRequest,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.endpoint, Parameters.callConnectionId],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const muteParticipantOperationSpec: coreHttp.OperationSpec = {
  path: "/calling/callConnections/{callConnectionId}/participants:mute",
  httpMethod: "POST",
  responses: {
    200: {},
    400: {
      bodyMapper: Mappers.CommunicationErrorResponse,
      isError: true
    },
    401: {
      bodyMapper: Mappers.CommunicationErrorResponse,
      isError: true
    },
    403: {
      bodyMapper: Mappers.CommunicationErrorResponse,
      isError: true
    },
    404: {
      bodyMapper: Mappers.CommunicationErrorResponse,
      isError: true
    },
    500: {
      bodyMapper: Mappers.CommunicationErrorResponse,
      isError: true
    }
  },
  requestBody: Parameters.muteParticipantRequest,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.endpoint, Parameters.callConnectionId],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const unmuteParticipantOperationSpec: coreHttp.OperationSpec = {
  path: "/calling/callConnections/{callConnectionId}/participants:unmute",
  httpMethod: "POST",
  responses: {
    200: {},
    400: {
      bodyMapper: Mappers.CommunicationErrorResponse,
      isError: true
    },
    401: {
      bodyMapper: Mappers.CommunicationErrorResponse,
      isError: true
    },
    403: {
      bodyMapper: Mappers.CommunicationErrorResponse,
      isError: true
    },
    404: {
      bodyMapper: Mappers.CommunicationErrorResponse,
      isError: true
    },
    500: {
      bodyMapper: Mappers.CommunicationErrorResponse,
      isError: true
    }
  },
  requestBody: Parameters.unmuteParticipantRequest,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.endpoint, Parameters.callConnectionId],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const removeParticipantFromDefaultAudioGroupOperationSpec: coreHttp.OperationSpec = {
  path:
    "/calling/callConnections/{callConnectionId}/participants:removeFromDefaultAudioGroup",
  httpMethod: "POST",
  responses: {
    200: {},
    400: {
      bodyMapper: Mappers.CommunicationErrorResponse,
      isError: true
    },
    401: {
      bodyMapper: Mappers.CommunicationErrorResponse,
      isError: true
    },
    403: {
      bodyMapper: Mappers.CommunicationErrorResponse,
      isError: true
    },
    404: {
      bodyMapper: Mappers.CommunicationErrorResponse,
      isError: true
    },
    500: {
      bodyMapper: Mappers.CommunicationErrorResponse,
      isError: true
    }
  },
  requestBody: Parameters.removeFromDefaultAudioGroupRequest,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.endpoint, Parameters.callConnectionId],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const addParticipantToDefaultAudioGroupOperationSpec: coreHttp.OperationSpec = {
  path:
    "/calling/callConnections/{callConnectionId}/participants:addToDefaultAudioGroup",
  httpMethod: "POST",
  responses: {
    200: {},
    400: {
      bodyMapper: Mappers.CommunicationErrorResponse,
      isError: true
    },
    401: {
      bodyMapper: Mappers.CommunicationErrorResponse,
      isError: true
    },
    403: {
      bodyMapper: Mappers.CommunicationErrorResponse,
      isError: true
    },
    404: {
      bodyMapper: Mappers.CommunicationErrorResponse,
      isError: true
    },
    500: {
      bodyMapper: Mappers.CommunicationErrorResponse,
      isError: true
    }
  },
  requestBody: Parameters.addToDefaultAudioGroupRequest,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.endpoint, Parameters.callConnectionId],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
