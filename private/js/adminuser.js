var app = new Vue({
  el: "#app",
  data: {
    newname: "",
    newpassword: "",
    modifiedid: "",
    modifiedname: "",
    modifiedpassword: "",
    users:""
  },


  methods: {
    userregister: function () {
      if (this.newname == "") return;
      const data = {
        "newname": this.newname,
        "newpassword": this.newpassword
      };
      const headers = {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      };
      const d = {
        headers: headers,
        method: "POST",
        body: JSON.stringify(data)
      };
      var self = this;
      fetch('/users', d)
        .then((e) => {
          e.json().then((j) => {
            self.qrcreation(j)
          })
        }).then((k) => {
          self.readall();
        })
        ;
      ;
      this.newname = "";
      this.newpassword = "";
    },

    usermodify: function () {
      const data = {
        "name": this.modifiedname,
        "password": this.modifiedpassword
      };
      const headers = {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      };
      const d = {
        headers: headers,
        method: "PUT",
        body: JSON.stringify(data)
      };
      var self = this;
      return fetch('/users/' + this.modifiedid, d)
        .then((e) => {
          console.log(e)
          e.json().then((j) => {
            self.readall();
            self.modifiedname = "";
            self.modifiedpassword = "";
            self.modifiedid = ""
          })
        })
    },

    readall: function () {
      const headers = {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      };
      const d = {
        headers: headers,
        method: "GET"
      };
      var self = this;
      fetch('/users', d).then((e) => {
        e.json().then((j) => {
          self.users = j;
        })
      })
    },
    movetouseradmin:function(){
      location.href = "./adminuser.html"
    },
    movetoplaceadmin:function(){
      location.href = "./adminplace.html"
    },
    movetocontentsgroupadmin:function(){
      location.href = "./admincontentgroup.html"
    },
    movetoqrcontent:function(){
      location.href = "./qrcreaterforcontent.html"
    },
    movetostoreditemread:function(){
      location.href = "./storeditemlist.html"
    },
    movetostoreditemcreate:function(){
      location.href = "./storeditemlist.html"
    },
    movetostoreditemupdate:function(){
      location.href = "./storeditemlist.html"
    },
    movetoprintqr:function(){
      location.href = "./printQR.html"
    },
    movetoqrreader: function () {
      location.href = "./qrreader.html"
  }

    // selectdocs: function () {
    //   const headers = {
    //     'Accept': 'application/json',
    //     'Content-Type': 'application/json'
    //   };
    //   const d = {
    //     headers: headers,
    //     method: "GET"
    //   };
    //   var self = this
    //   // console.log(this.selectedid);
    //   fetch('/addstoreditems/' + this.selectedid, d)
    //     .then((r) => {
    //       r.json().then((j) => {
    //         console.log(j);
    //         self.selectedoriginaluser = j.originaluser;
    //         self.selecteddocument = j.document;
    //         self.selectedstorageplace = j.storageplace;
    //         self.selectedlatestuser = j.latestuser
    //       })
    //     })
    // },


  }
})