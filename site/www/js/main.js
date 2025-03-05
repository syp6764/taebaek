jQuery(function($){

	$('.main_tab button.button_area').click(function(event){
		var $target=$(this);
		if($target.is('.on')){
			return false;
		}else{
			$('.main_tab button.button_area').removeClass('on');
			$(this).addClass('on');
			$('.main_tab .colgroup').removeClass('active').delay(400).fadeOut();
			$('.main_tab .bg_box .tab_bg').delay(400).removeClass('active').fadeOut();
			if($target.is('.btn1')){
				$('.main_tab .colgroup1').fadeIn(function(){
					$('.main_tab .colgroup1').addClass('active');
				});
				$('.main_tab .bg_box .bg01').addClass('active').fadeIn();
			}else if($target.is('.btn2')){
				$('.main_tab .colgroup2').fadeIn(function(){
					$('.main_tab .colgroup2').addClass('active');
				});
				$('.main_tab .bg_box .bg02').addClass('active').fadeIn();
			}else{
				$('.main_tab .colgroup3').fadeIn(function(){
					$('.main_tab .colgroup3').addClass('active');
				});
				$('.main_tab .bg_box .bg03').addClass('active').fadeIn();
			};
		};		
		return false;
	});

});

//메인탭 비주얼팝업
(function($){	
	$.fn.PopupZone = function(options) {
		var settings = {
			prevBtn : '',
			nextBtn : '',
			playBtn : '',
			waitingTime : ''
		};
		
		$.extend(settings, options);
		settings.areaDiv = this;
		settings.prevBtn = $(settings.prevBtn);
		settings.nextBtn = $(settings.nextBtn);
		settings.playBtn = $(settings.playBtn);
		
		settings.cnt = settings.areaDiv.find('li').length;		
		settings.waitingTime = parseInt(settings.waitingTime);
		settings.nowNum = 0;
		settings.moveFlag = true; 
		settings.moveType;
		settings.setTimeOut;
		var status=true;
		
		function emptySetting() {
			settings.areaDiv.find('.count').html(settings.nowNum+1);
			settings.areaDiv.find('.all').html(settings.cnt);
			settings.areaDiv.find('li').hide();
			//settings.areaDiv.find('img').hide();
		}
		function setRolling(aniFlag) {
			if(!settings.moveFlag){
				if(settings.moveType=="next" || settings.moveType == null){ 
					settings.nowNum++;
					if(settings.nowNum == settings.cnt) settings.nowNum = 0;
				} else if(settings.moveType=="prev") {
					settings.nowNum--;
					if(settings.nowNum < 0) settings.nowNum = (settings.cnt-1);
				}
			}			
			emptySetting();
			if( settings.cnt < 2 ) {
				aniFlag = true;
			}
			
			if(aniFlag) settings.areaDiv.find('li').eq(settings.nowNum).show();
			else settings.areaDiv.find('li').eq(settings.nowNum).fadeIn('normal');
			 // 기본 : aniFlag 설정 없으면 fade 효과 - 조정
			
			aniFlag = false;
			settings.moveFlag = false;
			if(status){
				if( settings.cnt > 1 ) {
					settings.setTimeOut= setTimeout(setRolling , settings.waitingTime);
				}
			}
		}
		function playRolling(){
			if(status){
				console.log('a')
				clearTimeout(settings.setTimeOut);
				settings.playBtn.attr('class',"btn_play").html("팝업 롤링 재생");
				status = false;
			}else{
				console.log('b')
				settings.playBtn.attr('class',"btn_pause").html("팝업 롤링 정지");
				status = true;
				setRolling();
			}
			return false;
		}
		function prevRolling(){
			clearTimeout(settings.setTimeOut);
			settings.moveType = "prev";
			setRolling();
			return false;
		}
		function nextRolling() {
			clearTimeout(settings.setTimeOut);
			settings.moveType = "next";
			setRolling();
			return false;
		}
		setRolling();
		settings.prevBtn.click(prevRolling);
		settings.nextBtn.click(nextRolling);
		settings.playBtn.click(playRolling);
		
	};

})(jQuery);

$(document).ready(function(){
	 $('.visual').PopupZone({
		prevBtn : '.visual_control .btn_prev',
		nextBtn : '.visual_control .btn_next',
		playBtn : '.visual_control .btn_pause',
		waitingTime : '3000'
	});
});

//분야별정보
function mainVisual_slide(a) {

	var _this	= this,
		$item	   = $('.field_list .tab_cont'),
		$btns	   = $('.part_cont .btn_arrow button'),
		$btn_next	   = $('.part_cont .btn_arrow button.btn_next'),
		$btn_prev	   = $('.part_cont .btn_arrow button.btn_prev'),
		$btn_nums  = $('.part_cont .btn_number button'),
		$btn_dapth2  = $('.part_cont .tab_meun2'),
		_lens	= $item.length;
		_this.index		= 0;
		_this.next		= 0;
		_this.animated	= false;
		_this.interval	= null;
		_this.auto_play	= false;
		_this.time		= 5000; //시간

	_this.ani = function() {
		if (_this.animated) return;
		_this.animated  = true;
		$item.eq(_this.next).show();

		var btn_nums_off = $btn_nums.eq(_this.index);
			btn_nums_off.removeClass('active');
		var btn_nums_active = $btn_nums.eq(_this.next);
			btn_nums_active.addClass('active');

		var btn_dapth2_off = $btn_dapth2.eq(_this.index);
			btn_dapth2_off.removeClass('on');
		var btn_dapth2_active = $btn_dapth2.eq(_this.next);
			btn_dapth2_active.addClass('on');

		$item.eq(_this.index).fadeOut(500, function() {
			$(this).removeClass('active');
			$item.eq(_this.next).addClass('active');
			_this.animated = false;
			_this.index = _this.next;
		});
	};
	_this.nextAni = function(index) {
		if(index == null) {
		  _this.next = _this.next+1;
		}
		else{
		  _this.next = index
		}
		//_this.next = index || _this.next+1;

		if (_this.next == _lens){
			_this.next = 0;
		}
		_this.ani();
	};
	_this.prevAni = function(index) {
		if(index == null) {
		  _this.next = _this.next-1;
		}
		else{
		  _this.next = index
		}
		//_this.next = index || _this.next+1;

		if (_this.next < 0){
			_this.next = _lens-1;
		}
		_this.ani();
	};
	_this.auto = function() {
		_this.interval = setInterval(function() {
			_this.nextAni();
		}, _this.time);
	};
	_this.stop = function() {
		clearInterval(_this.interval);
		_this.interval = null;
	};

	$btn_nums.on('click', function(event) {
		var $target=$(event.target);
		if($target.is('.active') || $item.is(':animated')){
			return false;
		}

		_this.stop();
		/*
		var num_type = $(this).attr('class');
		num_type = num_type.replace('active','');
		var array_num = num_type.split("_");
		var slt_num = array_num[1]-1;

		if (slt_num == _lens) {
			slt_num = 0;
		}
		if (slt_num < 0) {
			slt_num = _lens-1;
		}
		*/
		var ThisIndex = $(this).parents('li').index(),
			ThisActive = $(this).is('.active');
		if(ThisActive==false){
			_this.nextAni(ThisIndex);
		}
		if (_this.auto_play){
			_this.auto();
		};
	});

	$btns.on('click', function() {
		/*
		var type = $(this).attr('class');
		switch(type) {
			case "btn_prev" :
				_this.stop();
				var next = _this.index - 1;
				if (next < 0 ){
					next = _lens-1;
				}

				_this.nextAni(next);
				if (_this.auto_play)
					_this.auto();
				break;
			case "btn_next" :
				_this.stop();
				var next = _this.index + 1;
				if (next == _lens) {
					next = 0;
				}
				_this.nextAni(next);
				if (_this.auto_play)
					_this.auto();
				break;
			case "btn_pause" :
					console.log('a');
					_this.stop();
					_this.auto_play = false;
					$(this).attr('class',"btn_play").html("분야별정보 롤링 재생");
			break;
			case "btn_play" :
					console.log('b');
					_this.auto();
					_this.auto_play = true;
					$(this).attr('class',"btn_pause").html("분야별정보 롤링 정지");
				break;
		}
		return false;
		*/
	});

	$btn_next.on('click', function() {
		var Animated = $item.is(':animated');
		if(Animated==false){
			_this.nextAni();
		};
	});
	$btn_prev.on('click', function() {
		var Animated = $item.is(':animated');
		if(Animated==false){
			_this.prevAni();
		};
	});

	_this.init = function( a ) {
		$item.eq(0).addClass('active');
		_this.auto_play = a || _this.auto_play;
		if (_this.auto_play) {
			_this.auto();
		}
	}
}
