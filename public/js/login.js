
var app = new Vue({
  el: "#app",
  data: {
    loginName: "",
    loginPassword: ""
  },

  methods: {

    // 1
    movetouseradmin: function () {
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
      //fetchを/loginとした。../loginという相対パスではなく。
      fetch('/login', d).then((e) => {
        e.json().then((j) => {
          console.log(j)
          // console.log(JSON.parse(j));
          Cookies.set("name", j.name);
          Cookies.set("user_id", j.id)
          //その上で、location.href処理しsecureに移る。
          //ブラウザベースのJSの場合、location.href使う。一方サーバーベースのNode、Rails使う場合、redirectを使う。
          alert("Admin 専用画面")
          location.href = "/admin/adminuser.html"
        })
      })
    },

    // ２
    movetoplaceadmin: function () {
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
      //fetchを/loginとした。../loginという相対パスではなく。
      fetch('/login', d).then((e) => {
        e.json().then((j) => {
          console.log(j)
          // console.log(JSON.parse(j));
          Cookies.set("name", j.name);
          Cookies.set("user_id", j.id)
          //その上で、location.href処理しsecureに移る。
          //ブラウザベースのJSの場合、location.href使う。一方サーバーベースのNode、Rails使う場合、redirectを使う。
          alert("Admin 専用画面")
          location.href = "/admin/adminplace.html"
        })
      })

    },
    // 3
    movetocontentsgroupadmin: function () {
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
      //fetchを/loginとした。../loginという相対パスではなく。
      fetch('/login', d).then((e) => {
        e.json().then((j) => {
          console.log(j)
          // console.log(JSON.parse(j));
          Cookies.set("name", j.name);
          Cookies.set("user_id", j.id)
          //その上で、location.href処理しsecureに移る。
          //ブラウザベースのJSの場合、location.href使う。一方サーバーベースのNode、Rails使う場合、redirectを使う。
          alert("Admin 専用画面")
          location.href = "/admin/admincontentgroup.html"
        })
      })
    },
    // 4
    movetoqrcontent: function () {
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
      //fetchを/loginとした。../loginという相対パスではなく。
      fetch('/login', d).then((e) => {
        e.json().then((j) => {
          console.log(j)
          // console.log(JSON.parse(j));
          Cookies.set("name", j.name);
          Cookies.set("user_id", j.id)
          //その上で、location.href処理しsecureに移る。
          //ブラウザベースのJSの場合、location.href使う。一方サーバーベースのNode、Rails使う場合、redirectを使う。
          location.href = "/private/qrcreaterforcontent.html"
        })
      })
    },

    //5
    movetostoreditem: function () {
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
      //fetchを/loginとした。../loginという相対パスではなく。
      fetch('/login', d).then((e) => {
        e.json().then((j) => {
          console.log(j)
          // console.log(JSON.parse(j));
          Cookies.set("name", j.name);
          Cookies.set("user_id", j.id)
          //その上で、location.href処理しsecureに移る。
          //ブラウザベースのJSの場合、location.href使う。一方サーバーベースのNode、Rails使う場合、redirectを使う。
          location.href = "/private/storeditemlist.html"
        })
      })
    },
    // 8
    movetoprintqr: function () {
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
      fetch('../login', d).then((e) => {
        e.json().then((j) => {
          console.log(j)
          // console.log(JSON.parse(j));
          Cookies.set("name", j.name);
          Cookies.set("user_id", j.id)
          //その上で、location.href処理しsecureに移る。
          //ブラウザベースのJSの場合、location.href使う。一方サーバーベースのNode、Rails使う場合、redirectを使う。
          location.href = "/private/printQR.html"
        })
      })
    },
    // 9
    movetoqrreader: function () {
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
      //fetchを/loginとした。../loginという相対パスではなく。
      fetch('/login', d).then((e) => {
        //confirmed on Dec.20,2019
        e.json().then((j) => {
          console.log(j)
          // console.log(JSON.parse(j));
          Cookies.set("name", j.name);
          Cookies.set("user_id", j.id)
          //その上で、location.href処理しsecureに移る。
          //ブラウザベースのJSの場合、location.href使う。一方サーバーベースのNode、Rails使う場合、redirectを使う。
          location.href = "/private/qrreader.html"
        })
      })
    },

    loginfunction: function () {
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
      //fetchを/loginとした。../loginという相対パスではなく。
      fetch('/login', d).then((e) => {
        e.json().then((j) => {
          console.log(j)
          // console.log(JSON.parse(j));
          Cookies.set("name", j.name);
          Cookies.set("user_id", j.id)
          //その上で、location.href処理しsecureに移る。
          //ブラウザベースのJSの場合、location.href使う。一方サーバーベースのNode、Rails使う場合、redirectを使う。
        })
      })
    },

    // cookies: function (d) {
    //   if(this.loginPassword==d.password){
    //     Cookies.set('login',true,{expires:0.5})
    //     Cookies.set('name',this.loginName,{expires:0.5})
    //     Cookies.set('user_id', d.id,{expires:0.5})
    // } else {
    //     Cookies.set('login',false,{expires:0.5})
    // }
    // }
  }
});
