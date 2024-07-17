const express = require('express');
const app = express();
app.use(express.json());

require("dotenv").config();
const PORT = process.env.PORT || 8000;

const todos = require('./Routes/ToDos')

app.use(todos);

app.listen(PORT, ()=>{
    console.log('server is running on port ${PORT}');
});