// // const Name = document.getElementById("Name")
// // const Nav_register = document.getElementById("Nav_register")
// // const Nav_login = document.getElementById("Nav_login")
// // const Nav_logout = document.getElementById("Nav_logout")
// // // import  Registration_status  from './login.js';
// // const products = [
// //     {
// //         name: "iphone 1",
// //         price: 1500,
// //         image: "/matrial/1.jpg",
// //         id: 1,
// //         discrption: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure aliquid omnis, culpa facere asperiores delectus."
// //     },
// //     {
// //         name: "iphone 2",
// //         price: 1750,
// //         image: "/matrial/2.jpg",
// //         id: 2,
// //         discrption: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure aliquid omnis, culpa facere asperiores delectus."
// //     },
// //     {
// //         name: "iphone 3",
// //         price: 2000,
// //         image: "/matrial/3.jpg",
// //         id: 3,
// //         discrption: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure aliquid omnis, culpa facere asperiores delectus."
// //     },
// //     {
// //         name: "iphone 4",
// //         price: 750,
// //         image: "/matrial/4.jpg",
// //         id: 4,
// //         discrption: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure aliquid omnis, culpa facere asperiores delectus."
// //     }
// // ]
// // const main1 = document.getElementById("main");
// // products.map(value => {
// //     main1.innerHTML += `
// //         <div class="product">
// //             <div class="image">
// //                 <img src="${value.image}" width="200" alt="">
// //             </div>
// //             <div class="description">
// //                 <h4>${value.name}</h4>
// //                 <p>${value.discrption}</p>
// //                 <label>price:  ${value.price}</label>
// //             </div>
// //             <div class="inputs">
// //                 <i class="fa-regular fa-heart heart" id="heart"></i>
// //                 <!-- <i class="fa-solid fa-heart"></i> -->
// //                 <input type="button" value="add to cart" onclick="addToCar(${value.id})" class="btn_addToCar" id="btn_addToCar">
// //             </div>
// //         </div>
// //     `;
// // });


// // const cart=document.getElementById("cart");
// // const cart_items=document.getElementById("cart_items");

// // cart.addEventListener("click",function(){
// //     if (cart_items.style.display=="none"){
// //         cart_items.style.display="flex"
    
// //     }
// //     else{
// //         cart_items.style.display="none"
// //     }
// // })

// // const all_items=document.getElementById("all_items")
// // const Crat=[]

// // if(Crat.length===0){
// //     counter.style.display="none"
// // }
















// // const item_remove=document.getElementById("item_remove")
// // function Remove(Id){
// //    const index_of= Crat.findIndex((item)=>item.id===Id)
// //    Crat.splice(index_of,1)
// //     console.log(Crat)

// // }



// // function addToCar(ID){


// //     const ID_target=products.find((item)=>item.id===ID)
// //     Crat.push(ID_target)
// //     all_items.innerHTML='';
// //     console.log(Crat)
// //     Crat.forEach((item)=>{
// //         all_items.innerHTML +=`     
// //         <div class="item">
// //             <div class="ditils">
// //                 <h5>${item.name}</h5>
// //                 <h5>parice : ${item.price}</h5>
// //             </div>
// //             <div class="icons">
// //                 <i class="fa-solid fa-xmark X" onclick="Remove(${item.id})" id="item_remove"></i>
// //             </div>
// //         </div>
// //         `
// //     const counter=document.getElementById("counter")
// //     if (Crat.length>99){
// //         counter.innerHTML="99+"

// //     }
// //     counter.innerHTML=Crat.length
// //     if(Crat.length!=0){
// //         counter.style.display="block"
// //     }
// //     else{
// //         counter.style.display="none"

// //     }

// //     })

// // }






            





// //     //     }
// //     // }
// //     // else {
// //     //     alert ("you need login frist .")
// //     // }
// // // }












// // // setTimeout(() => {
// // //    Name.innerHTML=`wilcome ${localStorage.getItem("Username")}`
// // // }, 0);
// // // onload()

// // window.addEventListener("load", function (event) {
// //     Nav_login.style.display = "none"
// //     Nav_register.style.display = "none"
// //     // Name.style.display="block"
// //     event.preventDefault();
// //     Name.innerHTML = `${localStorage.getItem("Username")}`


// // })

// // Nav_logout.addEventListener("click", () => {
// //     window.location = "login.html"

// // })







// // // function AddToCart(){
// // //     const  btn_addToCart= document.getElementById("btn_addToCart")
// // //     function find(){
        
// // //     }

// // // }





// ////////////////////////////////////edit///////////////////////////////////////////////////////////
// const Name = document.getElementById("Name")
// const Nav_register = document.getElementById("Nav_register")
// const Nav_login = document.getElementById("Nav_login")
// const Nav_logout = document.getElementById("Nav_logout")
// // import  Registration_status  from './login.js';
// const products = [
//     {
//         name: "iphone 1",
//         price: 1500,
//         image: "/matrial/1.jpg",
//         id: 1,
//         discrption: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure aliquid omnis, culpa facere asperiores delectus."
//     },
//     {
//         name: "iphone 2",
//         price: 1750,
//         image: "/matrial/2.jpg",
//         id: 2,
//         discrption: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure aliquid omnis, culpa facere asperiores delectus."
//     },
//     {
//         name: "iphone 3",
//         price: 2000,
//         image: "/matrial/3.jpg",
//         id: 3,
//         discrption: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure aliquid omnis, culpa facere asperiores delectus."
//     },
//     {
//         name: "iphone 4",
//         price: 750,
//         image: "/matrial/4.jpg",
//         id: 4,
//         discrption: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure aliquid omnis, culpa facere asperiores delectus."
//     }
// ]
// const main1 = document.getElementById("main");
// products.map(value => {
//     main1.innerHTML += `
//         <div class="product">
//             <div class="image">
//                 <img src="${value.image}" width="200" alt="">
//             </div>
//             <div class="description">
//                 <h4>${value.name}</h4>
//                 <p>${value.discrption}</p>
//                 <label>price:  ${value.price}</label>
//             </div>
//             <div class="inputs">
//                 <i class="fa-regular fa-heart heart" id="heart"></i>
//                 <!-- <i class="fa-solid fa-heart"></i> -->
//                 <input type="button" value="add to cart" onclick="addToCar(${value.id})" class="btn_addToCar" id="btn_addToCar">
//             </div>
//         </div>
//     `;
// });

// const cart = document.getElementById("cart");
// const cart_items = document.getElementById("cart_items");

// cart.addEventListener("click", function () {
//     if (cart_items.style.display == "none") {
//         cart_items.style.display = "flex"
//     } else {
//         cart_items.style.display = "none"
//     }
// })

// const all_items = document.getElementById("all_items")
// const Crat = []

// if (Crat.length === 0) {
//     counter.style.display = "none"
// }
// function reduceCart(cart) {
//     const total_price = document.getElementById("total_price");
//     const total = cart.reduce((sum, item) => sum + item, 0);
//     total_price.innerHTML = "Total: " + total;
//     console.log("total: " + total);
// }

// function renderCartItems() {
//     all_items.innerHTML = '';
//     Crat.forEach((item) => {
//         all_items.innerHTML += `
//         <div class="item">
//             <div class="details">
//                 <h5>${item.name}</h5>
//                 <h5>price: ${item.price}</h5>
//             </div>
//             <div class="icons">
//                 <i class="fa-solid fa-xmark X" onclick="Remove(${item.id})" id="item_remove"></i>
//             </div>
//         </div>
//         `;
//     });
//     const counter = document.getElementById("counter")
//     if (Crat.length > 99) {
//         counter.innerHTML = "99+"
//     } else {
//         counter.innerHTML = Crat.length
//     }
//     if (Crat.length != 0) {
//         counter.style.display = "block"
//     } else {
//         counter.style.display = "none"
//     }
// }

// function Remove(Id) {
//     const index_of = Crat.findIndex((item) => item.id === Id)
//     if (index_of !== -1) {
//         Crat.splice(index_of, 1)
//         renderCartItems()
//         reduce_Crat()
//     }
//     console.log(Crat)
// }

// function addToCar(ID) {
//     const ID_target = products.find((item) => item.id === ID)
//     Crat.push(ID_target)
//     renderCartItems()
//     reduce_Crat()
//     console.log(Crat)
// }

// window.addEventListener("load", function (event) {
//     Nav_login.style.display = "none"
//     Nav_register.style.display = "none"
//     event.preventDefault();
//     Name.innerHTML = `${localStorage.getItem("Username")}`
// })

// Nav_logout.addEventListener("click", () => {
//     window.location = "login.html"
// })




///////////////////////////chat GPT/////////////////////////////////////



// الحصول على العناصر من HTML
const Name = document.getElementById("Name");
const Nav_register = document.getElementById("Nav_register");
const Nav_login = document.getElementById("Nav_login");
const Nav_logout = document.getElementById("Nav_logout");
const main1 = document.getElementById("main");
const cart = document.getElementById("cart");
const cart_items = document.getElementById("cart_items");
const all_items = document.getElementById("all_items");
const counter = document.getElementById("counter");

// تعريف قائمة المنتجات
const products = [
    { name: "iphone 1", price: 1500, image: "/matrial/1.jpg", id: 1, discrption: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure aliquid omnis, culpa facere asperiores delectus." },
    { name: "iphone 2", price: 1750, image: "/matrial/2.jpg", id: 2, discrption: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure aliquid omnis, culpa facere asperiores delectus." },
    { name: "iphone 3", price: 2000, image: "/matrial/3.jpg", id: 3, discrption: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure aliquid omnis, culpa facere asperiores delectus." },
    { name: "iphone 4", price: 750, image: "/matrial/4.jpg", id: 4, discrption: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure aliquid omnis, culpa facere asperiores delectus." }
];

// عرض المنتجات في الصفحة
products.map(value => {
    main1.innerHTML += `
        <div class="product">
            <div class="image">
                <img src="${value.image}" width="200" alt="">
            </div>
            <div class="description">
                <h4>${value.name}</h4>
                <p>${value.discrption}</p>
                <label>price: ${value.price}</label>
            </div>
            <div class="inputs">
                <i class="fa-regular fa-heart heart" id="heart"></i>
                <input type="button" value="add to cart" onclick="addToCar(${value.id})" class="btn_addToCar" id="btn_addToCar">
            </div>
        </div>
    `;
});

// إعداد العربة
const Crat = [];

// إظهار أو إخفاء العناصر في العربة
cart.addEventListener("click", function () {
    if (cart_items.style.display === "none") {
        cart_items.style.display = "flex";
    } else {
        cart_items.style.display = "none";
    }
});

// دالة لحساب المجموع الكلي
function reduceCart() {
    const total_price = document.getElementById("total_price");
    const total = Crat.reduce((sum, item) => sum + item.price, 0);
    total_price.innerHTML = "Total: " + total;
    console.log("total: " + total);
}

// دالة لعرض العناصر في العربة
function renderCartItems() {
    all_items.innerHTML = '';
    Crat.forEach((item) => {
        all_items.innerHTML += `
        <div class="item">
            <div class="details">
                <h5>${item.name}</h5>
                <h5>price: ${item.price}</h5>
            </div>
            <div class="icons">
                <i class="fa-solid fa-xmark X" onclick="Remove(${item.id})" id="item_remove"></i>
            </div>
        </div>
        `;
    });
    if (Crat.length > 99) {
        counter.innerHTML = "99+";
    } else {
        counter.innerHTML = Crat.length;
    }
    if (Crat.length !== 0) {
        counter.style.display = "block";
    } else {
        counter.style.display = "none";
    }
}

// دالة لإزالة عنصر من العربة
function Remove(Id) {
    const index_of = Crat.findIndex((item) => item.id === Id);
    if (index_of !== -1) {
        Crat.splice(index_of, 1);
        renderCartItems();
        reduceCart();
    }
    console.log(Crat);
}

// دالة لإضافة عنصر إلى العربة
function addToCar(ID) {
    const ID_target = products.find((item) => item.id === ID);
    Crat.push(ID_target);
    renderCartItems();
    reduceCart();
    console.log(Crat);
}

// عند تحميل الصفحة
window.addEventListener("load", function (event) {
    Nav_login.style.display = "none";
    Nav_register.style.display = "none";
    event.preventDefault();
    Name.innerHTML = `${localStorage.getItem("Username")}`;
});

// عند تسجيل الخروج
Nav_logout.addEventListener("click", () => {
    window.location = "login.html";
});
