
function toggleNavOpen() {
  var navBar = document.getElementById("navbar");
  var line = document.getElementById("line");
  var text = document.getElementsByClassName("text");

  navBar.style.width = "70px";
  line.style.width = "50px";
  for (var i = 0; i < text.length; i++) {
    text[i].style.display = "none";
  }

}

function toggleNavClosed() {
  var navBar = document.getElementById("navbar");
  var line = document.getElementById("line");
  var text = document.getElementsByClassName("text");

  navBar.style.width = "11.5%";
  for (var i = 0; i < text.length; i++) {
    text[i].style.display = "inline-block";
  }
  line.style.width = "180px";
}


function toggleNavChat() {
  var navBar = document.getElementById("navbar");
  var chat = document.getElementById("chat-box");
  var msgBox = document.getElementById("msg-box");

  if (navBar.style.width === "11.5%") {
    toggleNavOpen();
    chat.style.marginLeft = "5%"
    chat.style.width = "66%";
    msgBox.style.width = "932px";


  } else {
    toggleNavClosed();
    chat.style.marginLeft = "13%"
    chat.style.width = "58%";
    msgBox.style.width = "800px";

  }
}

function toggleNavWorkers() {
  var navBar = document.getElementById("navbar");
  var imgBusiness = document.getElementsByClassName("grid-item");
  var grid = document.getElementById("grid");
  var lineTop = document.getElementById("line-top");
  var gridCreate = document.getElementById("grid-create");

  if (navBar.style.width === "11.5%") {
    toggleNavOpen();
    gridCreate.style.left = "100px";
    grid.style.gridTemplateColumns = "22.5% 22.5% 22.5% 22.5%";
    for (var i = 0; i < imgBusiness.length; i++) {
      imgBusiness[i].style.marginLeft = "100px";
    }



  } else {
    toggleNavClosed();
    grid.style.gridTemplateColumns = "31.5% 31.5% 31.5%";
    gridCreate.style.marginLeft = "250px";
    for (var i = 0; i < imgBusiness.length; i++) {
      imgBusiness[i].style.marginLeft = "250px";
    }
  }
}

function toggleNavBusiness() {
  var navBar = document.getElementById("navbar");
  var imgBusiness = document.getElementsByClassName("grid-item-business");
  var grid = document.getElementById("grid");
  var lineTop = document.getElementById("line-top");

  if (navBar.style.width === "11.5%") {
    toggleNavOpen();
    grid.style.gridTemplateColumns = "18.7% 18.75% 18.7% 18.75% 18.7%";
    lineTop.style.marginLeft = "100px";
    lineTop.style.width = "1510px";
    for (var i = 0; i < imgBusiness.length; i++) {
      imgBusiness[i].style.marginLeft = "100px";
    }

  } else {
    toggleNavClosed();
    lineTop.style.marginLeft = "250px";
    lineTop.style.width = "1360px";
    grid.style.gridTemplateColumns = "22% 22% 22% 22%";
    for (var i = 0; i < imgBusiness.length; i++) {
      imgBusiness[i].style.marginLeft = "250px";
    }
  }
}


function showPassword() {
  var box = document.getElementById("password");
  var button = document.getElementById("password-button");
  if (box.type === "password") {
    box.type = "text";
    button.classList.remove("fa-eye");
    button.classList.add("fa-eye-slash");
    button.style.marginLeft = "-52px";
  } else {
    box.type = "password";
    button.classList.remove("fa-eye-slash");
    button.classList.add("fa-eye");
    button.style.marginLeft = "-50px";
  }
}

function showRepeatPassword() {
  var box = document.getElementById("repeat-password");
  var button = document.getElementById("password-button-scnd");
  if (box.type === "password") {
    box.type = "text";
    button.classList.remove("fa-eye");
    button.classList.add("fa-eye-slash");
    button.style.marginLeft = "-52px";
  } else {
    box.type = "password";
    button.classList.remove("fa-eye-slash");
    button.classList.add("fa-eye");
    button.style.marginLeft = "-50px";
  }
}






function toggleDarkMode() {


  if (sessionStorage.getItem("dark-mode") == "false") {
    sessionStorage.setItem("dark-mode", "true");
    darkMode();



  } else if (sessionStorage.getItem("dark-mode") == "true") {
    sessionStorage.setItem("dark-mode", "false");
    lightMode();

  }
}

function darkMode() {
  var navbar = document.getElementById("navbar");
  var main = document.getElementById("main");
  var btn = document.getElementById("dark-btn");
  var elements = document.getElementsByClassName("element-blue");
  var messageHeader = document.getElementById("message-header");

  navbar.style.background = "rgb(0,0,0)";
  navbar.style.background = "linear-gradient(180deg, rgba(0,0,0,1) 0%, rgba(75,75,75,1) 100%)";

  main.style.backgroundImage = "url(img/background-bw.png)";

  btn.classList.remove("fa-sun");
  btn.classList.add("fa-moon");

  for (var i = 0; i < elements.length; i++) {
    elements[i].style.color = "rgb(0,0,0)";
    elements[i].style.backgroundColor = "rgb(0,0,0)";
  }

  messageHeader.style.background = "rgb(0,0,0)";
  document.getElementById("txt-dark").innerHTML = "Light Mode";
}

function lightMode() {
  var navbar = document.getElementById("navbar");
  var main = document.getElementById("main");
  var btn = document.getElementById("dark-btn");
  var elements = document.getElementsByClassName("element-blue");
  var messageHeader = document.getElementById("message-header");


  navbar.style.background = "rgb(0,27,95)";
  navbar.style.background = "linear-gradient(180deg, rgba(0,27,95,1) 0%, rgba(0,56,198,1) 100%)";
  main.style.backgroundImage = "url(img/background.png)";
  btn.classList.remove("fa-moon");
  btn.classList.add("fa-sun");
  messageHeader.style.background = "rgb(0,27,95)";
  document.getElementById("txt-dark").innerHTML = "Dark Mode";
}

function checkDarkMode() {
  if (sessionStorage.getItem("dark-mode") == "false") {
    darkMode();
  } else if (sessionStorage.getItem("dark-mode") == "true") {
    lightMode();
  }
}




function sendMessage() {
  var gkey = document.getElementById("gkey").value;
  var userGkey = document.getElementById("userGkey").value;
  var title = document.getElementById("title").value;
  var description = document.getElementById("description").value;
  var created = document.getElementById("created").value;
  var updated = document.getElementById("updated").value;
  var token = window.sessionStorage.getItem("token");

  const headers = { Authorization: `Bearer ${token}` };

  if (gkey === "" || userGkey === "" || title === "" || description === "" || created === "") {
    alert("Insira todos os campos");
  } else {
    axios.post('https://localhost:7136/Portfolio/Create', {
      gkey: gkey,
      userGkey: userGkey,
      title: title,
      description: description,
      updated: updated,
      created: created
    }, { headers })
      .then(function (response) {
        alert("Funcionou");
      })
      .catch(function (error) {
        alert(error.response.data);
      });
  }
}


function logout() {
  window.sessionStorage.setItem("autentification", "false");
  window.sessionStorage.setItem("token", "");
  window.sessionStorage.setItem("login", "");
  window.location.href = "home.html";
}