const express = require('express');
const app = express();
const cors = require('cors');
const axios = require('axios');

app.use(express.json());
app.use(cors());

app.listen(8585, () => {
    console.log("Server running successfully");
});