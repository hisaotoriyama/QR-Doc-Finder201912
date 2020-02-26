var app = new Vue({
  el: "#app",
  data: {
    newstorageplace: "",
    places: "",
    modifiedid: "",
    modifiedname: "",
    deletedid:""
  },

  methods: {
    placeregister: function () {
      // if (this.newName == "") return;
      const data = {
        "newstorageplace": this.newstorageplace
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
      fetch('/places', d)
        .then((e) => {
          e.json().then((j) => {
            location.href = "./printQR.html?dorp=p&id=" + j.id + "&name=" + j.name
          })
        }).then((k) => {
          self.readall();
        })
        ;
      ;
      this.newstorageplace = ""
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
      fetch('/places', d)
        .then((e) => {
          e.json().then((j) => {
            self.places = j;
          })
        })
    },

    placemodify: function () {
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
      return fetch('/places/' + this.modifiedid, d)
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
    placedelete: function () {
      alert("delete")
      location.href = "/logout"
    },




  }
})