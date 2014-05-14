 var currentPage=0;
 var NumberOfImages = 3;
 var menuarray = [{fullurl: "apple.html",hashurl:"#apple"}];
 var htmlarray = [{fullurl:"index.html",hashurl:"#"},{fullurl:"BehindWorks.html",hashurl:"#bhworks"},{fullurl:"Crew.html",hashurl:"#crew"}];
 boxAnimate();

 $(document).ready(function() {
	 
 $("#phone a").hover(function(){
		 $(this).css({"opacity":"1"});
	 },function(){
		 $(this).css({"opacity":"0.8"});
	 });
	 $("#map a").hover(function(){
		 $(this).css({"opacity":"1"});
	 },function(){
		 $(this).css({"opacity":"0.8"});
	 });
	if($(window).width() == 768){
		
		$('#contact').css({"top":"120px","transform":"rotate(15deg)","right":"-264px"});
		$('#contact').bind({
			mouseenter: function(e) {
				$(this).css({"top":"120px","transform":"rotate(0deg)"}).stop(true).animate({"right":0},800);
				$("#phone a").css({"opacity":"0.8"});
				$("#map a").css({"opacity":"0.8"});
			},
			mouseleave: function(e) {
				
				$(this).stop(true).animate({"right":-264},800,function(){
					$(this).css({"top":"120px","transform":"rotate(15deg)"});
					$("#phone a").css({"opacity":"1"});
					$("#map a").css({"opacity":"1"});
				});
			}
		});
		
		$("#contact").click(function(){
		if($(this).hasClass('toggleClass')){
			
			$(this).stop(true).animate({"right":-264},800,function(){
				$(this).css({"top":"120px","transform":"rotate(15deg)"})
				$("#phone a").css({"opacity":"1"});
				$("#map a").css({"opacity":"1"});
			});
			
			$(this).removeClass('toggleClass');
			$("#contact").bind('mouseleave',function(){
				
				$(this).stop(true).animate({"right":-264},800,function(){
					$(this).css({"top":"120px","transform":"rotate(15deg)"});
					$("#phone a").css({"opacity":"1"});
					$("#map a").css({"opacity":"1"});
				});
			});
		}
		else{
			$("#contact").unbind('mouseleave');
			$(this).css({"top":"120px","transform":"rotate(0deg)"}).stop(true).animate({"right":0},800);
			$("#phone a").css({"opacity":"0.8"});
			$("#map a").css({"opacity":"0.8"});
			$(this).addClass('toggleClass');
		}
	});
	
}
else{
	$("#contact").css({"top":"40px","transform":"rotate(15deg)"});
		$("#contact").css('right',-(screen.width-1016)+'px');
		$('#contact').bind({
			mouseenter: function(e) {
				$(this).css({"top":"30px","transform":"rotate(0deg)"}).stop(true).animate({"right":0},800);
				$("#phone a").css({"opacity":"0.8"});
				$("#map a").css({"opacity":"0.8"});
			},
			mouseleave: function(e) {
				
				$(this).stop(true).animate({"right":-(screen.width-1016)},800,function(){
					$(this).css({"top":"40px","transform":"rotate(15deg)"});
					$("#phone a").css({"opacity":"1"});
					$("#map a").css({"opacity":"1"});
				});
			}
		});
		
		$("#contact").click(function(){
		if($(this).hasClass('toggleClass')){
			
			$(this).stop(true).animate({"right":-(screen.width-1016)},800,function(){
				$(this).css({"top":"40px","transform":"rotate(15deg)"});
				$("#phone a").css({"opacity":"1"});
				$("#map a").css({"opacity":"1"});
			});
			$("#title").show();
			$("#social-links").show();	
			$("#address").show();
			$("#phone-map-content").show();
			$("#contact iframe").hide();
			$(this).removeClass('toggleClass');
			$("#contact").bind('mouseleave',function(){
				
				$(this).stop(true).animate({"right":-(screen.width-1016)},800,function(){
					$(this).css({"top":"40px","transform":"rotate(15deg)"});
					$("#phone a").css({"opacity":"1"});
					$("#map a").css({"opacity":"1"});
				});
			});
		}
		else{
			$("#contact").unbind('mouseleave');
			$(this).css({"top":"30px","transform":"rotate(0deg)"}).stop(true).animate({"right":0},800);
			$("#phone a").css({"opacity":"0.8"});
			$("#map a").css({"opacity":"0.8"});
			$(this).addClass('toggleClass');
		}
	});
}
		
 
 $("#apple img").show();
  $("#android").hover(function(){
	$("#android img").slideDown();
	$("#android a").hide();
 },function(){
	$("#android a").show();
	$("#android img").hide();
 });
 $("#windows").hover(function(){
	$("#windows img").slideDown();
	$("#windows a").hide();
 },function(){
	$("#windows a").show();
	$("#windows img").hide();
 });
  $("#web").hover(function(){
	$("#web img").slideDown();
	$("#web a").hide();
 },function(){
	$("#web a").show();
	$("#web img").hide();
 });
  $("#android").click(function(){
	window.location.hash ="#android";
	
	$("#page-wrapper").fadeOut('fast',loadContent);
	function loadContent() {
			$('#page-wrapper').load('android.html','',showNewContent())
		}
		function showNewContent() {
			$('#page-wrapper').fadeIn('fast');
		}
 });
 
 $("#windows").click(function(){
	window.location.hash ="#windows";
	
$("#page-wrapper").fadeOut('fast',loadContent);
	function loadContent() {
			$('#page-wrapper').load('windows.html','',showNewContent())
		}
		function showNewContent() {
			$('#page-wrapper').fadeIn('fast');
		}
	
 });
 $("#web").click(function(){
	
	window.location.hash ="#web";
	$("#page-wrapper").fadeOut('fast',loadContent);
	function loadContent() {
			$('#page-wrapper').load('web.html','',showNewContent())
		}
		function showNewContent() {
			$('#page-wrapper').fadeIn('fast');
		}
 });
 
	$( ".apple-sub-menu div a" ).click(function() {
	
		if($(this).attr('href')=='#iphone'){
		
		if($('.menu-iphone').attr('src') == "img/check_box.png"){
		
			$('.menu-iphone').attr('src','img/uncheck_box.png');
			
			$(".iphone").hide();
			$('#ipad').css({"pointer-events": "none"});
		}
		else{
			$('.menu-iphone').attr('src','img/check_box.png');
			$(".iphone").show();
			$('#ipad').css({"pointer-events": "auto"});
		}
		}
		if($(this).attr('href')=='#ipad'){
		
		if($('.menu-ipad').attr('src') == "img/check_box.png"){
			
			$('.menu-ipad').attr('src','img/uncheck_box.png');
			$("#iphone").css({"pointer-events":"none"});
			$(".ipad").hide();
		}
		else{
			$('.menu-ipad').attr('src','img/check_box.png');
			$("#iphone").css({"pointer-events":"auto"});
			$(".ipad").show();
		}
		}
		
	});
	$( ".menu-ipad" ).click(function() {
	
		
		
	});
	
	

});

		

function boxAnimate(){
	
}
