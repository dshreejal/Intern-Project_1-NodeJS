module.exports = {
    get: {
        tags: ["Article CRUD operations"], // operation's tag.
        description: "Get articles", // operation's desc.
        operationId: "getArticles", // unique operation id.
        // expected params.
        parameters: [
            {
                name: "limit",
                in: 'query',
                type: 'integer',
                description: "No of result to be shown",
                default: "8"
            },
            {
                name: "page",
                in: 'query',
                type: 'integer',
                description: "No of pages to be shown",
                default: "1"
            }
        ],
        // expected responses
        responses: {
            // response code
            200: {
                description: "Data fetched successfully", // response desc.
                content: {
                    // content-type
                    "application/json": {
                        schema: {
                            $ref: "#/components/schemas/Article", // Todo model
                        },
                    },
                },
            },
        },
    },
}