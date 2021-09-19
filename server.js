const express = require('express');
require('./database/connection');
const routes = require('./routes/user');
const app = express();

const PORT = 3332;

app.use(express.json());

app.use(routes);

app.listen(PORT, () => {
    console.log("Server running on port " + PORT + " 🚀 !");
});