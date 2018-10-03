var express = require('express');
var cors = require('cors');
var bodyParser = require('body-parser');
var MongoClient = require('mongodb').MongoClient;
var Crypto = require("crypto");

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
                var hashPassword = Crypto.createHmac("sha256", "abc123").update(password).digest("hex");

                userCol.insertMany([{ username, email, password: hashPassword}], (err2, result) => {
                    db.close();
                    res.send({ err: '', userdata: result.ops[0] });
                })
            }
        })
    })
})

app.post('/login', (req,res) => {
    var { email, password } = req.body;
    var hashPassword = Crypto.createHmac("sha256", "abc123").update(password).digest("hex");

    MongoClient.connect(url, (err,db) => {
        userCol = db.collection('users');
        userCol.find({ $and: [{email},{password:hashPassword}]}).toArray((err1, docs) => {
            if(err1) console.log(err1)
            
            res.send(docs)
        })
    })
})

app.post('/keeplogin', (req,res) => {
    var { email } = req.body;

    MongoClient.connect(url, (err,db) => {
        userCol = db.collection('users');
        userCol.find({email}).toArray((err1, docs) => {
            if(err1) console.log(err1)
            
            res.send(docs)
        })
    })
})

app.listen(port, () => console.log(`API Active on localhost:${port}!`));