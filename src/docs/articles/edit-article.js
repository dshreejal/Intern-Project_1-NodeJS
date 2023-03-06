module.exports = {
    put: {
        tags: ['Article CRUD operations'],
        description: "Edit article",
        operationId: "editTodo",
        parameters: [
            {
                name: "id",
                in: "path",
                required: true,
                description: "Id of article to be updated"
            },
            {
                name: "auth-token",
                in: 'header',
                type: 'string',
                description: "Authorization Token",
                required: "true",
            }
        ],
        requestBody: {
            // expected request body
            content: {
                // content-type
                "application/json": {
                    schema: {
                        $ref: "#/components/schemas/EditArticle", // article create data model
                    },
                },
            },
        },
        responses: {

            '200': {
                description: "Article edited successfully", // response desc
                content: {
                    // content-type
                    "application/json": {
                        schema: {
                            $ref: "#/components/schemas/ArticleEditSuccess", //response output data model
                        },
                    },
                }
            },
            '404': {
                description: "Article not found"
            },
            '500': {
                description: "Server error"
            }

        }
    }
}