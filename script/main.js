$(document).ready(function() {
    $('.youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
        disableOn: 700,
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: false,

        fixedContentPos: false
    });
});

// burger menu //--//

$(".open-mob-menu").click(function (e) {
    $(this).toggleClass('active');
    $("header").toggleClass('active-mob-menu');
    $(".header-container .bottom-navigation-header").toggleClass('active');
})

$('a').click(function () {
    $(".open-mob-menu").removeClass('active');
    $("header").removeClass('active-mob-menu');
    $(".header-container .bottom-navigation-header").removeClass('active');
})

// faq //--//

$(".question-btn").click(function (e) {
    $(".question-btn").removeClass('active');
    $(this).toggleClass('active');
})

// scale header scroll //--//

$(window).on("scroll", function () {
    $("header").toggleClass("scroll", $(this).scrollTop() > $(window).height());
    $(".progress-bar-doc").toggleClass("scroll", $(this).scrollTop() > $(window).height());
});

// scroll padd

$.fn.isInViewport = function () {
    var elementTop = $(this).offset().top;
    var elementBottom = elementTop + $(this).outerHeight();

    var viewportTop = $(window).scrollTop();
    var viewportBottom = viewportTop + $(window).height();

    return elementBottom > viewportTop && elementTop < viewportBottom;
};

$('.scroll-check-animation').each(function () {
    if ($(this).isInViewport()) {
        $(this).addClass("active"); // action
    }
})

$(".wrapper-content-page").on('resize scroll', function () { // scroll container
    $('.scroll-check-animation').each(function () {
        if ($(this).isInViewport()) {
            $(this).addClass("active"); // action
        }
    })
});


// play cursor

$('.play-circle.a').mousemove(function (e) {

    const i = $(".play-sticky.a"),
        s = e.pageX - i.offset().left,
        o = e.pageY - i.offset().top;

    TweenMax.to($('.play-sticky.a'), .3, {
        x: (s - i.width() / 2) / i.width() * 50,
        y: (o - i.height() / 2) / i.height() * 50,
        scale: 1.2,
        ease: Power2.easeOut
    })

});

$('.play-circle.a').mouseleave(function (e) {

    const i = $(".play-sticky.a"),
        s = e.pageX - i.offset().left,
        o = e.pageY - i.offset().top;
    TweenMax.to($('.play-sticky.a'), .3, {
        x: 0,
        y: 0,
        scale: 1,
        ease: Power2.easeOut
    })

});

$('.play-circle.b').mousemove(function (e) {

    const i = $(".play-sticky.b"),
        s = e.pageX - i.offset().left,
        o = e.pageY - i.offset().top;

    TweenMax.to($('.play-sticky.b'), .3, {
        x: (s - i.width() / 2) / i.width() * 50,
        y: (o - i.height() / 2) / i.height() * 50,
        scale: 1.2,
        ease: Power2.easeOut
    })

});

$('.play-circle.b').mouseleave(function (e) {

    const i = $(".play-sticky.b"),
        s = e.pageX - i.offset().left,
        o = e.pageY - i.offset().top;
    TweenMax.to($('.play-sticky.b'), .3, {
        x: 0,
        y: 0,
        scale: 1,
        ease: Power2.easeOut
    })

});

// slider
$('.slider-for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.slider-nav'
});

$('.slider-nav').slick({
    slidesToShow: 6,
    slidesToScroll: 1,
    asNavFor: '.slider-for',
    dots: false,
    autoplay: true,
    autoplaySpeed: 4000,
    focusOnSelect: true,
    responsive: [
        {
          breakpoint: 1247,
          settings: {
            slidesToShow: 5,
            slidesToScroll: 1,
            infinite: true,
          }
        },
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
          }
        }
    ]
});

$('a[data-slide]').click(function(e) {
    e.preventDefault();
    var slideno = $(this).data('slide');
    $('.slider-nav').slick('slickGoTo', slideno - 1);
});