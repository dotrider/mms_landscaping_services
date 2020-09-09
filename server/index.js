require('dotenv').config();
const express = require('express'),
    path = require('path'), 
    cors = require('cors'),
    app = express(),
    { contact } = require('./controller/mailCtrl'),
    PORT = process.env.PORT || 4545

//Middleware
app.use(cors())
app.use(express.json())

if(process.env.NODE_ENV === 'production'){
    // app.use(express.static(__dirname + '../build'));
    // app.use('/static', express.static(path.join(__dirname, '../build')));
    // app.use(express.static(path.join(__dirname, '/..build')));

    app.get('*', (req, res)=>{
    res.sendFile(path.join(__dirname, '../build/index.html'));
});
}


 app.get('/', (req, res) => {
    res.send('GET IT!');
 });

app.post('/api/email', contact)

app.listen(PORT, () => console.log(`Running wild on port ${PORT}`))


