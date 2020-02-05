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
        storeditemlists: "",
        firstregisteruserId: "",
        firstregisteruserName: "",
        firstregisteredselectedplaceId: "",
        allplaces: "",
        eachplace: {
            id: "",
            name: ""
        },
        allusers: "",
        firstregistercontentsId: "",
        firstregistercontentsname: "",
        firstregistercontentsgroupname: "",
        documentId: "",
        registedstoreditemId: "",
        modifiedselectedplaceId: "",
        modifiedselecteduserId: ""
    },

    methods: {
        storeditemregister: function () {
            alert("登録")
            if (this.firstregisteredselectedplaceId == "") return;

            const data = {
                "document": this.firstregistercontentsId,
                "storageplace": this.firstregisteredselectedplaceId,
                "originaluser": this.firstregisteruserId,
                "latestuser": this.firstregisteruserId
            };
            // console.log(data)
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
            fetch('/storeditems', d)
                .then((e) => {
                    e.json().then((j) => {
                        console.log(j);
                        self.registedstoreditemId = j.id
                    })
                        .then((i) => {
                            self.registerstoreditemid(i)
                        })
                        .then((k) => {
                            self.readall()
                        })
                })
        },

        modify: function () {
            if (this.modifiedselectedplaceId == "") return;
            alert("更新開始")
            this.modifiedselecteduserId = Number(Cookies.get('user_id'))
            // //trueのtransactionIdを取り出して、引数化して、次の画面遷移にする。
            var sil = this.storeditemlists.filter((e) => {
                return e.check == true
            })
            // console.log(sil);
            this.selectedstoreditemlists = sil;
            // console.log(this.selectedstoreditemlists.length)
            let self = this;
            let changestoreditem = function () {
                for (i = 0; i < self.selectedstoreditemlists.length; i++) {
                    self.selectedstoreditemlists[i].storageplace = self.modifiedselectedplaceId;
                    self.selectedstoreditemlists[i].latestuser = self.modifiedselecteduserId;
                    console.log(self.selectedstoreditemlists[i])
                    self.storeditemupdate(self.selectedstoreditemlists[i]);
                }
            }
            changestoreditem();
            return this.readall();

        },
        storeditemupdate: function (v) {
            alert("FETCH開始")
            const data = {
                "storageplace": v.storageplace,
                "latestuser": v.latestuser
            };
            // console.log(data)
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
            fetch('/storeditems/' + v.id, d)
                .then((e) => {
                    e.json().then((j) => {
                        alert("更新完了")
                        console.log(j);
                        // self.registedstoreditemId = j.id
                    })
                        .then((i) => {
                            // self.registerstoreditemid(i)
                        })
                        .then((k) => {
                            // self.readall()
                        })
                })

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
            fetch('/storeditems', d)
                .then((e) => {
                    e.json().then((j) => {
                        self.storeditemlists = j;
                    })
                })
        },

        readusername: function (k) {
            const headers = {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            };
            const d = {
                headers: headers,
                method: "GET"
            };
            var self = this;
            fetch('/users/' + k, d)
                .then((e) => {
                    e.json().then((j) => {
                        self.firstregisteruserName = j[0].name;
                    })
                })
        },

        readcontentsname: function (k) {
            const headers = {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            };
            const d = {
                headers: headers,
                method: "GET"
            };
            var self = this;
            fetch('/contents/' + k, d)
                .then((e) => {
                    e.json().then((j) => {
                        // console.log(j)
                        self.firstregistercontentsname = j[0].name;
                    })
                })
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

        registerstoreditemid: function () {
            console.log(this.registedstoreditemId)
            console.log("***************************::")
            const data = {
                storeditemid: Number(this.registedstoreditemId)
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
            fetch('/contents/' + this.firstregistercontentsId, d)
                .then((e) => {
                    e.json().then((j) => {
                        // location.href = "./printQR.html?dorp=p&id=" + j.id + "&name=" + j.name
                    })
                }).then((k) => {
                    // self.readall();
                })
                ;
            ;
            // this.newstorageplace = ""
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
        movetostoreditem: function () {
            location.href = "./storeditemlist.html"
        },
        // movetostoreditemcreate: function () {
        //     location.href = "./storeditemlist.html"
        // },
        // movetostoreditemupdate: function () {
        //     location.href = "./storeditemlist.html"
        // },
        movetoprintqr: function () {
            location.href = "./printQR.html"
        },
        movetoqrreader: function () {
            location.href = "./qrreader.html"
        },
        readplaces: function () {
            const headers = {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            };
            const d = {
                headers: headers,
                method: "GET"
            };
            var self = this;
            fetch('/places', d)
                .then((e) => {
                    e.json().then((j) => {
                        // console.log(j);
                        self.allplaces = j;
                    })
                });

            // this.firstregistercontentsId = Number(this.getParam("id"))
            // this.firstregistercontentsname = this.getParam("name")
            // this.firstregisteruserId = Number(Cookies.get('user_id'))
            // return this.readusername(this.firstregisteruserId)
        },

        readusers: function () {
            const headers = {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            };
            const d = {
                headers: headers,
                method: "GET"
            };
            var self = this;
            fetch('/users', d)
                .then((e) => {
                    e.json().then((j) => {
                        // console.log(j);
                        self.allusers = j;
                    })
                });

            this.firstregistercontentsId = Number(this.getParam("id"))
            this.firstregistercontentsname = this.getParam("name")
            // console.log(Cookies.get('user_id'))

            this.firstregisteruserId = Number(Cookies.get('user_id'))
            return this.readusername(this.firstregisteruserId)
        },
        logout:function(){
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
        },
    },

    created: function () {
        return this.readusers();
    },
    mounted: function () {
        return this.readplaces();
    },

    computed: function () {
        return this.updatelist()
    }

    // registeruserId: function () {
    //     let self = this
    //     this.firstregisteruserId = Cookies.get('user_id')
    //     return this.readusername(this.firstregisteruserId)
    // }
    // この前後が修正必要箇所20200117.Computed以降。
    // firstregistercontentsname: "",
    // firstregistercontentsgroupname:""

    // 最後にstoreditemidを飛ばして、contentsに登録する。
})