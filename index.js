const express = require("express");
const axios = require("axios");

const app = express();
const PORT = 3000;

app.use(express.json());
app.listen(PORT,
    () => console.log(`It is listening on http://localhost:${PORT}`)
);

app.get('/', async (req, res) => {
    res.status(200).send("Welcome to Node Fake Store API project");
})

app.get('/fake-store', async (req, res) => {
    const response = await axios.get("https://fakestoreapi.com/products");
    res.status(200).send(response.data);
})