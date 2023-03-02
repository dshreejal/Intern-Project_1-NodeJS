const express = require("express");
const app = express();
const cors = require('cors');

const connectToMongo = require("./config/db")
const port = process.env.PORT || 3100;

connectToMongo();

app.use((cors()));
app.use(express.json());

app.use("/api/articles", require("./routes/articles"))

app.listen(port, () => {
    console.log(`Backend server running at https://localhost:${port}`);
})
