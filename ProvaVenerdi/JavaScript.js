


function saveData() {
    let email = document.getElementById("email").value;

    localStorage.setItem("email", email);
}

function ChangeButton() {

    let inputs = document.querySelectorAll("input[type='text']");

    let subscribeBtn = document.querySelector("input[type='submit']");

    for (let i = 0; i < inputs.length; i++) {
        if (inputs[i].value == "") 
        {
            subscribeBtn.disabled = true;
            return;
        }       
    }
    subscribeBtn.disabled = false;
}
function hideForm() {
   
    let form = document.getElementById("Form");

    form.style.display = "none"; 

   
    let unsButton = document.getElementById("btn");

    unsButton.style.display = "";
}

function checkEmail() {

    let storedEmail = localStorage.getItem('email');

    if (storedEmail != null) {
        hideForm();
    }

}

function unsubscribeMe() {

    localStorage.clear();

    let form = document.getElementById("Form");
    form.style.display = "";

    let unsButton = document.getElementById("btn");
    unsButton.style.display = "none";

}

function Benvenuto() {

    let storedEmail = localStorage.getItem('email');

    if (storedEmail != null) {
        alert("***Benvenuto!***")
    }

}