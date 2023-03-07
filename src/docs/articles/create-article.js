module.exports = {
    // operation's method
    post: {
        tags: ["Article CRUD operations"], // operation's tag
        description: "Create a new article", // short desc
        operationId: "createArticle", // unique operation id
        parameters: [
            {
                name: "auth-token",
                in: 'header',
                type: 'string',
                description: "Authorization Token",
                required: "true",
            }
        ], // expected params
        requestBody: {
            // expected request body
            content: {
                // content-type
                "multipart/form-data": {
                    schema: {
                        $ref: "#/components/schemas/AddArticle", // article create data model
                    },
                },
            },
        },
        // expected responses
        responses: {
            // response code
            201: {
                description: "Article created successfully", // response desc
                content: {
                    // content-type
                    "application/json": {
                        schema: {
                            $ref: "#/components/schemas/ArticleOutput", //response output data model
                        },
                    },
                }
            },
            400: {
                description: "Error occured while creating article", // response desc
                content: {
                    // content-type
                    "application/json": {
                        schema: {
                            $ref: "#/components/schemas/ArticleCreateError", //creating error output data model
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