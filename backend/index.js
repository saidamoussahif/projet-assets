const express = require('express')
const bodyParser = require("body-parser");
const db = require('./db')
const cors = require('cors')
const port = process.env.PORT || 9000
const productRouter= require('./routes/productRouter');

db();
const app = express()

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));




app.use('/api/products',productRouter)


app.listen(port, ()=>{ 

    console.log(`server runing in ${port}`)

})

