$(function(){
	var sideMenu = $(".side_menu .side_depth1"),
		side_depth1 = sideMenu.find(">li"),
		side_depth2 = sideMenu.find(".side_depth2 > li"),
		side_depth3 = sideMenu.find(".side_depth3 > li");

	side_depth1.find('>a').on("click focus",function(){
		var this_item = $(this).parent('li');
		var side_depth2_size= $(this).next('ul').size();
		if(side_depth2_size > 0 ){
			$(this).attr('href','#n');
			if (this_item.hasClass('on')){
				//$(this).next('ul').slideUp(300);
				//this_item.removeClass('on');
			} else{
				side_depth1.find("ul").slideUp(300);
				side_depth1.removeClass('on');

				$(this).next('ul').stop().slideDown(300);
				$(this).parent().addClass('on');
			}
		}
	});
	side_depth2.find('>a').on("click focus",function(){
		side_depth2.removeClass('on');
		$(this).parent().addClass('on');
	});
	side_depth3.find('>a').on("click focus",function(){
		side_depth2.removeClass('on');
		$(this).parent().addClass('on');
	});

});

$(function(){
	var snsBtn = $(".share_button"),snsList = $(".sns_list");
	snsBtn.on("click",function(){
		if($(this).hasClass("open") == true){
			$(this).removeClass("open");
			snsList.animate({left:"0",width:"0"},500).fadeOut(100);
		} else {
			$(this).addClass("open");
			snsList.fadeIn(100).animate({left:"-70px",width:"70px"},500);
		}
	});
});

/*function parse(startString, endString, fullString) {
	var START_STRING_COUNT = startString.length,
		startIndex = 0,
		endIndex = 0,
		nowIndex = 0,
		results = [];
	
	fullString = fullString || document.documentElement.outerHTML.toLowerCase();

	while(fullString.indexOf(startString, startIndex) > -1) {
		startIndex = fullString.indexOf(startString, startIndex);
		nowIndex = startIndex + START_STRING_COUNT;
		endIndex = fullString.indexOf(endString, nowIndex);

		if(endIndex > -1) {
			results.push(fullString.substring(nowIndex, endIndex));
			startIndex = endIndex + 1;
		}else{
			break;
		}
	}

	return results;
}

//다운로드 파일 처리
$(function() {
	var file = "./downloadContentsFile.do?fileNm=",
		userAgent = navigator.userAgent.toLowerCase(),
		siteID = parse("/site/", "/", window.location.href)[0] || parse("/", "/", window.location.href)[1],
		baseDirectory = "/DATA/download/" + siteID + "/";

	$("#contents a").each(function(index) {
		var $this = $(this),
			href = $this.attr("href");
		
		//href가 있는지 확인
		if(href && href.indexOf(file) > -1) {
			href = href.replace(file, "");
			href = decodeURIComponent(href);
			href = href.replace(baseDirectory, "").replace("../../", "");

			//ie일 경우
			if(userAgent.indexOf("msie") > -1 || userAgent.indexOf("trident/7.0") > -1) {
				$this.attr("href", file + encodeURIComponent(href));
			}else{
				$this.attr("href", baseDirectory + href);
			}
		}
	});
});*/

/*$(function(){
    //상단이동
	var top_move_btn = $(".goto_top");
	top_move_btn.click(function(){
        $("html, body").animate({scrollTop : 0},400);
    });
});*/

/*
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
*/