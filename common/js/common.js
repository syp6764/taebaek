// 탭메뉴 공통적으로 사용
function tabOn(tab,num,img) {
	var $tab,$tab_btn;
	var tabid=tab, n=num-1, btn_img=img;

	$tab = $(tabid+'> ul > li');
	$tab_btn = $(tabid+'> ul > li > a');

	$tab_btn.siblings().hide();
	$tab.eq(n).addClass('active');
	$tab.eq(n).children('a').siblings().show();

	if(btn_img =='img'){
		var btn = $tab.eq(n).children('a').find("img");
		btn.attr("src",btn.attr("src").replace("_off","_on"));
	}

	$tab_btn.on("click",function(event){
		var realTarget = $(this).attr('href');

		if(realTarget != "#"){
			return
		}
		if(btn_img =='img'){
			for(var i=0;i<$tab.size();i++){
				var btn = $tab.eq(i).children('a').find("img");
				btn.attr("src",btn.attr("src").replace("_on","_off"));
			}
			var active = $(this).parent().attr('class');
			if(active != 'active'){
				var btn_img_off = $(this).find('img')[0];
				btn_img_off.src =  btn_img_off.src.replace('_off','_on');
			}
		}
		$tab_btn.siblings().hide();
		$tab_btn.parent().removeClass('active');

		$(this).siblings().show();
		$(this).parent().addClass('active');

		event.preventDefault();
	});
}

/* 컨텐츠용 */
function tabOrg(tabid,a,img) {
	var $tab, $tab_btn,$obj,$obj_view;
	var tabid = tabid, num = a, btn_img = img;

	$tab = $(tabid+' .tab_item  > li');
	$tab_btn = $(tabid+' .tab_item > li > a');
	$obj = $(tabid+' .tab_obj');
	$obj_view = $(tabid+' .tab_obj.n'+num);

	$tab.eq(num-1).addClass('active');
	$obj_view.show();

	if(btn_img =='img'){
		var btn = $tab.eq(num-1).children('a').find("img");
		btn.attr("src",btn.attr("src").replace("_off","_on"));
	}

	$tab.bind("click",function(event){
		if(btn_img =='img'){
			for(var i=0;i<$tab.size();i++){
				var btn = $tab.eq(i).children('a').find("img");
				btn.attr("src",btn.attr("src").replace("_on","_off"));
			}
			var active = $(this).parent().attr('class');
			if(active != 'active'){
				var btn_img_off = $(this).find('img')[0];
				btn_img_off.src =  btn_img_off.src.replace('_off','_on');
			}
		}

		var this_eq = $tab.index( $(this) );
		$tab.removeClass('active');
		$tab.eq(this_eq).addClass('active');

		$obj.hide();
		$(tabid+' .tab_obj.n'+(this_eq+1)).show();

		event.preventDefault ();
	});
}

//배너 롤링
$(document).ready(function(){
  var bn_length = $(".banner li").length;
  if (bn_length > 6)
  {
    var bannerAuto=null;
    var bannerDirect="left";

    function rightBanner(){
      $(".banner ul").stop().animate(
        {left:"-130px"},0,function(){
          var $bannerObj=$(".banner ul li:first").clone(true);
          $(".banner ul li:first").remove();
          $(".banner ul").css("left",0);
          $(".banner ul").append($bannerObj);
        }
      );
      if(bannerAuto)clearTimeout(bannerAuto);
      bannerAuto=setTimeout(rightBanner,3000)
    }

    function leftBanner(){
      $(".banner ul").stop().animate(
        {left:"0px"},0,function(){
          var $bannerObj=$(".banner ul li:last").clone(true);
          $(".banner ul li:last").remove();
          $(".banner ul").css("left","0");
          $(".banner ul").prepend($bannerObj);
        }
      );
      if(bannerAuto)clearTimeout(bannerAuto);
      bannerAuto=setTimeout(rightBanner,3000)
    }

    $(document).ready(function(){

      bannerAuto=setTimeout(rightBanner,3000)

      $rightB=$(".banner_controller .banner_next");
      $leftB=$(".banner_controller .banner_prev");
      $pauseB=$(".banner_controller .banner_ctrl");
      var bPlay = false;

      $leftB.click(function(){
        bannerDirect="left";
        clearTimeout(bannerAuto);
        leftBanner();
        return false;
        /*}*/
      });

      $rightB.click(function(){
        bannerDirect="right";
        clearTimeout(bannerAuto);
        rightBanner();
        return false;
        /*}*/
      });


      $pauseB.click(function(){
        if (bPlay == false){
          clearTimeout(bannerAuto);
          $pauseB.addClass("play").text("배너 롤링 재생하기");
          bPlay = true;
        }else{
          bPlay = false;
          $pauseB.removeClass("play").text("배너 롤링 일시정지하기");
          bannerAuto=setTimeout(rightBanner,1500)
        }
      });

      $(".banner ul li a").on("mouseover focusin", function(){
        clearTimeout(bannerAuto);
      });
      $(".banner ul li a").on("mouseleave focusout", function(){
        bPlay = false;
      });
    });
  }
});

$(document).ready(function(){
	//이미지 롤오버 
	 $(".overimg").mouseover(function (){
		var file = $(this).attr('src').split('/');
		var filename = file[file.length-1];
		var path = '';
		for(i=0 ; i < file.length-1 ; i++){
		 path = ( i == 0 )?path + file[i]:path + '/' + file[i];
		}
		$(this).attr('src',path+'/'+filename.replace('_off.','_on.'));
		
	 }).mouseout(function(){
		var file = $(this).attr('src').split('/');
		var filename = file[file.length-1];
		var path = '';
		for(i=0 ; i < file.length-1 ; i++){
		 path = ( i == 0 )?path + file[i]:path + '/' + file[i];
		}
		$(this).attr('src',path+'/'+filename.replace('_on.','_off.'));
	 });
});

jQuery(function($) {
	//language
	$('.language button').on('click', function(event){
		var $target=$(event.target);
		if($target.is('.on')){
			$(this).removeClass('on').next('div').stop().slideUp();
			$(this).children('span.skip').html("버튼열기");
		}else{
			$(this).addClass('on').next('div').stop().slideDown();
			$(this).children('span.skip').html("버튼닫기");
		};
		return false;
	});

	//풋터  - 관련사이트 바로가기
  $('.site_link .tit,.site_link .tit em').click(function(event){								 	
		 var $target=$(event.target);
		if($target.is('.on,.on em')){
			$(this).parents('.site_link').find('button').removeClass('on').next('.cont').slideUp('fast');
		}else{
		
			$('.site_link .cont').hide();
			$('.site_link .tit').removeClass('on');

			if($target.is('button')){
					$(this).addClass('on').next('.cont').stop().slideDown('fast');
			}else{
					$(this).parents('button').addClass('on').next('.cont').stop().slideDown('fast');
			}
			
		};		
		return false;
	 });
	$('.site_link .cont a').click(function(){		
		$('.site_link').find('button').removeClass('on')
		$('.site_link .cont').slideUp('fast');
	});
	$('.site_link .link_part ul li:last-child a').on('focusout', function(){
		var Layer = $(this).parents('.cont');
		Layer.slideUp();
	});
});

