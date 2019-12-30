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
  
      movetostoreditemlist:function(){
        location.href = "./storeditemlist.html"
      },
      movetoqrcreaterforplace:function(){
        location.href = "./qrcreaterforplace.html"
      },
    
      movetoqrcreaterforcontent:function(){
        location.href = "./qrcreaterforcontent.html"
      },
      
      movetoadminuser:function(){
        location.href = "./adminuser.html"
      },
  

  
    }
  })