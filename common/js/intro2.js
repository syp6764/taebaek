$('document').ready(function(){
    acdoEvent('.diseaseLayer','.acdoBtn','.acdoCnt');
    acdoEvent('.rouLayer1','.acdoBtn','.acdoCnt');
    acdoEvent('.rouLayer2','.acdoBtn','.acdoCnt');
    acdoEvent('.rouLayer3','.acdoBtn','.acdoCnt');
    acdoEvent('.rouLayer4','.acdoBtn','.acdoCnt');
    acdoEvent('.rouLayer5','.acdoBtn','.acdoCnt');
});

function acdoEvent( target, targetBtn, targetCnt ) {
    var $acdLayer = $(target),
        $acdBtn = $(target).find(targetBtn),
        $acdCnt = $(target).find(targetCnt);
    /*$acdLayer.find('> li:first-child').addClass('list-active');*/
    $acdBtn.on('click', function(){
        if( $(this).parent().hasClass('list-active') ) {

            $(this).parent().removeClass('list-active');
            $(this).next($acdCnt).slideUp();

        } else {

            $acdLayer.find('.list-active').removeClass('list-active');
            $acdLayer.find($acdCnt).slideUp();
            $(this).parent().addClass('list-active');
            $(this).next($acdCnt).slideDown();

        }
    });
}

$(function() {
	$('.tab_element .tabButton').on('click', function() {
		var $this = $(this),
			$MyParent = $this.parent('.tab_element'),
			IsActive = $MyParent.is('.active'),
			$OtherParents = $MyParent.siblings('.tab_element'),
			$OtherBtns = $OtherParents.find('.tabButton');
		if(!IsActive){
			$this.attr('title', '선택됨');
			$MyParent.addClass('active');
			$OtherParents.removeClass('active');
			$OtherBtns.removeAttr('title');
		};
	});
	$('.subTab_element .subTabButton').on('click', function() {
		var $this = $(this),
			$MyParent = $this.parent('.subTab_element'),
			IsActive = $MyParent.is('.active'),
			$OtherParents = $MyParent.siblings('.subTab_element'),
			$OtherBtns = $OtherParents.find('.subTabButton');
		if(!IsActive){
			$this.attr('title', '선택됨');
			$MyParent.addClass('active');
			$OtherParents.removeClass('active');
			$OtherBtns.removeAttr('title');
		};
	});
});

var nttList1;
var firstIndex1 = 0;
var lastIndex1 = 10;
var bbsNo1 = 349;

var nttList2;
var firstIndex2 = 0;
var lastIndex2 = 10;
var bbsNo2 = 349;

$('document').ready(function(){	
    //tabEvent('.tabLayout','.tabButton');
    //tabEvent('.subTab','button.subTabButton');
	
	$("#more1").trigger('click');
	$("#more2").trigger('click');
});

$(document).on("click","#more1",function(){
	getNttList1();
});

$(document).on("click","#more2",function(){
	getNttList2();
});

function getNttList1() {
	$.ajax({
		url: '/selectBbsNttListJson.do',
		data	: {'bbsNo' : bbsNo1,'firstIndex' : firstIndex1,'lastIndex' : lastIndex1, 'searchCtgry' : '양평군'},
		contentType: 'application/x-www-form-urlencoded; charset=utf-8', 
		cache : false, 
		async:false,
		type : "GET",
		dataType : "json",
		success: function (result) {
			nttList1 = JSON.parse(result);
			
			var str = "";
			for( var i = 0; i < nttList1.length; i++ ) {
				
				var strArr = nttList1[i].nttSj.split("양평군보건소");
				
				str += "<li class=\"list\">";
				str += "<button type=\"button\" class=\"acdoBtn\"> "
				str += "<span class=\"ypContact\">"+strArr[0]+"</span> <span class=\"ypTarget\">양평군보건소 "+strArr[1]+"</span> <em class=\"hoverText\">클릭하여 상세보기";
				str += "</em> </button>";
				str += "<div class=\"acdoCnt\"><div class=\"acdo_inner_wrap\"><div class=\"content_block\">	<div class=\"text_center\"><div class=\"imageZoomView\">";
				if( nttList1[i].storeFileNm != 'null' ) {
					str += "<img src=\"/DATA/bbs/"+bbsNo1+"/"+nttList1[i].storeFileNm+"\" alt=\""+nttList1[i].nttSj+"\">";
					str += "<span class=\"zoomBtn\"><a href=\"/DATA/bbs/"+bbsNo1+"/"+nttList1[i].storeFileNm+"\" target=\"_blank\" title=\"새창\">이미지 확대보기</a></span>";
				}
				str += "</div>"+nttList1[i].nttCn+"</div></div></div>	</div></li>";
				
				firstIndex1 = firstIndex1 + 1;
			}
			
			lastIndex1 = 5;
			$(".listView1").append(str);
			if( nttList1.length < 5 ) $("#more1").hide();
		}, 
		error:function(request,status,error){
			$(".listView1").append("<li class=\"list\">목록 조회에 실패하였습니다.</li>");
		}
	});	
}

function getNttList2() {
	$.ajax({
		url: '/selectBbsNttListJson.do',
		data	: {'bbsNo' : bbsNo2,'firstIndex' : firstIndex2,'lastIndex' : lastIndex2, 'searchCtgry' : '타지역'},
		cache : false, 
		async:false,
		type : "GET",
		dataType : "json",
		success: function (result) {
			nttList2 = JSON.parse(result);
			
			var str = "";
			for( var i = 0; i < nttList2.length; i++ ) {
				var strArr = nttList2[i].nttSj.split("확진자");

				str += "<li class=\"list\">";
				str += "<button type=\"button\" class=\"acdoBtn\"> "
				str += "<span class=\"ypContact\">"+strArr[0]+" 확진자</span> <span class=\"ypTarget\">"+strArr[1]+"</span> <em class=\"hoverText\">클릭하여 상세보기";
				str += "</em> </button>";
				str += "<div class=\"acdoCnt\"><div class=\"acdo_inner_wrap\"><div class=\"content_block\">	<div class=\"text_center\"><div class=\"imageZoomView\">";
				if( nttList2[i].storeFileNm != 'null' ) {
					str += "<img src=\"/DATA/bbs/"+bbsNo2+"/"+nttList2[i].storeFileNm+"\" alt=\""+nttList2[i].nttSj+"\">";
					str += "<span class=\"zoomBtn\"><a href=\"/DATA/bbs/"+bbsNo2+"/"+nttList2[i].storeFileNm+"\" target=\"_blank\" title=\"새창\">이미지 확대보기</a></span>";
				}
				str += "</div>"+nttList2[i].nttCn+"</div></div></div>	</div></li>";
				
				firstIndex2 = firstIndex2 + 1;
			}
			
			lastIndex2 = 5;
			$(".listView2").append(str);
			if( nttList2.length < 5 ) $("#more2").hide();
		}, 
		error:function(request,status,error){
			$(".listView2").append("<li class=\"list\">목록 조회에 실패하였습니다.</li>");
		}
	});	
}

$(document).on('click','.listView1 .acdoBtn', function() {
	var $acdLayer = $('.listView1'),
        $acdBtn = $('.listView1').find('.acdoBtn'),
        $acdCnt = $('.listView1').find('.acdoCnt');
	
	if( $(this).parent().hasClass('list-active') ) {

		$(this).parent().removeClass('list-active');
		$(this).next($acdCnt).slideUp();

	} else {

		$acdLayer.find('.list-active').removeClass('list-active');
		$acdLayer.find($acdCnt).slideUp();
		$(this).parent().addClass('list-active');
		$(this).next($acdCnt).slideDown();

	}
});

$(document).on('click','.listView2 .acdoBtn', function() {
	var $acdLayer = $('.listView2'),
        $acdBtn = $('.listView2').find('.acdoBtn'),
        $acdCnt = $('.listView2').find('.acdoCnt');
	
	if( $(this).parent().hasClass('list-active') ) {

		$(this).parent().removeClass('list-active');
		$(this).next($acdCnt).slideUp();

	} else {

		$acdLayer.find('.list-active').removeClass('list-active');
		$acdLayer.find($acdCnt).slideUp();
		$(this).parent().addClass('list-active');
		$(this).next($acdCnt).slideDown();

	}
});