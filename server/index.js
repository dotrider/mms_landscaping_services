require('dotenv').config();
const express = require('express'),
    { PORT_NUM } = process.env,
    app = express();

    const { email } = require('./controller/mailCtrl')

//Middleware
app.use(express.json())


app.post('/api/email', email)

app.listen(PORT_NUM, () => console.log(`Running wild on port ${PORT_NUM}`))
