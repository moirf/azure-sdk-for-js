/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import * as coreHttp from "@azure/core-http";

/**
 * Request for a CommunicationRelayConfiguration.
 */
export interface CommunicationRelayConfigurationRequest {
  /**
   * An existing ACS identity.
   */
  id?: string;
}

/**
 * A relay configuration containing the STUN/TURN URLs and credentials.
 */
export interface CommunicationRelayConfiguration {
  /**
   * The date for which the username and credentials are not longer valid.
   */
  expiresOn: Date;
  /**
   * An array representing the credentials and the STUN/TURN server URLs for use in ICE negotiations.
   */
  iceServers: CommunicationIceServer[];
}

/**
 * An instance of a STUN/TURN server with credentials to be used for ICE negotiation.
 */
export interface CommunicationIceServer {
  /**
   * List of STUN/TURN server URLs.
   */
  urls: string[];
  /**
   * User account name which uniquely identifies the credentials.
   */
  username: string;
  /**
   * Credential for the server.
   */
  credential: string;
}

/**
 * The Communication Services error.
 */
export interface CommunicationErrorResponse {
  /**
   * The Communication Services error.
   */
  error: CommunicationError;
}

/**
 * The Communication Services error.
 */
export interface CommunicationError {
  /**
   * The error code.
   */
  code: string;
  /**
   * The error message.
   */
  message: string;
  /**
   * The error target.
   */
  readonly target?: string;
  /**
   * Further details about specific errors that led to this error.
   */
  readonly details?: CommunicationError[];
  /**
   * The inner error if any.
   */
  readonly innerError?: CommunicationError;
}

/**
 * Optional parameters.
 */
export interface CommunicationNetworkTraversalIssueRelayConfigurationOptionalParams
  extends coreHttp.OperationOptions {
  /**
   * Request for a CommunicationRelayConfiguration.
   */
  body?: CommunicationRelayConfigurationRequest;
}

/**
 * Contains response data for the issueRelayConfiguration operation.
 */
export type CommunicationNetworkTraversalIssueRelayConfigurationResponse = CommunicationRelayConfiguration & {
  /**
   * The underlying HTTP response.
   */
  _response: coreHttp.HttpResponse & {
    /**
     * The response body as text (string format)
     */
    bodyAsText: string;

    /**
     * The response body as parsed JSON or XML
     */
    parsedBody: CommunicationRelayConfiguration;
  };
};

/**
 * Optional parameters.
 */
export interface NetworkRelayRestClientOptionalParams
  extends coreHttp.ServiceClientOptions {
  /**
   * Api Version
   */
  apiVersion?: string;
  /**
   * Overrides client endpoint.
   */
  endpoint?: string;
}
