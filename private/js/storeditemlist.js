Vue.component("silist", {
    props: ["storage"],
    template: "<tr><input type=\"checkbox\" id=\"checkbox\" v-model=\"storage.check\"><td>{{slistId}}</td><td>{{docgroupId}}</td><td>{{docgroupName}}</td><td>{{documentId}}</td><td>{{documentName}}</td><td>{{storageplaceId}}</td><td>{{storageplaceName}}</td><td>{{originaluserId}}</td><td>{{originaluserName}}</td><td>{{latestuserId}}</td><td>{{latestuserName}}</td></tr>",
    computed: {
        slistId: function () {
            return this.storage.id;
        },
        docgroupId: function () {
            return this.storage.docgroup;
        },
        docgroupName: function () {
            return this.storage.docgroupName;
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
        //     "docgroupId": 1,
        //     "docgroupName": "Del Docus",
        //     "documentId": 1,
        //     "documentName": "PTS",
        //     "storageplaceId": 1,
        //     "storageplaceName": "A-1",
        //     "originaluserId": 17,
        //     "originaluserName": "Hisao",
        //     "latestuserId": 19,
        //     "latestuserName": "Yoshiko"
        // },
        // {
        //     "slistId": 2,
        //     "docgroupId": 1,
        //     "docgroupName": "Import Docs",
        //     "documentId": 2,
        //     "documentName": "Gresik",
        //     "storageplaceId": 2,
        //     "storageplaceName": "A-2",
        //     "originaluserId": 18,
        //     "originaluserName": "Seitaro",
        //     "latestuserId": 17,
        //     "latestuserName": "Hisao"
        // },
        // {
        //     "slistId": 3,
        //     "docgroupId": 1,
        //     "docgroupName": "Export Docs",
        //     "documentId": 3,
        //     "documentName": "Dowa",
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
        storeditemregister: function () {
            alert("登録するよ")
            // if (this.newName == "") return;
            const data = {
                "newstorageplace": this.newstorageplace
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
                        location.href = "./printQR.html?dorp=p&id=" + j.id + "&name=" + j.name


                    })
                }).then((k) => {
                    self.readall();
                })
                ;
            ;
            this.newstorageplace = ""
        },


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
            alert("千部読み切るよ（20200114）")
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
        },
        movetoqrreader: function () {
            location.href = "./qrreader.html"
        }


    }
})