var app = new Vue({
  el: "#app",
  data: {
    newcontentgroup: "",
    allcontentgroups: "",
    modifiedname: "",
    modifiedid: ""
  },

  methods: {
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
      location.href = "./adminuser.html"
    },
    movetoplaceadmin: function () {
      location.href = "./adminplace.html"
    },
    movetocontentsgroupadmin: function () {
      location.href = "./admincontentgroup.html"
    },
    movetoqrcontent: function () {
      location.href = "./qrcreaterforcontent.html"
    },
    movetostoreditem: function () {
      location.href = "./storeditemlist.html"
    },
    // movetostoreditemcreate: function () {
    //   location.href = "./storeditemlist.html"
    // },
    // movetostoreditemupdate: function () {
    //   location.href = "./storeditemlist.html"
    // },
    movetoprintqr: function () {
      location.href = "./printQR.html"
    },
    movetoqrreader: function () {
      location.href = "./qrreader.html"
    }


  }
})