// @file vuetodo.js <controllers>
// load ORM nmodule
let db = require('../models/index')

// REST controller definitions
module.exports = {
    index: (req, res) => {
        db.storeditem.findAll({
            include: [
                {
                    model: db.user,
                    as: "Original"
                },
                {
                    model: db.user,
                    as: "Latest"
                },
                {
                    model: db.place
                },
                {
                    model: db.content,
                    include: [
                        {
                            model: db.contentgroup
                        }
                    ]
                }
            ]
        }).then((d) => {
            console.log(JSON.stringify(d))
            let data = d.map((p) => {
                return {
                    id: p.id,
                    docgroup: p.content.groupid,
                    docgroupName: p.content.contentgroup.name,
                    document: p.document,
                    documentName: p.content.name,
                    storageplace: p.storageplace,
                    storageplaceName: p.place.name,
                    originaluser: p.Original.id,
                    originaluserName: p.Original.name,
                    latestuser: p.Latest.id,
                    latestuserName: p.Latest.name
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
            document:Number(req.body.document),
            storageplace: Number(req.body.storageplace),
            originaluser:Number(req.body.originaluser),
            latestuser:Number(req.body.latestuser)
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
            storageplace: req.body.storageplace,
            latestuser: req.body.latestuser
        }, {
            where: {
                document: req.params.id
            }
        }).then((p) => {
            let data = p
            res.json(data)
        })
    },

    delete: (req, res) => {
        res.send("destroy forum " + req.params.forum);
    }
}
