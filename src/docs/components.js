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
            AddArticle: {
                type: 'object',
                properties: {
                    title: {
                        type: 'string',
                        description: "Article's title",
                    },
                    description: {
                        type: "string",
                        description: "Description about the article",
                    }
                },
                "example": {
                    "title": "",
                    "description": "",
                }
            },
            ArticleOutput: {
                type: 'object',
                properties: {
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
                                    "description": "The title of the article created"
                                },
                                "description": {
                                    "type": "string",
                                    "description": "The description of the article created"
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
                        "description": "Created new article"
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
                            "_id": "25f1cbd56681ef16a4bffa24",
                            "user": "171469142f565dcf8cef7873",
                            "title": "Article added using Swagger",
                            "description": "This is an article added using swagger ui.",
                            "date": "2023-03-02T09:34:53.929Z",
                            "createdAt": "2023-03-02T09:34:53.931Z",
                            "updatedAt": "2023-03-02T09:43:38.240Z",
                            "__v": 0
                        }
                    ],
                    "message": "Article Created successfully",
                    "error": null
                }
            },
            ArticleCreateError: {
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
                    "success": false,
                    "data": null,
                    "message": "Some fields not filled properly",
                    "error": [
                        {
                            "msg": "Enter a valid title",
                            "param": "title",
                            "location": "body"
                        },
                        {
                            "msg": "Description must be atleast 5 characters",
                            "param": "description",
                            "location": "body"
                        }
                    ]
                }
            },
            ArticleDeleteSuccess: {
                "type": "object",
                "properties": {
                    "success": {
                        "type": "boolean",
                        "description": "Indicates whether the request was successful or not"
                    },
                    "data": {
                        "type": "null",
                        "description": "Null as no data is returned"
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
                    "data": null,
                    "message": "Article Deleted Successfully",
                    "error": null,
                }
            },
            EditArticle: {
                type: 'object',
                properties: {
                    title: {
                        type: 'string',
                        description: "Article's title to be edited",
                    },
                    description: {
                        type: "string",
                        description: "Description about the article to be edited",
                    }
                },
                "example": {
                    "title": "New Title to be edited",
                    "description": "New description to be edited",
                }
            },
            ArticleEditSuccess: {
                type: 'object',
                properties: {
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
                                    "description": "The title of the edited article"
                                },
                                "description": {
                                    "type": "string",
                                    "description": "The description of the edited article"
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
                        "description": "Article edited message "
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
                            "_id": "25f1cbd56681ef16a4bffa24",
                            "user": "171469142f565dcf8cef7873",
                            "title": "Article edited using Swagger",
                            "description": "This is an article edited using swagger ui.",
                            "date": "2023-03-02T09:34:53.929Z",
                            "createdAt": "2023-03-02T09:34:53.931Z",
                            "updatedAt": "2023-03-02T09:43:38.240Z",
                            "__v": 0
                        }
                    ],
                    "message": "Article Edited successfully",
                    "error": null
                }
            },
            LoginUser: {
                type: 'object',
                properties: {
                    email: {
                        type: 'string',
                        description: "User's email",
                    },
                    password: {
                        type: "string",
                        description: "User's password",
                    }
                },
                "example": {
                    "email": "johndoe@gmail.com",
                    "password": "JohnDoe",
                }
            },
            LoginResponse: {
                "type": "object",
                "properties": {
                    "success": {
                        "type": "boolean",
                        "description": "Indicates whether the request was successful or not"
                    },
                    "data": {
                        "type": "string",
                        "description": "Authentication token of the user"
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
                    "data": "eyJhbGriOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyZ1c2VyIjp7ImlkIjoiNjQwMWI3NWI0MWJjMjU1NDYzNTRjMmU4In0sImlhdCI6MTY3ODEwNzg3M30.vHgs0tVyrgmtQpdT_1o8s_twYmBSZqqQtAkdEE2Rk08",
                    "message": "Logged In Successfully",
                    "error": null,
                }
            },
            LoginUserError: {
                "type": "object",
                "properties": {
                    "success": {
                        "type": "boolean",
                        "description": "Indicates whether the request was successful or not"
                    },
                    "data": {
                        "type": "null",
                        "description": "Null. No data provided"
                    },
                    "message": {
                        "type": "string",
                        "description": "A message describing the status of the request"
                    },
                    "error": {
                        "type": "array",
                        "description": "The error object. Null if no error occurred."
                    }
                },
                "example": {
                    "success": false,
                    "data": null,
                    "message": "Some fields not filled properly",
                    "error": [
                        {
                            "value": "",
                            "msg": "Enter a valid email",
                            "param": "email",
                            "location": "body"
                        },
                        {
                            "value": "",
                            "msg": "Password cannot be blank",
                            "param": "password",
                            "location": "body"
                        }
                    ]
                }
            },
            RegisterUser: {
                type: 'object',
                properties: {
                    fname: {
                        type: 'string',
                        description: "User's First name",
                    },
                    lname: {
                        type: 'string',
                        description: "User's last name",
                    },
                    email: {
                        type: 'string',
                        description: "User's email",
                    },
                    password: {
                        type: "string",
                        description: "User's password",
                    }
                },
                "example": {
                    "fname": "John",
                    "lname": "Doe",
                    "email": "johndoe@gmail.com",
                    "password": "JohnDoe",
                }
            },
            RegisterResponse: {
                "type": "object",
                "properties": {
                    "success": {
                        "type": "boolean",
                        "description": "Indicates whether the request was successful or not"
                    },
                    "data": {
                        "type": "string",
                        "description": "Authentication token of the user"
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
                    "data": "eyJhbGriOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyZ1c2VyIjp7ImlkIjoiNjQwMWI3NWI0MWJjMjU1NDYzNTRjMmU4In0sImlhdCI6MTY3ODEwNzg3M30.vHgs0tVyrgmtQpdT_1o8s_twYmBSZqqQtAkdEE2Rk08",
                    "message": "User Created Successfully",
                    "error": null,
                }
            },
            RegisterUserError: {
                "type": "object",
                "properties": {
                    "success": {
                        "type": "boolean",
                        "description": "Indicates whether the request was successful or not"
                    },
                    "data": {
                        "type": "null",
                        "description": "Null. No data provided"
                    },
                    "message": {
                        "type": "string",
                        "description": "A message describing the status of the request"
                    },
                    "error": {
                        "type": "array",
                        "description": "The error object. Null if no error occurred."
                    }
                },
                "example": {
                    "success": false,
                    "data": null,
                    "message": "Some fields not filled properly",
                    "error": [
                        {
                            "msg": "Enter a valid first name",
                            "param": "fname",
                            "location": "body"
                        },
                        {
                            "msg": "Enter a valid last name",
                            "param": "lname",
                            "location": "body"
                        },
                        {
                            "msg": "Enter a valid email",
                            "param": "email",
                            "location": "body"
                        },
                        {
                            "msg": "Password must be atleast 5 characters",
                            "param": "password",
                            "location": "body"
                        }
                    ]
                }
            },
        },
    },
};