/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import {
  DatabaseCheckNameRequest,
  KustoPoolChildResourceCheckNameAvailabilityOptionalParams,
  KustoPoolChildResourceCheckNameAvailabilityResponse
} from "../models";

/** Interface representing a KustoPoolChildResource. */
export interface KustoPoolChildResource {
  /**
   * Checks that the Kusto Pool child resource name is valid and is not already in use.
   * @param workspaceName The name of the workspace.
   * @param kustoPoolName The name of the Kusto pool.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param resourceName The name of the Kusto Pool child resource.
   * @param options The options parameters.
   */
  checkNameAvailability(
    workspaceName: string,
    kustoPoolName: string,
    resourceGroupName: string,
    resourceName: DatabaseCheckNameRequest,
    options?: KustoPoolChildResourceCheckNameAvailabilityOptionalParams
  ): Promise<KustoPoolChildResourceCheckNameAvailabilityResponse>;
}