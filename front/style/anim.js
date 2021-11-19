

// selection des champs du formulaire
const namePseudo = document.getElementById("name");
const email = document.getElementById("email");
const password = document.getElementById("password");
const bio = document.getElementById("bio");


namePseudo.addEventListener("click",(e) =>{

    document.getElementById("nom").style.display= "block";
    setTimeout(function(){document.getElementById('nom').style.display = "none";},7000);

    
    document.getElementById("adresse").style.display= "none";
    document.getElementById("pass").style.display= "none";
    document.getElementById("life").style.display= "none";
    
});

email.addEventListener("click",(e) =>{

    document.getElementById("nom").style.display= "none";
    document.getElementById("adresse").style.display= "block";
    setTimeout(function(){document.getElementById('adresse').style.display = "none";},7000);
    document.getElementById("pass").style.display= "none";
    document.getElementById("life").style.display= "none";
    
});

password.addEventListener("click",(e) =>{

    document.getElementById("nom").style.display= "none";
    document.getElementById("adresse").style.display= "none";
    document.getElementById("pass").style.display= "block";
    setTimeout(function(){document.getElementById('pass').style.display = "none";},7000);
    document.getElementById("life").style.display= "none";
    
});

bio.addEventListener("click",(e) =>{

    document.getElementById("nom").style.display= "none";
    document.getElementById("adresse").style.display= "none";
    document.getElementById("pass").style.display= "none";
    document.getElementById("life").style.display= "block";
    setTimeout(function(){document.getElementById('life').style.display = "none";},7000);
    
});

