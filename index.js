const form=document.getElementById('form');
const email=document.getElementById('email');
const password=document.getElementById('password');

function validateForm() {
    let x = document.forms["form"]["email"].value;
    if (email == "") {
      alert("email must be filled out");
      return false;
    }
  }
