$(function () {
    $.fn.isOnScreen = function () {
        var win = $(window);

        var viewport = {
            top: win.scrollTop(),
            left: win.scrollLeft()
        };
        viewport.right = viewport.left + win.width();
        viewport.bottom = viewport.top + win.height();

        var bounds = this.offset();
        bounds.right = bounds.left + this.outerWidth();
        bounds.bottom = bounds.top + this.outerHeight();

        const offset = 100;

        return (!(viewport.right < bounds.left || viewport.left > bounds.right || viewport.bottom < (bounds.top + offset) || viewport.top > bounds.bottom));

    };

    $(document).on('click', '.js-videoPoster', function (e) {
        // prevent default button's behaviour
        e.preventDefault();
        var poster = $(this);
        // find closes parnt by class name
        var wrapper = poster.closest('.js-videoWrapper');
        videoPlay(wrapper);
    });


    function videoPlay(wrapper) {
        var iframe = wrapper.find('.js-videoIframe');
        var src = iframe.data('src');
        wrapper.addClass('videoWrapperActive');
        iframe.attr('src', src);
    };


    // Tezises ==========
    $('.theses_link a').click(function () {
        event.preventDefault();
        $(".theses_link_active").removeClass('theses_link_active');
        $(this).parent(".theses_link").addClass('theses_link_active');

    });

    const thesisLinks = $('.theses_link a');
    const thesisImgs = $(".theses_image");
    const thesisTexts = $(".our_thesis_text span");

    thesisLinks.each((i, link) => {
        $(link).click(() => {
            thesisImgs.css({ display: 'none' });
            $(`.theses_image:nth-child(${i + 1})`).fadeIn(300);
            thesisTexts.removeClass("span_active");

            switch (i) {
               
                
                case 0:
                case 1:
                    $(".span_one").addClass("span_active");
                    break;
                case 2:
                    $(".span_two").addClass("span_active");
                    break;
                case 3:
                    $(".span_three").addClass("span_active");
                    break;
                case 4:
                    $(".span_four").addClass("span_active");
                    break;
                case 5:
                    $(".span_five").addClass("span_active");
                    break;
                default:
            }
        })
    });

    // ================
    const whatTabsLinks = $('.menu_link');

    whatTabsLinks.each((i, link) => {
        $(link).click(function () {
            $('.menu_link_active').removeClass('menu_link_active');
            $(this).addClass('menu_link_active');
            $('.chatr_tips_active').removeClass('chatr_tips_active')
            $(`.chatr_tips:nth-child(${i + 1})`).addClass('chatr_tips_active');

            $('.chatr_tips ol').css({ "display": "none" });
            $(`.chatr_tips:nth-child(${i + 1}) ol`).slideDown(300);
        });
    });

    // In view ===========

    const nodes = document.querySelectorAll('.inview');

    function onScroll() {
        nodes.forEach(n => {
            const el = $(n);
            const delay = n.dataset.delay;
            if (el.isOnScreen() && !el.hasClass('active')) {
                setTimeout(() => el.addClass('active'), (delay || 0));
            }
        });
    }

    onScroll();

    window.addEventListener('scroll', onScroll);

    // ===================

    // OWL ===============

    let owl;
    function initOwl() {
        owl = $(".owl-carousel").owlCarousel({
            loop: true,
            margin: 0,
            nav: false,
            dots: true,
            autoplay: true,
            autoplayTimeout: 5000,
            lazyLoad: true,
            smartSpeed: 700,
            dotsContainer: '.owl-dotss',
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 1
                },
                1000: {
                    items: 1
                }
            }
        });
    }
    initOwl();

        $('.owl-dot-custom').click(function () {
                    owl.trigger('to.owl.carousel', [$(this).index(), 300]);    });

    // we need it because of broken carousel on screen resize
    window.addEventListener('resize', () => {
        owl.trigger('destroy.owl.carousel');
        setTimeout(() => initOwl(), 100)
    });

    jQuery(window).scroll(function () {
        var $sections = $('section');
        $sections.each(function (i, el) {
            var top = $(el).offset().top - 100;
            var bottom = top + $(el).height();
            var scroll = $(window).scrollTop();
            var id = $(el).attr('id');

            if (scroll > top && scroll < bottom) {
                $('li.active').removeClass('active');
                $('a[href="#' + id + '"]').parent('li').addClass('active');
            }
        })
    });

    $(".nav").on("click", "a", function (event) {
        event.preventDefault();

        var id = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({ scrollTop: top }, 800);
    });


    $("footer").on("click", ".a_footer", function (event) {
        event.preventDefault();
        var id = $(this).attr('href'),
            top = $(id).offset().top;

        $('body,html').animate({ scrollTop: top }, 800);
    });

    $('.down_text a').mPageScroll2id();
    $('.down a').mPageScroll2id();




    // ============ TODO deal with this


// what we do 
  $('.checkbox_what_we_do input').change(function () {
        
        if ($(this).is(":checked")) {
            $(this).parent().css({"color":"#18BDF1"})
            $(this).parents(".checkbox_what_we_do").find(".checkbox_what_we_do_img_slide").slideToggle(300);
             $(this).parents(".checkbox_what_we_do").find("label span").toggleClass("arrow_active");
        }
         else {
            $(this).parent().css({ "color": "#758199" })
            $(this).parents(".checkbox_what_we_do").find(".checkbox_what_we_do_img_slide").slideToggle(300)
            $(this).parents(".checkbox_what_we_do").find("label span").toggleClass("arrow_active");

            }
    });

   
// what we do

//thesis_mobile
 $('.checkbox_our_theses input').change(function () {
        
        if ($(this).is(":checked")) {
            $(this).parent().css({"color":"#18BDF1"})
            $(this).parents(".checkbox_our_theses").find(".our_thesis_slide_img").slideToggle(300);
            $(this).parents(".checkbox_our_theses").find("label span").toggleClass("arrow_active");
        }
         else {
            $(this).parent().css({ "color": "#758199" })
            $(this).parents(".checkbox_our_theses").find(".our_thesis_slide_img").slideToggle(300)
            $(this).parents(".checkbox_our_theses").find("label span").toggleClass("arrow_active");

            }
    });

    //thesis_mobile


            $('.menu-btn').on('click', function(e) {
          e.preventDefault();
          $('.menu').toggleClass('menu_active');
          $('.content').toggleClass('content_active');
        })
        $('.menu-btn').on('click', function(e) {
          e.preventDefault;
          $(this).toggleClass('menu-btn_active');
        });

        $('li a').on('click' , function(e) {
            $('.menu').removeClass('menu_active');
             $('.menu-btn').removeClass('menu-btn_active')
        });


//menu scroll
    var lastScrollTop = 0;
    $(window).scroll(function(event){
       var st = $(this).scrollTop();
       if (st > lastScrollTop){   
         $('.menu-btn').removeClass('fixed');
         $('.menu-btn').css({"top" : "-48px"});
       } else {
         $('.menu-btn').addClass('fixed');
           $('.menu-btn').css({"top" : "0px"});
       }
       lastScrollTop = st;
    });


document.addEventListener('click', function(e) {
                var map = document.querySelector('#map iframe')
                if(e.target.id === 'map') {
                    map.style.pointerEvents = 'all'
                } else {
                    map.style.pointerEvents = 'none'
                }
            })


});
