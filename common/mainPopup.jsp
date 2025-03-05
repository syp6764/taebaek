<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<script type="text/JavaScript">
//<![CDATA[
	function setCookie( name, value, expiredays ) {
		var todayDate = new Date();
		todayDate.setDate( todayDate.getDate() + expiredays );
		document.cookie = name + "=" + escape( value ) + "; path=/; expires=" + todayDate.toGMTString() + ";";
	}
//]]>

</script>
<c:set var="sNumber" value="1"/>
<c:forEach items="${popupItemList}" var="popupItem">
	<c:choose>
		<c:when test="${popupItem.type=='window'}">
			<!-- 새창 팝업 시작 -->
			<script type="text/javascript">
			//<![CDATA[
				//alert("새창팝업입니다.");
				function main_getCookie(name){
					var nameOfCookie = name;
					var x = 0;
					while (x <= document.cookie.length) {
						var y = (x + nameOfCookie.length);					
						if (document.cookie.substring(x, y) == nameOfCookie) {
							if ((endOfCookie = document.cookie.indexOf(";", y)) == -1) 
									endOfCookie = document.cookie.length;
							return unescape(document.cookie.substring(y, endOfCookie));
						}
						
						x = document.cookie.indexOf(" ", x) + 1;
						if (x == 0) 
								break;
					}
					return "";
				}
				
				
				if (main_getCookie("divpopup${sNumber}") != "=done") {
					window.open('/common/popup.jsp?link=${popupItem.linkUrl}&target=${popupItem.linkTrget}&num=${sNumber}&pitem=${popupItem.popupIemNo}&img=${popupItem.imageFileNm}&width=${popupItem.popupw}&height=${popupItem.popuph}','','toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=no,resizable=no, width=${popupItem.popupw}px,height=${popupItem.popuph+35 }px, left=${popupItem.popupx }px, top=${popupItem.popupy }px');
				}
			//]]>
			</script>
		<!-- 새창 팝업 종료 -->
		</c:when>
		<c:otherwise>
			<!-- 레이어 팝업 시작 -->
			<script type="text/javascript">
			</script>
			<div id="divpopup${sNumber}" class="main_popup" style="position:absolute; left:${popupItem.popupx }px; top:${popupItem.popupy }px; z-index:1001; visibility:visible;  width:${popupItem.popupw }px; height:${popupItem.popuph }px">
					<div class="layer_cont">
						<a href="${popupItem.linkUrl }" target="${popupItem.linkTrget }"><img src="/DATA/popup/${popupItem.imageFileNm }" width="${popupItem.popupw }px" height="${popupItem.popuph }px" alt="${popupItem.imageReplcText }" /></a>
					</div>
				 
					<form name="notice_form${sNumber}">		
						<div class="layer_put clearfix" style="background:#000;padding:3px 0">
							<div style="float:left; color:#fff; font-weight:bold; "><input type="checkbox" name="chkbox${sNumber}" id="chkbox${sNumber}" value="checkbox" /><label for="chkbox1">오늘하루동안보지않기</label></div>
							
							<div style="float:right; font-weight:bold;"><a href="javascript:closeWind${sNumber}();" style="color:#ffff00;">[닫기]</a></div>
						</div>
					</form> 
			</div>
			<script type="text/JavaScript">
			//<![CDATA[
				function closeWind${sNumber}() {
					if ( document.notice_form${sNumber}.chkbox${sNumber}.checked ){
						setCookie( "maindiv${sNumber}", "done" , 1 );
					}
					document.all['divpopup${sNumber}'].style.visibility = "hidden";
				}
	
				cookiedata = document.cookie;
				if ( cookiedata.indexOf("maindiv${sNumber}=done") < 0 ){
					document.all['divpopup${sNumber}'].style.visibility = "visible";
				}
				else {
					document.all['divpopup${sNumber}'].style.visibility = "hidden";
				}
			//]]>
			</script>	
			<!-- 레이어 팝업 종료 -->	
		</c:otherwise>
		
	</c:choose>

<c:set var="sNumber" value="${sNumber+1}"/>
</c:forEach>