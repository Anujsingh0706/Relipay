// Owlcarousel
$(document).ready(function () {
    var owl = $("#owl-carousel-1");
    owl.owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        item: 3,
        autoplay: false,
        autoplayTimeout: 3000,
        autoplayHoverPause: true,
        center: false,
        navText: [
            "<i class='fa fa-angle-left'></i>",
            "<i class='fa fa-angle-right'></i>"
        ],
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 3
            }
        }
    });
    var owl2 = $("#owl-carousel-2");
    owl2.owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        item: 4,
        autoplay: false,
        autoplayTimeout: 3000,
        autoplayHoverPause: true,
        center: false,
        navText: [
            "<i class='fa fa-angle-left'></i>",
            "<i class='fa fa-angle-right'></i>"
        ],
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 4
            }
        }
    });
    $('.owl-carousel').find('.owl-nav').removeClass('disabled');
    $('.owl-carousel').on('changed.owl.carousel', function (event) {
        $(this).find('.owl-nav').removeClass('disabled');
    });
});
const btn = document.getElementById('btn-primary-1');

btn.addEventListener('click', function onClick() {
    btn.style.background = 'transparent linear-gradient(180deg, #0077AC 0%, #101F33 100%) 0% 0% no-repeat padding-box';
    btn.style.color = ' #319ECE';
});

$('#place-1').hover(
    function() {
        $('#place-image-1').fadeIn('slow');
    },function() {
        $('#place-image-1').fadeOut('slow');
    }
)

$('#place-2').hover(
    function() {
        $('#place-image-2').fadeIn('slow');
    },function() {
        $('#place-image-2').fadeOut('slow');
    }
)

$('#place-3').hover(
    function() {
        $('#place-image-3').fadeIn('slow');
    },function() {
        $('#place-image-3').fadeOut('slow');
    }
)
$('#place-4').hover(
    function() {
        $('#place-image-4').fadeIn('slow');
    },function() {
        $('#place-image-4').fadeOut('slow');
    }
)
$('#place-5').hover(
    function() {
        $('#place-image-5').fadeIn('slow');
    },function() {
        $('#place-image-5').fadeOut('slow');
    }
)
$('#place-6').hover(
    function() {
        $('#place-image-6').fadeIn('slow');
    },function() {
        $('#place-image-6').fadeOut('slow');
    }
)
$('#place-7').hover(
    function() {
        $('#place-image-7').fadeIn('slow');
    },function() {
        $('#place-image-7').fadeOut('slow');
    }
)