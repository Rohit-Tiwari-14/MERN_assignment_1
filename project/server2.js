//url encoded

const express = require('express');
const path = require('path');
const app = express();

app.use(express.urlencoded({extended: true}));

app.get('/form', (req, res) => {
    res.sendFile(path.join(__dirname, "views","form.html"));
});

app.post("/data", (req, res) => {
    const data = req.body;
    console.log(data);
    res.json(data);
});

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});