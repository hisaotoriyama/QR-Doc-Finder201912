// @file vuetodo.js <controllers>
// load ORM nmodule
let db = require('../models/index')

// REST controller definitions
module.exports = {
    index: (req, res) => {
        db.content.findAll({
            include: [{
                model: db.contentgroup
            },
            ]
            })            
        .then((d) => {
            let data = d.map((p) => {
                //ok
            console.log(JSON.stringify(d))
                  return {
                    id: p.id,
                    groupid:p.groupid,
                    groupName:p.contentgroup.name,
                    name: p.name,
                    storeditemid: p.storeditemid
                }
            })
            res.json(data)
    })
    },
    new: (req, res) => {
        res.send("new forum");
    },

    create: (req, res) => {
        console.log(req.body.newcontent)
        let data = {
            groupid:req.body.groupid,
            name: req.body.newcontent,
            // storeditemid: req.body.storeditemid
        }
        db.content.create(data).then((p) => {
            res.status(200).json({
                id: p.id,
                groupid:p.groupid,
                name: p.name,
                // storeditemid: p.storeditemid
            })
        })
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
