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
            password: p.password
          }
        })
        res.json(data)
      })
  },

  show: (req, res) => {
    // console.log("Show TIME")
    console.log(req.params)
    db.user.findAll({
      where: {
        id: req.params.id
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
      password: req.body.newpassword
    }
    db.user.create(data).then((p) => {
      res.json({
        id: p.id,
        name: p.name,
        password: p.password
      })
    })
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
