// jQuery코드를 이용한 메인 메뉴 슬라이드 효과 적용하기
// jQuery(document).ready(function(){ ~ 이 코드도 된다.

$(document).ready(function(){
    
    // ===== 메인 메뉴 슬라이드 업/다운 
    $('.navi>li').mouseover(function(){
        $(this).find('.submenu').stop().slideDown(500);
    }).mouseout(function(){
        $(this).find('.submenu').stop().slideUp(500);
    });
    
    // ===== 이미지 슬라이드 코드 부분
    $('.imageslide a:gt(0)').hide();
    setInterval(function(){
        $('.imageslide a:first-child')
        .fadeOut(1000)
        .next('a')
        .fadeIn(1000)
        .end()
        .appendTo('.imageslide');
    },3000);

    
    // ===== 공지사항에 첫 번째 글을 클릭하면 모달 창이 띄우는 코드 부분
     $('.notics li:eq(0)').click(function(){
        $('#modal').addClass("active");
     });
     
     $('.btn').click(function(){
        $('#modal').removeClass("active")
     });

     // ===== 공지사항에 두 번째 글을 클릭하면 모달 창이 띄우는 코드 부분
     $('.notics li:eq(1)').click(function(){
         $('#modal').addClass("active");
      });
     
      $('.btn').click(function(){
         $('#modal').removeClass("active")
      });

   
});



 // ===== html코드 중 footer태그에 있는 select 태그와 관련된 사이트 연결을 위한 스크립트 코드
 function navigateToSite() {
    var selectBox = document.getElementById("familySite");
    var selectedValue = selectBox.options[selectBox.selectedIndex].value;
    if (selectedValue !== "#") {
        window.location.href = selectedValue;
    }
}