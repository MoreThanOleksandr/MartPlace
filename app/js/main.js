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
        responsive: [
            {
              breakpoint: 1150,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2
              }
            },
            {
              breakpoint: 750,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
        ]
    });
    $('.rate__star').rateYo({
        rating: 4.5,
        starWidth: "12px",
        normalFill: "#ececec",
        readOnly: true
    });

    $('.menu__btn').on('click', function () {
        $('.menu__list').slideToggle();
    });
    $('.user__box').on('click', function () {
        $('.user__list').slideToggle();
    });
    $('.notification__box').on('click', function () {
        $('.notification__menu').slideToggle();
    });
    $('.message__box').on('click', function () {
        $('.message__menu').slideToggle();
    });
    $('.cart__box').on('click', function () {
        $('.cart__menu').slideToggle();
    });
    $('.menu__list-home').on('click', function () {
        $('.menu__sublist-home').slideToggle();
    });
    $('.menu__list-all').on('click', function () {
        $('.menu__sublist-all').slideToggle();
    });
    $('.menu__list-wordpress').on('click', function () {
        $('.menu__sublist-wordpress').slideToggle();
    });
    $('.menu__pages').on('click', function () {
        $('.mega__menu').slideToggle();
    });

    $('.list-btn').on('click', function () {
        $('.products__content-inner , .favourites__products-inner').addClass('list');
        $('.list-btn').addClass('active')
        $('.grid-btn').removeClass('active');
    });
    $('.grid-btn').on('click', function () {
        $('.products__content-inner , .favourites__products-inner').removeClass('list')
        $('.grid-btn').addClass('active')
        $('.list-btn').removeClass('active');
    });

    $('.single-product__tabs .tab, .blog-aside__tabs .tab').on('click', function (event) {
        var id = $(this).attr('data-id');
        $('.single-product__tabs, .blog-aside__tabs').find('.tab-item').removeClass('active-tab').hide();
        $('.single-product__tabs .tabs, .blog-aside__tabs .tabs').find('.tab').removeClass('active');
        $(this).addClass('active');
        $('#' + id).addClass('active-tab').fadeIn();
        return false;
    });

    $('select,input[type="radio"],input[type="checkbox"]').styler();

    var mixer = mixitup('.newest__products-inner,.products__content-inner');
})