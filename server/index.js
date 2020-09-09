require('dotenv').config();
const express = require('express'),
    // { PORT_NUM } = process.env,
    cors = require('cors'),
    app = express();

    const PORT = process.env.PORT || 4545

    const { contact } = require('./controller/mailCtrl')

//Middleware
app.use(cors())
app.use(express.json())


 app.use(express.static(__dirname + '/public'));

 app.get('/', (req, res) => {
    res.send('GET IT!');
 });

app.post('/api/email', contact)

app.listen(PORT, () => console.log(`Running wild on port ${PORT}`))


