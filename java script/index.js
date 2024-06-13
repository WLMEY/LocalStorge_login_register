const Name = document.getElementById("Name")
const Nav_register = document.getElementById("Nav_register")
const Nav_login = document.getElementById("Nav_login")
const Nav_logout = document.getElementById("Nav_logout")

const products = [
    {
        name: "iphone 1",
        price: 1500,
        image: "/matrial/1.jpg",
        id: 1,
        discrption: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure aliquid omnis, culpa facere asperiores delectus."
    },
    {
        name: "iphone 2",
        price: 1750,
        image: "/matrial/2.jpg",
        id: 2,
        discrption: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure aliquid omnis, culpa facere asperiores delectus."
    },
    {
        name: "iphone 3",
        price: 2000,
        image: "/matrial/3.jpg",
        id: 3,
        discrption: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure aliquid omnis, culpa facere asperiores delectus."
    },
    {
        name: "iphone 4",
        price: 750,
        image: "/matrial/4.jpg",
        id: 4,
        discrption: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure aliquid omnis, culpa facere asperiores delectus."
    }
]
const main1 = document.getElementById("main");
products.map(value => {
    main1.innerHTML += `
        <div class="product">
            <div class="image">
                <img src="${value.image}" width="200" alt="">
            </div>
            <div class="description">
                <h4>${value.name}</h4>
                <p>${value.discrption}</p>
                <label>${value.price}</label>
            </div>
            <div class="inputs">
                <i class="fa-regular fa-heart heart" id="heart"></i>
                <!-- <i class="fa-solid fa-heart"></i> -->
                <input type="button" value="add to cart" class="btn_addToCar" id="btn_addToCar">
            </div>
        </div>
    `;
});


const cart=document.getElementById("cart");
const cart_items=document.getElementById("cart_items");

cart.addEventListener("click",function(){
    if (cart_items.style.display=="none"){
        cart_items.style.display="flex"
    
    }
    else{
        cart_items.style.display="none"
    }
})















// setTimeout(() => {
//    Name.innerHTML=`wilcome ${localStorage.getItem("Username")}`
// }, 0);
// onload()

window.addEventListener("load", function (event) {
    Nav_login.style.display = "none"
    Nav_register.style.display = "none"
    // Name.style.display="block"
    event.preventDefault();
    Name.innerHTML = `${localStorage.getItem("Username")}`


})

Nav_logout.addEventListener("click", () => {
    window.location = "login.html"

})







function AddToCart(){
    const  btn_addToCart= document.getElementById("btn_addToCart")
    function find(){
        
    }

}
