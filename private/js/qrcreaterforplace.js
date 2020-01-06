var app = new Vue({
  el: "#app",
  data: {
    newstorageplace: "",
    places: ""
  },

  methods: {
    addplace: function () {
      // if (this.newName == "") return;
      const data = {
        "storageplace": this.newstorageplace
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
            location.href = "./printQR.html?dorp=p&id="+j.id
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
    movetouseradmin:function(){
      location.href = "./adminuser.html"
    },
    movetoplaceadmin:function(){
      location.href = "./qrcreaterforplace.html"
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
    }

  }
})