// 상단탑버튼

(function($){
	$(document).ready(function(){
		$(window).scroll(function(){ // 스크롤이 시작되었을때
			var position = $(window).scrollTop(); //현재 스크롤 위치값을 저장
			if (position > 200){ //현재 스크롤 위치가 200보다 더 내려갔을경우
				$("#btnTop").fadeIn(); //탑버튼으로 가는걸 보여준다.
			}else{
				$("#btnTop").fadeOut(); //탑버튼으로 가는걸 사라지게한다.
			}//end if
		});
		$("#btnTop").click(function(){  //탑버튼을 클릭할경우
			$("html, body").animate({scrollTop:0}, "fast(200)"); //브라우저의 최상단으로 이동한다. 
			return false;
		})
	});//end
})(jQuery)


