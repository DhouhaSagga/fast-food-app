// Search
let menu= document.querySelector("#menu-bar");
let navbar=document.querySelector(".navbar");
menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}
window.onscroll = () =>{
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
}
document.querySelector('#search-icon').onclick = () =>{
    document.querySelector('#search-form').classList.toggle('active');
}
document.querySelector('#close').onclick = () =>{
    document.querySelector('#search-form').classList.remove('active');
}
// end search
// like

var likes = document.getElementsByClassName("like");
console.log(likes);
for(let i = 0; i < likes.length; i++){
    let like = likes[i];
    like.addEventListener("click",function () {
if ( like.firstElementChild.style.color == "red") {
    like.firstElementChild.style.color = "black";
}else{
    like.firstElementChild.style.color = "red";
}
    });
}
//     // End like
//    var swiper = new Swiper(".home-slider", {
//       pagination: {
//         el: ".swiper-pagination",
//       },
//     });
    // cart-shopping
    var q1= document.getElementById("q1");
    function increment(){
        q1.value++;
        
       
    }
    // end shopping-card
