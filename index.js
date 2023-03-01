alert("Hola reclutador! Sea bienvenido a mi página."); 

function validateForm() {
    let x = document.forms["myForm"]["fname"].value;
    if (x == "") {
      alert("Name must be filled out");
      return false;
    }
  }