module.exports = {
    // operation's method
    post: {
        tags: ["User operations"], // operation's tag
        description: "User Login", // short desc
        operationId: "loginUser", // unique operation id
        parameters: [], // expected params
        requestBody: {
            // expected request body
            content: {
                // content-type
                "application/json": {
                    schema: {
                        $ref: "#/components/schemas/LoginUser", // loginUser  data model
                    },
                },
            },
        },
        // expected responses
        responses: {
            // response code
            200: {
                description: "Logged In successfully", // response desc
                content: {
                    // content-type
                    "application/json": {
                        schema: {
                            $ref: "#/components/schemas/LoginResponse", //response output data model
                        },
                    },
                }
            },
            400: {
                description: "Some fields are not filled properly", // response desc
                content: {
                    // content-type
                    "application/json": {
                        schema: {
                            $ref: "#/components/schemas/LoginUserError", //creating error output data model
                        },
                    },
                }
            },
            // response code
            500: {
                description: "Server error", // response desc
            },
        },
    },
};