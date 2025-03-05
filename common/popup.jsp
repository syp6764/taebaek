<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ page import="java.text.*, java.sql.*"%>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>${param.title}</title>
<style type="text/css">
<!--
body {
	margin-left: 0px;
	margin-top: 0px;
	margin-right: 0px;
	margin-bottom: 0px;
}
.style2 {font-size: 13px}
-->
</style></head>
<script language="javascript">

//window.resizeTo(328,460);

	function setCookie( name, value, expiredays )
    {
		var todayDate = new Date();
		todayDate.setDate( todayDate.getDate() + expiredays );
		document.cookie = name + "=" + escape( value ) + "; path=/; expires=" + todayDate.toGMTString() + ";";
	}

	function closeWin()
	{
		if ( document.Notice.Notice1.checked )
				{
				setCookie( "divpopup${param.num}", "done" , 1);
				}

		self.close();

	}

	function url_link(go_url){
		opener.location.href = go_url;
		self.close();
	}

</script>

<body>

<form name="Notice" >

<table width="${param.width}" height="34" border="0" cellpadding="0" cellspacing="0">
	<tr colspan="2">
		<td><a href="${param.link }" target="${param.target}"><img src="/DATA/popup/${param.img }" width="${param.width}px" height="${param.height}px" alt="${param.alt}" border="0" /></a></td>
	</tr>
	<tr bgcolor="#000000">
		<td width="${param.width}px" height="40px" align="right" class="s_txt">
			<span class="style2"><font color="#ffffff">오늘하루동안 열리지 않습니다</font></span>
			<input type="checkbox" name="Notice1" onclick="closeWin()">	</td>
		<td width="11">&nbsp;</td>
	</tr>
</table>

</form>
</body>
</html>