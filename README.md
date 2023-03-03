
# MERN Stack  App Backend

A simple Backend api created using Express to perform CRUD operations.


## API Reference

#### Register

```http
  POST /api/auth/register
```

#### Login

```http
  POST /api/auth/login
```

#### Fetch all articles

```http
  GET /api/articles
```

####  Add article
```http
  POST /api/articles/add
```

#### Edit a article
```http
  PUT /api/articles/edit/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of article to edit |

#### Delete a article
```http
  DELETE /api/articles/delete/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of article to delete |




## Dependencies

Dependencies used in the project

```
    "bcryptjs": "^2.4.3",
    "cors": "^2.8.5",
    "dotenv": "^16.0.3",
    "express": "^4.18.2",
    "express-validator": "^6.15.0",
    "jsonwebtoken": "^9.0.0",
    "mongoose": "^7.0.0"
```

Dev Dependencies used in the project

```
    "eslint": "^8.35.0",
    "jest": "^29.4.3",
    "nodemon": "^2.0.20",
    "supertest": "^6.3.3"
```
## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`NODE_ENV`

`MongoURL`

`PORT`

`JWT_SECRET`


## Run Locally

Clone the project

```bash
  git clone https://github.com/dshreejal/Intern-Project_1-NodeJS
```


Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run dev
```


## Authors

- [@dshreejal](https://www.github.com/dshreejal)

