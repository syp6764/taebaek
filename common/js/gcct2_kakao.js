var mapContainer = document.getElementById('map'), // 지도를 표시할 div 
    mapOption = {
        center: new kakao.maps.LatLng(37.165252, 128.985365), // 지도의 중심좌표
        level: 3 // 지도의 확대 레벨
    };  

// 지도를 생성합니다    
var map = new kakao.maps.Map(mapContainer, mapOption); 
	
	
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
	
	
	function searchAddressToCoordinate(modety) {
		var title = (document.getElementById("cntrwkNm")).value;
		var address = document.getElementById("adres").value;
		var lat = document.getElementById("lat").value;
		var lng = document.getElementById("lng").value;
		
		// 주소-좌표 변환 객체를 생성합니다
		var geocoder = new kakao.maps.services.Geocoder();

		// 주소로 좌표를 검색합니다
		geocoder.addressSearch(address, function(result, status) {

		    // 정상적으로 검색이 완료됐으면 
		     if (status === kakao.maps.services.Status.OK) {

		        var coords = new kakao.maps.LatLng(result[0].y, result[0].x);

		        // 결과값으로 받은 위치를 마커로 표시합니다
		        var marker = new kakao.maps.Marker({
		            map: map,
		            position: coords
		        });

		        // 인포윈도우로 장소에 대한 설명을 표시합니다
		        var infowindow = new kakao.maps.InfoWindow({
		            content: '<div style="width:150px;text-align:center;padding:6px 0;">'+title+'</div>'
		        });
		        infowindow.open(map, marker);
				document.getElementById("lat").value = result[0].y;
				document.getElementById("lng").value = result[0].x;
		        // 지도의 중심을 결과값으로 받은 위치로 이동시킵니다
		        map.setCenter(coords);
		    } 
		});
	}