var express = require('express');
var app = express();
var cors = require('cors');

var bodyParser = require('body-parser');

const port = 5000;

app.use(cors());
app.options('*', cors());

app.use(express.static(__dirname+"/dist"));
app.use(bodyParser.json()); // get information from html forms
app.use(bodyParser.urlencoded({ extended: true }));

app.listen(port, function(){
	console.log(`Node is running at localhost:${port}`);
});

const users = [
    {name: 'admin', password: 'admin', role:'admin'},
    {name: 'user', password: 'user', role:'user'}
];

app.get("/users", (req, res)=>{
    res.json({success: true, data: users});
})
app.get("/users/:name", (req, res)=>{
    let name = req.params.name;
    let data = users.filter(u=>u.name===name);
    res.json({success: true, data: data[0]});
})
app.post("/users", (req, res)=>{
    let user = req.body;
    if(!user.role || user.role !== 'admin'){
        user.role = 'user';
    }
    users.push(user);
    res.status(201).json();
})
app.delete("/users/:id", (req, res)=>{
    users.splice(req.params.id, 1);
    res.status(201).json();
})
app.put("/users/:id", (req, res)=>{
    users[req.params.id] = req.body;
    res.status(201).json();
})

