function validateForm() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var gender = document.getElementById("gender");
    var phone = document.getElementById("phone").value;
    var message = document.getElementById("message").value;

    var emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if(!email.match(emailRegex)) {
        alert("Invalid email, please enter correct email");
        return false;
    }

    if(name == "" || email == "" || phone == "" || !gender.checked) {
        alert("All field are required except message");
        return false;
    } else {
        alert("Your form is submitted, our team will contact you in 48 hours.");
        return true;
    }
  }