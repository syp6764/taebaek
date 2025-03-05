 
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="ko" lang="ko">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
<title>제천시</title>
<meta name="title" content="제천시" />
<meta name="author" content="제천시" />
<meta name="keywords" content="제천시 소개" />
<meta name="description" content="제천시 홈페이지에 오신것을 환영합니다." />
<meta http-equiv="X-UA-Compatible" content="IE=edge" />
<script type="text/javascript"> 
//<![CDATA[
function initExternalRef(){
	document.writeln('<link rel="stylesheet" type="text/css" href="/common/css/print.css" />');
	document.writeln('<link rel="stylesheet" type="text/css" href="/site/www/css/sub.css" />');
}
initExternalRef();
 
 
window.onload = function() {
 
	var content = opener.document.getElementById('contents').outerHTML;
 
	//var RegExpTag = /<(\/?)a>/gi;
	//content = content.replace(RegExpTag,"");
	//var RegExpTag = /<a[^>](.*?)>/gi;
	//content = content.replace(RegExpTag,"");
	var RegExpTag = /href="(.*?)"/gi;
	content = content.replace(RegExpTag,"");
	document.getElementById('contents').innerHTML = content;
	
	var title = opener.document.getElementById('colgroup').getElementsByTagName("div")[1].getElementsByTagName("h1")[0].outerHTML;
	document.getElementById('sub_title').innerHTML = title;
	
	//var path = opener.document.getElementById('sub_head').getElementsByTagName("div")[1].outerHTML;
	//document.getElementById('paths').innerHTML = path;
 
}
 
function printArea() {
	beforePrint();
	window.print();
	afterPrint();
}
 
var initBody;
function beforePrint() {
	initBody = document.body.outerHTML;
	document.body.innerHTML = document.getElementById('bodys').outerHTML;
}
function afterPrint() {
	document.body.innerHTML = initBody;
}
 
setTimeout (function () {
	beforePrint();
	window.print();
	afterPrint();
},1000);
	
//]]>
</script>
 
</head>
<body>
<h1 class="text_center">제천시 웹페이지 인쇄하기 - Jecheon - Page Print</h1>
<!--<h1 class="text_center"><img src="/common/images/print/print_top.gif" width="750" height="49" alt="제천시 웹페이지 인쇄하기 - Jecheon - Page Print"/></h1>-->
<div class="contetns" id="bodys">
        <div id="sub_head NG">
          <div id="sub_title">
 
           <!-- //sub_title -->
          </div>
          <!--<div id="paths">
                    
			
            <!-- //path
          </div>-->
          <!-- //sub_head -->
        </div>
 
 
		<div id="contents">
		</div>
 
</div>
<% //<p class="print_foot"><a href="#n" onclick="printArea()" class="btnB_01">출력하기</a><a href="#n" onclick="window.close();" class="btnB_02"><span>창닫기</span></a></p> %>
<br />
</body>
</html>

