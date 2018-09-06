const express       = require ('express');
const hbs           = require ('express-handlebars');
const bodyParser    = require ('body-parser');
const path          = require ('path');

var teamJSON = require('./team.json');
var leboJSON = require('./data/lebo.json');
var eltonJSON = require('./data/elton.json');
var motsosiJSON = require('./data/motsosi.json');
var sehumeJSON = require('./data/sehume.json');
var lintleJSON = require('./data/lintle.json');
var servicesJSON = require('./data/services.json');
var clientsJSON = require('./data/clients.json');

const app = express()
app.use(express.static(path.join(__dirname, "assets")));

app.engine('hbs', hbs({
  extname: 'hbs',
  defaultLayout:  'main',
  layoutsDir: __dirname + '/views/layouts',
  partialsDir:  __dirname + '/views/partials'
}));

app.set('view engine', 'hbs');

app.get('/', function (req, res){
  var team = teamJSON.team;
  res.render('home', {home:true, page:'home', team:team});
});


app.get('/lintle', function (req, res){
   var lintle = lintleJSON.lintle;
  res.render('lintle', {page:'lintle', lintle:lintle});
});

app.get('/elton', function (req, res){
  var elton = eltonJSON.elton;
 res.render('elton', {page:'elton', elton:elton});
});

app.get('/lebogang', function (req, res){
  var lebo = leboJSON.lebo;
 res.render('lebogang', {page:'lebogang',lebo:lebo});
});

app.get('/motsosi', function (req, res){
  var motsosi = motsosiJSON.motsosi;
 res.render('motsosi', {page:'motsosi', motsosi:motsosi});
});

app.get('/sehume', function (req, res){
  var sehume = sehumeJSON.sehume;
 res.render('sehume', {page:'sehume', sehume:sehume});
});

app.get('/services', function (req, res){
  var services = servicesJSON.services;
  res.render('services', {page:'services', services:true, services:services})
});

app.get('/about', function (req, res) {
  var lintle = lintleJSON.lintle;
  var lebo = leboJSON.lebo;
  var elton = eltonJSON.elton;
  var sehume = sehumeJSON.sehume;
  var motsosi = motsosiJSON.motsosi;
  res.render('about', {page:'about', about:true, lintle:lintle, elton:elton, lebo:lebo, sehume:sehume, motsosi:motsosi})
});

app.get('/resources', function (req, res) {
  var clients = clientsJSON.clients;
  res.render('resources', {page:'resources', resources:true, clients:clients})
});
app.get('/contact', (req, res) => res.render('contact', {page:'contact', contact:true}))

app.listen(process.env.PORT || 3000);