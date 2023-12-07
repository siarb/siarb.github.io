# API Api-doc Components MD

## Inline schema

Often, multiple API operations have some common parameters or return the same response structure.

Also covered with FE tests: `array of objects` should be displayed next to the `application/json` in response.

<api-doc openapi-path="api-sources/API_User_Inline.yaml"/>

## Simple components schema

To avoid code duplication, you can place the common definitions in the global `components` section and reference them using `$ref`. In the example below, duplicate definitions of a User object are replaced with a single component and references to that component.

<api-doc openapi-path="api-sources/API_User_Components.yaml"/>

## Externally defined

Below is an example of components that contains reusable data schemas, parameters and responses. Other component types (links, examples, and others) are defined similarly.

<api-doc openapi-path="api-sources/API_User_Externally_Defined.yaml"/>
