const slides = [
    '<div class="member__card"><div class="member__card-image-box"><img class="member__image" src="images/tomas-jackson.png" alt="Tomas Jackson"></div><h3 class="member__description">Tomas Jackson</h3></div>',
    '<div class="member__card"><div class="member__card-image-box"><img class="member__image" src="images/jane-woss.png" alt="Jane Woss"></div><h3 class="member__description">Jane Woss</h3></div>',
    '<div class="member__card"><div class="member__card-image-box"><img class="member__image" src="images/eloise-birkenston.png" alt="Eloise Birkenston"></div><h3 class="member__description">Eloise Birkenston</h3></div>',
    
    // div class="cake-fillings__item"><div class="cake-fillings__box box"><img class="box__image" src="img/pistachio-card-cakes.jpg" alt="Pistachio Queen"></div><h3 class="cake-fillings__item-title">Pistachio Queen</h3><p class="cake-fillings__item-price">$30/kg</p><p class="cake-fillings__item-description">Airy biscuits soaked in rum syrup, delicate pistachio and vanilla cream with milk-chocolate sauce.</p></div>',
]

let currentSlideIdx = 0;

function renderSlide() {
    const slideContainer = document.querySelector('.cake-fillings__items-carousel-slide');
    slideContainer.innerHTML = slides[currentSlideIdx];
    if (window.matchMedia('(min-width: 768px)').matches) {
        const secondSlideIdx = currentSlideIdx + 1 >= slides.length ? 0 : currentSlideIdx + 1;
        slideContainer.innerHTML += slides[secondSlideIdx];
        if (window.matchMedia('(min-width: 992px)').matches) {
            const thirdSlideIdx = secondSlideIdx + 1 >= slides.length ? 0 : secondSlideIdx + 1;
            slideContainer.innerHTML += slides[thirdSlideIdx];
        }
    }
}

function nextSlide() {
    currentSlideIdx = currentSlideIdx + 1 >= slides.length ? 0 : currentSlideIdx + 1;
    renderSlide();
}

function prevSlide() {
    currentSlideIdx = currentSlideIdx - 1 < 0 ? slides.length - 1 : currentSlideIdx - 1;
    renderSlide();
}

renderSlide();

const prevBtn = document.querySelector('.cake-fillings__items-carousel-btn-prev');
const nextBtn = document.querySelector('.cake-fillings__items-carousel-btn-next');

nextBtn.addEventListener('click', nextSlide);
prevBtn.addEventListener('click', prevSlide);

window.addEventListener('resize', renderSlide);