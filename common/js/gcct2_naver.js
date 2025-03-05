	function popUpCommonSimple( path , winName , widthSize , heightSize ){
		var winHandle;
		var topPoint = (window.screen.height-heightSize)/2;
		var leftPoint = (window.screen.width-widthSize)/2;
		if(winHandle) winHandle.close();
			winHandle = window.open( path , winName, "width="+ widthSize +", height=" + heightSize + ", status=0, location=0, menubar=0, toolbar=0, scrollbars=auto, help=0, hide=0, center=yes, left=" + leftPoint + ", top=" + topPoint );
		if(winHandle==null){
			alert("사용자 설정에 의해 팝업이 차단되었습니다. \n\n자세한 내용을 보시려면 [도구]-[인터넷옵션]-[개인정보] 화면에서 팝업차단 체크를 해제하여 주십시오."); 
		}else{
			winHandle.focus();
		}
			return winHandle;
	}

	function fn_postCodeSearch(zipcodeId,addressId,detailAddressId) {
		var path = "/common/juso/jusoPopup.jsp";
		popUpCommonSimple( path , 'postcode', 570,420 );
	}
	
	function jusoCallBack(roadFullAddr,roadAddrPart1,addrDetail,roadAddrPart2,engAddr,jibunAddr, zipNo, admCd, rnMgtSn, bdMgtSn)
	{
		$("#adres").val(roadAddrPart1);
		$("#detailAdress").val(addrDetail);
		$("#zip").val(zipNo);
		searchAddressToCoordinate('adres');
	}
	
	function compactTrim(str) {
		return str.replace( /(\s*)/g, "" );
	}

	var map = new naver.maps.Map("map", {
		center: new naver.maps.LatLng(37.165252, 128.985365),
		zoom: 12,
		mapTypeControl: false,
		scrollWheel: false,
		zoomControl: true, //줌 컨트롤의 표시 여부
		zoomControlOptions: { //줌 컨트롤의 옵션
			position: naver.maps.Position.TOP_RIGHT
		}
	});

	var infoWindow = new naver.maps.InfoWindow({
		anchorSkew: true
	});
	
	var markers = [];
	var infowindows = [];
	
	var marker = new naver.maps.Marker({
	});
	
	map.setCursor('pointer');
	
	function searchAddressToCoordinate(modety) {
		var title = (document.getElementById("cntrwkNm")).value;
		var address = document.getElementById("adres").value;
		var lat = document.getElementById("lat").value;
		var lng = document.getElementById("lng").value;
		
		naver.maps.Service.geocode({
				address: address
		}, function(status, response) {
			if (status === naver.maps.Service.Status.ERROR) {
				if( !compactTrim(lat) || !compactTrim(lng) ) {
					return alert('Something Wrong!');
				}
			}
			
			if( !compactTrim(lat) || !compactTrim(lng) || modety == 'adres' ) {
				var item = response.result.items[0],
					addrType = item.isRoadAddress ? '[도로명 주소]' : '[지번 주소]',
					point = new naver.maps.Point(item.point.x, item.point.y);
				
				document.getElementById("lat").value = item.point.y;
				document.getElementById("lng").value = item.point.x;
			}
			
			lat = document.getElementById("lat").value;
			lng = document.getElementById("lng").value;		
			
			point = new naver.maps.Point(lng,lat);
			marker = new naver.maps.Marker({
				position: new naver.maps.LatLng(lat, lng),
				map: map
			});
			markers.push(marker);

			map.setCenter(point);
			
			if( title ) {
				infoWindow.setContent([
					'<div style="padding:10px;line-height:120%;">',
					'<h4 style="margin-top:5px;">'+title+'</h4>',
					'</div>'
				].join('\n'));

				infoWindow.open(map, marker);
				infowindows.push(infoWindow);
			}
		});
	}

	naver.maps.Event.addListener(map, 'click', function(e) {
		var title = (document.getElementById("cntrwkNm")).value;
		var address = document.getElementById("adres").value;
		var lat = e.coord._lat;
		var lng = e.coord._lng;
		hideMarkers();
		
		marker.setPosition(e.coord);
		
		marker = new naver.maps.Marker({
			position: new naver.maps.LatLng(lat, lng),
			map: map
		});
		markers.push(marker);
		
		map.setCenter(e.coord);
		if( title ) {
			infoWindow.setContent([
				'<div style="padding:10px;line-height:150%;">',
				'<h4 style="margin-top:5px;">'+title+'</h4>',
				'</div>'
			].join('\n'));

			infoWindow.open(map, marker);
			infowindows.push(infoWindow);
		}

		document.getElementById("lat").value = lat;
		document.getElementById("lng").value = lng;
	});

	function setMarkers(map) {
		for (var i = 0; i < markers.length; i++) {
			markers[i].setMap(map);
		}

		for (var i = 0; i < infowindows.length; i++) {
			infowindows[i].setMap(map);
		}       
	}
				
	function hideMarkers() {
		setMarkers(null);
	}

	function fn_crdntSearch(event) {
		var objMap = document.getElementById("map");
		var adres = document.getElementById("adres").value;
		var lat = document.getElementById("lat").value;
		var lng = document.getElementById("lng").value;
		
		if( compactTrim(adres) || ( compactTrim(lat) && compactTrim(lng) ) ) {
			searchAddressToCoordinate('');
		}
		else {
			alert("주소를 검색해 주세요");
			return false;
		}
		
		// 지도창 열기 닫기
		mapPosition(event, objMap);

		if( objMap.style.visibility == 'hidden' ) {
			document.getElementById("crdntSearchTxt").textContent = "지도닫기";
			objMap.style.visibility = "visible";
		}
		else {
			document.getElementById("crdntSearchTxt").textContent = "지도열기";
			objMap.style.visibility = "hidden";
		}
	}
	
	function mapPosition(event, objMap) {
		evt = event || window.event;
		var x = 0;
		var y = 0;
		if (evt.pageX) {
			x = evt.pageX - 350;
			y = evt.pageY - 382;
		} else if (evt.clientX) {
			var offsetX = 0;
			var offsetY = 0;
			if (document.documentElement.scrollLeft) {
				offsetX = ducument.documentElement.scrollLeft;
				offsetY = ducument.documentElement.scrollTop;
			} else if (document.body) {
				offsetX = document.body.scrollLeft;
				offsetY = document.body.scrollTop;
			}
			x = evt.clientX + offsetX + 50;
			y = evt.clientY + offsetY - 50;
		}
		var style= "left: " + x + "px; top: " + y + "px;";
		objMap.style.top = y+"px";
		objMap.style.left = x+"px";
	}