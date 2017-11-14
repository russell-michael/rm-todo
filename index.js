var express = require('express');
var cors = require('cors');
var massive = require('massive');
var bodyParser = require('body-parser');

var app = express();

//rm-todo
massive('postgres://localhost:5432/rm-todo').then(function(database){
  console.log("Database worked");

  app.get('/get', function(req, res, next){
    database.get_tasks().then(function(response){
      res.send(response);
    })
  })

  // app.post('/post', function(req, res, next){
  //   database.add_tasks([]).then(function(response){
  //     res.send(response)
  //   })
  // })
})



var numbers = [1,5,9];

app.get('/getit', function(req, res, next){
  res.send(numbers);
})



app.use(express.static(__dirname + '/public'));

app.listen(3000, function(){
  console.log("listening on port 3000");
});

app.use(bodyParser.json());
app.use(cors());
