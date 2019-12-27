// @file vuetodo.js <controllers>
// load ORM nmodule
let db = require('../models/index')

// REST controller definitions
module.exports = {
    index: (req, res) => {
        db.storeditem.findAll({
            include: [{
                model: db.user
            },
            {
                model: db.place
            },
            {
                model: db.content
            }
        ]
        }).then((d) => {
            console.log(JSON.stringify(d))
                let data = d.map((p) => {
                    return {
                        id: p.id,
                        document: p.document,
                        storageplace: p.storageplace,
                        originaluser: p.originaluser,
                        // originaluserName: p.originaluser,
                        latestuser: p.latestuser
                        // latestuserName: p.latestuser
                    }
                })
                // res.json(data)
            })
    },

    new: (req, res) => {
        res.send("new forum");
    },

    create: (req, res) => {
        let data = {
            storageplace: Number(req.body.storageplace)
        }
        db.storeditem.create(data).then((p) => {
            res.json({
                id: p.id,
                storageplace: p.storageplace
            })
        })
        res.send(200)
    },

    show: (req, res) => {
        res.send("show forum " + req.params.forum);
    },
    edit: (req, res) => {
        res.send("edit forum " + req.params.forum);
    },

    update: (req, res) => {
        db.storeditem.update({
            storageplace:req.body.storageplace,
            latestuser:req.body.latestuser
        },{
          where:{
            document:req.params.id
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
