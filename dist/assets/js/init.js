

$(function(){

	/** 
	 * Swiperを使ったjsコード
	 * https://swiperjs.com/
	 */
	slideAll();
	/** 
	 * faqアコーディオンメニュー 
	 */
	acd();
	/** 
	 * フェードイン
	 */
	fadein();
	
});


var slideAll = function(){
	// swiper jsをつかったスライダーのサンプル
	var swiper_movie = new Swiper(".js-movieSlide", {
		loop: false,
		spaceBetween: 90,
		slidesPerView: 2,
		centeredSlides: true,
		pagination: {
			el: '.swiper-pagination',
			clickable: true, 
		  },
	});
	var swiper_voice = new Swiper(".js-voiceSlide", {
		loop: false,
		spaceBetween: 115,
		slidesPerView: 1.4,
		centeredSlides: true,
		pagination: {
			el: '.swiper-pagination',
			clickable: true, 
		  },
	});
}

var acd = function(){
	$('.js-acd').click(function() {
		$(this).toggleClass('-active');
		$(this).next().slideToggle(400);
	});
}


var fadein = function() {
	gsap.utils.toArray('.js-fadein').forEach(target => {
		gsap.fromTo(target, {
			opacity: 0,
			yPercent: 5,
			ease: "power1.inOut",
        }, {
			opacity: 1,
			yPercent: 0,
            scrollTrigger: {
				trigger: target,
                scrub: 1,
                start: "top bottom",
                end: "center center+=50%"
            },
        }
		);
	});
	gsap.utils.toArray('.js-slideinleft').forEach(target => {
		gsap.fromTo(target, {
			x: -100,
			opacity: 0,
			ease: "power1.inOut",
        }, {
			x: 0,
			opacity: 1,
            scrollTrigger: {
				trigger: target,
                scrub: 1,
                start: "top bottom",
                end: "center center+=20%"
            },
        }
		);
	});
	gsap.utils.toArray('.js-slideinright').forEach(target => {
		gsap.fromTo(target, {
			x: 100,
			opacity: 0,
			ease: "power1.inOut",
        }, {
			x: 0,
			opacity: 1,
            scrollTrigger: {
				trigger: target,
                scrub: 1,
                start: "top bottom",
                end: "center center+=20%"
            },
        }
		);
	});
}