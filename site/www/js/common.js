function web_menu(a){
	//상단메뉴
	var lnb = $('#lnb'),
		depth1 = $(".top1menu");
	depth1.find(" > li > div").addClass('top2m');
	depth1.find(" > li").each(function(){
		var Index = $(this).index()+1;
		$(this).addClass('rule'+Index);
	});
	depth1.find("ul ul").show();
	mask = $( '.mask' );

	$("#lnb .top1menu ul ul ul").remove();//3차메뉴 삭제

	var depth2 = $('.top1menu .top2m'),
		lnbLeave = $(".search > button,.sub_service a");

	depth2.hide();

	lnb.css("left","");
	depth1.find(" > li > a").off();
	depth1.find(" ul > li a").off();

	var dep1_length = depth1.find(" > li").size();
	for (i=1;i <= dep1_length;i++) {
		depth1.find("> li:nth-child("+i+") .top2m").addClass('m'+i);
	}

	depth1.find(" > li").on('mouseenter focusin',function(event){
		$(this).addClass('hover');
	});
	
	depth1.find(" > li").on('mouseleave focusout',function(event){
		$(this).removeClass('hover');
	});

	depth1.find(" > li > a").on('mouseenter focusin',function(event){
		event.preventDefault ();

		depth2.hide();
		$(this).parent('.depth1').find('.top2m').stop().slideDown('8000');
		depth1.addClass('on');
		mask.show();
	});

	depth1.mouseleave(function(){
		depth2.stop().slideUp('8000');
		depth1.removeClass('on');
		mask.hide();
	});
	$('.depth1').on('mouseleave',function(){
	 	$(this).find('.top2m').stop().slideUp('8000');
	});
	

	//lnb 벗어나면 닫기
	lnbLeave.focusin(function(){
		depth2.stop().slideUp('8000');
		depth1.removeClass('on');
		mask.hide();
	});

};

function mobile_menu(a){
	//상단메뉴
	var depth1 = $(".top1menu"),
		dep1_length = depth1.find(" > li").size(),
		depLast_length = depth1.find(" > li:nth-child("+dep1_length+")  li").size();

	depth1.find(" > li > div").addClass('top2m');
	depth1.off();
	depth1.find(" > li > a").off();
	depth1.find(" ul > li a").off();

	$(".top1menu .top2m, .top1menu .top2m div").css("height","auto");
	
	depth1.find(" >  li > a").on('click',function(event){
		event.preventDefault ();
		var m_open=$(this).hasClass('active');
		if(m_open==true){
			$(this).siblings().slideUp();
			$(this).removeClass('active');
		}else{
			depth1.find(" > li > div ").stop().slideUp();
			depth1.find(" a ").removeClass('active');
			$(this).siblings().slideDown();
			$(this).addClass('active')
		}
	});

	depth1.find(" ul > li a.depth2_tit").on('click',function(event){
		var depth3_has=$(this).siblings("ul").size();
		if(depth3_has>0){
			event.preventDefault();
		}
		var m_open=$(this).hasClass('active');
		if(m_open==true){
			$(this).siblings().slideUp();
			$(this).removeClass('active');
		}else{
			depth1.find(" ul ul").stop().slideUp();
			depth1.find(" ul a").removeClass('active');
			$(this).siblings().slideDown();
			$(this).addClass('active')
		}
	});

	depth1.find(".depth3 > li a.depth3_tit").on('click',function(event){
		var depth4_has=$(this).siblings("ul").size();
		if(depth4_has>0){
			event.preventDefault();
			var m_open=$(this).hasClass('active');
			if(m_open==true){
				$(this).siblings().slideUp();
				$(this).removeClass('active');
			}else{
				$('.depth4').not($(this).siblings()).slideUp();
				$(this).siblings('.depth4').slideDown();
				$(this).addClass('active');
				return false;
			};
		};
		
	});
}

$(document).ready(function(){
	var lnb = $('#lnb'),
		m_nav_open = $('.lnb_m_nav'),
		m_nav_close = $('.mask, .lnb_close button'),
		mask = $( '.mask' ),
		gnb_m = $('.gnb'),
		bodyFrame = $( 'body, html' );
	 	m_nav_display=false;

	m_nav_open.click(function() {
		var h = $(window).height();
		lnb.animate(  { left : 0 },  500);
		bodyFrame.css("overflow",'hidden');
		mask.show();
		gnb_m.addClass('mobile_gnb');
	});
	m_nav_close.click(function() {
		lnb.animate(  { left : -300 },  500);
		bodyFrame.css('overflow', '' );
		mask.hide();
		gnb_m.removeClass('mobile_gnb');
	});
});

$(function () {
	$(window).on({
		load: function () {
			if ($(window).width() > 1000) {
				web_menu();
			}
			else {
				mobile_menu();
			}
		},
		resize: function () {
			if ($(window).width() > 1000) {
				web_menu();
			}
			else {
				mobile_menu();
			}
		}
	});
});

jQuery(function($) {
	//search
	$('.search button').on('click', function(event){
		var $target=$(event.target);
		if($target.is('.on')){
			$(this).removeClass('on').next('div').stop().hide();
			$(this).attr('class',"").html("검색영역 열기");
		}else{
			$(this).addClass('on').next('div').stop().show();
			$(this).attr('class',"on").html("검색영역 닫기");
		};
		return false;
	});
	$('.search .search_submit').on('focusout', function(){
		var Layer = $(this).parents('.search_box');
		$('.search button').removeClass('on').text('검색영역 열기');
		Layer.hide();
	});
});
