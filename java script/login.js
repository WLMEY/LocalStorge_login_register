// const UserName=document.getElementById("Username")
const Email=document.getElementById("Email")
const Password=document.getElementById("Password")
const Save_btn=document.getElementById("Save_btn")
const Form_inputs=document.getElementById("Form_inputs")

Form_inputs.addEventListener("submit", function(event){
  event.preventDefault();
  console.log("1")
    if(Email.value===localStorage.getItem("Email") && Password.value===localStorage.getItem("Password")){
        console.log("true  Email and passward")
        setTimeout(() => {
            window.location="index.html";
        }, 1000);

    }
    else{
        console.log("2")

        Save_btn.style.backgroundColor="red"

    }
})