<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ page import="java.io.*, java.util.*"%>
<%@ page import="org.apache.commons.fileupload.servlet.ServletFileUpload"%>
<%@ page import="org.apache.commons.fileupload.disk.DiskFileItemFactory"%>
<%@ page import="org.apache.commons.fileupload.FileItem"%>


<%
	String sFileInfo = "";
	//파일명 - 싱글파일업로드와 다르게 멀티파일업로드는 HEADER로 넘어옴 
	String name = request.getHeader("file-name");
	String ext = name.substring(name.lastIndexOf(".")+1);
	//파일 기본경로
	String defaultPath = config.getServletContext().getRealPath("/");			// request==>>> config (2014.11.13)
	//파일 기본경로 _ 상세경로
	String path = defaultPath + "DATA/upload" + File.separator;				// 업로드 될 경로 변경 (2014.11.13)
	File file = new File(path);
	if(!file.exists()) {
		file.mkdirs();
	}
	String realname = UUID.randomUUID().toString() + "." + ext;
	InputStream is = request.getInputStream();
	OutputStream os=new FileOutputStream(path + realname);
	int numRead;
	// 파일쓰기
	byte b[] = new byte[Integer.parseInt(request.getHeader("file-size"))];
	while((numRead = is.read(b,0,b.length)) != -1){
		os.write(b,0,numRead);
	}
	if(is != null) {
		is.close();
	}
	os.flush();
	os.close();
	sFileInfo += "&bNewLine=true&sFileName="+ name+"&sFileURL="+"/DATA/upload/"+realname;				// 업로드 될 경로 변경 (2014.11.13)
	out.println(sFileInfo);

%>