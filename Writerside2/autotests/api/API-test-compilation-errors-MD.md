# API test compilation errors MD

<api-endpoint openapi-path="./api-sources/API-docs-openapi.yaml" endpoint="/store/order/{orderId}" method="delete"/>

<api-endpoint openapi-path="./api-sources/API-docs-openapi.yaml" endpoint="/user" method="post">
    <request>
        <sample src="examples.json" include-lines="1-10"/>
    </request>
    <response type="default">
        <sample>
            {
              "id": 11,
              "username": "theUser",
              "firstName": "John",
              "lastName": "Doe",
              "email": "john@email.com",
              "password": "12345",
              "phone": "12345",
              "userStatus": 1
            }
        </sample>
    </response>
</api-endpoint>