



const UserName=document.getElementById("Username")
const Email=document.getElementById("Email")
const Password=document.getElementById("Password")
const Save_btn=document.getElementById("Save_btn")
const Form_inputs=document.getElementById("Form_inputs")

Form_inputs.addEventListener("submit" , function(event){
    event.preventDefault();
    localStorage.setItem("Username",UserName.value)
    localStorage.setItem("Email",Email.value)
    localStorage.setItem("Password",Password.value)

    console.log("done")
    setTimeout(() => {
        window.location="login.html"
    }, 2000);

})