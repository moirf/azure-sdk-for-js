/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { createSpan } from "../tracing";
import { NotebookOperationResult } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as coreTracing from "@azure/core-tracing";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { ArtifactsClientContext } from "../artifactsClientContext";
import { NotebookOperationResultGetOptionalParams } from "../models";

/** Class containing NotebookOperationResult operations. */
export class NotebookOperationResultImpl implements NotebookOperationResult {
  private readonly client: ArtifactsClientContext;

  /**
   * Initialize a new instance of the class NotebookOperationResult class.
   * @param client Reference to the service client
   */
  constructor(client: ArtifactsClientContext) {
    this.client = client;
  }

  /**
   * Get notebook operation result
   * @param operationId Operation ID.
   * @param options The options parameters.
   */
  async get(
    operationId: string,
    options?: NotebookOperationResultGetOptionalParams
  ): Promise<void> {
    const { span } = createSpan("ArtifactsClient-get", options || {});
    try {
      const result = await this.client.sendOperationRequest(
        { operationId, options },
        getOperationSpec
      );
      return result as void;
    } catch (error) {
      span.setStatus({
        code: coreTracing.SpanStatusCode.UNSET,
        message: error.message
      });
      throw error;
    } finally {
      span.end();
    }
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const getOperationSpec: coreClient.OperationSpec = {
  path: "/notebookOperationResults/{operationId}",
  httpMethod: "GET",
  responses: {
    200: {},
    201: {},
    202: {},
    204: {},
    default: {
      bodyMapper: Mappers.ErrorContract
    }
  },
  queryParameters: [Parameters.apiVersion1],
  urlParameters: [Parameters.endpoint, Parameters.operationId],
  headerParameters: [Parameters.accept],
  serializer
};
