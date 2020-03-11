var app = new Vue({
  el: "#app",
  data: {
    newcontent: "",
    selectedId: "",
    allcontents: "",
    allcontentgroups: "",
    eachontentgroup: {
      id: "",
      name: ""
    },
    newstoreditemid: "",
    deletedid: "",
    deletedstoreditemid:""
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
      // console.log(data)
      var self = this;
      fetch('/contents', d)
        .then((e) => {
          e.json().then((j) => {
            location.href = "./printQR.html?dorp=d&id=" + j.id + "&name=" + j.name
          })
        }).then((k) => {
          // this.readall();
        })
        ;
      ;
      this.newcontent = ""

    },

    readall: function () {
      alert("Readall")
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

    logout: function () {
      alert("logout Movement")
      /*
      const headers = {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
      };
      const d = {
          headers: headers,
          method: "GET"
      };
      fetch('/logout', d)
          .then((e) => {
              e.json().then(() => {
              })
          });
          */
      //document.location = "/logout";
      location.href = "/logout"
    },

    movetouseradmin: function () {
      location.href = "/admin/adminuser.html"
    },
    movetoplaceadmin: function () {
      location.href = "/admin/adminplace.html"
    },
    movetocontentsgroupadmin: function () {
      location.href = "/admin/admincontentgroup.html"
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

    contentdelete: function () {
      alert("delete contents")
      const headers = {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      };
      const d = {
        headers: headers,
        method: "GET"
      };
      var self = this;
      fetch('/contents/'+ this.deletedid, d)
        .then((e) => {
          e.json().then((j) => {
            console.log(j);
            console.log(j[0].storeditemid);
            //この[0]がみそ。戻るjは結果的に一つしかないObjectであるが、[0]で指定しないと抽出できない。20200311。
            self.deletedstoreditemid = j[0].storeditemid;
          })
        })
        .then(this.nullinput())
        .then(this.deletestoreditem())
        .then(this.deletecontent())
      },
      
      nullinput: function() {
        console.log("nullinputすすむ")
      const data = {
          storeditemid: null
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
      return fetch('/contents/' + this.deletedid, d)
          .then((e) => {
              e.json().then((j) => {
              })
          })
      },
      
      deletestoreditem: function(){
        console.log("deletestreditemすすむ")
      const headers = {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      };
      const d = {
        headers: headers,
        method: "DELETE",
      };
      var self = this;
      return fetch('/contents/' + this.deletedstoreditemid, d)
        .then((e) => {
          e.json()
          })
    },
    deletecontent: function(){
      const headers = {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      };
      const d = {
        headers: headers,
        method: "DELETE",
      };
      var self = this;
      return fetch('/storeditems/' + this.deletedid, d)
        .then((e) => {
          e.json()
          })
    },

    // storeditemdelete: function () {
    //   alert("delete storeditem")
    //   const headers = {
    //     'Accept': 'application/json',
    //     'Content-Type': 'application/json'
    //   };
    //   const d = {
    //     headers: headers,
    //     method: "DELETE",
    //   };
    //   var self = this;
    //   return fetch('/storeditems/' + this.deletedid, d)
    //     .then(() => {
    //         self.readall();
    //         self.deletedid = ""
    //       })
        
    // },
    // contentdelete: function () {

      

    //   ;
    //   const data = {
    //     storeditemid: null
    // };
    // const headers = {
    //     'Accept': 'application/json',
    //     'Content-Type': 'application/json'
    // };
    // const d = {
    //     headers: headers,
    //     method: "PUT",
    //     body: JSON.stringify(data)
    // };
    // var self = this;
    // fetch('/storeditems/' + this.deletedstoreditemid, d)
    //     .then((e) => {
    //         e.json().then((j) => {
    //             // location.href = "./printQR.html?dorp=p&id=" + j.id + "&name=" + j.name
    //         })
    //     }).then((k) => {
    //         // self.readall();
    //     })
    //     ;
    // ;

    //   // まず対象のcontentsからstoreditemidを取り出し、dataして格納し、
    //   // まずcontentsのsroteditemidをnull、その上で上のstoreditemidを使って
    //   // 次に、storeditemのdocumentをNULLにする。
    //   // そしてRelationを切る。
    //   // その上でDeleteする。


    // }
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
          self.allcontentgroups = j;
        })
      })
  },
  // created: function () {
  //   const headers = {
  //     'Accept': 'application/json',
  //     'Content-Type': 'application/json'
  //   };
  //   const d = {
  //     headers: headers,
  //     method: "GET"
  //   };
  //   var self = this;
  //   fetch('/contentgroups', d)
  //     .then((e) => {
  //       e.json().then((j) => {
  //         console.log(j);
  //         self.allcontentgroups = j;
  //       })
  //     })
  // },

})