const express  = require('express')
    , app      = express()
    , mongoose = require('mongoose')
    , db       = mongoose.connection
    , Book     = require('./models/book')
  , path     = require('path')
  , exphbs   = require('express-handlebars')
  , bodyParser = require('body-parser')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
const router   = require('./router')(app, Book)
    , session   = require('express-session')
    , port     = process.env.PORT || 3000
  , views    = __dirname + '/views'
  , server   = app.listen(port, function(){console.log("Express server has started on port " + port)})

  db.on('error', console.error)
  db.once('open', ()=>{console.log("Connected to mongod server")})
  mongoose.connect('mongodb://localhost/mongodb_tutorial')
  app.engine('.hbs', exphbs({
     defaultLayout:'main'
    ,extname:'.hbs'
    ,layoutsDir:views + '/layouts/'
    ,partialsDir: views + '/partials/'
  }))
  app.set('view engine','.hbs')
  app.use(express.static(path.join(__dirname, 'public')))

  app.use(session({
     secret:'@#@$MYSIGN#@$#$'
    ,resave: false
    ,saveUninitialized:true
  }))

