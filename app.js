var express = require('express');
var app = express();

app.get("/", function(request, response){
  response.send("Welcome to calculator")
});

app.get("/:calc/:num1/:num2", function(request, response){
  var operator = request.params.calc;
  var a = request.params.num1;
  var b = request.params.num2;
  var answer;
  switch (operator) {
  case 'add':
    var maths = function(a, b) {
      var number = +a + +b
      answer = number.toString()
    }
    maths(a, b);
    break;
  case 'sub':
    var maths = function(a, b) {
      var number = +a - +b
      answer = number.toString()
    }
    maths(a, b);
    break;
  case 'mul':
    var maths = function(a, b) {
      var number = +a * +b
      answer = number.toString()
    }
    maths(a, b);
    break;
  case 'div':
    var maths = function(a, b) {
      var number = +a / +b
      answer = number.toString()
    }
    maths(a, b);
    break;
  }
  response.send(answer);

})

// app.get("/add/:num1/:num2", function(request, response){
//   var maths = function(a, b){
//     var number = +a + +b
//     return number.toString()
//   }
//   response.send(maths(request.params.num1, request.params.num2))
// })
// app.get("/sub/:num1/:num2", function(request, response){
//   var maths = function(a, b){
//     var number = +a - +b
//     return number.toString()
//   }
//   response.send(maths(request.params.num1, request.params.num2))
// })
// app.get("/mul/:num1/:num2", function(request, response){
//   var maths = function(a, b){
//     var number = +a * +b
//     return number.toString()
//   }
//   response.send(maths(request.params.num1, request.params.num2))
// })
// app.get("/div/:num1/:num2", function(request, response){
//   var maths = function(a, b){
//     var number = +a / +b
//     return number.toString()
//   }
//   response.send(maths(request.params.num1, request.params.num2))
// })

app.listen(5000, function(){
  console.log("Listening on port 5000")
});
