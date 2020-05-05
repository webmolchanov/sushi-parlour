$(function(){

$('.header__slider').slick({
    infitite: true,
    fade: true,
    prevArrow: '<img class="slider-arrows slider-arrows__left" src="img/arrows-left.svg" alt=""></img>',
    nextArrow: '<img class="slider-arrows slider-arrows__right" src="img/arrows-right.svg" alt=""></img>',
    asNavFor: '.slider-dots',
});

$('.navbar-btn').on('click', function(){
    $('.navbar-nav').slideToggle();
});

});