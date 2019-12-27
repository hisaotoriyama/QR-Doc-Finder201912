var app = new Vue({
    el: "#app",
    data: {
        textqr:"",
    },
  
    methods: {  
      qrcreation: function (i) {
        alert("Document QR発行するよ")
        let dorpqr = this.getParam('dorp')
        let idqr = this.getParam('id')
        const textqr = {
          dorp:dorpqr,
          id:idqr
        }
        $('#qrprint').html("");
        $('#qrprint').qrcode({ width: 90, height: 90, text: JSON.stringify(textqr)})
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
  
      movetostoreditemlist:function(){
        location.href = "./storeditemlist.html"
      },
      movetoqrcreaterforplace:function(){
        location.href = "./qrcreaterforplace.html"
      }
  
    }
  })