const slides = document.querySelector('.slides');
const slide = document.querySelectorAll('.slides > li');
const onebtn = document.querySelector('.one');
const twobtn = document.querySelector('.two');
const threebtn = document.querySelector('.three');
const slideWidth = 400;

let slideCount = slide.length;
let slideIdx = 0;

makeClone();
setslidepos();
setInterval(function(){
    moveslide();
}, 2000);

function makeClone(){
    for(let i = slideCount - 1; i >= 0; i --){
        let cloneslide = slide[i].cloneNode(true);
        cloneslide.classList.add('clone');
        slides.prepend(cloneslide);
    }
    for(let i = 0; i < slideCount; i ++){
        let cloneslide = slide[i].cloneNode(true);
        cloneslide.classList.add('clone');
        slides.appendChild(cloneslide);
    }
}
function setslidepos(){
    updatewidth();
    slides.style.transform = 'translateX(' + (-slide.length * slideWidth) + 'px)';
}
function updatewidth(){
    let newslides = document.querySelectorAll('.slides > li');
    slides.style.width = newslides.length * slideWidth + 'px';
}
function moveslide(){
    slides.classList.add('animated');
    slideIdx += 1;
    slides.style.left = (slideIdx * -slideWidth) + 'px';

    if (slideIdx == slideCount){
        slides.style.left = (slideIdx * -slideWidth) + 'px';
        setTimeout(function(){
            slides.classList.remove('animated');
            slideIdx = 0;
            slides.style.left = 0;
        }, 600);
    }
}
function clickbtn(){
    
}