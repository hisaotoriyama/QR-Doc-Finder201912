var app = new Vue({
    el: "#app",
    data: {
        newname:"",
        newpassword:"",
        modifiedid:"",
        modifiedname:"",
        modifiedpassword:""
    },
    

    methods: {
        userregister:function(){
            // if (this.newName == "") return;
            const data = {
              "newname": this.newname,
              "newpassword": this.newpassword
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
            fetch('/user', d)
            .then((e) => {
                e.json().then((j) => {
                  console.log(j);
                self.qrcreation(j)
                })
              }).then((k)=>{this.readall();
              })
              ;
              ;
            this.neworiginaluser="";
            this.newdocument="";
            this.newstorageplace="";
            this.newlatestuser=""

        },

        usermodify:function() {
          const data ={
            "storageplace": this.modifiedstorageplace,
            "latestuser":this.modifiedlatestuser
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
          return fetch('/user/'+this.modifiedid, d)
          .then((e) => {
            e.json().then((j) => {
              this.readall();
              this.modifiedlatestuser="";
              this.modifiedstorageplace="";
              this.modifiedid=""
            })
          })
          ;;
        },
        
        readall: function() {
                const headers = {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                };
                const d = {
                headers: headers,
                method: "GET"
                };
                var self = this;
                fetch('/user', d).then((e)=>{
                e.json().then((j) => {
                    self.storeditems = j;
                })
                })
            },

        selectdocs: function() {
            const headers = {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            };
            const d = {
              headers: headers,
              method: "GET"
            };
            var self = this
            // console.log(this.selectedid);
            fetch('/addstoreditems/' + this.selectedid, d)
            .then((r) => {
              r.json().then((j) => {
                console.log(j);
                self.selectedoriginaluser=j.originaluser;
                self.selecteddocument=j.document;
                self.selectedstorageplace=j.storageplace;
                self.selectedlatestuser=j.latestuser
              })
              })
          },


    }
  })