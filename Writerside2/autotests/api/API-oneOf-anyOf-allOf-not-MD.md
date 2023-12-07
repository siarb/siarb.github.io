# API oneOf, anyOf, allOf, not MD

OpenAPI 3.0 provides several keywords which you can use to combine schemas.
You can use these keywords to create a complex schema, or validate a value against multiple criteria.
* oneOf – validates the value against exactly one of the subschemas
* allOf – validates the value against all the subschemas
* anyOf – validates the value against any (one or more) of the subschemas

Besides these, there is a `not` keyword which you can use to make sure the value is not valid against the specified schema.

## oneOf

<api-schema openapi-path="api-sources/API_oneOf_Referenced.yaml" name="Cat"/>

<api-schema openapi-path="api-sources/API_oneOf_Referenced.yaml" name="Dog"/>

The example above shows how to validate the request body in the “update” operation (PATCH).
You can use it to validate the request body contains all the necessary information about the object to be updated, depending on the object type.
Note the inline or referenced schema must be a schema object, not a standard JSON Schema.

## allOf

OpenAPI lets you combine and extend model definitions using the `allOf` keyword.
`allOf` takes an array of object definitions that are used for independent validation but together compose a single object.
Still, it does not imply a hierarchy between the models.
For that purpose, you should include the `discriminator`.
To be valid against `allOf`, the data provided by the client must be valid against all of the given subschemas.
In the following example, `allOf` acts as a tool for combining schemas used in specific cases with the general one.
For more clearness, `oneOf` is also used with a `discriminator`.

<api-schema openapi-path="api-sources/API_allOf_Referenced.yaml" name="Dog"/>

As you can see, this example validates the request body content to make sure it includes all the information needed to update a pet item with the PUT operation.
It requires user to specify which type of the item should be updated, and validates against the specified schema according to their choice.
Note the inline or referenced schema must be a schema object, not a standard JSON schema.

## anyOf

Use the `anyOf` keyword to validate the data against any amount of the given subschemas.
That is, the data may be valid against one or more subschemas at the same time.

<api-schema openapi-path="api-sources/API_anyOf_Referenced.yaml" name="PetByAge"/>

<api-schema openapi-path="api-sources/API_anyOf_Referenced.yaml" name="PetByType"/>

## not

The `not` keyword does not exactly combine schemas, but as all of the keywords mentioned above it helps you to modify your schemas and make them more specific.
In this example, user should specify the pet_type value of any type except integer (that is, it should be an array, boolean, number, object, or string).

<api-schema openapi-path="api-sources/API_not_Referenced.yaml" name="PetByType"/>
