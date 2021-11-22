

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
          alert("COMPTE CREE AVEC SUCCES");
          window.location.replace(`/front/login.html`);
        } else {
          document.querySelector(".alert").innerHTML = `
          <H1 id="alerting">!! USER ALREADY EXIST !!</H1>
          `
        }
      })
      .catch((err) => {
        document.querySelector(".alert").innerHTML = `
            <H1 id="alerting">!! ! SERVER ISSUE ! !!</H1>
            `
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
        .then((response) => ({status: res.status, response })))
        .then((res) =>{
          console.log(res);
          if(res.status === 200){
            localStorage.setItem("token", JSON.stringify(res.response.token));
            window.location.replace(`/front/me.html?${res.response.userId}`);

          }
          if(res.status === 403){
            document.querySelector(".alert").innerHTML = `
            <H1 id="alerting">!!! WRONG PASSWORD !!!</H1>
            `
          }
          if(res.status === 404){
            document.querySelector(".alert").innerHTML = `
            <H1 id="alerting">!! ! USER UNKNOWN ! !!</H1>
            `
          }

        });

          

            
  });
          
          
      
    
};

