//counter code
var button = document.getElementById('counter');
var counter = 0;
button.onclick = function () {
  //create a request to the counter endpoint
  var request = new XMLHttpRequest();
  //capture the response and store it in a variable
  request.onreadystatechange = function () {
      if (request.readystate === XMLHttpRequest.DONE) {
          if (request.status === 200) 
          {
              var counter = request.responseText;
              var span = document.getElementById('count');
               span.innerHTML = counter.toString();
          }
      }
  };
  
//make the request
 request.open ('GET', 'http://saurabhgangwarcse3.imad.hasura-app.io/counter', true);
 request.send(null);
  
};