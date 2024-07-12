var testiomnialData = [
    {
        name: "GABRIEL",
        review: "I wanted to share my experience of working with WB Soft Tech, who designed the landing page for my agency. He did an excellent job in its construction. I must commend his patience and attentiveness to my instructions throughout the process. I requested several adjustments to the site—about 6-7 times—and he accommodated each change calmly and professionally without any sign of frustration."
    },
    {
        name: "WILLIAM BUTLER",
        review: "WB Soft Tech prioritizes customer satisfaction and product quality above all else. My experience working with their team has been exceptional, and I eagerly anticipate expanding my business ventures further based on their patience and consistently high-quality results."
    },
    {
        name: "CAMERON EVANS",
        review: "This company goes above and beyond to support you from the very beginning! They are incredibly helpful and friendly, taking the time to discuss business ideas, website design and development, marketing strategies, and more. I'm grateful to have them on my team!"
    },
    {
        name: "DANIELLE LOVEJOY",
        review: "As a small business owner, I had delayed building my site for years. From the moment they contacted me, their communication was clear, professional, and perfectly explained. The Lead Developer, Sven, guided me through every step with patience and expertise"
    },
    {
        name: "CAMERON EVANS",
        review: "This company goes above and beyond to support you from the very beginning! They are incredibly helpful and friendly, taking the time to discuss business ideas, website design and development, marketing strategies, and more. I'm grateful to have them on my team!"
    },
    {
        name: "CAMERON EVANS",
        review: "This company goes above and beyond to support you from the very beginning! They are incredibly helpful and friendly, taking the time to discuss business ideas, website design and development, marketing strategies, and more. I'm grateful to have them on my team!"
    },
    {
        name: "CAMERON EVANS",
        review: "This company goes above and beyond to support you from the very beginning! They are incredibly helpful and friendly, taking the time to discuss business ideas, website design and development, marketing strategies, and more. I'm grateful to have them on my team!"
    },]
var slideHolder = document.querySelector("#slideHolder")
for (let i of testiomnialData) slideHolder.innerHTML += `<div class="swiper-slide"><div class="ContentHolder"><h3>${i.name}</h3><p>${i.review}</p></div></div>`

const swiper = new Swiper('#craouselContainer', {
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 2.3,
    loop: true,
    spaceBetween: 30,
    effect: "coverflow",
    coverflowEffect: {
        rotate: 0,
        depth: 800,
        slideShadows: true,
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true
    },
    autoplay: { delay: 1000 }
});
window.onresize = queryResizer
queryResizer()
function queryResizer() {
    if (window.innerWidth < 724) swiper.params.slidesPerView = 2
    if (window.innerWidth > 501) swiper.params.slidesPerView = 2
    if (window.innerWidth > 724) swiper.params.slidesPerView = 2.3
    if (window.innerWidth < 501) swiper.params.slidesPerView = 1
    swiper.update()
}