// @file vuetodo.js <controllers>
// load ORM nmodule
let db = require('../models/index')

// REST controller definitions
module.exports = {
    index: (req, res) => {






    },
    new: (req, res) => {
        res.send("new forum");
    },

    create: (req, res) => {
        let data = {
            storageplace: Number(req.body.storageplace)
        }
        db.place.create(data).then((p) => {
            res.status(200).json({
                id: p.id,
                storageplace: p.storageplace
            })
        })
///        res.send(200)
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
