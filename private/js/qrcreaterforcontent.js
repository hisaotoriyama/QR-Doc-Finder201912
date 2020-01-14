var app = new Vue({
  el: "#app",
  data: {
    newcontent: "",
    selectedId:"",
    allcontents: "",
    allcontentgroups: "",
    eachontentgroup: {
      id: "",
      name: ""
    },
    newstoreditemid: "",
  },

  methods: {
    addcontent: function () {
      // ok
      // if (this.newName == "") return;
      const data = {
        "groupid": this.selectedId,
        "newcontent": this.newcontent,
        // "storeditemid": this.newstoreditemid
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
      console.log(data)
      var self = this;
      fetch('/contents', d)
        .then((e) => {
          e.json().then((j) => {
            location.href = "./printQR.html?dorp=d&id=" + j.id + "&name=" + j.name
          })
        }).then((k) => {
          this.readall();
        })
        ;
      ;
      this.newcontent = ""

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
      fetch('/contents', d)
        .then((e) => {
          e.json().then((j) => {
            self.allcontents = j;
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
    movetostoreditemread: function () {
      location.href = "./storeditemlist.html"
    },
    movetostoreditemcreate: function () {
      location.href = "./storeditemlist.html"
    },
    movetostoreditemupdate: function () {
      location.href = "./storeditemlist.html"
    },
    movetoprintqr: function () {
      location.href = "./printQR.html"
    },
     movetoqrreader: function () {
      location.href = "./qrreader.html"
  }
  },

  created: function () {
    const headers = {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    };
    const d = {
      headers: headers,
      method: "GET"
    };
    var self = this;
    fetch('/contentgroups', d)
      .then((e) => {
        e.json().then((j) => {
          console.log(j);
          self.allcontentgroups = j;
        })
      })
  },

})