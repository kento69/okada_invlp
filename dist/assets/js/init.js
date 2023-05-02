
/**
 * フェードイン
 */
gsap.utils.toArray('.js-fadein').forEach(target => {
    gsap.fromTo(target, {
        opacity: 0,
        ease: "power1.inOut",
        }, {
            opacity: 1,
            scrollTrigger: {
                trigger: target,
                scrub: 1,
                start: "top bottom",
                end: "center center"
            },
        }
    );
});

$(function(){

	/** 
	 * 共通ページ 
	 * Swiperを使ったjsコード
	 * https://swiperjs.com/
	 */
	slideAll();
	
});


var slideAll = function(){
	// swiper jsをつかったスライダーのサンプル
	var swiper_movie = new Swiper(".js-movieSlide", {
		loop: false,
		spaceBetween: 90,
		slidesPerView: 2,
		centeredSlides: true,
	});
	var swiper_voice = new Swiper(".js-voiceSlide", {
		loop: false,
		spaceBetween: 115,
		slidesPerView: 1.4,
		centeredSlides: true,
	});
}
