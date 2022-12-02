function signup() {
    var loginFront = document.getElementById("login").value;
    var passwordFront = document.getElementById("password").value;
    var repeatPassword = document.getElementById("repeat-password").value;
    var gkeyFront = document.getElementById("gkey").value;
    var nameFront = document.getElementById("name").value;


    if (gkeyFront === "" || nameFront === "" || loginFront === "" || passwordFront === "" || repeatPassword === "") {
        alert("Insira todos os campos");
    } else if (passwordFront != repeatPassword) {
        alert("Senhas diferentes");
    } else {
        axios.post('https://localhost:7136/Login/Create', {
            gkey: gkeyFront,
            name: nameFront,
            email: loginFront,
            password: repeatPassword
        })
            .then(function (response) {
                window.location.href = "login.html";
            })
            .catch(function (error) {
                alert(error.response.data);
            });
    }
}


function login() {
    var login = document.getElementById("login").value;
    var password = document.getElementById("password").value

    if (login === "" || password === "") {
        document.getElementById("error-login").textContent = "Insira todos os campos";

    } else {
        axios.post("https://localhost:7136/Login/Login?email=" + login + "&password=" + password)
            .then(function (response) {
                window.sessionStorage.setItem("token", response.data);
                window.sessionStorage.setItem("autentification", true);
                window.sessionStorage.setItem("login", login);
                window.location.href = "home.html";
            })
            .catch(function (error) {
                document.getElementById("error-login").textContent = error.response.data;

            });

    }

}

function getLogin() {
    var token = window.sessionStorage.getItem("token");
    const headers = { Authorization: `Bearer ${token}` };

    axios.get('https://localhost:7136/Login/GetLogin?gkey=1', { headers })
        .then(function (response) {
            alert(response.data.login);
        })
        .catch(function (error) {
            alert(error.response.data);
        });
}

function setInitialCredentials() {
    var token = window.sessionStorage.getItem("token");
    const headers = { Authorization: `Bearer ${token}` };
    var i = 0;

    axios.get('https://localhost:7136/Login/GetAllLogin', { headers })
        .then(function (response) {

            while (response.data[i].name != null) {

                if (response.data[i].email == window.sessionStorage.getItem("login")) {
                    document.getElementById("gkey").value = response.data[i].gkey;
                    document.getElementById("name").value = response.data[i].name;
                    document.getElementById("email").value = response.data[i].email;

                    break;
                }
                i++;
            }
        })
        .catch(function (error) {
            alert(error.response.data);
        });

}

function update() {
    var gkey = document.getElementById("gkey").value;
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var token = window.sessionStorage.getItem("token");
    const headers = { Authorization: `Bearer ${token}` };
  
    if (gkey === "" || name === "" || email === "") {
      alert("Insert all the camps please");
    } else {
      axios.put("https://localhost:7136/Login/Update", {
        gkey: gkey,
        name: name,
        email: email,
        password: password
      }, { headers })
        .then(function (response) {
          alert("Funcionou");
        })
        .catch(function (error) {
          document.getElementById("error-login").textContent = error.response.data;
        });
    }
  }

function deleteAccount(){
    var token = window.sessionStorage.getItem("token");
    const headers = { Authorization: `Bearer ${token}` };
    var gkey = document.getElementById("gkey").value;




    axios.delete("https://localhost:7136/Login/Delete?gkey="+ gkey, { headers })
    .then(function (response) {
        document.getElementById("error-login").textContent = "Sucesso";
        logout();
    })
    .catch(function (error) {
        document.getElementById("error-login").textContent = error.response.data.title;
    });
}

function logout() {
    window.sessionStorage.setItem("autentification", "false");
    window.sessionStorage.setItem("token", "");
    window.sessionStorage.setItem("login", "");
    window.location.href = "home.html";
  }
  