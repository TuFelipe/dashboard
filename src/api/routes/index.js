var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  req.getConnection(function(err,connection){
          connection.query('SELECT * FROM pesquisa_treinamento',[],function(err,result){
              if(err) return res.status(400).json(err);

              return res.status(200).json(result);
          });
    });
  });

  module.exports = router;
