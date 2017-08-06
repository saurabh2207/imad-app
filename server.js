var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articleOne={
    title:`Article one`,
    heading:`Article 1`,
    date:`5 August,2017`,
    content:`<p>this is the web page for article 1 , aaaaaaaaaaaaaaaaaaa aaaaaaaaaaaaaaaaaaaaaaaaaaaaaa aaaaaaaaaaaaaaaaaaaaaaaaaa aaaaaaaaaaaaaaaaaaaaaaa aaaaaaaa</p>
             <br>
             <p>this the first article webpage</p>`
};
function createTemplate(data){
    var title=data.title;
    var date=data.date;
    var heading=data.heading;
    var content=data.content;
var htmlTemplate =`<html>
 <head>
   <title>
     ${title}
   </title>
        <meta name="viewport" content="width-device-width , initial-scale=1"/>
        <link href="ui/style.css" rel="stylesheet">
 </head>

<body>
  <div class="container">
        <a href="ui/index.html">HOME</a>
         <hr>
          <div>
            <h3>${date}<h3>
          </div>
        <div>
           <h1>${heading}</h1>
        </div>
    <div>
      ${content}
    </div>
  </div>
</body>
</html>`;
return htmlTemplate;
}
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});

app.get('/article-one', function(req, res){
    res.send(path.join(createTemplate(articleOne)));
});

app.get('/article-three', function(req, res){
    res.send('article three is requested');
});

app.get('/article-two', function(req, res){
    res.send('article two is requested');
});
// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
