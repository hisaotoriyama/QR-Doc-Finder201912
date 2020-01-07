// @file vuetodo.js <controllers>
// load ORM nmodule
let db = require('../models/index')

// REST controller definitions
module.exports = {
    index: (req, res) => {
        db.contentgroup.findAll(
            // { include: [db.user]}
            )            
        .then((d) => {
            let data = d.map((p) => {
                  return {
                    id: p.id,
                    name: p.name
                }
            })
            res.json(data)
            // console.log(data)
                    //ok
    })
    },
    new: (req, res) => {
        res.send("new forum");
    },

    create: (req, res) => {
        let data = {
            name: req.body.newcontentgroup
        }
        db.contentgroup.create(data).then((p) => {
            res.json({
                id: p.id,
                name: p.name
            })
        })
        // res.send(200)
    },

    show: (req, res) => {
        res.send("show forum " + req.params.forum);
    },
    edit: (req, res) => {
        res.send("edit forum " + req.params.forum);
    },
    
update: (req, res) => {
    db.contentgroup.update({
        name:req.body.name
    },{
      where:{
        id:req.params.id
      }
    }).then((p)=>{
      let data = p
      res.json(data)
    })
  },

    delete: (req, res) => {
        res.send("destroy forum " + req.params.forum);
    }
}
