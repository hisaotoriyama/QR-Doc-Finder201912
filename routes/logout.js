let express = require('express')
let router = express.Router()
let db = require('../models/index')


router.get('/', (req,res)=>{
    console.log("session 完了")
    req.session.destroy();
    res.redirect("../public/login.html")
})
  
module.exports = router;
