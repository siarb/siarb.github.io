# API Generated Examples MD

For each operation, you can define possible status codes, such as 200 OK or 404 Not Found, and the response body schema. Schemas can be defined inline or referenced via `$ref`. You can also provide example responses for different content types.

## Integer and String

<api-endpoint openapi-path="./api-sources/API_examples.yaml" endpoint="/users" method="post"/>

## Object cat

<api-endpoint openapi-path="./api-sources/petstore_oas3_requestBody_example.yaml" endpoint="/pet" method="post"/>

## Bad sample

<api-endpoint openapi-path="./api-sources/bad-openapi.json"
            endpoint="/customer/changeLicensesTeam"
            method="post"/>

## Attribute: never generate

<api-endpoint openapi-path="./api-sources/API_examples.yaml" endpoint="/users" method="post" generate-samples="false"/>

## Attribute: default will generate

<api-endpoint openapi-path="./api-sources/API_examples.yaml" endpoint="/users" method="post"/>

## Attribute: true will generate

<api-endpoint openapi-path="./api-sources/API_examples.yaml" endpoint="/users" method="post" generate-samples="true"/>

