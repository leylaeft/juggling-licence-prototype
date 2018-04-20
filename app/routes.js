var express = require('express')
var router = express.Router()

// Route index page
router.get('/', function (req, res) {
  res.render('index')
})

// add your routes here
router.post('/juggling-balls-answer',function(req, res){
  var jugglingBalls = req.session.data['juggling-balls']

  if (jugglingBalls == "3 or more"){
    res.redirect('/juggling-trick')
  } else if (jugglingBalls =="1 or 2"){
    res.redirect('/ineligible')
  }
})

// add your routes here
router.post('/Do-you-know-juggling',function(req, res){
  var jugglingBalls1 = req.session.data['juggling-balls1']

  if (jugglingBalls1 == "yes"){
    res.redirect('/juggling-balls')
  } else {
    res.redirect('/ineligible')
  }
})

module.exports = router
