Vue.component("silist", {
    props: ["storage"],
    template: "<tr><input type=\"checkbox\" id=\"checkbox\" v-model=\"storage.check\"><td>{{slistId}}</td><td>{{documentId}}</td><td>{{documentName}}</td><td>{{storageplaceId}}</td><td>{{storageplaceName}}</td><td>{{originaluserId}}</td><td>{{originaluserName}}</td><td>{{latestuserId}}</td><td>{{latestuserName}}</td></tr>",
    computed: {
        slistId: function () {
            return this.storage.id;
        },
        documentId: function () {
            return this.storage.document;
        },
        documentName: function () {
            return this.storage.documentName;
        },
        storageplaceId: function () {
            return this.storage.storageplace;
        },
        storageplaceName: function () {
            return this.storage.storageplaceName;
        },
        originaluserId: function () {
            return this.storage.originaluser;
        },
        originaluserName: function () {
            return this.storage.originaluserName;
        },
        latestuserId: function () {
            return this.storage.latestuser;
        },
        latestuserName: function () {
            return this.storage.latestuserName;
        }


    }
})


var app = new Vue({
    el: "#app",
    data: {
        selectedstoreditemlists: "",
        storeditemlists: ""
        // [{
        //     "slistId": 1,
        //     "documentId": 1,
        //     "documentName": "Delivery Docs",
        //     "storageplaceId": 1,
        //     "storageplaceName": "A-1",
        //     "originaluserId": 17,
        //     "originaluserName": "Hisao",
        //     "latestuserId": 19,
        //     "latestuserName": "Yoshiko"
        // },
        // {
        //     "slistId": 2,
        //     "documentId": 2,
        //     "documentName": "Shipping Docs",
        //     "storageplaceId": 2,
        //     "storageplaceName": "A-2",
        //     "originaluserId": 18,
        //     "originaluserName": "Seitaro",
        //     "latestuserId": 17,
        //     "latestuserName": "Hisao"
        // },
        // {
        //     "slistId": 3,
        //     "documentId": 3,
        //     "documentName": "Sales Contract",
        //     "storageplaceId": 3,
        //     "storageplaceName": "B-1",
        //     "originaluserId": 19,
        //     "originaluserName": "Yoshiko",
        //     "latestuserId": 18,
        //     "latestuserName": "Seitaro"
        // }
        // ]
    },

    methods: {
        updatelist: function () {
            // //trueのtransactionIdを取り出して、引数化して、次の画面遷移にする。
            var sil = this.storeditemlists.filter((e) => {
                return e.check == true
            })
            this.selectedstoreditemlists = sil;
            location.href = "../updatestoreditemlist.html"
            //     const data = {
            //     "storageplace": this.selectedstoreditemlist
            // };
            // const headers = {
            //     'Accept': 'application/json',
            //     'Content-Type': 'application/json'
            // };
            // const d = {
            //     headers: headers,
            //     method: "POST",
            //     body: JSON.stringify(data)
            // };
            // var self = this;
            // fetch('/controlplace', d)
            //     .then((e) => {
            //         e.json().then((j) => {
            //             console.log(j);
            //         })
            //     }).then((k) => {
            //         this.readall();
            //     })
            //     ;
            // ;
            // this.newstorageplace = ""
        },


        readall: function () {
            alert("GoodGoodGood")
            const headers = {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            };
            const d = {
                headers: headers,
                method: "GET"
            };
            var self = this;
            fetch('/storeditems', d)
                .then((e) => {
                    e.json().then((j) => {
                        self.storeditemlists = j;
                    })
                })
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