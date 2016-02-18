var bodyParser = require('body-parser');
var morgan = require('morgan');
var router = require('./router');

module.exports = function(app, express) {
  app.use(morgan('dev'));
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({extended: true}));
  app.use(express.static(__dirname + '/../client'));

  router(app);
};
