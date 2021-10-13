/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import * as coreClient from "@azure/core-client";

export const AnalyzeDocumentRequest: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "AnalyzeDocumentRequest",
    modelProperties: {
      urlSource: {
        serializedName: "urlSource",
        type: {
          name: "String"
        }
      },
      base64Source: {
        serializedName: "base64Source",
        type: {
          name: "ByteArray"
        }
      }
    }
  }
};

export const ErrorResponse: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ErrorResponse",
    modelProperties: {
      error: {
        serializedName: "error",
        type: {
          name: "Composite",
          className: "ErrorModel"
        }
      }
    }
  }
};

export const ErrorModel: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ErrorModel",
    modelProperties: {
      code: {
        serializedName: "code",
        required: true,
        type: {
          name: "String"
        }
      },
      message: {
        serializedName: "message",
        required: true,
        type: {
          name: "String"
        }
      },
      target: {
        serializedName: "target",
        type: {
          name: "String"
        }
      },
      details: {
        serializedName: "details",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "ErrorModel"
            }
          }
        }
      },
      innererror: {
        serializedName: "innererror",
        type: {
          name: "Composite",
          className: "InnerError"
        }
      }
    }
  }
};

export const InnerError: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "InnerError",
    modelProperties: {
      code: {
        serializedName: "code",
        required: true,
        type: {
          name: "String"
        }
      },
      message: {
        serializedName: "message",
        type: {
          name: "String"
        }
      },
      innererror: {
        serializedName: "innererror",
        type: {
          name: "Composite",
          className: "InnerError"
        }
      }
    }
  }
};

export const AnalyzeResultOperation: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "AnalyzeResultOperation",
    modelProperties: {
      status: {
        serializedName: "status",
        required: true,
        type: {
          name: "Enum",
          allowedValues: ["notStarted", "running", "failed", "succeeded"]
        }
      },
      createdDateTime: {
        serializedName: "createdDateTime",
        required: true,
        type: {
          name: "DateTime"
        }
      },
      lastUpdatedDateTime: {
        serializedName: "lastUpdatedDateTime",
        required: true,
        type: {
          name: "DateTime"
        }
      },
      error: {
        serializedName: "error",
        type: {
          name: "Composite",
          className: "ErrorModel"
        }
      },
      analyzeResult: {
        serializedName: "analyzeResult",
        type: {
          name: "Composite",
          className: "AnalyzeResult"
        }
      }
    }
  }
};

export const AnalyzeResult: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "AnalyzeResult",
    modelProperties: {
      apiVersion: {
        serializedName: "apiVersion",
        required: true,
        type: {
          name: "String"
        }
      },
      modelId: {
        constraints: {
          Pattern: new RegExp("[a-zA-Z0-9][a-zA-Z0-9._~-]{1,63}")
        },
        serializedName: "modelId",
        required: true,
        type: {
          name: "String"
        }
      },
      stringIndexType: {
        serializedName: "stringIndexType",
        required: true,
        type: {
          name: "String"
        }
      },
      content: {
        serializedName: "content",
        required: true,
        type: {
          name: "String"
        }
      },
      pages: {
        serializedName: "pages",
        required: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "DocumentPage"
            }
          }
        }
      },
      tables: {
        serializedName: "tables",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "DocumentTable"
            }
          }
        }
      },
      keyValuePairs: {
        serializedName: "keyValuePairs",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "DocumentKeyValuePair"
            }
          }
        }
      },
      entities: {
        serializedName: "entities",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "DocumentEntity"
            }
          }
        }
      },
      styles: {
        serializedName: "styles",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "DocumentStyle"
            }
          }
        }
      },
      documents: {
        serializedName: "documents",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "Document"
            }
          }
        }
      }
    }
  }
};

export const DocumentPage: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "DocumentPage",
    modelProperties: {
      pageNumber: {
        constraints: {
          InclusiveMinimum: 1
        },
        serializedName: "pageNumber",
        required: true,
        type: {
          name: "Number"
        }
      },
      angle: {
        constraints: {
          InclusiveMaximum: 180,
          ExclusiveMinimum: -180
        },
        serializedName: "angle",
        required: true,
        type: {
          name: "Number"
        }
      },
      width: {
        constraints: {
          InclusiveMinimum: 0
        },
        serializedName: "width",
        required: true,
        type: {
          name: "Number"
        }
      },
      height: {
        constraints: {
          InclusiveMinimum: 0
        },
        serializedName: "height",
        required: true,
        type: {
          name: "Number"
        }
      },
      unit: {
        serializedName: "unit",
        required: true,
        type: {
          name: "String"
        }
      },
      spans: {
        serializedName: "spans",
        required: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "DocumentSpan"
            }
          }
        }
      },
      words: {
        serializedName: "words",
        required: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "DocumentWord"
            }
          }
        }
      },
      selectionMarks: {
        serializedName: "selectionMarks",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "DocumentSelectionMark"
            }
          }
        }
      },
      lines: {
        serializedName: "lines",
        required: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "DocumentLine"
            }
          }
        }
      }
    }
  }
};

export const DocumentSpan: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "DocumentSpan",
    modelProperties: {
      offset: {
        constraints: {
          InclusiveMinimum: 0
        },
        serializedName: "offset",
        required: true,
        type: {
          name: "Number"
        }
      },
      length: {
        constraints: {
          InclusiveMinimum: 0
        },
        serializedName: "length",
        required: true,
        type: {
          name: "Number"
        }
      }
    }
  }
};

export const DocumentWord: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "DocumentWord",
    modelProperties: {
      content: {
        serializedName: "content",
        required: true,
        type: {
          name: "String"
        }
      },
      boundingBox: {
        constraints: {
          MinItems: 8,
          MaxItems: 8
        },
        serializedName: "boundingBox",
        type: {
          name: "Sequence",
          element: {
            constraints: {
              InclusiveMinimum: 0
            },
            type: {
              name: "Number"
            }
          }
        }
      },
      span: {
        serializedName: "span",
        type: {
          name: "Composite",
          className: "DocumentSpan"
        }
      },
      confidence: {
        constraints: {
          InclusiveMaximum: 1,
          InclusiveMinimum: 0
        },
        serializedName: "confidence",
        required: true,
        type: {
          name: "Number"
        }
      }
    }
  }
};

export const DocumentSelectionMark: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "DocumentSelectionMark",
    modelProperties: {
      state: {
        serializedName: "state",
        required: true,
        type: {
          name: "String"
        }
      },
      boundingBox: {
        constraints: {
          MinItems: 8,
          MaxItems: 8
        },
        serializedName: "boundingBox",
        type: {
          name: "Sequence",
          element: {
            constraints: {
              InclusiveMinimum: 0
            },
            type: {
              name: "Number"
            }
          }
        }
      },
      span: {
        serializedName: "span",
        type: {
          name: "Composite",
          className: "DocumentSpan"
        }
      },
      confidence: {
        constraints: {
          InclusiveMaximum: 1,
          InclusiveMinimum: 0
        },
        serializedName: "confidence",
        required: true,
        type: {
          name: "Number"
        }
      }
    }
  }
};

export const DocumentLine: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "DocumentLine",
    modelProperties: {
      content: {
        serializedName: "content",
        required: true,
        type: {
          name: "String"
        }
      },
      boundingBox: {
        constraints: {
          MinItems: 8,
          MaxItems: 8
        },
        serializedName: "boundingBox",
        type: {
          name: "Sequence",
          element: {
            constraints: {
              InclusiveMinimum: 0
            },
            type: {
              name: "Number"
            }
          }
        }
      },
      spans: {
        serializedName: "spans",
        required: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "DocumentSpan"
            }
          }
        }
      }
    }
  }
};

export const DocumentTable: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "DocumentTable",
    modelProperties: {
      rowCount: {
        constraints: {
          InclusiveMinimum: 1
        },
        serializedName: "rowCount",
        required: true,
        type: {
          name: "Number"
        }
      },
      columnCount: {
        constraints: {
          InclusiveMinimum: 1
        },
        serializedName: "columnCount",
        required: true,
        type: {
          name: "Number"
        }
      },
      cells: {
        serializedName: "cells",
        required: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "DocumentTableCell"
            }
          }
        }
      },
      boundingRegions: {
        serializedName: "boundingRegions",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "BoundingRegion"
            }
          }
        }
      },
      spans: {
        serializedName: "spans",
        required: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "DocumentSpan"
            }
          }
        }
      }
    }
  }
};

export const DocumentTableCell: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "DocumentTableCell",
    modelProperties: {
      kind: {
        defaultValue: "content",
        serializedName: "kind",
        type: {
          name: "String"
        }
      },
      rowIndex: {
        serializedName: "rowIndex",
        required: true,
        type: {
          name: "Number"
        }
      },
      columnIndex: {
        serializedName: "columnIndex",
        required: true,
        type: {
          name: "Number"
        }
      },
      rowSpan: {
        defaultValue: 1,
        constraints: {
          InclusiveMinimum: 1
        },
        serializedName: "rowSpan",
        type: {
          name: "Number"
        }
      },
      columnSpan: {
        defaultValue: 1,
        constraints: {
          InclusiveMinimum: 1
        },
        serializedName: "columnSpan",
        type: {
          name: "Number"
        }
      },
      content: {
        serializedName: "content",
        required: true,
        type: {
          name: "String"
        }
      },
      boundingRegions: {
        serializedName: "boundingRegions",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "BoundingRegion"
            }
          }
        }
      },
      spans: {
        serializedName: "spans",
        required: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "DocumentSpan"
            }
          }
        }
      }
    }
  }
};

export const BoundingRegion: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "BoundingRegion",
    modelProperties: {
      pageNumber: {
        constraints: {
          InclusiveMinimum: 1
        },
        serializedName: "pageNumber",
        required: true,
        type: {
          name: "Number"
        }
      },
      boundingBox: {
        constraints: {
          MinItems: 8,
          MaxItems: 8
        },
        serializedName: "boundingBox",
        required: true,
        type: {
          name: "Sequence",
          element: {
            constraints: {
              InclusiveMinimum: 0
            },
            type: {
              name: "Number"
            }
          }
        }
      }
    }
  }
};

export const DocumentKeyValuePair: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "DocumentKeyValuePair",
    modelProperties: {
      key: {
        serializedName: "key",
        type: {
          name: "Composite",
          className: "DocumentKeyValueElement"
        }
      },
      value: {
        serializedName: "value",
        type: {
          name: "Composite",
          className: "DocumentKeyValueElement"
        }
      },
      confidence: {
        constraints: {
          InclusiveMaximum: 1,
          InclusiveMinimum: 0
        },
        serializedName: "confidence",
        required: true,
        type: {
          name: "Number"
        }
      }
    }
  }
};

export const DocumentKeyValueElement: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "DocumentKeyValueElement",
    modelProperties: {
      content: {
        serializedName: "content",
        required: true,
        type: {
          name: "String"
        }
      },
      boundingRegions: {
        serializedName: "boundingRegions",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "BoundingRegion"
            }
          }
        }
      },
      spans: {
        serializedName: "spans",
        required: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "DocumentSpan"
            }
          }
        }
      }
    }
  }
};

export const DocumentEntity: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "DocumentEntity",
    modelProperties: {
      category: {
        serializedName: "category",
        required: true,
        type: {
          name: "String"
        }
      },
      subCategory: {
        serializedName: "subCategory",
        type: {
          name: "String"
        }
      },
      content: {
        serializedName: "content",
        required: true,
        type: {
          name: "String"
        }
      },
      boundingRegions: {
        serializedName: "boundingRegions",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "BoundingRegion"
            }
          }
        }
      },
      spans: {
        serializedName: "spans",
        required: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "DocumentSpan"
            }
          }
        }
      },
      confidence: {
        constraints: {
          InclusiveMaximum: 1,
          InclusiveMinimum: 0
        },
        serializedName: "confidence",
        required: true,
        type: {
          name: "Number"
        }
      }
    }
  }
};

export const DocumentStyle: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "DocumentStyle",
    modelProperties: {
      isHandwritten: {
        serializedName: "isHandwritten",
        type: {
          name: "Boolean"
        }
      },
      spans: {
        serializedName: "spans",
        required: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "DocumentSpan"
            }
          }
        }
      },
      confidence: {
        constraints: {
          InclusiveMaximum: 1,
          InclusiveMinimum: 0
        },
        serializedName: "confidence",
        required: true,
        type: {
          name: "Number"
        }
      }
    }
  }
};

export const Document: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "Document",
    modelProperties: {
      docType: {
        constraints: {
          MaxLength: 64,
          MinLength: 2
        },
        serializedName: "docType",
        required: true,
        type: {
          name: "String"
        }
      },
      boundingRegions: {
        serializedName: "boundingRegions",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "BoundingRegion"
            }
          }
        }
      },
      spans: {
        serializedName: "spans",
        required: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "DocumentSpan"
            }
          }
        }
      },
      fields: {
        serializedName: "fields",
        required: true,
        type: {
          name: "Dictionary",
          value: { type: { name: "Composite", className: "DocumentField" } }
        }
      },
      confidence: {
        constraints: {
          InclusiveMaximum: 1,
          InclusiveMinimum: 0
        },
        serializedName: "confidence",
        required: true,
        type: {
          name: "Number"
        }
      }
    }
  }
};

export const DocumentField: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "DocumentField",
    modelProperties: {
      type: {
        serializedName: "type",
        required: true,
        type: {
          name: "String"
        }
      },
      valueString: {
        serializedName: "valueString",
        type: {
          name: "String"
        }
      },
      valueDate: {
        serializedName: "valueDate",
        type: {
          name: "Date"
        }
      },
      valueTime: {
        serializedName: "valueTime",
        type: {
          name: "String"
        }
      },
      valuePhoneNumber: {
        serializedName: "valuePhoneNumber",
        type: {
          name: "String"
        }
      },
      valueNumber: {
        serializedName: "valueNumber",
        type: {
          name: "Number"
        }
      },
      valueInteger: {
        serializedName: "valueInteger",
        type: {
          name: "Number"
        }
      },
      valueSelectionMark: {
        serializedName: "valueSelectionMark",
        type: {
          name: "String"
        }
      },
      valueSignature: {
        serializedName: "valueSignature",
        type: {
          name: "String"
        }
      },
      valueCountryRegion: {
        serializedName: "valueCountryRegion",
        type: {
          name: "String"
        }
      },
      valueArray: {
        serializedName: "valueArray",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "DocumentField"
            }
          }
        }
      },
      valueObject: {
        serializedName: "valueObject",
        type: {
          name: "Dictionary",
          value: { type: { name: "Composite", className: "DocumentField" } }
        }
      },
      content: {
        serializedName: "content",
        type: {
          name: "String"
        }
      },
      boundingRegions: {
        serializedName: "boundingRegions",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "BoundingRegion"
            }
          }
        }
      },
      spans: {
        serializedName: "spans",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "DocumentSpan"
            }
          }
        }
      },
      confidence: {
        constraints: {
          InclusiveMaximum: 1,
          InclusiveMinimum: 0
        },
        serializedName: "confidence",
        type: {
          name: "Number"
        }
      }
    }
  }
};

export const BuildDocumentModelRequest: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "BuildDocumentModelRequest",
    modelProperties: {
      modelId: {
        constraints: {
          Pattern: new RegExp("[a-zA-Z0-9][a-zA-Z0-9._~-]{1,63}")
        },
        serializedName: "modelId",
        required: true,
        type: {
          name: "String"
        }
      },
      description: {
        constraints: {
          MaxLength: 4096
        },
        serializedName: "description",
        type: {
          name: "String"
        }
      },
      azureBlobSource: {
        serializedName: "azureBlobSource",
        type: {
          name: "Composite",
          className: "AzureBlobContentSource"
        }
      }
    }
  }
};

export const AzureBlobContentSource: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "AzureBlobContentSource",
    modelProperties: {
      containerUrl: {
        serializedName: "containerUrl",
        required: true,
        type: {
          name: "String"
        }
      },
      prefix: {
        serializedName: "prefix",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const ComposeDocumentModelRequest: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ComposeDocumentModelRequest",
    modelProperties: {
      modelId: {
        constraints: {
          Pattern: new RegExp("[a-zA-Z0-9][a-zA-Z0-9._~-]{1,63}")
        },
        serializedName: "modelId",
        required: true,
        type: {
          name: "String"
        }
      },
      description: {
        constraints: {
          MaxLength: 4096
        },
        serializedName: "description",
        type: {
          name: "String"
        }
      },
      componentModels: {
        constraints: {
          UniqueItems: true
        },
        serializedName: "componentModels",
        required: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "ComponentModelInfo"
            }
          }
        }
      }
    }
  }
};

export const ComponentModelInfo: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ComponentModelInfo",
    modelProperties: {
      modelId: {
        constraints: {
          Pattern: new RegExp("[a-zA-Z0-9][a-zA-Z0-9._~-]{1,63}")
        },
        serializedName: "modelId",
        required: true,
        type: {
          name: "String"
        }
      }
    }
  }
};

export const AuthorizeCopyRequest: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "AuthorizeCopyRequest",
    modelProperties: {
      modelId: {
        constraints: {
          Pattern: new RegExp("[a-zA-Z0-9][a-zA-Z0-9._~-]{1,63}")
        },
        serializedName: "modelId",
        required: true,
        type: {
          name: "String"
        }
      },
      description: {
        constraints: {
          MaxLength: 4096
        },
        serializedName: "description",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const CopyAuthorization: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "CopyAuthorization",
    modelProperties: {
      targetResourceId: {
        serializedName: "targetResourceId",
        required: true,
        type: {
          name: "String"
        }
      },
      targetResourceRegion: {
        serializedName: "targetResourceRegion",
        required: true,
        type: {
          name: "String"
        }
      },
      targetModelId: {
        constraints: {
          Pattern: new RegExp("[a-zA-Z0-9][a-zA-Z0-9._~-]{1,63}")
        },
        serializedName: "targetModelId",
        required: true,
        type: {
          name: "String"
        }
      },
      targetModelLocation: {
        serializedName: "targetModelLocation",
        required: true,
        type: {
          name: "String"
        }
      },
      accessToken: {
        serializedName: "accessToken",
        required: true,
        type: {
          name: "String"
        }
      },
      expirationDateTime: {
        serializedName: "expirationDateTime",
        required: true,
        type: {
          name: "DateTime"
        }
      }
    }
  }
};

export const GetOperationsResponse: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "GetOperationsResponse",
    modelProperties: {
      value: {
        serializedName: "value",
        required: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "OperationInfo"
            }
          }
        }
      },
      nextLink: {
        serializedName: "nextLink",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const OperationInfo: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "OperationInfo",
    modelProperties: {
      operationId: {
        serializedName: "operationId",
        required: true,
        type: {
          name: "String"
        }
      },
      status: {
        serializedName: "status",
        required: true,
        type: {
          name: "Enum",
          allowedValues: [
            "notStarted",
            "running",
            "failed",
            "succeeded",
            "canceled"
          ]
        }
      },
      percentCompleted: {
        constraints: {
          InclusiveMaximum: 100,
          InclusiveMinimum: 0
        },
        serializedName: "percentCompleted",
        type: {
          name: "Number"
        }
      },
      createdDateTime: {
        serializedName: "createdDateTime",
        required: true,
        type: {
          name: "DateTime"
        }
      },
      lastUpdatedDateTime: {
        serializedName: "lastUpdatedDateTime",
        required: true,
        type: {
          name: "DateTime"
        }
      },
      kind: {
        serializedName: "kind",
        required: true,
        type: {
          name: "String"
        }
      },
      resourceLocation: {
        serializedName: "resourceLocation",
        required: true,
        type: {
          name: "String"
        }
      }
    }
  }
};

export const ModelSummary: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ModelSummary",
    modelProperties: {
      modelId: {
        constraints: {
          Pattern: new RegExp("[a-zA-Z0-9][a-zA-Z0-9._~-]{1,63}")
        },
        serializedName: "modelId",
        required: true,
        type: {
          name: "String"
        }
      },
      description: {
        constraints: {
          MaxLength: 4096
        },
        serializedName: "description",
        type: {
          name: "String"
        }
      },
      createdDateTime: {
        serializedName: "createdDateTime",
        required: true,
        type: {
          name: "DateTime"
        }
      }
    }
  }
};

export const DocTypeInfo: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "DocTypeInfo",
    modelProperties: {
      description: {
        constraints: {
          MaxLength: 4096
        },
        serializedName: "description",
        type: {
          name: "String"
        }
      },
      fieldSchema: {
        serializedName: "fieldSchema",
        required: true,
        type: {
          name: "Dictionary",
          value: {
            type: { name: "Composite", className: "DocumentFieldSchema" }
          }
        }
      },
      fieldConfidence: {
        serializedName: "fieldConfidence",
        type: {
          name: "Dictionary",
          value: {
            type: { name: "Number" },
            constraints: { InclusiveMaximum: 1, InclusiveMinimum: 0 }
          }
        }
      }
    }
  }
};

export const DocumentFieldSchema: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "DocumentFieldSchema",
    modelProperties: {
      type: {
        serializedName: "type",
        required: true,
        type: {
          name: "String"
        }
      },
      description: {
        serializedName: "description",
        type: {
          name: "String"
        }
      },
      example: {
        serializedName: "example",
        type: {
          name: "String"
        }
      },
      items: {
        serializedName: "items",
        type: {
          name: "Composite",
          className: "DocumentFieldSchema"
        }
      },
      properties: {
        serializedName: "properties",
        type: {
          name: "Dictionary",
          value: {
            type: { name: "Composite", className: "DocumentFieldSchema" }
          }
        }
      }
    }
  }
};

export const GetModelsResponse: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "GetModelsResponse",
    modelProperties: {
      value: {
        serializedName: "value",
        required: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "ModelSummary"
            }
          }
        }
      },
      nextLink: {
        serializedName: "nextLink",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const GetInfoResponse: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "GetInfoResponse",
    modelProperties: {
      customDocumentModels: {
        serializedName: "customDocumentModels",
        type: {
          name: "Composite",
          className: "CustomDocumentModelsInfo"
        }
      }
    }
  }
};

export const CustomDocumentModelsInfo: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "CustomDocumentModelsInfo",
    modelProperties: {
      count: {
        serializedName: "count",
        required: true,
        type: {
          name: "Number"
        }
      },
      limit: {
        serializedName: "limit",
        required: true,
        type: {
          name: "Number"
        }
      }
    }
  }
};

export const GetOperationResponse: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "GetOperationResponse",
    modelProperties: {
      ...OperationInfo.type.modelProperties,
      error: {
        serializedName: "error",
        type: {
          name: "Composite",
          className: "ErrorModel"
        }
      },
      result: {
        serializedName: "result",
        type: {
          name: "Composite",
          className: "ModelInfo"
        }
      }
    }
  }
};

export const ModelInfo: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ModelInfo",
    modelProperties: {
      ...ModelSummary.type.modelProperties,
      docTypes: {
        serializedName: "docTypes",
        type: {
          name: "Dictionary",
          value: { type: { name: "Composite", className: "DocTypeInfo" } }
        }
      }
    }
  }
};

export const GeneratedClientAnalyzeDocumentHeaders: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "GeneratedClientAnalyzeDocumentHeaders",
    modelProperties: {
      operationLocation: {
        serializedName: "operation-location",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const GeneratedClientBuildDocumentModelHeaders: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "GeneratedClientBuildDocumentModelHeaders",
    modelProperties: {
      operationLocation: {
        serializedName: "operation-location",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const GeneratedClientComposeDocumentModelHeaders: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "GeneratedClientComposeDocumentModelHeaders",
    modelProperties: {
      operationLocation: {
        serializedName: "operation-location",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const GeneratedClientCopyDocumentModelToHeaders: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "GeneratedClientCopyDocumentModelToHeaders",
    modelProperties: {
      operationLocation: {
        serializedName: "operation-location",
        type: {
          name: "String"
        }
      }
    }
  }
};
