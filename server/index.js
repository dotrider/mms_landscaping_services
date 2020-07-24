require('dotenv').config();
const express = require('express'),
    app = express(),
    { PORT_NUM } = process.env;

//Middleware
app.use(express.json())


app.listen(PORT_NUM, () => console.log(`Running wild on port ${PORT_NUM}`))
