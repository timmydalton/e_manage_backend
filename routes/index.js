var express = require('express');
var router = express.Router();

const user = require('../models/user')

/* GET home page. */
router.get('/',  (req, res) => { 
  user.list().then(result => {
    console.log(result)
    res.send(result)
  })
});
module.exports = router;
