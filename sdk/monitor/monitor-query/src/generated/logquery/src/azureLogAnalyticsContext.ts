/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import * as coreClient from "@azure/core-client";
import { AzureLogAnalyticsOptionalParams } from "./models";

/** @internal */
export class AzureLogAnalyticsContext extends coreClient.ServiceClient {
  $host: string;

  /**
   * Initializes a new instance of the AzureLogAnalyticsContext class.
   * @param options The parameter options
   */
  constructor(options?: AzureLogAnalyticsOptionalParams) {
    // Initializing default values for options
    if (!options) {
      options = {};
    }
    const defaults: AzureLogAnalyticsOptionalParams = {
      requestContentType: "application/json; charset=utf-8"
    };

    const packageDetails = `azsdk-js-monitor-log-query/1.0.0`;
    const userAgentPrefix =
      options.userAgentOptions && options.userAgentOptions.userAgentPrefix
        ? `${options.userAgentOptions.userAgentPrefix} ${packageDetails}`
        : `${packageDetails}`;

    const optionsWithDefaults = {
      ...defaults,
      ...options,
      userAgentOptions: {
        userAgentPrefix
      },
      baseUri: options.endpoint || "https://api.loganalytics.io/v1"
    };
    super(optionsWithDefaults);

    // Assigning values to Constant parameters
    this.$host = options.$host || "https://api.loganalytics.io/v1";
  }
}
