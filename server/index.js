require('dotenv').config();
const express = require('express'),
    // { PORT_NUM } = process.env,
    cors = require('cors'),
    app = express();
    
    const { contact } = require('./controller/mailCtrl')
    const PORT = process.env.PORT || 4545


//Middleware
app.use(cors())
app.use(express.json())

if(process.env.NODE_ENV === 'production'){
 app.use(express.static(__dirname + '../build'));

 const path = require('path'); // Usually moved to the start of file
    app.get('*', (req, res)=>{
    res.sendFile(path.join(__dirname, '../build/index.html'));
});
}


 app.get('/', (req, res) => {
    res.send('GET IT!');
 });

app.post('/api/email', contact)

app.listen(PORT, () => console.log(`Running wild on port ${PORT}`))


