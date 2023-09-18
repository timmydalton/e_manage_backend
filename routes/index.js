var express = require('express');
var router = express.Router();

const user = require('../models/user')

/* GET home page. */
router.get('/login',  (req, res) => { 
  user.list().then(result => {
    console.log(result)
    return res.send(result)
  })
});

router.use(express.json)

module.exports = router;
