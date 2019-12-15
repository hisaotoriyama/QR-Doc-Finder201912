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
            console.log(j);
            self.qrcreation(j)
          })
        }).then((k) => {
          this.readall();
        })
        ;
      ;
      this.newcontent = ""
    },

    qrcreation: function (i) {
      alert("Document QR発行するよ")
      let idqr = i.id;
      console.log(idqr);
      const textqr = {
        dorp:"d",
        id:i.id
      }
      $('#qrprint').html("");
      $('#qrprint').qrcode({ width: 90, height: 90, text: JSON.stringify(textqr)})
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
  }
})