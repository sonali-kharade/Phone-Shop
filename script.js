
var menu= document.querySelector('#menu-btn');
var navbar = document.querySelector('.navbar');

menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}
   document.querySelector('#close-login-form').onclick=()=>{
   document.querySelector('.login-form-container').classList.remove('active');
}

document.querySelector('#login-btn').onclick=()=>{
    document.querySelector('.login-form-container').classList.toggle('active');
 }
window.onscroll = () =>{
    if(window.scrollY > 0){
           document.querySelector('.header').classList.add('active');
    }else{
        document.querySelector('.header').classList.remove('active');
    }
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
}

window.onload = () =>{
    if(window.scrollY>0){
           document.querySelector('.header').classList.add('active');
    }else{
        document.querySelector('.header').classList.remove('active');
    }
   
}
// document.querySelector('.home').onmousemove(e) =>{
//     document.querySelector('.home-parallax').forEach(elm=>{
//         let speed=elm.getAttribute('data-speed');
//         let x=(window.innerWidth - e.pagex*speed)/90;
//         let y=(window.innerHeight - e.pagey*speed)/90;

//         elm.style.transform='translateX(${y}px) translateY(${x}px)'; //check

//     });
// };
// document.querySelector('.home').onmouseleave() =>{
//     document.querySelector('.home-parallax').forEach(elm=>{
       
//         elm.style.transform='translateX(0px) translateY(0px)'; //check

//     });
// }


// phone slider Script
var swiper = new Swiper(".phones-slider", {
    slidesPerView: 1,
    spaceBetween: 20,
    loop:true,
    grabCursor:true,
    centeredSlides:true,
    autoplay: {
        delay: 7500,
        disableOnInteraction: false,
      },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1040: {     // 991
        slidesPerView: 3,
      },
    },
  });



// future phones script
var swiper = new Swiper(".featured-slider", {
  slidesPerView: 1,
  spaceBetween: 20,
  loop:true,
  grabCursor:true,
  centeredSlides:true,
  autoplay: {
      delay: 9500,
      disableOnInteraction: false,
    },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    991: {
      slidesPerView: 3,
    },
  },
});



// review section js

var swiper = new Swiper(".reviews-slider", {
  slidesPerView: 1,
  spaceBetween: 20,
  loop:true,
  grabCursor:true,
  centeredSlides:true,
  autoplay: {
      delay: 9500,
      disableOnInteraction: false,
    },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    991: {
      slidesPerView: 3,
    },
  },
});



