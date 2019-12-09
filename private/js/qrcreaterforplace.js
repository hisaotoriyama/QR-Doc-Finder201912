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
            console.log(j);
            self.qrcreation(j)
          })
        }).then((k) => {
          this.readall();
        })
        ;
      ;
      this.newstorageplace = ""
    },

    qrcreation: function (i) {
      let idqr = i.id;
      console.log(idqr);
      $('#qrprint').html("");
      $('#qrprint').qrcode({ width: 90, height: 90, text: '{"dorl":"d","id":idqr}' })
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
      fetch('/controlplace', d)
        .then((e) => {
          e.json().then((j) => {
            self.places = j;
          })
        })
    },



  }
})