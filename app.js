let express = require('express')
let Res = require('express-resource')
let cookieParser = require('cookie-parser')
// このNode.jsはLogin時でSession使っている。ただそれ以降のプログラムではCookiesを使って各種プログラミング作成している。
let session = require('express-session')
let login = require('./routes/login')
let controlplace = require('./routes/controlplace')
let logout = require('./routes/logout')
let bodyParser = require('body-parser');
let path = require('path');

// 重要
let app = express()

app.use(express.json())
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());
app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: false,
  cookie: {
    maxAge: 10 * 60 * 1000
  }
}));
app.use(cookieParser())

//resourceの場合必ず”s"を入れること。あくまでもAPI/通信内部の世界だからsを気にすることはない。
app.resource('storeditems', require('./controllers/storeditem'), { id: 'id' })
app.resource('users', require('./controllers/user'), { id: 'id' })
app.resource('places', require('./controllers/place'), { id: 'id' })
app.resource('contents', require('./controllers/content'), { id: 'id' })
app.resource('contentgroups', require('./controllers/contentgroup'), { id: 'id' })

//loginはresouce使ったCRUD不要。したがってroutesできる。
// app.resource('logins', require('./controllers/login'), { id: 'id' })

app.use('/login', login)
app.use('/logout', logout)
app.use('/controlplace', controlplace)

// これだとpublic / privateのだしわけができない
//app.use(express.static('public'));

// こちらを使う
let sessionCheck = (req, res, next) => {
  if(req.session.name !== undefined) {
      next();
  } else {
      res.redirect('/login.html')
  }
}
app.use('/', express.static(path.join( __dirname, '/public')));
app.use('/private', sessionCheck, express.static(path.join( __dirname, '/private' )) );

// start application
var https = require('https');
var fs = require('fs');
var ssl_server_key = 'server_key.pem';
var ssl_server_crt = 'server_crt.pem';
var port = 3001;

var options = {
  key: fs.readFileSync(ssl_server_key),
  cert: fs.readFileSync(ssl_server_crt)
};

let server = https.createServer(options, app)
//nodeのモジュールのhttpsのメソッド。

server.listen(port);