const track = document.querySelector('.carousel-track');
const slides = Array.from(track.children);
const prevbtn = document.querySelector('.left-button')
const nextbtn = document.querySelector('.right-button')
const dotsNav = document.querySelector('.carousel-nav')
const dots = Array.from(dotsNav.children);
dots.pop();dots.shift();

const slidesWidth = slides[0].getBoundingClientRect().width;

slides.forEach((slide, index) => {
    slide.style.left = index * slidesWidth + 'px';
});

const moveToSlide = (track, currentSlide, targetSlide) =>{
    track.style.transform = 'translateX(-'+ targetSlide.style.left + ')';
    currentSlide.classList.remove('current-slide');
    targetSlide.classList.add('current-slide');
}
const updateDots = (currentDot, targetDot) => {
    currentDot.classList.remove('current-slide');
    targetDot.classList.add('current-slide');
}

const hideShowArrows = (slides,prevButton, nextButton, targetIndex) => {
    if (targetIndex === 0) {
        prevButton.classList.add('is-hidden');
        nextButton.classList.remove('is-hidden');
    } else if (targetIndex === slides.length - 1){
        prevButton.classList.remove('is-hidden');
        nextButton.classList.add('is-hidden');
    } else {
        prevButton.classList.remove('is-hidden');
        nextButton.classList.remove('is-hidden');
    }
}

prevbtn.addEventListener('click', e=> {
    const currentSlide = track.querySelector('.current-slide');
    const prevSlide = currentSlide.previousElementSibling;
    const currentDot = dotsNav.querySelector('.current-slide');
    const prevDot = currentDot.previousElementSibling;
    const prevIndex = slides.findIndex(slide => slide === prevSlide);
    moveToSlide(track, currentSlide, prevSlide);
    updateDots(currentDot, prevDot);
    hideShowArrows(slides, prevbtn, nextbtn, prevIndex);
})

nextbtn.addEventListener('click', e=> {
    const currentSlide = track.querySelector('.current-slide');
    const nextSlide = currentSlide.nextElementSibling;
    const currentDot = dotsNav.querySelector('.current-slide');
    const nextDot = currentDot.nextElementSibling;
    const nextIndex = slides.findIndex(slide => slide === nextSlide);
    
    moveToSlide(track, currentSlide, nextSlide);
    updateDots(currentDot, nextDot);
    hideShowArrows(slides, prevbtn, nextbtn, nextIndex);
})

dotsNav.addEventListener('click', e=>{
    const targetDot = e.target.closest('button');
    if (!targetDot) return;
    const targetIndex = dots.findIndex(dot=> dot === targetDot);
    const currentSlide = track.querySelector('.current-slide');
    const currentDot = dotsNav.querySelector('.current-slide');
    const targetSlide = slides[targetIndex];

    moveToSlide(track,currentSlide,targetSlide);
    updateDots(currentDot,targetDot);
    hideShowArrows(slides, prevbtn, nextbtn, targetIndex);
})