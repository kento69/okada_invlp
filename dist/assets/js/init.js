/**
 * 脱jQueryのTips：案件時は削除する
 */

/*
単一セレクタ
const title = document.querySelector("#title");

複数セレクタとループの例
const list = $(".hote");
$.each(list, function(index, item){
    console.log($(item).text());
});

イベント
document.addEventListener("click", function(event) {
    console.log(event.target.innerHTML);
}, false);

属性
document.getElementById("hoge").getAttribute("src");
カスタムデータ属性の取得
document.getElementById("hoge").dataset.fuga;


Ajax
fetch("/test_data.json")
.then(response => {
    return response.json();
})
.then(data => {
    console.log(data);
})
.catch(error => {
    console.log("エラー");
});

存在するかチェック
if (document.querySelector("hoge") != null) {
  //処理を記述
}

*/


/**
 * モバイル判定
 */
let isMobile = window.matchMedia("(max-width: 768px)");
if(isMobile.matches) {

}
/**
 * パララックス
 */
gsap.utils.toArray('.js-parallax').forEach(wrap => {
    const y = wrap.getAttribute('data-y') || -150;
    
    gsap.to(wrap, {
        y: y,    
        scrollTrigger: {
            trigger: wrap,
            start: 'top bottom',
            end: 'bottom center+=100px',
            scrub: 0.8,
        }
    })
});
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
	// コメント記入例
	/** 
	 * 使用ページ名
	 * 何をする関数なのかの説明
	 */

	/** 
	 * 共通ページ
	 * ページ上部にスムーススクロールで遷移する
	 */
	// pageTop();

	/** 
	 * 共通ページ
	 * ハンバーガーメニューの開閉を行う
	 */
	// nav();

	/** 
	 * 共通ページ
	 * ページ内リンクを押した時にスムーススクロールにする
	 */
	// smothScroll();

	/** 
	 * 共通ページ
	 * 電話番号リンク「="tel:~"」があった場合はPCで機能しなくなるようにする。hoverのCSSは効くので別途対応する必要あり
	 */
	// telLinkMobileOnly();

	/** 
	 * 共通ページ 
	 * Swiperを使ったjsコード
	 * https://swiperjs.com/
	 */
	// slideAll();
	
});

var pageTop = function(){
	// hogeの部分を書き換える
	$('.js-pageTop').click(function () {
	    $('body,html').animate({
	        scrollTop: 0
	    }, 1000);
	    return false;
	});
}

var nav = function(){
	// クラス名は合わせる
	$('.js-navBtn').click(function() {
		$(this).toggleClass('-active');
		$('.js-navTarget').fadeToggle(400);
	});
}


var smothScroll = function(){
	$('a[href^="#"]').click(function(){
		var speed = 500,
	    	href = $(this).attr("href"),
	        target = $(href == "#" || href == "" ? 'html' : href),
	        // negaHead = $('.gHeader').outerHeight(true);
	        position = target.offset().top;
		$("html, body").animate({scrollTop:position}, speed, "swing");
		return false;
	});
}

var telLinkMobileOnly = function(){
	// ユーザーエージェントを取得
	var ua = navigator.userAgent.toLowerCase(),
		isMobile = /iphone/.test(ua)||/android(.+)?mobile/.test(ua);
	// PCの時はリンクを無効化
	if (!isMobile) {
	    $('a[href^="tel:"]').on('click', function(e) {
	        e.preventDefault();
	    });
	}
}

var slideAll = function(){
	// swiper jsをつかったスライダーのサンプル
	var swiper_test = new Swiper(".js-test", {
		loop: false,
		spaceBetween: 10,
		slidesPerView: 1.1,
		scrollbar: {
			el: '.swiper-scrollbar-test',
			hide: false,
			draggable: true,
			dragSize: '66',
		},
		navigation: {
			nextEl: ".swiper-button-next-test",
			prevEl: ".swiper-button-prev-test",
		},
		breakpoints: {
			769: {
				spaceBetween: 20,
				slidesPerView: 3,
				scrollbar: {
				dragSize: '267',
				},
			},
		},
	});
}

/** 
 * jQueryをtransform対応させる関数
 * 使い方の例
 * .animate2({
	'opacity': 1,
	'transform': 'translateY(0)'
	}, 500);
 */
$.fn.animate2 = function (properties, duration, ease) {
    ease = ease || 'ease';
    var $this = this;
    var cssOrig = { transition: $this.css('transition') };
    return $this.queue(next => {
        properties['transition'] = 'all ' + duration + 'ms ' + ease;
        $this.css(properties);
        setTimeout(function () {
            $this.css(cssOrig);
            next();
        }, duration);
    });
};

var testModule = function(){

	// 実行を遅くする用のdelayの関数
	// function delayedCall(second, callBack){
	// 	if( $(window).width() >= 768 ){
	// 		setTimeout(callBack, second * 100);
	// 	}else{
	// 		setTimeout(callBack, second * 50);
	// 	}
	// }
	// 使い方
	// delayedCall(6,function(){
	// 	$.each(hoge,
	// 		function(index, elem){
	// 			$(elem)
	// 				.delay(50 * index)
	// 				.animate2({
	// 					'opacity': 1,
	// 					'transform': 'translateY(0)'
	// 				}, 500);
	// 		}
	// 	);
	// })

	// when done
	// $.when(
		
	// ).done(function() {
		
	// });
}