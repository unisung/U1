/**
 * 메인 비주얼 슬라이드 함수
 */
function mainVisualSlide() {
    // 메인 비주얼 슬라이드
    const swiper = new Swiper('#main-visual', {
      direction: 'horizontal',
      speed: 1000, // 1초
      autoplay: {
        delay: 4000,  // 4초
        disableOnInteraction: false,
      },
      loop: true,
      //인디게이터
      pagination: {
          el: '.swiper-pagination',
        },
      //이전 , 다음 버튼   
      navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });

    return swiper;
}

$(function(){
  // 메인 비주얼 슬라이드
  const swiper = mainVisualSlide();

  // 메인 비주얼 슬라이드 이벤트 재생/정지 버튼
  $('#main-visual .auto-controlls button').on('click',e=>{
    const $ts = $(e.currentTarget);//현재이벤트 발생 요소
    if($ts.hasClass('play') && !self.hasClass("active")) { //비활성화된 play 버튼을 누를 경우
      $("#main-visual  .auto-controlls .stop").removeClass("active");
      swiper.autoplay.start();
    } else if(!self.hasClass("play") && !self.hasClass("active")){ //비활성화된 stop 버튼을 누를 경우
      $("#main-visual .auto-controlls .play").removeClass("active");
      swiper.autoplay.stop();
    }else{
      return false;
    }
    self.addClass("active");
  });

  $("#notice-tab-wrap h4 a").on("click", tabmenu);
  function tabmenu(e) {
    e.preventDefault(); //a태그의 기본 이벤트 제거
    var $ts = $(this);
    var $next = $ts.parent().next();
    if($next.is(":hidden")){
      $("#notice-tab-wrap h4 a").removeClass("on");
      $ts.addClass("on");
      $("#notice-tab-wrap > div:visible").hide();
      $next.show();
    }
  }
  $('.grid').isotope({
    // options
    itemSelector: '.grid-item',
    layoutMode: 'fitRows'
  });
  
}) // jQuery 문서 준비 이벤트;