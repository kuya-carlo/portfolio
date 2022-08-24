const track = document.querySelector('.carousel-track');
const images = Array.from(track.children);
const prevbtn = document.querySelector('.left-button')
const nextbtn = document.querySelector('.right-button')
const dotsNav = document.querySelector('.carousel-nav')
const dots = Array.from(dotsNav.children);
dots.pop();dots.shift();
let cslide = track.querySelector('.current-slide');

const slidesWidth = images[0].getBoundingClientRect().width;

images.forEach((slide, index) => {
    slide.style.left = index * slidesWidth + 'px';
});

const moveToSlide = (track, currentSlide, targetSlide) =>{
    track.style.transform = 'translateX(-'+ targetSlide.style.left + ')';
    currentSlide.classList.remove('current-slide');
    targetSlide.classList.add('current-slide');
}


prevbtn.addEventListener('click', e=> {
    const currentSlide = track.querySelector('.current-slide');
    const prevSlide = currentSlide.previousElementSibling;
    cslide = track.querySelector('.current-slide');
    moveToSlide(track, currentSlide, prevSlide);
});

nextbtn.addEventListener('click', e=> {
    const currentSlide = track.querySelector('.current-slide');
    const nextSlide = currentSlide.nextElementSibling;
    const currentDot = dotsNav.querySelector('.current-slide');
    cslide = track.querySelector('.current-slide');
    moveToSlide(track, currentSlide, nextSlide);
});

dotsNav.addEventListener('click', e=>{
    const targetDot = e.target.closest('button');
    if (!targetDot) return;
    const targetIndex = dots.findIndex(dot => dot === targetDot);
    const currentSlide = track.querySelector('.current-slide');
    cslide = track.querySelector('.current-slide');
    const targetSlide = images[targetIndex];

    moveToSlide(track,currentSlide,targetSlide);
});

