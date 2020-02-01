var app = new Vue({
  el: "#app",
  data: {
    newstorageplace: "",
    places: ""
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
            location.href = "./printQR.html?dorp=p&id="+j.id+"&name="+j.name   
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
    movetostoreditem:function(){
      location.href = "./storeditemlist.html"
    },
    // movetostoreditemcreate:function(){
    //   location.href = "./storeditemlist.html"
    // },
    // movetostoreditemupdate:function(){
    //   location.href = "./storeditemlist.html"
    // },
    movetoprintqr:function(){
      location.href = "./printQR.html"
    }, 
    movetoqrreader: function () {
      location.href = "./qrreader.html"
  }

  }
})