# CarrierAccounts
(*carrierAccounts*)

## Overview

Carriers are the companies who deliver your package. Shippo uses Carrier account objects as credentials to retrieve shipping rates and purchase labels from shipping Carriers.

<SchemaDefinition schemaRef="#/components/schemas/CarrierAccount"/>

### Available Operations

* [list](#list) - List all carrier accounts
* [create](#create) - Create a new carrier account
* [get](#get) - Retrieve a carrier account
* [update](#update) - Update a carrier account
* [initiateOauth2Signin](#initiateoauth2signin) - Connect an existing carrier account using OAuth 2.0
* [register](#register) - Add a Shippo carrier account
* [getRegistrationStatus](#getregistrationstatus) - Get Carrier Registration status

## list

Returns a list of all carrier accounts connected to your Shippo account. These carrier accounts include both Shippo carrier accounts and your own carrier accounts that you have connected to your Shippo account.

Additionally, you can get information about the service levels associated with each carrier account by passing in the `?service_levels=true` query parameter. <br>
Using it appends the property `service_levels` to each carrier account. <br>
By default, if the query parameter is omitted, the `service_levels` property will not be included in the response.

### Example Usage

```typescript
import { Shippo } from "shippo";

const shippo = new Shippo({
  apiKeyHeader: "<YOUR_API_KEY_HERE>",
  shippoApiVersion: "2018-02-08",
});

async function run() {
  const result = await shippo.carrierAccounts.list({
    page: 1,
    results: 5,
  });

  // Handle the result
  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { ShippoCore } from "shippo/core.js";
import { carrierAccountsList } from "shippo/funcs/carrierAccountsList.js";

// Use `ShippoCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const shippo = new ShippoCore({
  apiKeyHeader: "<YOUR_API_KEY_HERE>",
  shippoApiVersion: "2018-02-08",
});

async function run() {
  const res = await carrierAccountsList(shippo, {
    page: 1,
    results: 5,
  });

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  // Handle the result
  console.log(result);
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ListCarrierAccountsRequest](../../models/operations/listcarrieraccountsrequest.md)                                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.CarrierAccountPaginatedList](../../models/components/carrieraccountpaginatedlist.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## create

Creates a new carrier account or connects an existing carrier account to the Shippo account.

### Example Usage

```typescript
import { Shippo } from "shippo";

const shippo = new Shippo({
  apiKeyHeader: "<YOUR_API_KEY_HERE>",
  shippoApiVersion: "2018-02-08",
});

async function run() {
  const result = await shippo.carrierAccounts.create({
    accountId: "321123",
    carrier: "fedex",
    metadata: "FEDEX Account",
    parameters: {
      "first_name": "Loyal",
      "last_name": "Collier",
      "phone_number": "(890) 307-8579",
      "from_address_st": "<value>",
      "from_address_city": "<value>",
      "from_address_state": "<value>",
      "from_address_zip": "<value>",
      "from_address_country_iso2": "<value>",
    },
    test: false,
  });

  // Handle the result
  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { ShippoCore } from "shippo/core.js";
import { carrierAccountsCreate } from "shippo/funcs/carrierAccountsCreate.js";

// Use `ShippoCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const shippo = new ShippoCore({
  apiKeyHeader: "<YOUR_API_KEY_HERE>",
  shippoApiVersion: "2018-02-08",
});

async function run() {
  const res = await carrierAccountsCreate(shippo, {
    accountId: "321123",
    carrier: "fedex",
    metadata: "FEDEX Account",
    parameters: {
      "first_name": "Loyal",
      "last_name": "Collier",
      "phone_number": "(890) 307-8579",
      "from_address_st": "<value>",
      "from_address_city": "<value>",
      "from_address_state": "<value>",
      "from_address_zip": "<value>",
      "from_address_country_iso2": "<value>",
    },
    test: false,
  });

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  // Handle the result
  console.log(result);
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [components.ConnectExistingOwnAccountRequest](../../models/components/connectexistingownaccountrequest.md)                                                                     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.CarrierAccount](../../models/components/carrieraccount.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## get

Returns an existing carrier account using an object ID.

### Example Usage

```typescript
import { Shippo } from "shippo";

const shippo = new Shippo({
  apiKeyHeader: "<YOUR_API_KEY_HERE>",
  shippoApiVersion: "2018-02-08",
});

async function run() {
  const result = await shippo.carrierAccounts.get("<id>");

  // Handle the result
  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { ShippoCore } from "shippo/core.js";
import { carrierAccountsGet } from "shippo/funcs/carrierAccountsGet.js";

// Use `ShippoCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const shippo = new ShippoCore({
  apiKeyHeader: "<YOUR_API_KEY_HERE>",
  shippoApiVersion: "2018-02-08",
});

async function run() {
  const res = await carrierAccountsGet(shippo, "<id>");

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  // Handle the result
  console.log(result);
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `carrierAccountId`                                                                                                                                                             | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | Object ID of the carrier account                                                                                                                                               |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.CarrierAccount](../../models/components/carrieraccount.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## update

Updates an existing carrier account object. The account_id and carrier can't be updated. This is because they form the unique identifier together.

### Example Usage

```typescript
import { Shippo } from "shippo";

const shippo = new Shippo({
  apiKeyHeader: "<YOUR_API_KEY_HERE>",
  shippoApiVersion: "2018-02-08",
});

async function run() {
  const result = await shippo.carrierAccounts.update("<id>", {
    accountId: "****",
    carrier: "usps",
    parameters: {
      "account_number": "94567e",
      "aia_country_iso2": "US",
      "billing_address_city": "San Francisco",
      "billing_address_country_iso2": "US",
      "billing_address_state": "CA",
      "billing_address_street1": "731 Market St",
      "billing_address_street2": "STE 200",
      "billing_address_zip": "94103",
      "collec_country_iso2": "US",
      "collec_zip": "94103",
      "company": "Shippo",
      "currency_code": "USD",
      "email": "hippo@shippo.com",
      "full_name": "Shippo Meister",
      "has_invoice": false,
      "invoice_controlid": "1234",
      "invoice_date": "20210529",
      "invoice_number": "1112234",
      "invoice_value": "11.23",
      "phone": "1112223333",
      "title": "Manager",
      "ups_agreements": true,
    },
  });

  // Handle the result
  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { ShippoCore } from "shippo/core.js";
import { carrierAccountsUpdate } from "shippo/funcs/carrierAccountsUpdate.js";

// Use `ShippoCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const shippo = new ShippoCore({
  apiKeyHeader: "<YOUR_API_KEY_HERE>",
  shippoApiVersion: "2018-02-08",
});

async function run() {
  const res = await carrierAccountsUpdate(shippo, "<id>", {
    accountId: "****",
    carrier: "usps",
    parameters: {
      "account_number": "94567e",
      "aia_country_iso2": "US",
      "billing_address_city": "San Francisco",
      "billing_address_country_iso2": "US",
      "billing_address_state": "CA",
      "billing_address_street1": "731 Market St",
      "billing_address_street2": "STE 200",
      "billing_address_zip": "94103",
      "collec_country_iso2": "US",
      "collec_zip": "94103",
      "company": "Shippo",
      "currency_code": "USD",
      "email": "hippo@shippo.com",
      "full_name": "Shippo Meister",
      "has_invoice": false,
      "invoice_controlid": "1234",
      "invoice_date": "20210529",
      "invoice_number": "1112234",
      "invoice_value": "11.23",
      "phone": "1112223333",
      "title": "Manager",
      "ups_agreements": true,
    },
  });

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  // Handle the result
  console.log(result);
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `carrierAccountId`                                                                                                                                                             | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | Object ID of the carrier account                                                                                                                                               |
| `carrierAccountBase`                                                                                                                                                           | [components.CarrierAccountBase](../../models/components/carrieraccountbase.md)                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Examples.                                                                                                                                                                      |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.CarrierAccount](../../models/components/carrieraccount.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## initiateOauth2Signin

Used by client applications to setup or reconnect an existing carrier account with carriers that support OAuth 2.0

### Example Usage

```typescript
import { Shippo } from "shippo";

const shippo = new Shippo({
  apiKeyHeader: "<YOUR_API_KEY_HERE>",
  shippoApiVersion: "2018-02-08",
});

async function run() {
  const result = await shippo.carrierAccounts.initiateOauth2Signin("<id>", "https://enlightened-mortise.com/");

  // Handle the result
  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { ShippoCore } from "shippo/core.js";
import { carrierAccountsInitiateOauth2Signin } from "shippo/funcs/carrierAccountsInitiateOauth2Signin.js";

// Use `ShippoCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const shippo = new ShippoCore({
  apiKeyHeader: "<YOUR_API_KEY_HERE>",
  shippoApiVersion: "2018-02-08",
});

async function run() {
  const res = await carrierAccountsInitiateOauth2Signin(shippo, "<id>", "https://enlightened-mortise.com/");

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  // Handle the result
  console.log(result);
}

run();
```

### Parameters

| Parameter                                                                                                                                                                                                      | Type                                                                                                                                                                                                           | Required                                                                                                                                                                                                       | Description                                                                                                                                                                                                    |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `carrierAccountObjectId`                                                                                                                                                                                       | *string*                                                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                                                             | The carrier account ID (UUID) to start a signin process.                                                                                                                                                       |
| `redirectUri`                                                                                                                                                                                                  | *string*                                                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                                                             | Callback URL. The URL that tells the authorization server where to send the user back to after they approve the request.                                                                                       |
| `state`                                                                                                                                                                                                        | *string*                                                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                                                             | A random string generated by the consuming application and included in the request to prevent CSRF attacks. The consuming application checks that the same value is returned after the user authorizes Shippo. |
| `options`                                                                                                                                                                                                      | RequestOptions                                                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                                                        | :heavy_minus_sign:                                                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed.                                 |
| `options.retries`                                                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                                                               |

### Response

**Promise\<[operations.InitiateOauth2SigninResponse](../../models/operations/initiateoauth2signinresponse.md)\>**

### Errors

| Error Type                                                     | Status Code                                                    | Content Type                                                   |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| errors.InitiateOauth2SigninResponseBody                        | 400                                                            | application/json                                               |
| errors.InitiateOauth2SigninCarrierAccountsResponseBody         | 401                                                            | application/json                                               |
| errors.InitiateOauth2SigninCarrierAccountsResponseResponseBody | 404                                                            | application/json                                               |
| errors.SDKError                                                | 4XX, 5XX                                                       | \*/\*                                                          |

## register

Adds a Shippo carrier account

### Example Usage

```typescript
import { Shippo } from "shippo";

const shippo = new Shippo({
  apiKeyHeader: "<YOUR_API_KEY_HERE>",
  shippoApiVersion: "2018-02-08",
});

async function run() {
  const result = await shippo.carrierAccounts.register({
    parameters: {},
  });

  // Handle the result
  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { ShippoCore } from "shippo/core.js";
import { carrierAccountsRegister } from "shippo/funcs/carrierAccountsRegister.js";

// Use `ShippoCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const shippo = new ShippoCore({
  apiKeyHeader: "<YOUR_API_KEY_HERE>",
  shippoApiVersion: "2018-02-08",
});

async function run() {
  const res = await carrierAccountsRegister(shippo, {
    parameters: {},
  });

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  // Handle the result
  console.log(result);
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.RegisterCarrierAccountRequestBody](../../models/operations/registercarrieraccountrequestbody.md)                                                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.CarrierAccount](../../models/components/carrieraccount.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## getRegistrationStatus

Returns the registration status for the given account for the given carrier

### Example Usage

```typescript
import { Shippo } from "shippo";

const shippo = new Shippo({
  apiKeyHeader: "<YOUR_API_KEY_HERE>",
  shippoApiVersion: "2018-02-08",
});

async function run() {
  const result = await shippo.carrierAccounts.getRegistrationStatus("usps");

  // Handle the result
  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { ShippoCore } from "shippo/core.js";
import { carrierAccountsGetRegistrationStatus } from "shippo/funcs/carrierAccountsGetRegistrationStatus.js";

// Use `ShippoCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const shippo = new ShippoCore({
  apiKeyHeader: "<YOUR_API_KEY_HERE>",
  shippoApiVersion: "2018-02-08",
});

async function run() {
  const res = await carrierAccountsGetRegistrationStatus(shippo, "usps");

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  // Handle the result
  console.log(result);
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `carrier`                                                                                                                                                                      | [operations.Carrier](../../models/operations/carrier.md)                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | filter by specific carrier                                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.CarrierAccountRegistrationStatus](../../models/components/carrieraccountregistrationstatus.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |