// @file vuetodo.js <controllers>
// load ORM nmodule
let db = require('../models/index')

// REST controller definitions
module.exports = {
    index: (req, res) => {
        console.log("OKOOOOO")
        db.content.findAll({
            include: [{
                model: db.contentgroup
            },
            ]
        })
            .then((d) => {
                let data = d.map((p) => {
                    // console.log(JSON.stringify(d))
                    return {
                        id: p.id,
                        groupid: p.groupid,
                        groupName: p.contentgroup.name,
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
            groupid: Number(req.body.groupid),
            name: req.body.newcontent,
            // storeditemid: req.body.storeditemid
        }
        console.log(data);
        db.content.create(data)
            .then((p) => {
                res.status(200).json({
                    id: p.id,
                    groupid: p.groupid,
                    name: p.name,
                    // storeditemid: p.storeditemid
                })
            })
    },

    show: (req, res) => {        
        db.content.findAll({
            include: [
                {
                    model: db.contentgroup
                }],
            where:
            {
                id: Number(req.params.id)
            }
    })
        .then((d) => {
            let data = d.map((p) => {
                // console.log(JSON.stringify(d))
                return {
                    id: p.id,
                    groupid: p.groupid,
                    groupName: p.contentgroup.name,
                    name: p.name,
                    storeditemid: p.storeditemid
                }
            })
            res.json(data)
        })
    },

    edit: (req, res) => {
        res.send("edit forum " + req.params.forum);
    },
    update: (req, res) => {
        db.content.update({
            storeditemid:req.body.storeditemid
        }, {
            where:
            {
                id: Number(req.params.id)
            }
        })
            .then((d) => {
                let data = d.map((p) => {
                })
                res.json(data)
            })
    },

    destroy: (req, res) => {
        db.content.destroy({
            where: {
                id: Number(req.params.id)
            }
        }
        )
            .then(() => {
                res.send(200)
            })
    },
}
