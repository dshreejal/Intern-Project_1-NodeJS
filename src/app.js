const express = require("express");
const app = express();
const cors = require('cors');
const config = require("./config/config")
const connectToMongo = require("./config/db")

const port = config.dev.app.port;

connectToMongo();

app.use((cors()));
app.use(express.json());

app.use("/api/articles", require("./routes/articles"))
app.use("/api/auth", require("./routes/auth"))

app.listen(port, () => {
    console.log(`Backend server running at https://localhost:${port}`);
})
