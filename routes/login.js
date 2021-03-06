//loginはresourceを使わない。CRUD全ての昨日は不要であるし、単にsessionのためのPOSTするだけであるから。

let express = require('express')
let router = express.Router()
let db = require('../models/index')

router.post('/', (req, res) => {
    db.user.findOne({
        where: {
            name: req.body.loginName
        }
    }).then((d) => {
        // passwordがなぜだか登録されていない！→modelsの修正もれがあった。
        if (req.body.loginPassword == d.password) {
            req.session.name = req.body.loginName
            req.session.password = req.body.loginPassword
            req.session.user_id = d.id
            req.session.admin = d.is_admin
            res.json({ id: d.id, name: req.body.loginName, password: d.password,is_admin: d.is_admin })

        } else {
            res.send(200)
        }
    })
})
module.exports = router;
