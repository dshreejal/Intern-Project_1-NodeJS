module.exports = {
    components: {
        schemas: {
            Article: {
                "type": "object",
                "properties": {
                    "success": {
                        "type": "boolean",
                        "description": "Indicates whether the request was successful or not"
                    },
                    "data": {
                        "type": "array",
                        "items": {
                            "type": "object",
                            "properties": {
                                "_id": {
                                    "type": "string",
                                    "description": "The unique identifier for the article"
                                },
                                "user": {
                                    "type": "string",
                                    "description": "The unique identifier for the user who created the article"
                                },
                                "title": {
                                    "type": "string",
                                    "description": "The title of the article"
                                },
                                "description": {
                                    "type": "string",
                                    "description": "The description of the article"
                                },
                                "date": {
                                    "type": "string",
                                    "format": "date-time",
                                    "description": "The date and time the article was created"
                                },
                                "createdAt": {
                                    "type": "string",
                                    "format": "date-time",
                                    "description": "The date and time the article was created in the database"
                                },
                                "updatedAt": {
                                    "type": "string",
                                    "format": "date-time",
                                    "description": "The date and time the article was last updated in the database"
                                },
                                "__v": {
                                    "type": "integer",
                                    "description": "The version number of the article"
                                }
                            }
                        },
                        "description": "An array of articles"
                    },
                    "message": {
                        "type": "string",
                        "description": "A message describing the status of the request"
                    },
                    "error": {
                        "type": "null",
                        "description": "The error object. Null if no error occurred."
                    }
                },
                "example": {
                    "success": true,
                    "data": [
                        {
                            "_id": "e222eda5d1073984f5b3a56d",
                            "user": "b156b60837341b294b4ffe8f",
                            "title": "Article 1",
                            "description": "This is article 1 of many.",
                            "date": "2023-03-02T09:34:53.929Z",
                            "createdAt": "2023-03-02T09:34:53.931Z",
                            "updatedAt": "2023-03-02T09:43:38.240Z",
                            "__v": 0
                        }
                    ],
                    "message": "Data fetched successfully",
                    "error": null
                }
            },
        },
    },
};