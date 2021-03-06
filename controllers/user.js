// @file vuetodo.js <controllers>
// load ORM nmodule
let db = require('../models/index')

// REST controller definitions
module.exports = {
  index: (req, res) => {
    db.user.findAll(
    )
      .then((d) => {
        let data = d.map((p) => {
          return {
            id: p.id,
            name: p.name,
            password: p.password,
            is_admin: p.is_admin
          }
        })
        res.json(data)
      })
  },

  show: (req, res) => {
    console.log(req.params)
    db.user.findAll({
      where: {
        id: Number(req.params.id)
      }
    })
      .then((d) => {
        let data = d.map((p) => {
          return {
            name: p.name
          }
        })
        res.json(data)
      })
  },

  create: (req, res) => {
    let data = {
      name: req.body.newname,
      password: req.body.newpassword,
      is_admin:req.body.isadminset
    }
    db.user.create(data).then((p) => {
      res.json({
        id: p.id,
        name: p.name,
        password: p.password,
        is_admin: p.is_admin
      })
    })
    // .then(console.log(p))
  },

  update: (req, res) => {
    db.user.update({
      name: req.body.name,
      password: req.body.password
    }, {
      where: {
        id: req.params.id
      }
    }).then((p) => {
      let data = p
      res.json(data)
    })
  }
}
