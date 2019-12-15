var app = new Vue({
    el: "#app",
    data: {
        dqrnumber: "",
        globalData: globalData,
        document_id: "",
        storageplace:"",
        Id:"",

    },
    methods: {
        //QRコードを読み取って、そのidを抽出する。
        // QRは(d or l)と番号のオブジェクト。d or lを読んだ上で、dの場合は書類に添付された（貼り付けされた）QRとして理解、lの場合は格納場所に添付されたQRとして理解する。

        dataread: function () {
            alert("HEHEHE")
            console.log(this.globalData.QRdata)
            let j = JSON.parse(this.globalData.QRdata)
            switch (j.dorl) {
                case 'd':
                    const did = j.id;
                    this.document_id = did
                break;

                case 'l':
                    const sp = j.id;
                    this.storageplace = sp
                break;
            }
        },
        dataexport:function(){
            const data = {
                    "latestuser": req.session.user_id,
                    "storageplace": storageplace,

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

                fetch('https://localhost:3001/storeditemlists/' + self.document_id, d)
                    .then((res) => {
                        res.json().then((f) => {
                            // ここから開始20191202 12PM PUTして戻ってくるところ。修正されるはず。
                            console.log(f)
                            alert("Success")


                        })
            })
        }},
        computed:function(){
            this.Id = req.session.user_id
        }
    })