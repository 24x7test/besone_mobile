// ���ž��ư

(function($){
	$(document).ready(function(){
		$(window).scroll(function(){ // ��ũ���� ���۵Ǿ�����
			var position = $(window).scrollTop(); //���� ��ũ�� ��ġ���� ����
			if (position > 200){ //���� ��ũ�� ��ġ�� 200���� �� �����������
				$("#btnTop").fadeIn(); //ž��ư���� ���°� �����ش�.
			}else{
				$("#btnTop").fadeOut(); //ž��ư���� ���°� ��������Ѵ�.
			}//end if
		});
		$("#btnTop").click(function(){  //ž��ư�� Ŭ���Ұ��
			$("html, body").animate({scrollTop:0}, "fast(200)"); //�������� �ֻ������ �̵��Ѵ�. 
			return false;
		})
	});//end
})(jQuery)


