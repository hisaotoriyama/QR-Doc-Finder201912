var app = new Vue({
    el: "#app",
    data: {
        dqrnumber: "",
        globalData: globalData,
        document_id: "",
        storageplace: "",
        Id: "",
    },
    computed: {
        qrdata: function () {
            console.log(this.globalData.QRdata)  /// replace process
            return this.globalData.QRdata
        }
    },
    methods: {
        //QRコードを読み取って、そのidを抽出する。
        // QRは(d or l)と番号のオブジェクト。d or lを読んだ上で、dの場合は書類に添付された（貼り付けされた）QRとして理解、lの場合は格納場所に添付されたQRとして理解する。

        dataread: function () {
            alert("HEHEHE")
            console.log(this.globalData.QRdata)
            let j = JSON.parse(this.globalData.QRdata)
            switch (j.dorp) {
                case 'd':
                    this.document_id = j.id
                    break;

                case 'p':
                    this.storageplace = j.id
                    break;
            }
        },
        dataexport: function () {
            alert("list変更するよ")
            console.log(Cookies.get('user_id'))
            const data = {
                "latestuser": Cookies.get('user_id'),
                "storageplace": this.storageplace,
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

            fetch('../storeditems/' + this.document_id, d)
                .then((res) => {
                    res.json().then((f) => {
                        // ここから開始20191202 12PM PUTして戻ってくるところ。修正されるはず。
                        console.log(f)
                        alert("Success")
                    })
                })
        },
        logout: function () {
            alert("logout Movement")
            location.href = "/logout"
        },
    }
})