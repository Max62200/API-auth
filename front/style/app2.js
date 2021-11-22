const token = JSON.parse(localStorage.getItem('token'));
const operationForm = document.getElementById("formUpdate");

const id = window.location.search.replace('?', '');
console.log(id);

if (!token) {
    /* Traitement dans le cas où aucun token n'existe dans le localStorage */
    document.querySelector(".display").innerHTML = `<h3 class='text-center'>PROBLEME D'AUTHENTIFICATION, VEUILLEZ REESSAYER</h3>`;
  }
   
  const options = {
    method: 'GET',
    
    headers:{"Content-Type": "application/json",'Authorization': `Bearer ${token}`}
  };

fetch(`http://localhost:3500/api/users/me?id=${id}`, options)
.then(async function (
    response
  ) {
    const result = await response.json();

    console.log(result);

    document.querySelector(".display").innerHTML = `
          <div class="card" style="width: 22rem;">
              <div class="card-body">
                  <h2 class="card-title text-center text-uppercase">${result.name}</h2>
                  <h5 class="card-text text-right">${result.email}</h5>
                  <hr>
                  <p class="card-text text-center text-uppercase">à propos de vous :</p>
                  <p class="card-text" id="id">${result.bio}</p>
              </div>
          </div>
          <div><img src="./assets/travolta.gif" alt="travolta" id="travolta"/>
          <img src="./assets/quoi.png" alt="quoi" id="quoi"/></div>`;

          
  });

  operationForm.addEventListener("submit", function () {
    
  
    const dataInsert = {
    
      bio: document.getElementById("bio").value,
     
    };
  
    console.log(JSON.stringify(dataInsert));
  
    let options = {
      method: "put",
      body: JSON.stringify(dataInsert),
      headers: { "Content-Type": "application/json", Accept: "application/json",'Authorization': `Bearer ${token}`  }
    };
  
    fetch(`http://localhost:3500/api/users/me?id=${id}`, options)
      .then((res) =>
        res.json().then((response) => ({ status: res.status, response }))
      )
      
  });
    
   