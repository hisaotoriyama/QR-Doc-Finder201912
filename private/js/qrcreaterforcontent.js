var app = new Vue({
  el: "#app",
  data: {
    newcontent: "",
    allcontents: ""
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
      alert("HHH")
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

    movetostoreditemlist:function(){
      location.href = "./storeditemlist.html"
    },
    movetoqrcreaterforplace:function(){
      location.href = "./qrcreaterforplace.html"
    }

  }
})