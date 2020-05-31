$(function(){
    
    $('.features-slider__inner').slick({
        prevArrow: '<img class="slider-arrows slider-arrows__left" src="images/icons/chevron-left.svg" alt="">',
        nextArrow: '<img class="slider-arrows slider-arrows__right" src="images/icons/chevron-right.svg" alt="">',
    });
    $('.rate__star').rateYo({
        rating: 4.5,
        starWidth: "12px",
        readOnly: true
    });

    var mixer = mixitup('.newest__products-inner');
})