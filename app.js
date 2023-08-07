require('dotenv').config();

const app = require('./src/config/server');
const port = process.env.PORT;

app.listen(port, (req, res)=>{
    console.log(`API listening on port ${port}`);
})


