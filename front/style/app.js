  
const Url = "http://localhost:3500/api/users";
const form = document.getElementById('form');

form.addEventListener('submit',(e)=>{
    e.preventDefault();
    console.log('OK')
    const formData = new FormData(form);
    const dataInsert = Object.fromEntries(formData.entries());
  
    console.log(dataInsert);
  
    const options = {
      method: "POST",
      body: JSON.stringify(dataInsert),
      headers: { "Content-Type": "application/json"},
      
      redirect: 'follow'
    };
    
  fetch(Url,options)
    .then(response=>response.json().then(json => {
        if (response == 404){
           console.log('error')}
            else{
              console.log(json)
            
            }
          
    }) ) 
})