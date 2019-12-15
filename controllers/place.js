// @file vuetodo.js <controllers>
// load ORM nmodule
let db = require('../models/index')

// REST controller definitions
module.exports = {
    index: (req, res) => {
        db.place.findAll(
            // { include: [db.user]}
            )            
        .then((d) => {
            let data = d.map((p) => {
                  return {
                    id: p.id,
                    storageplace: p.name
                }
            })
            res.json(data)
    })
    },
    new: (req, res) => {
        res.send("new forum");
    },

    create: (req, res) => {
        let data = {
            name: req.body.storageplace
        }
        db.place.create(data).then((p) => {
            res.status(200).json({
                id: p.id,
                storageplace: p.name
            })
        })
///        res.send(200)
        // res.send(200)
    },

    show: (req, res) => {
        res.send("show forum " + req.params.forum);
    },
    edit: (req, res) => {
        res.send("edit forum " + req.params.forum);
    },
    update: (req, res) => {
        res.send("update forum " + req.params.forum);
    },
    delete: (req, res) => {
        res.send("destroy forum " + req.params.forum);
    }
}
