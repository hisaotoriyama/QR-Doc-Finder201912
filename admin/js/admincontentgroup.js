var app = new Vue({
  el: "#app",
  data: {
    newcontentgroup: "",
    allcontentgroups: "",
    modifiedname: "",
    modifiedid: "",
    is_admin: true,
    deletedid:""
  },

  created: function () {
    return this.isadmincheck()
  },

  methods: {
    isadmincheck: function () {
      if (Cookies.get('is_admin') === "true") {
        this.is_admin = true
      } else {
        this.is_admin = false
      }


    },
    contentgroupregister: function () {
      // if (this.newName == "") return;
      const data = {
        "newcontentgroup": this.newcontentgroup
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
      fetch('/contentgroups', d)
        .then((e) => {
          e.json().then((j) => {
            console.log(j)
          })
        }).then((k) => {
          this.readall();
        })
        ;
      ;
      this.newcontentgroup = ""

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
      fetch('/contentgroups', d).then((e) => {
        e.json().then((j) => {
          console.log(j)
          self.allcontentgroups = j;
        })
      })
    },

    contentgroupmodify: function () {
      const data = {
        "name": this.modifiedname
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
      return fetch('/contentgroups/' + this.modifiedid, d)
        .then((e) => {
          console.log(JSON.stringify(e))
          e.json().then((j) => {
            self.readall();
            self.modifiedname = "";
            self.modifiedid = ""
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
    // movetostoreditemcreate: function () {
    //   location.href = "./storeditemlist.html"
    // },
    // movetostoreditemupdate: function () {
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

    contentgroupdelete: function () {
      const headers = {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      };
      const d = {
        headers: headers,
        method: "DELETE",
      };
      var self = this;
      return fetch('/contentgroups/' + this.deletedid, d)
        .then(() => {
            self.readall();
            self.deletedid = ""
          })
        
    },

  }
})