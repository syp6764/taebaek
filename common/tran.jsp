<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="ko" lang="ko">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title></title>
<meta name="title" content="" />
<meta name="author" content="" />
<meta name="keywords" content="" />
<meta name="description" content="" />
<meta http-equiv="X-UA-Compatible" content="IE=edge" />
</head>
<body>

<script>
	function fn_goUrl( url ) {
		if( confirm("이관 하시겠습니까?") ) {
			window.open('url', '_blank'); 
		}
	}
</script>

<h2>일반</h2>
<ul>
	<li><a href="/tran/dbCvplMnlFormatTrns.do" onclick="fn_goUrl(this.href); return false;">민원사무편람 이관</a></li>
	<li><a href="/tran/dbCityPolicyNtcnTrns.do" onclick="fn_goUrl(this.href); return false;">시정알리미 이관</a></li>
	<li><a href="/tran/dbQestnarTrns.do" onclick="fn_goUrl(this.href); return false;">설문조사 이관 (TBGCDA_POLLMGR_TN_QESTNAR)</a></li>
	<li><a href="/tran/dbQestnarQestnTrns.do" onclick="fn_goUrl(this.href); return false;">설문조사질문 이관 (TBGCDB_FIELD_____TN_QESTNAR_QESTN)</a></li>
	<li><a href="/tran/dbQestnarAnswerTrns.do" onclick="fn_goUrl(this.href); return false;">설문조사답변 이관 (TBGDCD_Item_TN_____QESTNAR_ANSWER)</a></li>
	<li><a href="/tran/dbQestnarRespondTrns.do" onclick="fn_goUrl(this.href); return false;">설문조사응답자 이관 (TBGCDD_POLLER_TN_____QESTNAR_RESPOND)</a></li>
	<li><a href="/tran/dbQestnarOLRspnsTrns.do" onclick="fn_goUrl(this.href); return false;">설문조사객관식 이관 (TBGCDE_ANSWER_TN_____QESTNAR_OBJCT_RSPNS)</a></li>
</ul>

<h2>대표 게시판</h2>
<ul>
	<li></li>
	<li><a href="/tran/dbBoardTrns.do?newBoard=24" onclick="fn_goUrl(this.href); return false;">[공지사항] 시정소식>알림마당>공지사항</a></li>
	<li></li>
	<li><a href="/tran/dbBoardTrns.do?board='BDCCCC01'&newBoard=104" onclick="fn_goUrl(this.href); return false;">민원안내>종합민원안내>생활민원처리>활동및처리상황>이전 처리상황 조회</a></li>
	<li><a href="/tran/dbBoardTrns.do?board='BDCCGG02'&newBoard=3" onclick="fn_goUrl(this.href); return false;">정보공개>정보공개제도>행정정보공개(2013년이전)</a></li>
	<li><a href="/tran/dbBoardTrns.do?board='BDEEAA10'&newBoard=5" onclick="fn_goUrl(this.href); return false;">정보공개>정책실명제>정책실명 자료실</a></li>
	<li><a href="/tran/dbBoardTrns.do?board='BDBBBB14'&newBoard=10" onclick="fn_goUrl(this.href); return false;">소통참여>신고센터>안전신문고>안전문화 인증샷</a></li>
	<li><a href="/tran/dbBoardTrns.do?board='BDEECC01'&newBoard=14" onclick="fn_goUrl(this.href); return false;">소통참여>시민공지신청</a></li>
	<li><a href="/tran/dbBoardTrns.do?board='BDEEAA01'&newBoard=15" onclick="fn_goUrl(this.href); return false;">소통참여>자유게시판</a></li>
	<li><a href="/tran/dbBoardTrns.do?board='BDEEAA02'&newBoard=16" onclick="fn_goUrl(this.href); return false;">소통참여>칭찬합시다</a></li>
	<li><a href="/tran/dbBoardTrns.do?board='BDEEDD02'&newBoard=17" onclick="fn_goUrl(this.href); return false;">소통참여>나눔장터>팝니다</a></li>
	<li><a href="/tran/dbBoardTrns.do?board='BDEEDD03'&newBoard=18" onclick="fn_goUrl(this.href); return false;">소통참여>나눔장터>삽니다</a></li>
	<li><a href="/tran/dbBoardTrns.do?board='BDEEDD04'&newBoard=19" onclick="fn_goUrl(this.href); return false;">소통참여>나눔장터>교환합니다</a></li>
	<li><a href="/tran/dbBoardTrns.do?board='BDEEDD05'&newBoard=20" onclick="fn_goUrl(this.href); return false;">소통참여>나눔장터>무료로 드립니다</a></li>
	<li><a href="/tran/dbBoardTrns.do?board='BDEEDD01'&newBoard=21" onclick="fn_goUrl(this.href); return false;">소통참여>나눔장터>홍보·광고</a></li>
	<li><a href="/tran/dbBoardTrns.do?board='BDEECC03'&newBoard=22" onclick="fn_goUrl(this.href); return false;">소통참여>태백시 일자리지원센터</a></li>
	<li><a href="/tran/dbBoardTrns.do?board='BDEEAA06'&newBoard=23" onclick="fn_goUrl(this.href); return false;">소통참여>주민참여예산제</a></li>
	<li><a href="/tran/dbBoardTrns.do?board='BDEEBB05'&newBoard=25" onclick="fn_goUrl(this.href); return false;">시정소식>알림마당>공고/고시</a></li>
	<li><a href="/tran/dbBoardTrns2.do?board=PBEEBB01&newBoard=26" onclick="fn_goUrl(this.href); return false;">시정소식>알림마당>입법예고</a></li>
	<li><a href="/tran/dbBoardTrns.do?board='BDEEBB08'&newBoard=27" onclick="fn_goUrl(this.href); return false;">시정소식>알림마당>시험정보</a></li>
	<li><a href="/tran/dbBoardTrns.do?board='BDEEBB09'&newBoard=28" onclick="fn_goUrl(this.href); return false;">시정소식>알림마당>인사정보</a></li>
	<li><a href="/tran/dbBoardTrns.do?board='BDMAIN01'&newBoard=29" onclick="fn_goUrl(this.href); return false;">시정소식>문화행사안내</a></li>
	<li><a href="/tran/dbBoardTrns.do?board='BDEEBB01'&newBoard=31" onclick="fn_goUrl(this.href); return false;">시정소식>보도자료>시정보도자료</a></li>
	<li><a href="/tran/dbBoardTrns.do?board='BDAADD01'&newBoard=33" onclick="fn_goUrl(this.href); return false;">시정소식>미디어 시청>포토갤러리</a></li>
	<li><a href="/tran/dbBoardTrns.do?board='BDBBBB05'&newBoard=34" onclick="fn_goUrl(this.href); return false;">시정소식>태백 소식지>시정소식지</a></li>
	<li><a href="/tran/dbBoardTrns.do?board='BDCCHH01'&newBoard=36" onclick="fn_goUrl(this.href); return false;">시정소식>태백 소식지>태백시보</a></li>
	<li></li>
	<li><a href="/tran/dbBoardTrns.do?board='BDSAAA05', 'BDSABB05', 'BDSACC05', 'BDSADD05', 'BDSAEE05', 'BDSAFF05', 'BDSAGG05', 'BDSAHH05'&newBoard=38" onclick="fn_goUrl(this.href); return false;">태백소개>동주민센터안내>주민자치위원회>새소식</a></li>
	<li><a href="/tran/dbBoardTrns.do?board='BDBBEE01'&newBoard=39" onclick="fn_goUrl(this.href); return false;">태백소개>교류협력>교류협력활동현황</a></li>
	<li><a href="/tran/dbBoardTrns.do?board='BDDDAA01'&newBoard=51" onclick="fn_goUrl(this.href); return false;">분야별정보>생활/환경>생활경제>물가정보</a></li>
	<li><a href="/tran/dbBoardTrns.do?board='BDCCGG04'&newBoard=55" onclick="fn_goUrl(this.href); return false;">분야별정보>교통/주택>건축허가 및 분양정보</a></li>
	<li><a href="/tran/dbBoardTrns.do?board='BDEEFF01'&newBoard=56" onclick="fn_goUrl(this.href); return false;">부가서비스>홈페이지운영정책</a></li>
	<li><a href="/tran/dbBoardTrns.do?board='BDEEAA08'&newBoard=57" onclick="fn_goUrl(this.href); return false;">부가서비스>홈페이지의견수렴</a></li>
	<li></li>
	<li><a href="/tran/dbMinwonBoardTrns.do?board=WMAAAA01&newBoard=9" onclick="fn_goUrl(this.href); return false;">[신고] 소통참여>신고센터>공직원부조리신고</a></li>
	<li><a href="/tran/dbMinwonBoardTrns.do?board=WMAAAA02&newBoard=11" onclick="fn_goUrl(this.href); return false;">[신고] 소통참여>신고센터>환경신문고</a></li>
	<li><a href="/tran/dbMinwonBoardTrns.do?board=WMAAAA04&newBoard=12" onclick="fn_goUrl(this.href); return false;">[신고] 소통참여>신고센터>화물운송불법신고</a></li>
	<li></li>
	<li><a href="/tran/dbMinwonBoardTrns.do?board=WMAAAA05&newBoard=103" onclick="fn_goUrl(this.href); return false;">[신고 아이프레임] 소통참여>신고센터>예산낭비신고>이전신고내용보기</a></li>
	<li></li>
	<li><a href="/tran/dbBoardTrns.do?board=http://www.taebaek.go.kr/site/home/page/sub05/sub05_02_03.asp&newBoard=32" onclick="fn_goUrl(this.href); return false;">[아이프레임] 시정소식>보도자료>언론보도</a></li>
</ul>

<h2>열린시장실 게시판</h2>
<ul>
	<li><a href="/tran/dbBoardTrns.do?board='BDBBBB04'&newBoard=59" onclick="fn_goUrl(this.href); return false;">[대표] 시정활동>현장스케치</a></li>
	<li><a href="/tran/dbBoardTrns.do?board='BDBBBB03'&newBoard=60" onclick="fn_goUrl(this.href); return false;">[대표] 시정활동>연설문</a></li>
	<li></li>
	<li><a href="/tran/dbBoardTrns.do?board=http://www.taebaek.go.kr/site/mayor/sub06_04.asp&newBoard=61" onclick="fn_goUrl(this.href); return false;">[아이프레임] 시정활동>인터뷰</a></li>
	<li><a href="/tran/dbMinwonBoardTrns.do?board=WMAAAA07&newBoard=63" onclick="fn_goUrl(this.href); return false;">[신고] 참여와 소통>시장에게 바란다</a></li>
</ul>

<h2>보건소 게시판</h2>
<ul>
	<li><a href="/tran/dbBoardTrns.do?board='BDSCHH01'&newBoard=65" onclick="fn_goUrl(this.href); return false;">[대표] 소식/민원>공지사항</a></li>
	<li><a href="/tran/dbBoardTrns.do?board='BDSCHH04'&newBoard=67" onclick="fn_goUrl(this.href); return false;">[대표] 소식/민원>포토갤러리</a></li>
	<li><a href="/tran/dbBoardTrns.do?board='BDSCHH03'&newBoard=68" onclick="fn_goUrl(this.href); return false;">[대표] 건강정보>건강이야기</a></li>
</ul>

<h2>농업기술센터 게시판</h2>
<ul>
	<li><a href="/tran/dbBoardTrns.do?board='BDSCBB02'&newBoard=69" onclick="fn_goUrl(this.href); return false;">[대표] 알림마당>포토갤러리</a></li>
	<li><a href="/tran/dbBoardTrns.do?board='BDSCBB01'&newBoard=70" onclick="fn_goUrl(this.href); return false;">[대표] 알림마당>공지사항</a></li>
</ul>

<h2>365세이프타운 게시판</h2>
<ul>
	<li><a href="/tran/db365BoardTrns1.do?board=BDAAAA01&newBoard=75" onclick="fn_goUrl(this.href); return false;">[365] 365커뮤니티>새소식>새소식</a></li>
	<li><a href="/tran/db365BoardTrns1.do?board=BDAAAA03&newBoard=79" onclick="fn_goUrl(this.href); return false;">[365] 365커뮤니티>포토갤러리</a></li>
	<li><a href="/tran/db365BoardTrns2.do?newBoard=76" onclick="fn_goUrl(this.href); return false;">[365] 365커뮤니티>새소식>언론보도</a></li>
</ul>

<h2>국민체육센터 게시판</h2>
<ul>
	<!-- <li><a href="/tran/dbBoardTrns.do?board=http://www.gungang7330.com/html/news_notice.php&newBoard=81" onclick="fn_goUrl(this.href); return false;">[ex] 열린광장>공지사항</a></li>
	<li><a href="/tran/dbBoardTrns.do?board=http://www.gungang7330.com/html/cust_faq.php&newBoard=82" onclick="fn_goUrl(this.href); return false;">[ex] 열린광장>자주묻는질문</a></li>
	<li><a href="/tran/dbBoardTrns.do?board=http://www.gungang7330.com/html/cust_voice.php&newBoard=83" onclick="fn_goUrl(this.href); return false;">[ex] 열린광장>고객의 소리</a></li> -->
</ul>

<h2>근로자종합복지관 게시판</h2>
<ul>
	<!-- <li><a href="/tran/dbBoardTrns.do?board=http://www.tblwc.com/html/news_notice.php&newBoard=85" onclick="fn_goUrl(this.href); return false;">[ex] 커뮤니티>공지사항</a></li>
	<li><a href="/tran/dbBoardTrns.do?board=http://www.tblwc.com/html/news_date.php&newBoard=87" onclick="fn_goUrl(this.href); return false;">[ex] 커뮤니티>포토갤러리</a></li> -->
</ul>

<h2>석탄박물관 게시판</h2>
<ul>
	<li><a href="/tran/dbBoardTrns.do?board='BDXXYY13'&newBoard=93" onclick="fn_goUrl(this.href); return false;">[대표] 참여마당>자유게시판</a></li>
	<li><a href="/tran/dbBoardTrns.do?board='BDXXYY14'&newBoard=94" onclick="fn_goUrl(this.href); return false;">[대표] 알림마당>새소식</a></li>
</ul>

<h2>상수도사업소 게시판</h2>
<ul>
	<li><a href="/tran/dbBoardTrns.do?board='BDSCCC01'&newBoard=117" onclick="fn_goUrl(this.href); return false;">대표>정보공개>먹는물품질공개>월별 수돗물 품질보고서</a></li>
</ul>

<h2>일반게시판 코멘트</h2>
<ul>
	<li><a href="/tran/dbBoardAnswerTrns.do" onclick="fn_goUrl(this.href); return false;">코멘트 이관</a></li>
</ul>

<h2>민원게시판 코멘트</h2>
<ul>
	<li><a href="/tran/dbMinwonBoardAnswerTrns.do?board=WMAAAA01&newBoard=9" onclick="fn_goUrl(this.href); return false;">[신고] 소통참여>신고센터>공직원부조리신고</a></li>
	<li><a href="/tran/dbMinwonBoardAnswerTrns.do?board=WMAAAA02&newBoard=11" onclick="fn_goUrl(this.href); return false;">[신고] 소통참여>신고센터>환경신문고</a></li>
	<li><a href="/tran/dbMinwonBoardAnswerTrns.do?board=WMAAAA04&newBoard=12" onclick="fn_goUrl(this.href); return false;">[신고] 소통참여>신고센터>화물운송불법신고</a></li>
	<li><a href="/tran/dbMinwonBoardAnswerTrns.do?board=WMAAAA05&newBoard=103" onclick="fn_goUrl(this.href); return false;">[신고 아이프레임] 소통참여>신고센터>예산낭비신고>이전신고내용보기</a></li>
	<li><a href="/tran/dbMinwonBoardAnswerTrns.do?board=WMAAAA07&newBoard=63" onclick="fn_goUrl(this.href); return false;">[신고] 열린시장실 > 시장에게 바란다</a></li>
</ul>

<h2>민원게시판 첨부파일</h2>
<ul>
	<li><a href="/tran/dbMinwonBoardFileTrns.do?board=WMAAAA01&newBoard=9" onclick="fn_goUrl(this.href); return false;">[신고] 소통참여>신고센터>공직원부조리신고</a></li>
	<li><a href="/tran/dbMinwonBoardFileTrns.do?board=WMAAAA02&newBoard=11" onclick="fn_goUrl(this.href); return false;">[신고] 소통참여>신고센터>환경신문고</a></li>
	<li><a href="/tran/dbMinwonBoardFileTrns.do?board=WMAAAA04&newBoard=12" onclick="fn_goUrl(this.href); return false;">[신고] 소통참여>신고센터>화물운송불법신고</a></li>
	<li><a href="/tran/dbMinwonBoardFileTrns.do?board=WMAAAA05&newBoard=103" onclick="fn_goUrl(this.href); return false;">[신고 아이프레임] 소통참여>신고센터>예산낭비신고>이전신고내용보기</a></li>
	<li><a href="/tran/dbMinwonBoardFileTrns.do?board=WMAAAA07&newBoard=63" onclick="fn_goUrl(this.href); return false;">[신고] 열린시장실 > 시장에게 바란다</a></li>
</ul>

</body>
</html>