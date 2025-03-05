//서브네이게이션
jQuery(function($){
	$('.navi_wrap button').click(function(event){								 	
		 var $target=$(event.target);
		if($target.is('.on')){
			$(this).parents('.navi_wrap').find('button').removeClass('on').next('.menu_list').slideUp();
		}else{
		
			$('.navi_wrap .menu_list').hide();
			$('.navi_wrap button').removeClass('on');

			if($target.is('button')){
					$(this).addClass('on').next('.menu_list').stop().slideDown();
			}else{
					$(this).parents('button').addClass('on').next('.menu_list').stop().slideDown();
			}
			
		};		
		return false;
	 });
	$('.navi_wrap .menu_list a, body').click(function(){		
		$('.navi_wrap').find('button').removeClass('on')
		$('.navi_wrap .menu_list').slideUp();
	});
	$('.navi_wrap .menu_list li:last-child a').on('focusout', function(){
		$('.navi_wrap').find('button').removeClass('on')
		$('.navi_wrap .menu_list').slideUp();
	});
});

// 만족도조사
function fn_validateCntntsEvalHist( frm ) {
    var valiEvl = false;
    for( var i=0; i<frm.cntntsEvlSe.length; i++ ) {
        if( frm.cntntsEvlSe[i].checked == true ) {
            valiEvl = true;
            break;
        }
    }
    if( !valiEvl ) {
        alert("만족도의 등급을 선택하지 않으셨습니다.\n만족도 등급을 선택하여 주세요.");
        fn_setFocus(frm, 'value5');
        return false;
    }
    return true;
}

