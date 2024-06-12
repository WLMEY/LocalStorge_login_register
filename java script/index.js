const Name=document.getElementById("Name")
const Nav_register=document.getElementById("Nav_register")
const Nav_login=document.getElementById("Nav_login")
const Nav_logout=document.getElementById("Nav_logout")
// setTimeout(() => {
//    Name.innerHTML=`wilcome ${localStorage.getItem("Username")}`
// }, 0);
// onload()
 
window.addEventListener("load",function(event){
    Nav_login.style.display="none"
    Nav_register.style.display="none"
    // Name.style.display="block"
    event.preventDefault();
    Name.innerHTML=`${localStorage.getItem("Username")}`


})

Nav_logout.addEventListener("click",()=>{
    window.location="login.html"
    
})