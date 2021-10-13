/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import { LinkedServer } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { RedisManagementClientContext } from "../redisManagementClientContext";
import { PollerLike, PollOperationState, LroEngine } from "@azure/core-lro";
import { LroImpl } from "../lroImpl";
import {
  RedisLinkedServerWithProperties,
  LinkedServerListNextOptionalParams,
  LinkedServerListOptionalParams,
  RedisLinkedServerCreateParameters,
  LinkedServerCreateOptionalParams,
  LinkedServerCreateResponse,
  LinkedServerDeleteOptionalParams,
  LinkedServerGetOptionalParams,
  LinkedServerGetResponse,
  LinkedServerListResponse,
  LinkedServerListNextResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing LinkedServer operations. */
export class LinkedServerImpl implements LinkedServer {
  private readonly client: RedisManagementClientContext;

  /**
   * Initialize a new instance of the class LinkedServer class.
   * @param client Reference to the service client
   */
  constructor(client: RedisManagementClientContext) {
    this.client = client;
  }

  /**
   * Gets the list of linked servers associated with this redis cache (requires Premium SKU).
   * @param resourceGroupName The name of the resource group.
   * @param name The name of the redis cache.
   * @param options The options parameters.
   */
  public list(
    resourceGroupName: string,
    name: string,
    options?: LinkedServerListOptionalParams
  ): PagedAsyncIterableIterator<RedisLinkedServerWithProperties> {
    const iter = this.listPagingAll(resourceGroupName, name, options);
    return {
      next() {
        return iter.next();
      },
      [Symbol.asyncIterator]() {
        return this;
      },
      byPage: () => {
        return this.listPagingPage(resourceGroupName, name, options);
      }
    };
  }

  private async *listPagingPage(
    resourceGroupName: string,
    name: string,
    options?: LinkedServerListOptionalParams
  ): AsyncIterableIterator<RedisLinkedServerWithProperties[]> {
    let result = await this._list(resourceGroupName, name, options);
    yield result.value || [];
    let continuationToken = result.nextLink;
    while (continuationToken) {
      result = await this._listNext(
        resourceGroupName,
        name,
        continuationToken,
        options
      );
      continuationToken = result.nextLink;
      yield result.value || [];
    }
  }

  private async *listPagingAll(
    resourceGroupName: string,
    name: string,
    options?: LinkedServerListOptionalParams
  ): AsyncIterableIterator<RedisLinkedServerWithProperties> {
    for await (const page of this.listPagingPage(
      resourceGroupName,
      name,
      options
    )) {
      yield* page;
    }
  }

  /**
   * Adds a linked server to the Redis cache (requires Premium SKU).
   * @param resourceGroupName The name of the resource group.
   * @param name The name of the Redis cache.
   * @param linkedServerName The name of the linked server that is being added to the Redis cache.
   * @param parameters Parameters supplied to the Create Linked server operation.
   * @param options The options parameters.
   */
  async beginCreate(
    resourceGroupName: string,
    name: string,
    linkedServerName: string,
    parameters: RedisLinkedServerCreateParameters,
    options?: LinkedServerCreateOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<LinkedServerCreateResponse>,
      LinkedServerCreateResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<LinkedServerCreateResponse> => {
      return this.client.sendOperationRequest(args, spec);
    };
    const sendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ) => {
      let currentRawResponse:
        | coreClient.FullOperationResponse
        | undefined = undefined;
      const providedCallback = args.options?.onResponse;
      const callback: coreClient.RawResponseCallback = (
        rawResponse: coreClient.FullOperationResponse,
        flatResponse: unknown
      ) => {
        currentRawResponse = rawResponse;
        providedCallback?.(rawResponse, flatResponse);
      };
      const updatedArgs = {
        ...args,
        options: {
          ...args.options,
          onResponse: callback
        }
      };
      const flatResponse = await directSendOperation(updatedArgs, spec);
      return {
        flatResponse,
        rawResponse: {
          statusCode: currentRawResponse!.status,
          body: currentRawResponse!.parsedBody,
          headers: currentRawResponse!.headers.toJSON()
        }
      };
    };

    const lro = new LroImpl(
      sendOperation,
      { resourceGroupName, name, linkedServerName, parameters, options },
      createOperationSpec
    );
    return new LroEngine(lro, {
      resumeFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs
    });
  }

  /**
   * Adds a linked server to the Redis cache (requires Premium SKU).
   * @param resourceGroupName The name of the resource group.
   * @param name The name of the Redis cache.
   * @param linkedServerName The name of the linked server that is being added to the Redis cache.
   * @param parameters Parameters supplied to the Create Linked server operation.
   * @param options The options parameters.
   */
  async beginCreateAndWait(
    resourceGroupName: string,
    name: string,
    linkedServerName: string,
    parameters: RedisLinkedServerCreateParameters,
    options?: LinkedServerCreateOptionalParams
  ): Promise<LinkedServerCreateResponse> {
    const poller = await this.beginCreate(
      resourceGroupName,
      name,
      linkedServerName,
      parameters,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * Deletes the linked server from a redis cache (requires Premium SKU).
   * @param resourceGroupName The name of the resource group.
   * @param name The name of the redis cache.
   * @param linkedServerName The name of the linked server that is being added to the Redis cache.
   * @param options The options parameters.
   */
  delete(
    resourceGroupName: string,
    name: string,
    linkedServerName: string,
    options?: LinkedServerDeleteOptionalParams
  ): Promise<void> {
    return this.client.sendOperationRequest(
      { resourceGroupName, name, linkedServerName, options },
      deleteOperationSpec
    );
  }

  /**
   * Gets the detailed information about a linked server of a redis cache (requires Premium SKU).
   * @param resourceGroupName The name of the resource group.
   * @param name The name of the redis cache.
   * @param linkedServerName The name of the linked server.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    name: string,
    linkedServerName: string,
    options?: LinkedServerGetOptionalParams
  ): Promise<LinkedServerGetResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, name, linkedServerName, options },
      getOperationSpec
    );
  }

  /**
   * Gets the list of linked servers associated with this redis cache (requires Premium SKU).
   * @param resourceGroupName The name of the resource group.
   * @param name The name of the redis cache.
   * @param options The options parameters.
   */
  private _list(
    resourceGroupName: string,
    name: string,
    options?: LinkedServerListOptionalParams
  ): Promise<LinkedServerListResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, name, options },
      listOperationSpec
    );
  }

  /**
   * ListNext
   * @param resourceGroupName The name of the resource group.
   * @param name The name of the redis cache.
   * @param nextLink The nextLink from the previous successful call to the List method.
   * @param options The options parameters.
   */
  private _listNext(
    resourceGroupName: string,
    name: string,
    nextLink: string,
    options?: LinkedServerListNextOptionalParams
  ): Promise<LinkedServerListNextResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, name, nextLink, options },
      listNextOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const createOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Cache/redis/{name}/linkedServers/{linkedServerName}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.RedisLinkedServerWithProperties
    },
    201: {
      bodyMapper: Mappers.RedisLinkedServerWithProperties
    },
    202: {
      bodyMapper: Mappers.RedisLinkedServerWithProperties
    },
    204: {
      bodyMapper: Mappers.RedisLinkedServerWithProperties
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  requestBody: Parameters.parameters9,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.name,
    Parameters.linkedServerName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const deleteOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Cache/redis/{name}/linkedServers/{linkedServerName}",
  httpMethod: "DELETE",
  responses: {
    200: {},
    204: {},
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.name,
    Parameters.linkedServerName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const getOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Cache/redis/{name}/linkedServers/{linkedServerName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.RedisLinkedServerWithProperties
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.name,
    Parameters.linkedServerName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Cache/redis/{name}/linkedServers",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.RedisLinkedServerWithPropertiesList
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.name
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.RedisLinkedServerWithPropertiesList
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.nextLink,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.name
  ],
  headerParameters: [Parameters.accept],
  serializer
};
