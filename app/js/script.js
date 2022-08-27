const track = document.querySelector('.carousel-track');
const images = Array.from(track.children);
const prevbtn = document.querySelector('.left-button')
const nextbtn = document.querySelector('.right-button')
const dotsNav = document.querySelector('.carousel-nav')
const dots = Array.from(dotsNav.children);
let caption = document.querySelector('.carousel-caption');
dots.pop();dots.shift();

const slidesWidth = images[0].getBoundingClientRect().width;

images.forEach((slide, index) => {
    slide.style.left = index * slidesWidth + 'px';
});

const changeCaption = (classes, caption) => {
    let cslide_clist = Array.from(classes.querySelector('.current-slide').classList);
    let grps = ['monitor-items', 'encode-items', 'prep-items', 'colab-items', 'train-items'];
    let response = ['Monitoring Patients? Check!', 'Encoding Data? Check!', 'Preparing Rooms and Checking Equipment? Check!', 'Of course collaboration matters too!', 'As always, learning never stops!'];

    grps.forEach((group, index) => {
        if (cslide_clist.indexOf(group) != -1) {
            caption.innerHTML = response[index];
            console.log(cslide_clist.indexOf(group));
        }
    });
}

changeCaption(track, caption);
const moveToSlide = (carousel, currentSlide, targetSlide) =>{
    carousel.style.transform = 'translateX(-'+ targetSlide.style.left + ')';
    currentSlide.classList.remove('current-slide');
    targetSlide.classList.add('current-slide');
}

prevbtn.addEventListener('click', e=> {
    const currentSlide = track.querySelector('.current-slide');
    const prevSlide = currentSlide.previousElementSibling;
    cslide = track.querySelector('.current-slide');
    moveToSlide(track, currentSlide, prevSlide);
    changeCaption(track, caption);
});

nextbtn.addEventListener('click', e=> {
    const currentSlide = track.querySelector('.current-slide');
    const nextSlide = currentSlide.nextElementSibling;
    const currentDot = dotsNav.querySelector('.current-slide');
    cslide = track.querySelector('.current-slide');
    moveToSlide(track, currentSlide, nextSlide);
    changeCaption(track, caption);
});