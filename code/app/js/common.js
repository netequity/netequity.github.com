// TODO refactor cpoy paste

$(function () {
	$.fn.isOnScreen = function(){
		var win = $(window);

		var viewport = {
			top : win.scrollTop(),
			left : win.scrollLeft()
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

	$('.theses_link a').click(function () {
		event.preventDefault();
		$(".theses_link_active").removeClass('theses_link_active');
		$(this).parent(".theses_link").addClass('theses_link_active');

	});
	$('.theses_link:nth-child(1) a').click(function () {
		$(".theses_image").css({
			"display": "none"
		})
		$(".theses_image:nth-child(1)").fadeIn(300);
		$(".our_thesis_text span").removeClass("span_active");
		$(".span_one").addClass("span_active");
	});

	$('.theses_link:nth-child(2) a').click(function () {
		$(".theses_image").css({
			"display": "none"
		})
		$(".theses_image:nth-child(2)").fadeIn(300);
		$(".our_thesis_text span").removeClass("span_active");
		$(".span_one").addClass("span_active");
	});
	$('.theses_link:nth-child(3) a').click(function () {
		$(".theses_image").css({
			"display": "none"
		})
		$(".theses_image:nth-child(3)").fadeIn(300);
		$(".our_thesis_text span").removeClass("span_active");
		$(".span_one").addClass("span_active");
	});
	$('.theses_link:nth-child(4) a').click(function () {
		$(".theses_image").css({
			"display": "none"
		})
		$(".theses_image:nth-child(4)").fadeIn(300);
		$(".our_thesis_text span").removeClass("span_active");
		$(".span_two").addClass("span_active");
	});
	$('.theses_link:nth-child(5) a').click(function () {
		$(".theses_image").css({
			"display": "none"
		})
		$(".theses_image:nth-child(5)").fadeIn(300);
		$(".our_thesis_text span").removeClass("span_active");
		$(".span_three").addClass("span_active");
	});
	$('.theses_link:nth-child(6) a').click(function () {
		$(".theses_image").css({
			"display": "none"
		})
		$(".theses_image:nth-child(6)").fadeIn(300);
		$(".our_thesis_text span").removeClass("span_active");
		$(".span_four").addClass("span_active");
	});
	$('.theses_link:nth-child(7) a').click(function () {
		$(".theses_image").css({
			"display": "none"
		})
		$(".theses_image:nth-child(7)").fadeIn(300);
		$(".our_thesis_text span").removeClass("span_active");
		$(".span_five").addClass("span_active");
	});


	$('.menu_link:nth-child(1)').click(function () {
		$('.menu_link_active').removeClass('menu_link_active');
		$(this).addClass('menu_link_active');
		$('.chatr_tips_active').removeClass('chatr_tips_active')
		$('.chatr_tips:nth-child(1)').addClass('chatr_tips_active');

		$('.chatr_tips ol').css({
			"display": "none"
		});

		$('.chatr_tips:nth-child(1) ol').slideDown(300);
	});

	$('.menu_link:nth-child(2)').click(function () {
		$('.menu_link_active').removeClass('menu_link_active');
		$(this).addClass('menu_link_active');
		$('.chatr_tips_active').removeClass('chatr_tips_active')
		$('.chatr_tips:nth-child(2)').addClass('chatr_tips_active');

		$('.chatr_tips ol').css({
			"display": "none"
		});
		$('.chatr_tips:nth-child(2) ol').slideDown(300);
	});

	$('.menu_link:nth-child(3)').click(function () {
		$('.menu_link_active').removeClass('menu_link_active');
		$(this).addClass('menu_link_active');
		$('.chatr_tips_active').removeClass('chatr_tips_active')
		$('.chatr_tips:nth-child(3)').addClass('chatr_tips_active');

		$('.chatr_tips ol').css({
			"display": "none"
		});
		$('.chatr_tips:nth-child(3) ol').slideDown(300);
	});

	$('.menu_link:nth-child(4)').click(function () {
		$('.menu_link_active').removeClass('menu_link_active');
		$(this).addClass('menu_link_active');
		$('.chatr_tips_active').removeClass('chatr_tips_active')
		$('.chatr_tips:nth-child(4)').addClass('chatr_tips_active');

		$('.chatr_tips ol').css({
			"display": "none"
		});
		$('.chatr_tips:nth-child(4) ol').slideDown(300);

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


	$(".footer_menu").on("click", "a", function (event) {
		event.preventDefault();
		var id = $(this).attr('href'),
			top = $(id).offset().top;

		$('body,html').animate({ scrollTop: top }, 800);
	});

	$('.down_text a').mPageScroll2id();
	$('.down a').mPageScroll2id();


	$("#what_we_do_slide_1").change(function(){
	   if ($('#what_we_do_slide_1').is(':checked')){
		    $(this).parent().css({"color" : "#18BDF1"});
		    $(".checkbox_what_we_do_img_slide_1").slideToggle(200);
		    $(".what_we_do_slide_1 span").toggleClass("arrow_active");

		} else {
		     $(this).parent().css({"color" : "#758199"});
		     $(".checkbox_what_we_do_img_slide_1").slideToggle(200);
		     $(".what_we_do_slide_1 span").toggleClass("arrow_active");
		}
	
	}) ;
	$("#what_we_do_slide_2").change(function(){
	   if ($('#what_we_do_slide_2').is(':checked')){
		    $(this).parent().css({"color" : "#18BDF1"});
		    $(".checkbox_what_we_do_img_slide_2").slideToggle(200);
		    $(".what_we_do_slide_2 span").toggleClass("arrow_active");

		} else {
		     $(this).parent().css({"color" : "#758199"});
		     $(".checkbox_what_we_do_img_slide_2").slideToggle(200);
		     $(".what_we_do_slide_2 span").toggleClass("arrow_active");
		}
	
	}) ;
	$("#what_we_do_slide_3").change(function(){
	   if ($('#what_we_do_slide_3').is(':checked')){
		    $(this).parent().css({"color" : "#18BDF1"});
		    $(".checkbox_what_we_do_img_slide_3").slideToggle(200);
		    $(".what_we_do_slide_3 span").toggleClass("arrow_active");

		} else {
		     $(this).parent().css({"color" : "#758199"});
		     $(".checkbox_what_we_do_img_slide_3").slideToggle(200);
		     $(".what_we_do_slide_3 span").toggleClass("arrow_active");
		}
	
	}) ;
	$("#what_we_do_slide_4").change(function(){
	   if ($('#what_we_do_slide_4').is(':checked')){
		    $(this).parent().css({"color" : "#18BDF1"});
		    $(".checkbox_what_we_do_img_slide_4").slideToggle(200);
		    $(".what_we_do_slide_4 span").toggleClass("arrow_active");

		} else {
		     $(this).parent().css({"color" : "#758199"});
		     $(".checkbox_what_we_do_img_slide_4").slideToggle(200);
		     $(".what_we_do_slide_4 span").toggleClass("arrow_active");
		}
	
	}) ;




	$("#our_thesis_slide_1").change(function(){
	   if ($('#our_thesis_slide_1').is(':checked')){
		    $(this).parent().css({"color" : "#18BDF1"});
		    $(".our_thesis_slide_img_1").slideToggle(200);
		    $(".our_thesis_slide_1 span").toggleClass("arrow_active");

		} else {
		     $(this).parent().css({"color" : "#758199"});
		     $(".our_thesis_slide_img_1").slideToggle(200);
		     $(".our_thesis_slide_1 span").toggleClass("arrow_active");
		}
	
	}) ;
	$("#our_thesis_slide_2").change(function(){
	   if ($('#our_thesis_slide_2').is(':checked')){
		    $(this).parent().css({"color" : "#18BDF1"});
		    $(".our_thesis_slide_img_2").slideToggle(200);
		    $(".our_thesis_slide_2 span").toggleClass("arrow_active");

		} else {
		     $(this).parent().css({"color" : "#758199"});
		     $(".our_thesis_slide_img_2").slideToggle(200);
		     $(".our_thesis_slide_2 span").toggleClass("arrow_active");
		}
	
	}) ;
	$("#our_thesis_slide_3").change(function(){
	   if ($('#our_thesis_slide_3').is(':checked')){
		    $(this).parent().css({"color" : "#18BDF1"});
		    $(".our_thesis_slide_img_3").slideToggle(200);
		    $(".our_thesis_slide_3 span").toggleClass("arrow_active");

		} else {
		     $(this).parent().css({"color" : "#758199"});
		     $(".our_thesis_slide_img_3").slideToggle(200);
		     $(".our_thesis_slide_3 span").toggleClass("arrow_active");
		}
	
	}) ;
	$("#our_thesis_slide_4").change(function(){
	   if ($('#our_thesis_slide_4').is(':checked')){
		    $(this).parent().css({"color" : "#18BDF1"});
		    $(".our_thesis_slide_img_4").slideToggle(200);
		    $(".our_thesis_slide_4 span").toggleClass("arrow_active");

		} else {
		     $(this).parent().css({"color" : "#758199"});
		     $(".our_thesis_slide_img_4").slideToggle(200);
		     $(".our_thesis_slide_4 span").toggleClass("arrow_active");
		}
	
	}) ;
	$("#our_thesis_slide_5").change(function(){
	   if ($('#our_thesis_slide_5').is(':checked')){
		    $(this).parent().css({"color" : "#18BDF1"});
		    $(".our_thesis_slide_img_5").slideToggle(200);
		    $(".our_thesis_slide_5 span").toggleClass("arrow_active");

		} else {
		     $(this).parent().css({"color" : "#758199"});
		     $(".our_thesis_slide_img_5").slideToggle(200);
		     $(".our_thesis_slide_5 span").toggleClass("arrow_active");
		}
	
	}) ;
	$("#our_thesis_slide_6").change(function(){
	   if ($('#our_thesis_slide_6').is(':checked')){
		    $(this).parent().css({"color" : "#18BDF1"});
		    $(".our_thesis_slide_img_6").slideToggle(200);
		    $(".our_thesis_slide_6 span").toggleClass("arrow_active");

		} else {
		     $(this).parent().css({"color" : "#758199"});
		     $(".our_thesis_slide_img_6").slideToggle(200);
		     $(".our_thesis_slide_6 span").toggleClass("arrow_active");
		}
	
	}) ;
	$("#our_thesis_slide_7").change(function(){
	   if ($('#our_thesis_slide_7').is(':checked')){
		    $(this).parent().css({"color" : "#18BDF1"});
		    $(".our_thesis_slide_img_7").slideToggle(200);
		    $(".our_thesis_slide_7 span").toggleClass("arrow_active");

		} else {
		     $(this).parent().css({"color" : "#758199"});
		     $(".our_thesis_slide_img_7").slideToggle(200);
		     $(".our_thesis_slide_7 span").toggleClass("arrow_active");
		}
	
	}) ;
});
