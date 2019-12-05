// @file product.js <controllers>
// REST controller definitions
module.exports = {
    index: (req, res) => {
        res.send("forum index");
    },
    new: (req, res) => {
        res.send("new forum");
    },
    create: (req, res) => {       
        db.user.findOne({
        where:{
            name: req.body.loginName
        }
    }).then((d)=> {
        console.log(d.password)
        console.log(d.id)
    if(req.body.loginPassword==d.password){
        req.session.name=req.body.loginName
        req.session.password= req.body.loginPassword
        req.session.id= d.id
        console.log(req.session.name)
        console.log(req.session.password)
        console.log(req.session.id)
        res.send(200)
    } else {
        // res.cookie('login',false)
        res.send(400)    
    }
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
 