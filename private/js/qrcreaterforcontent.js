var app = new Vue({
  el: "#app",
  data: {
    newcontent: "",
    allcontents: "",
    allcontentgroup:""
  },

  methods: {
    addcontent: function () {
      // if (this.newName == "") return;
      const data = {
        "content": this.newcontent
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
      fetch('/contents', d)
        .then((e) => {
          e.json().then((j) => {
            location.href = "./printQR.html?dorp=d&id="+j.id
          })
        }).then((k) => {
          this.readall();
        })
        ;
      ;
      this.newcontent = ""
      
    },

    readall: function () {
      // alert("HHH")
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