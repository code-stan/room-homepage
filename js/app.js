import slideData from '/js/data.js';

// MOBILE MENU TOGGLE
let navMenu = document.querySelector(".nav");
let navButton = document.querySelectorAll(".mobile__menu");
let overlay = document.querySelector(".overlay");

//OPEN MENU
navButton[1].addEventListener("click", ()=>{
    navMenu.classList.add("active");
    overlay.classList.add("active");
})
//CLOSE MENU
navButton[0].addEventListener("click", ()=>{
    navMenu.classList.remove("active");
    overlay.classList.remove("active");
})

// SLIDER
let heroContentHeader = document.querySelector(".hero-content-header");
let heroContentText = document.querySelector(".hero-content-text");
let slideImg = document.querySelectorAll(".hero-image-image");
let sliderBtn = document.querySelectorAll(".slider-button button");
let sliderPg = 0;
sliderBtn[0].addEventListener("click", ()=>{
    sliderPg -=1;
    if(sliderPg <= -1){
        sliderPg = slideData.length - 1;
    }
    console.log(sliderPg)
    slideImg[0].srcset = slideData[sliderPg].heroDesktopImg;
    slideImg[0].style.animation = "changeSlide 2s 1";

    slideImg[1].src = slideData[sliderPg].heroMobileImg;

    heroContentText.textContent = slideData[sliderPg].heroContentText;
    heroContentHeader.textContent = slideData[sliderPg].heroContentHeader;

    
});
sliderBtn[1].addEventListener("click", ()=>{
    sliderPg ++;
    if(sliderPg >= slideData.length){
    sliderPg = 0;
    }
    console.log(sliderPg)
    slideImg[0].srcset = slideData[sliderPg].heroDesktopImg;
    slideImg[1].src = slideData[sliderPg].heroMobileImg;

    heroContentText.textContent = slideData[sliderPg].heroContentText;
    heroContentHeader.textContent = slideData[sliderPg].heroContentHeader;


});
