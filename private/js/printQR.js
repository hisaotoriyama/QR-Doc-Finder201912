var app = new Vue({
    el: "#app",
    data: {
        textqr: null,
        display: true,

    },
    computed: {
        qrtxt: function () {
            return JSON.stringify(this.textqr)
        }
    },
    methods: {
        qrcreation: function (i) {
            alert("QR発行")
            let dorpqr = this.getParam('dorp')
            let idqr = this.getParam('id')
            let qrname = this.getParam('name')
            this.textqr = {
                dorp: dorpqr,
                id: idqr,
                name: qrname
            }
            $('#qrprint').html("");
            $('#qrprint').qrcode({ width: 90, height: 90, text: JSON.stringify(this.textqr) });
            console.log(this.getParam('dorp'));
            if (this.getParam('dorp') == "p") {
                this.display = false;
            } else {
                this.display = true;
            }

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
        movetostoreditemregister: function () {
            location.href = "./storeditemlist.html?id=" + this.textqr.id + "&name=" + this.textqr.name
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
        logout: function () {
            alert("logout Movement")
            location.href = "/logout"
        },
    },

    created: function () {
    }
})