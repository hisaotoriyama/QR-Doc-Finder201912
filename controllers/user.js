let db = require('../models/index')

module.exports = {

create: (req, res) => {
    let data = {
      name:req.body.newname,
      password:req.body.newpassword
    }
    db.user.create(data).then((p)=>{
      res.json({
          id: p.id,
          name: p.name,
          password: p.password
        })
    })
},
}