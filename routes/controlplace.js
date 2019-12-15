//loginはresourceを使わない。CRUD全ての昨日は不要であるし、単にsessionのためのPOSTするだけであるから。

let express = require('express')
let router = express.Router()
let db = require('../models/index')

router.get('/',(req, res) => {
    // write some action
    res.send(200)
})
module.exports = router;
