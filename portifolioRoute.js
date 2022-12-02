function createPortifolio() {
    var gkey = document.getElementById("gkey").value;
    var userGkey = document.getElementById("user-gkey").value;
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
                document.getElementById("error-login").textContent = "Sucesso";
            })
            .catch(function (error) {
                document.getElementById("error-login").textContent = error.response.data.title;
            });
    }
}



function updatePortifolio() {
    var gkey = document.getElementById("gkey").value;
    var userGkey = document.getElementById("user-gkey").value;
    var title = document.getElementById("title").value;
    var description = document.getElementById("description").value;
    var created = document.getElementById("created").value;
    var updated = document.getElementById("updated").value;
    var token = window.sessionStorage.getItem("token");
    const headers = { Authorization: `Bearer ${token}` };

    if (gkey === "" || userGkey === "" || title === "" || description === "" || created === "") {
        alert("Insert all the camps please");
    } else {
        axios.put("https://localhost:7136/Portfolio/Update", {
            gkey: gkey,
            userGkey: userGkey,
            title: title,
            description: description,
            updated: updated,
            created: created
        }, { headers })
            .then(function (response) {
                document.getElementById("error-login").textContent = "Sucesso";
            })
            .catch(function (error) {
                document.getElementById("error-login").textContent = error.response.data.title;
            });
    }
}

function searchPortfolio() {
    var token = window.sessionStorage.getItem("token");
    var search = document.getElementById("search-portifolio").value;
    const headers = { Authorization: `Bearer ${token}` };

    axios.get('https://localhost:7136/Portfolio/Read?gkey=' + search, { headers })
        .then(function (response) {
            document.getElementById("title-scnd").textContent = response.data.title;
            document.getElementById("subtitle").textContent = response.data.description;

        })
        .catch(function (error) {
            document.getElementById("error-login").textContent = error.response.data.title;
        });
}

function deletePortifolio(){
    var token = window.sessionStorage.getItem("token");
    var toDelete = document.getElementById("deleted").value;
    const headers = { Authorization: `Bearer ${token}` };

    axios.delete("https://localhost:7136/Portfolio/Delete?gkey="+ toDelete, { headers })
    .then(function (response) {
        document.getElementById("error-login").textContent = "Sucesso";
    })
    .catch(function (error) {
        document.getElementById("error-login").textContent = error.response.data.title;
    });
}

