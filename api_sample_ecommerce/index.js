var express = require('express');
var cors = require('cors');
var bodyParser = require('body-parser');
var MongoClient = require('mongodb').MongoClient;

var url = 'mongodb://Baron197:Baron197@ds119503.mlab.com:19503/ecommercesample';

var app = express();
var port = 1997;

app.use(cors());
app.use(bodyParser.json());

app.get('/', (req,res) => {
    res.send('<h1>API Active!</h1>')
});

app.post('/register', (req,res) => {
    var { username, email, password } = req.body;

    MongoClient.connect(url, (err,db) => {
        userCol = db.collection('users');
        userCol.find({ $or: [{username},{email}]}).toArray((err1, docs) => {
            if(err1) console.log(err1)

            if(docs.length > 0){
                db.close();
                res.send({ err: 'Username or Email already exist!'})
            }
            else {
                userCol.insertMany([{ username, email, password}], (err2, result) => {
                    db.close();
                    console.log(result);
                    res.send({ err: '', userdata: result.ops[0] });
                })
            }
        })
    })
})

app.listen(port, () => console.log(`API Active on localhost:${port}!`));