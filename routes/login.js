//loginはresourceを使わない。CRUD全ての昨日は不要であるし、単にsessionのためのPOSTするだけであるから。

let express = require('express')
let router = express.Router()
let db = require('../models/index')

router.post('/',(req, res) => {
    db.user.findOne({
        where:{
            name: req.body.loginName
        }
    }).then((d)=> {
        // passwordがなぜだか登録されていない！→modelsの修正もれがあった。修正したら
        console.log(d.password)
        console.log(d.id)
    if(req.body.loginPassword==d.password){
        req.session.name=req.body.loginName
        req.session.password= req.body.loginPassword
        req.session.user_id = d.id
            console.log(req.session.name)
            // console.log(req.session.password)
            // console.log(req.session.user_id)
        // Cookies.set('login',true,{expires:0.5})
        // Cookies.set('name',req.body.loginName,{expires:0.5})
        // Cookies.set('user_id', d.id,{expires:0.5})
        res.json({id:d.id,name:req.body.loginName,password:d.password})
//        res.send(200)
    } else {
        // Cookies.set('login',false)
        res.send(200)    
    }
    })
})
module.exports = router;
