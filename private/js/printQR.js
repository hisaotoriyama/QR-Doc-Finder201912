var app = new Vue({
    el: "#app",
    data: {
        textqr:null,
    },
    computed: {
        qrtxt: function() {
            return JSON.stringify(this.textqr)
        }
    },
    methods: {  
      qrcreation: function (i) {
        alert("Document QR発行するよ")
        let dorpqr = this.getParam('dorp')
        let idqr = this.getParam('id')
        let qrname = this.getParam('name')
        this.textqr = {
          dorp:dorpqr,
          id:idqr,
          name:qrname
        }
        $('#qrprint').html("");
        $('#qrprint').qrcode({ width: 90, height: 90, text: JSON.stringify(this.textqr)})
      },

      getParam: function (name, url) {
        if (!url) url = window.location.href;
        name = name.replace(/[\[\]]/g, "\\$&");
        var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
            results = regex.exec(url);
        if (!results) return null;
        if (!results[2]) return '';
        return decodeURIComponent(results[2].replace(/\+/g, " "));
    },
  
    movetouseradmin: function () {
        location.href = "./adminuser.html"
    },
    movetoplaceadmin: function () {
        location.href = "./adminplace.html"
    },
    movetocontentsgroupadmin: function () {
        location.href = "./admincontentgroup.html"
    },
    movetoqrcontent: function () {
        location.href = "./qrcreaterforcontent.html"
    },
    movetostoreditemread: function () {
        location.href = "./storeditemlist.html"
    },
    movetostoreditemcreate: function () {
        location.href = "./storeditemlist.html"
    },
    movetostoreditemupdate: function () {
        location.href = "./storeditemlist.html"
    },
    movetoprintqr: function () {
        location.href = "./printQR.html"
    }
    }
  })