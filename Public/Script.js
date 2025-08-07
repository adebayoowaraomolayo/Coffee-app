const menuOPenButton = document.querySelector("#menu-open-button");
const menuCloseButton = document.querySelector("#menu-open-button");

menuOPenButton.addEventListener("click", () => {
    // Toggle moble menu visibility
    document.body.classList.toggle("show-mobile-menu"); 

});

// Close menu when the button is clicked
menuCloseButton.addEventListener("click", () => menuOPenButton.click
());


// Initialize Swiper
const swiper = new Swiper('.swiper', {
    loop: true,

    // if we need pagination
    pagination: {
        el: '.swiper-pagination',
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});
  