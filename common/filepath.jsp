<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>

<% if(request.getRemoteAddr().equals("175.212.21.90") || request.getRemoteAddr().equals("192.168.250.11") || request.getRemoteAddr().indexOf("192.168.0") > -1) { %>
<!-- 아래 내용 한신내부에서만 보이게 설정  -->
<div class="validator">
    <div class="wrap">
        <ul>
            <li><strong>View File Path</strong> : ${viewFile}</li>
        </ul>
    </div>
</div>

<%  } %>