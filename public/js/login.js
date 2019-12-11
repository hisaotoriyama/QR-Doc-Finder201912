var app = new Vue({
  el: "#app",
  data: {
    loginName: "",
    loginPassword: ""
  },

  methods: {
    loginandqrreader: function () {
      if (this.loginName == "") return;
      const data = {
        "loginName": this.loginName,
        "loginPassword": this.loginPassword
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
      //ok
      fetch('https://localhost:3001/login', d)
        .then((e) => {
          console.log(e)
          //その上で、location.href処理しsecureに移る。
          //ブラウザベースのJSの場合、location.href使う。一方サーバーベースのNode、Rails使う場合、redirectを使う。
          location.href = "../private/qrreader.html"
        })

    }
  }
});