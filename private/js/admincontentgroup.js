var app = new Vue({
    el: "#app",
    data: {
      newcontentgroup: "",
      allcontentgroups:""
    },
  
    methods: {
      addcontentgroup: function () {
        // if (this.newName == "") return;
        const data = {
          "contentgroup": this.newcontentgroup
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