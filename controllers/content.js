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
            // {
            //     model: db.storeditem
            // }
            ]
            })            
        .then((d) => {
            let data = d.map((p) => {
                // oK

            console.log(JSON.stringify(d))
                  return {
                    id: p.id,
                    groupid:p.contentgroup.id,
                    groupName:p.contentgroup.name,
                    content: p.name,
                    // storeditemid: p.storeditem.id
                }
            })
            res.json(data)
    })
    },
    new: (req, res) => {
        res.send("new forum");
    },

    create: (req, res) => {
        console.log(req.body.content)
        let data = {
            group:req.body.group,
            name: req.body.content,
            storeditemid: req.body.storeditemid
        }
        db.content.create(data).then((p) => {
            res.json({
                id: p.id,
                group:p.group,
                content: p.name,
                storeditemid: p.storeditemid
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
        res.send("update forum " + req.params.forum);
    },
    delete: (req, res) => {
        res.send("destroy forum " + req.params.forum);
    }
}
