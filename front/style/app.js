
const operationForm = document.getElementById("form");
const operationFormLog = document.getElementById("formlog");

// Fonction register
if (operationForm != null){
  operationForm.addEventListener("submit", function (e) {
    e.preventDefault();
  
    const dataInsert = {
      name: document.getElementById("name").value,
      email: document.getElementById("email").value,
      bio: document.getElementById("bio").value,
      password: document.getElementById("password").value,
    };
  
    console.log(JSON.stringify(dataInsert));
  
    let options = {
      method: "post",
      body: JSON.stringify(dataInsert),
      headers: { "Content-Type": "application/json", Accept: "application/json" },
    };
  
    fetch("http://localhost:3500/api/users/register", options)
      .then((res) =>
        res.json().then((response) => ({ status: res.status, response }))
      )
      .then((data) => {
        console.log(data);
        if (data.status === 201) {
          alert("Successfully Registered");
          window.location.replace(`/front/login.html`);
        } else {
          alert("Sorry, email has already been taken.");
        }
      })
      .catch((err) => {
        alert("This is a warning message!");
        console.error(err);
      });
  });
  

};

//fonction login
if (operationFormLog != null){

  operationFormLog.addEventListener("submit", function (e) {
    e.preventDefault();
    const dataInsert = {
      email: document.getElementById("email").value,
  
      password: document.getElementById("password").value,
    };
  
    console.log(JSON.stringify(dataInsert));
  
    let options = {
      method: "post",
      body: JSON.stringify(dataInsert),
      headers: { "Content-Type": "application/json", Accept: "application/json" },
    };
  
    fetch("http://localhost:3500/api/users/login", options)
      .then((res) =>
        res.json()
        .then((response) => ({status: res.status, response },
           localStorage.setItem("token", JSON.stringify(response.token)),
          window.location.replace(`/front/me.html?${response.userId}`))))
      
    }); 
};

