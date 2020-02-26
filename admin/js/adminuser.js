var app = new Vue({
  el: "#app",
  data: {
    newname: "",
    newpassword: "",
    isadminset: "",
    modifiedid: "",
    modifiedname: "",
    modifiedpassword: "",
    users: "",
    deletedid:""
  },


  methods: {
    userregister: function () {
      alert("いくぜ登録")
      if (this.newname == "") return;
      const data = {
        "newname": this.newname,
        "newpassword": this.newpassword,
        "isadminset": this.isadminset
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
      alert("続いていくぜ登録")
      var self = this;
      fetch('/users', d)
        .then((e) => {
          e.json().then((j) => {
            console.log(j)
            self.readall();
          })
        })
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
      alert("読むぜ全て")
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
          console.log(j)
          self.users = j;
        })
      })
    },
    movetouseradmin: function () {
      if (Cookies.get('is_admin') === "true") {
        location.href = "/admin/adminuser.html"
      } else {
        alert("Admin not allowed")
      }
    },
    movetoplaceadmin: function () {
      if (Cookies.get('is_admin') === "true") {
        location.href = "/admin/adminplace.html"
      } else {
        alert("Admin not allowed")
      }
    },
    movetocontentsgroupadmin: function () {
      if (Cookies.get('is_admin') === "true") {
        location.href = "/admin/admincontentgroup.html"
      } else {
        alert("Admin not allowed")
      }
    },
    movetoqrcontent: function () {
      location.href = "/private/qrcreaterforcontent.html"
    },
    movetostoreditem: function () {
      location.href = "/private/storeditemlist.html"
    },
    // movetostoreditemcreate:function(){
    //   location.href = "./storeditemlist.html"
    // },
    // movetostoreditemupdate:function(){
    //   location.href = "./storeditemlist.html"
    // },
    movetoprintqr: function () {
      location.href = "/private/printQR.html"
    },
    movetoqrreader: function () {
      location.href = "/private/qrreader.html"
    },




    logout: function () {
      alert("logout Movement")
      location.href = "/logout"
    },

    userdelete: function () {
      alert("delete")
      location.href = "/logout"
    },

  }
})