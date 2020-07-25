require('dotenv').config();
const express = require('express'),
    { PORT_NUM } = process.env,
    app = express();

    const { contact } = require('./controller/mailCtrl')

//Middleware
app.use(express.json())


app.post('/api/email', contact)

app.listen(PORT_NUM, () => console.log(`Running wild on port ${PORT_NUM}`))
