$(function(){
    
    $(".js-range-slider").ionRangeSlider({
        type: "double",
        min: 0,
        max: 400,
        from: 30,
        to: 300,
        prefix: "$"
    });

    $('.features-slider__inner').slick({
        prevArrow: '<img class="slider-arrows slider-arrows__left" src="images/icons/chevron-left.svg" alt="">',
        nextArrow: '<img class="slider-arrows slider-arrows__right" src="images/icons/chevron-right.svg" alt="">',
    });
    $('.feed-slider__inner').slick({
        slidesToShow: 3,
        slidesToScroll: 3,
        prevArrow: '<img class="slider-arrows slider-arrows__left" src="images/icons/chevron-left.svg" alt="">',
        nextArrow: '<img class="slider-arrows slider-arrows__right" src="images/icons/chevron-right.svg" alt="">',
    });
    $('.rate__star').rateYo({
        rating: 4.5,
        starWidth: "12px",
        readOnly: true
    });

    $('select').styler();

    var mixer = mixitup('.newest__products-inner');
})