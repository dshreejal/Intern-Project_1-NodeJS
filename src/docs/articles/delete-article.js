module.exports = {
    delete: {
        tags: ['Article CRUD operations'],
        description: "Deleting an article",
        operationId: "deleteArticle",
        parameters: [
            {
                name: "id",
                in: "path",
                required: true,
                description: "Id of article to be deleted"
            },
            {
                name: "auth-token",
                in: 'header',
                type: 'string',
                description: "Authorization Token",
                required: "true",
            }
        ],
        responses: {
            '200': {
                description: "Article Deleted Successfully",
                content: {
                    // content-type
                    "application/json": {
                        schema: {
                            $ref: "#/components/schemas/ArticleDeleteSuccess", //success response output data model
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