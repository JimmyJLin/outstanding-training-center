const express = require('express');
const logger = require('morgan');
const path = require('path');
const bodyParser = require('body-parser');
const engine = require('ejs-mate');

/* app setting */
const port = process.env.PORT || 3000;
const app = express();
const server = app.listen(port);


/* express server setting  */
app.use(logger('dev'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.set('views', './views');
app.engine('ejs', engine);
app.set('view engine', 'ejs');

/* routes */
const mainRoutes = require('./routes/main');

app.use('/', mainRoutes);

app.get('/about_us', (req, res) => {
  res.render('pages/about');
});

app.get('/contact', (req, res) => {
  res.render('pages/contact');
});

app.get('/faq', (req, res) => {
  res.render('pages/faq');
});

app.get('/pricing', (req, res) => {
  res.render('pages/pricing');
});

app.get('/seminars', (req, res) => {
  res.render('pages/seminars');
});

app.get('/price_list', (req, res) => {
  res.render('pages/price_list');
});

app.get('/*', (req, res) => {
  res.render('pages/404');
})
