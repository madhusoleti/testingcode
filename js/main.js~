 var currentPage=0;
 var NumberOfImages = 3;
 var htmlarray = [{fullurl:"index.html",hashurl:"#"},{fullurl:"BehindWorks.html",hashurl:"#bhworks"},{fullurl:"Crew.html",hashurl:"#crew"}];
 boxAnimate();
 $(document).ready(function() {
var originalWidth = 1000;
	 $("#feedback-page-wrapper").load('feedback.html #container');
	  $("#team-page-wrapper").load('team.html #container');
	 var width = screen.width,
        height = screen.height;
    
        if (screen.width !== width || screen.height !== height) {
            width = screen.width;
            height = screen.height;
        }
		$("#app-icon-gallery").hover(function(){
			
			$(".slimScrollBar").css({"display":"block"});
		},function(){
			
			$(".slimScrollBar").css({"display":"none"});
		});
		$("#android-icon-gallery").hover(function(){
			
			$(".slimScrollBar").css({"display":"block"});
		},function(){
			
			$(".slimScrollBar").css({"display":"none"});
		});
		if ((screen.width >= 1280) && (screen.height>=1024)) {
		 //do something
		 $("#app-icon-gallery").slimScroll({
				height: '760',
				 alwaysVisible: true
			});
			$("#android-icon-gallery").slimScroll({
				height: '760',
				 alwaysVisible: true
			});
		}
		else if ((screen.width >= 1024  ) && (screen.height>=768)){
		//do something else
		
		var originalHeight = $(window).height();
    //get the new body width
    var bodyWidth = $("body").width(); 
    //get the difference in width, needed for hight calculation 
    var widthDiff = bodyWidth - originalWidth; 
    //new hight based on initial div height
    var newHeight = (originalHeight + (widthDiff / 10))-260; 
		 $("#app-icon-gallery").slimScroll({
				height: newHeight,
				 alwaysVisible: true
			});
			$("#android-icon-gallery").slimScroll({
				height: newHeight,
				 alwaysVisible: true
			});
		}
		else if ((screen.width >= 800) && (screen.height>=600)){
		//do something else
		//alert("ghhg");
		$("#app-icon-gallery").slimScroll({
				height: '90%',
				 alwaysVisible: true
			});
			
			$("#android-icon-gallery").slimScroll({
				height: '100%',
				 alwaysVisible: true
			});
		}
		else{
			$("#app-icon-gallery").slimScroll({
				height: '98%',
				 alwaysVisible: true
			});
			
		}
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
		
		$('#contact').delay(2000).animate({"right":-264},800,function(){
			$(this).css({"top":"120px","transform":"rotate(15deg)"})
		});
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
			
			$(this).stop(true).animate({"right":-264},200,function(){
				$(this).css({"top":"120px","transform":"rotate(15deg)"});
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
				
				$(this).stop(true).animate({"right":-264},200,function(){
					$(this).css({"top":"120px","transform":"rotate(15deg)"});
					$("#phone a").css({"opacity":"1"});
					$("#map a").css({"opacity":"1"});
				});
			});
		}
		else{
			$("#contact").unbind('mouseleave');
			$(this).css({"top":"120px","transform":"rotate(0deg)"}).stop(true).animate({"right":0},200);
			$("#phone a").css({"opacity":"0.8"});
			$("#map a").css({"opacity":"0.8"});
			$(this).addClass('toggleClass');
		}
	});
	$("#map a").click(function(){
		$("#title").hide();
		$("#social-links").hide();	
		$("#address").hide();
		$("#phone-map-content").hide();
		$("#contact .google-map").show();
		$("#contact").bind('mouseleave',function(){
				
				$(this).stop(true).animate({"right":-264},800,function(){
					$(this).css({"top":"40px","transform":"rotate(15deg)"});
					$("#phone a").css({"opacity":"1"});
					$("#map a").css({"opacity":"1"});
					$("#title").show();
			$("#social-links").show();	
			$("#address").show();
			$("#phone-map-content").show();
			$("#contact .google-map").hide();
			$(this).removeClass('toggleClass');
				});
			});
	});
}
else{
	var degree = 0;
	setTimeout(function(){
	$('#contact').CSSAnimate({"top":"40px","-ms-transform":"rotate(15deg)","transform":"rotate(15deg)","right":-264},800);
	},2000);
	$('#contact').bind({
			mouseenter: function(e) {
				$(this).stop(true).CSSAnimate({"top":"30px","-ms-transform":"rotate(0deg)","transform":"rotate(0deg)","right":0},800);
				$("#phone a").css({"opacity":"0.8"});
				$("#map a").css({"opacity":"0.8"});
			},
			mouseleave: function(e) {
					
					if($(this).attr('data-clicked')=="no"){
						if($("#map a").attr('data-map-clicked')=="no"){
					$(this).stop(true).CSSAnimate({"top":"40px","-ms-transform":"rotate(15deg)","transform":"rotate(15deg)","right":-264},800,function(){
						$("#phone a").css({"opacity":"1"});
						$("#map a").css({"opacity":"1"});
						
					});
					}
				}
			}
		});
		
		$("#map a").click(function(){
			$("#contact").attr('data-clicked','no');
				$("#title").hide();
		$("#social-links").hide();	
		$("#address").hide();
		$("#phone-map-content").hide();
		$("#contact .google-map").show();
		$(".small-close-button").show();
		$(".map-view").show();
			
	});
	$(".map-view").click(function(){
			$("#contact").attr('data-clicked','no');
				
	});
	$("#social-links li a").click(function(e){
		  $("#social-links li a.socialactive").removeClass("socialactive")
                     .addClass("socialinactive");

        $(this).removeClass('socialinactive')
               .addClass('socialactive');
				
				$('#contact').attr('data-clicked','no');
				$("#map a").attr('data-map-clicked','no');
			});
		$("#contact").click(function(){
			
			if($(this).attr('data-clicked')=="yes"){
			$('.map-view').attr('data-view','no');
			$(this).attr('data-clicked','no');
			
			$(this).stop(true).CSSAnimate({"top":"40px","-ms-transform":"rotate(15deg)","transform":"rotate(15deg)","right":-264},800,function(){
				$("#phone a").css({"opacity":"1"});
				$("#map a").css({"opacity":"1"});
			});
			$("#social-links li a").addClass('socialinactive');
			$("#title").show();
			$("#social-links").show();	
			$("#address").show();
			$("#phone-map-content").show();
			$("#contact .google-map").hide();
			$(".small-close-button").hide();
			$(".map-view").hide();
			
		}
	
			
		
		else{
			$(this).attr('data-clicked','yes');
			
			$(this).stop(true).CSSAnimate({"top":"30px","-ms-transform":"rotate(0deg)","transform":"rotate(0deg)","right":0},800);
			$("#phone a").css({"opacity":"0.8"});
			$("#map a").css({"opacity":"0.8"});
			
		}
	});
}

$("#view-more a").click(function(){
	$(this).hide();
		$("#f_gallery").hide('slide',{direction:'up'},200,function(){
		$("#features").show('slide',{direction:'down'},200);	
		$("#view-back a").show();
	});	
});
$("#view-back a").click(function(){
	$(this).hide();
		$("#features").hide('slide',{direction:'up'},200,function(){
		$("#f_gallery").show('slide',{direction:'down'},200);	
		$("#view-more a").show();
	});	
		
});
$("#screen").click(function(){
	$("#salient").removeClass('active');
	$(this).addClass('active');
	$("#features").hide('slide',{direction:'down'},200,function(){
		
		$("#f_gallery").show('slide',{direction:'up'},200);	
		
	});			
});
$("#salient").click(function(){
	$("#screen").removeClass('active');
	$(this).addClass('active');
	$("#f_gallery").hide('slide',{direction:'down'},200,function(){
		
		$("#features").show('slide',{direction:'up'},200);	
		
	});
});
$(".menu #ss").click(function(){
	$("#screen").addClass('active');
	$("#salient").removeClass('active');
	$(this).css({"opacity":"0.8","pointer-events":"none"});
	$("#features").hide('slide',{direction:'down'},200,function(){
		$(".menu #fs").css({"opacity":"1","pointer-events":"auto"});
		$("#f_gallery").show('slide',{direction:'up'},200);	
	});	
})

$(".menu #fs").click(function(){
	$(this).css({"opacity":"0.8","pointer-events":"none"});
	$("#salient").addClass('active');
	$("#screen").removeClass('active');
	$("#f_gallery").hide('slide',{direction:'down'},200,function(){
		$(".menu #ss").css({"opacity":"1","pointer-events":"auto"});
		$("#features").show('slide',{direction:'up'},200);	
		
	});	
})
$( ".apple-sub-menu div a" ).click(function() {
		if($(this).attr('href')=='#iphone'){
		
		if($('.menu-iphone').attr('src') == "img/check_box.png"){
			$('.menu-iphone').attr('src','img/uncheck_box.png');
			
				$("#app-icon-gallery ul li").each(function(index, element) {
                    if($(this).attr('data-app-icon')=="iphone"){
						$(this).hide();
						
					}
					
                });
				$('#ipad a').removeAttr('href');	
			
		}
		else{
			$('.menu-iphone').attr('src','img/check_box.png');
			$("#app-icon-gallery ul li").each(function(index, element) {
                    if($(this).attr('data-app-icon')=="iphone"){
						$(this).show();
						
					}
					
                });
			$('#ipad a').attr('href','#ipad');
		}
		}
		if($(this).attr('href')=='#ipad'){
		
		if($('.menu-ipad').attr('src') == "img/check_box.png"){
			
			$('.menu-ipad').attr('src','img/uncheck_box.png');
			$("#app-icon-gallery ul li").each(function(index, element) {
                    if($(this).attr('data-app-icon')=="ipad"){
						$(this).hide();
						
					}
					
                });
			$('#iphone a').removeAttr('href');
			
		}
		else{
			$('.menu-ipad').attr('src','img/check_box.png');
			$("#app-icon-gallery ul li").each(function(index, element) {
                    if($(this).attr('data-app-icon')=="ipad"){
						$(this).show();
						
					}
					
                });
			$('#iphone a').attr('href','#iphone');
		}
		}
		
	});

	
	$( ".android-sub-menu div a" ).click(function() {
	
		if($(this).attr('href')=='#android-phone'){
		
		if($('.menu-phone').attr('src') == "img/check_box.png"){
		
			$('.menu-phone').attr('src','img/uncheck_box.png');
			$("#android-icon-gallery ul li").each(function(index, element) {
                 if($(this).attr('data-app-icon')=="phone"){
						$(this).hide();
						
					}
            });
			$('#tablet').removeAttr('href');
		}
		else{
			$('.menu-phone').attr('src','img/check_box.png');
			$("#android-icon-gallery ul li").each(function(index, element) {
                 if($(this).attr('data-app-icon')=="phone"){
						$(this).show();
						
					}
            });
			$('#tablet').attr('href','#tablet');
		}
		}
		if($(this).attr('href')=='#tablet'){
		
		if($('.menu-tablet').attr('src') == "img/check_box.png"){
			
			$('.menu-tablet').attr('src','img/uncheck_box.png');
			$("#android-icon-gallery ul li").each(function(index, element) {
                 if($(this).attr('data-app-icon')=="tablet"){
						$(this).hide();
						
					}
            });
			$("#android-phone").removeAttr('href');
			
		}
		else{
			$('.menu-tablet').attr('src','img/check_box.png');
			$("#android-icon-gallery ul li").each(function(index, element) {
                 if($(this).attr('data-app-icon')=="tablet"){
						$(this).show();
						
					}
            });
			$("#android-phone").attr('href','#android-phone');
		}
		}
		
	});

 $("#apple").hover(function(){
	 $("#apple img").slideDown();
	$("#apple a").slideUp();
 },function(){
	 if($("#apple").attr('data-clicked')=='no'){
		$("#apple a").slideDown();
		$("#apple img").slideUp();
	}
	
 });
 
   $("#android").hover(function(){
	    $("#android img").slideDown();
		$("#android a").slideUp();
   },function(){
	   if($("#android").attr('data-clicked')=='no'){
			$("#android a").slideDown();
			$("#android img").slideUp();
		}
   });
  $("#windows").hover(function(){
	   $("#windows img").slideDown();
		$("#windows a").slideUp();
  },function(){
	   if($("#windows").attr('data-clicked')=='no'){
			$("#windows a").slideDown();
			$("#windows img").slideUp();
		}
  });
 
   $("#web").hover(function(){
	    $("#web img").slideDown();
		$("#web a").slideUp();
   },function(){
	   if($("#web").attr('data-clicked')=='no'){
			$("#web a").slideDown();
			$("#web img").slideUp();
		}
   });
 
 $("#apple").click(function(){
	 if($("#apple img").attr('data-clicked')=="yes"){
		
	 	
	 }
	 else{
		  $("#apple").attr('data-clicked','yes');
		  $("#windows").attr('data-clicked','no');
		   $("#android").attr('data-clicked','no');	
		    $("#web").attr('data-clicked','no');
		 $("#nav li#apple").css({"background":"url(img/menu_strip_selected.png) no-repeat"});
		  $("#nav li#android").css({"background":"url(img/menu_strip.png) no-repeat"});
		   $("#nav li#windows").css({"background":"url(img/menu_strip.png) no-repeat"});
		    $("#nav li#web").css({"background":"url(img/menu_strip.png) no-repeat"});
		 $("#apple img").show();
		 $("#android img").hide();
		 $("#windows img").hide();
		 $("#web img").hide();
		 $("#apple a").hide();
		  $("#android a").show();
		 $("#windows a").show();
		 $("#web a").show();
		 $(".android-gallery").hide();
		 $(".windows-gallery").hide();
		$(".web-gallery").hide();
		$(".overlay-bg").hide();
	 $(".image-container").hide('slide',{direction: 'down'},500);
	$(".apple-gallery").show('slide',{direction: 'up'},500);
	 }
	
 });
 
  $("#android").click(function(){
	  if($("#android").attr('data-clicked')=="yes"){
		 
	 	
	 }
	 else{
		  $("#android").attr('data-clicked','yes');
		  $("#windows").attr('data-clicked','no');
		   $("#apple").attr('data-clicked','no');	
		    $("#web").attr('data-clicked','no');
		  $("#nav li#android").css({"background":"url(img/menu_strip_selected.png) no-repeat"});
		   $("#nav li#apple").css({"background":"url(img/menu_strip.png) no-repeat"});
		   $("#nav li#windows").css({"background":"url(img/menu_strip.png) no-repeat"});
		    $("#nav li#web").css({"background":"url(img/menu_strip.png) no-repeat"});
		 $("#android img").show();
		 $("#android a").hide();
		 $("#apple img").hide();
		 $("#windows img").hide();
		 $("#web img").hide();
		 $("#apple a").show();
		 $("#windows a").show();
		 $("#web a").show();
		 $(".apple-gallery").hide();
		 $(".windows-gallery").hide();
		 $(".web-gallery").hide();
		 $(".overlay-bg").hide();
	 $(".image-container").hide('slide',{direction: 'down'},500);
	$(".android-gallery").show('slide',{direction: 'up'},500);
	 }
 });
 
  $("#windows").click(function(){
	 if($("#windows").attr('data-clicked')=='yes'){
		 
	 	
	 }
	 else{
		  $("#windows").attr('data-clicked','yes');
		  $("#android").attr('data-clicked','no');
		   $("#apple").attr('data-clicked','no');	
		    $("#web").attr('data-clicked','no');
		  $("#nav li#windows").css({"background":"url(img/menu_strip_selected.png) no-repeat"});
		   $("#nav li#android").css({"background":"url(img/menu_strip.png) no-repeat"});
		   $("#nav li#apple").css({"background":"url(img/menu_strip.png) no-repeat"});
		    $("#nav li#web").css({"background":"url(img/menu_strip.png) no-repeat"});
		 $("#windows img").show();
		 $("#apple img").hide();
		 $("#android img").hide();
		 $("#web img").hide();
		 $("#windows a").hide();
		  $("#apple a").show();
		 $("#android a").show();
		 $("#web a").show();
		
		 $(".apple-gallery").hide();
		 $(".android-gallery").hide();
		 $(".web-gallery").hide();
		 $(".overlay-bg").hide();
	 $(".image-container").hide('slide',{direction: 'down'},500);
	$(".windows-gallery").show('slide',{direction: 'up'},500);
	 }
 });
 
 $("#web").click(function(){
	  if($("#web").attr('data-clicked') == "yes"){
		 
	 
	 }
	 else{
		  $("#web").attr('data-clicked','yes');
		  $("#android").attr('data-clicked','no');
		   $("#apple").attr('data-clicked','no');	
		    $("#windows").attr('data-clicked','no');
		  $("#nav li#web").css({"background":"url(img/menu_strip_selected.png) no-repeat"});
		   $("#nav li#android").css({"background":"url(img/menu_strip.png) no-repeat"});
		   $("#nav li#windows").css({"background":"url(img/menu_strip.png) no-repeat"});
		    $("#nav li#apple").css({"background":"url(img/menu_strip.png) no-repeat"});
		 $("#web img").show();
		 $("#web a").hide();
		 $("#android img").hide();
		 $("#windows img").hide();
		 $("#apple img").hide();
		  $("#apple a").show();
		 $("#windows a").show();
		 $("#android a").show();
		
		 $(".apple-gallery").hide();
		 $(".android-gallery").hide();
		 $(".windows-gallery").hide();
		 $(".overlay-bg").hide();
	 $(".image-container").hide('slide',{direction: 'down'},500);
	$(".web-gallery").show('slide',{direction: 'up'},500);
	 }
 });
 //client feeback onclick
 $("#page-wrapper .feedback-container a").click(function(){
	 $("#page-wrapper").hide('drop',{direction:'right'},500,function(){
		 $('#feedback-page-wrapper').show('puff',500,function(){
					
		});
		
	});
	
  });
  $("#page-wrapper .customer-container a").click(function(){
	 $("#page-wrapper").hide('drop',{direction:'left'},500,function(){
		 $('#team-page-wrapper').show('puff',500,function(){
			
		});
		
	});
	
  });
  $("#feedback-page-wrapper").find('.customer-container a').live('click',function(){
		 $("#feedback-page-wrapper").hide('slide',{direction:'left'},200,function(){
		 $('#team-page-wrapper').show('slide',{direction:'right'},200,function(){
			
		});
		
	});
  });
  $("#feedback-page-wrapper").find('.feedback-container a').live('click',function(){
		 $("#feedback-page-wrapper").hide('slide',{direction:'right'},200,function(){
		 $('#page-wrapper').show('slide',{direction:'left'},200,function(){
			
		});
		
	});
  });
  $("#team-page-wrapper").find('.customer-container a').live('click',function(){
		 $("#team-page-wrapper").hide('slide',{direction:'left'},200,function(){
		 $('#feedback-page-wrapper').show('slide',{direction:'right'},200,function(){
			
		});
		
	});
  });
  $("#team-page-wrapper").find('.feedback-container a').live('click',function(){
		 $("#team-page-wrapper").hide('slide',{direction:'right'},200,function(){
		 $('#page-wrapper').show('slide',{direction:'left'},200,function(){
			
		});
		
	});
  });
 //for apple Click on thumbnail to view image larger  with title and description
				$("#app-icon-gallery ul li a").click(function(){
					$(this).removeClass('current');
					$(this).addClass('current');
					var src = $(this).find('img').attr('alt');
					var title = $(this).find('img').attr('data-title');
					var desc = $(this).find('img').attr('data-desc');
					var img = $('#f_gallery');
					$(".bf_heading h2").text(title);
					$(".bf_link a").attr('href',desc);
					img.attr('src', src);
					
					$(".overlay-bg").show('scale',{percent:100},100,function(){
						$("#popup_box").show(500);
					});
					$(".fp_galleryList").css({
						"opacity": "0.3","background":"gray"  
					});
					
				});
				//Press esc to close the large image.
				$(document).keyup(function(e){
					 if(e.keyCode==27){
						 $(".overlay-bg").hide('scale',{percent:0,direction:'left'},500);
						$("#popup_box").hide();
						    $("body").css({
								"opacity": "1"
							});
					}
				});
				//click on right side arrow to view next large image.
				$(".bf_next").click(function(){
					var current = $("#app-icon-gallery ul li a.current");
					if(current.closest('li').next().find('a').length > 0)
						var next = current.closest('li').next().find('a');
					else
						var next = $('#app-icon-gallery ul li a:first');
					$("#app-icon-gallery ul li a.current").removeClass('current');
					next.addClass('current');	
					var src = next.find('img').attr('alt');
					var title = next.find('img').attr('data-title');
					var desc = next.find('img').attr('data-desc');	
					var img = $('#f_gallery');
					$(".bf_heading h2").text(title);
					$(".bf_link a").attr('href',desc);
					img.hide('slide',{direction:'left'},100,function(){
						
						img.show('slide',{direction:'right'},100,function(){
							
						});
						img.attr('src',src);
					});		
				});
				//click on left side arrow to view previous large image.
				$(".bf_prev").click(function(){
					var current = $("#app-icon-gallery ul li a.current");
					if(current.closest('li').prev().find('a').length > 0)
						var previous = current.closest('li').prev().find('a');
					else
						var previous = $("#app-icon-gallery ul li a:last");
					
					$("#app-icon-gallery ul li a.current").removeClass('current');
					previous.addClass('current');	
					var src = previous.find('img').attr('alt');
					var title = previous.find('img').attr('data-title');
					var desc = previous.find('img').attr('data-desc');	
					var img = $('#f_gallery');
					$(".bf_heading h2").text(title);
					$(".bf_link a").attr('href',desc);
					img.hide('slide',{direction:'right'},100,function(){
						img.show('slide',{direction:'left'},100,function(){
							
						});
						img.attr('src',src);
					});	
				});
				//Click on close image to close the large image.
				$("#popupBoxClose").click(function(){
					 $(".overlay-bg").hide('scale',{percent:0,direction:'left'},500);
						$("#popup_box").hide();
					$("body").css({
						"opacity": "1"  
					});
					
					
				});
				
				//for android Click on thumbnail to view image larger  with title and description
				$("#android-icon-gallery ul li a").click(function(){
					$(this).removeClass('current');
					$(this).addClass('current');
					var src = $(this).find('img').attr('alt');
					var title = $(this).find('img').attr('data-title');
					var desc = $(this).find('img').attr('data-desc');
					var img = $('#android-f_gallery');
					$(".android-bf_heading h2").text(title);
					$(".android-bf_link a").attr('href',desc);
					img.attr('src', src);
				
					$(".android-overlay-bg").show('scale',{percent:100},100,function(){
						$("#android-popup_box").show(500);
					});
					$(".android-fp_galleryList").css({
						"opacity": "0.3","background":"gray"  
					});
					
				});
				//Press esc to close the large image.
				$(document).keyup(function(e){
					 if(e.keyCode==27){
						 $(".android-overlay-bg").hide('scale',{percent:0,direction:'left'},500);
						$("#android-popup_box").hide();
						    $("body").css({
								"opacity": "1"
							});
					}
				});
				//click on right side arrow to view next large image.
				$(".bf_next").click(function(){
					var current = $("#android-icon-gallery ul li a.current");
					if(current.closest('li').next().find('a').length > 0)
						var next = current.closest('li').next().find('a');
					else
						var next = $('#android-icon-gallery ul li a:first');
					$("#android-icon-gallery ul li a.current").removeClass('current');
					next.addClass('current');	
					var src = next.find('img').attr('alt');
					var title = next.find('img').attr('data-title');
					var desc = next.find('img').attr('data-desc');	
					var img = $('#android-f_gallery');
					$(".android-bf_heading h2").text(title);
					$(".android-bf_link a").attr('href',desc);
					img.hide('slide',{direction:'left'},100,function(){
						
						img.show('slide',{direction:'right'},100,function(){
							
						});
						img.attr('src',src);
					});		
				});
				//click on left side arrow to view previous large image.
				$(".bf_prev").click(function(){
					var current = $("#android-icon-gallery ul li a.current");
					if(current.closest('li').prev().find('a').length > 0)
						var previous = current.closest('li').prev().find('a');
					else
						var previous = $("#android-icon-gallery ul li a:last");
					
					$("#android-icon-gallery ul li a.current").removeClass('current');
					previous.addClass('current');	
					var src = previous.find('img').attr('alt');
					var title = previous.find('img').attr('data-title');
					var desc = previous.find('img').attr('data-desc');	
					var img = $('#android-f_gallery');
					$(".android-bf_heading h2").text(title);
					$(".android-bf_link a").attr('href',desc);
					img.hide('slide',{direction:'right'},100,function(){
						img.show('slide',{direction:'left'},100,function(){
							
						});
						img.attr('src',src);
					});	
				});
				//Click on close image to close the large image.
				$("#android-popupBoxClose").click(function(){
					 $(".android-overlay-bg").hide('scale',{percent:0,direction:'left'},500);
						$("#android-popup_box").hide();
					$("body").css({
						"opacity": "1"  
					});
					
					
				});
				//for windows Click on thumbnail to view image larger  with title and description
				$("#windows-app-icon-gallery ul li a").click(function(){
					$(this).removeClass('current');
					$(this).addClass('current');
					var src = $(this).find('img').attr('alt');
					var title = $(this).find('img').attr('data-title');
					var desc = $(this).find('img').attr('data-desc');
					var img = $('#windows-f_gallery');
					$(".windows-bf_heading h2").text(title);
					$(".windows-bf_link a").attr('href',desc);
					img.attr('src', src);
				
					$(".windows-overlay-bg").show('scale',{percent:100},100,function(){
						$("#windows-popup_box").show(500);
					});
					$(".windows-fp_galleryList").css({
						"opacity": "0.3","background":"gray"  
					});
					
				});
				//Press esc to close the large image.
				$(document).keyup(function(e){
					 if(e.keyCode==27){
						 $(".windows-overlay-bg").hide('scale',{percent:0,direction:'left'},500);
						$("#windows-popup_box").hide();
						    $("body").css({
								"opacity": "1"
							});
					}
				});
				//click on right side arrow to view next large image.
				$(".bf_next").click(function(){
					var current = $("#windows-icon-gallery ul li a.current");
					if(current.closest('li').next().find('a').length > 0)
						var next = current.closest('li').next().find('a');
					else
						var next = $('#windows-icon-gallery ul li a:first');
					$("#windows-icon-gallery ul li a.current").removeClass('current');
					next.addClass('current');	
					var src = next.find('img').attr('alt');
					var title = next.find('img').attr('data-title');
					var desc = next.find('img').attr('data-desc');	
					var img = $('#windows-f_gallery');
					$(".windows-bf_heading h2").text(title);
					$(".windows-bf_link a").attr('href',desc);
					img.hide('slide',{direction:'left'},100,function(){
						
						img.show('slide',{direction:'right'},100,function(){
							
						});
						img.attr('src',src);
					});		
				});
				//click on left side arrow to view previous large image.
				$(".bf_prev").click(function(){
					var current = $("#windows-icon-gallery ul li a.current");
					if(current.closest('li').prev().find('a').length > 0)
						var previous = current.closest('li').prev().find('a');
					else
						var previous = $("#windows-icon-gallery ul li a:last");
					
					$("#windows-icon-gallery ul li a.current").removeClass('current');
					previous.addClass('current');	
					var src = previous.find('img').attr('alt');
					var title = previous.find('img').attr('data-title');
					var desc = previous.find('img').attr('data-desc');	
					var img = $('#windows-f_gallery');
					$(".windows-bf_heading h2").text(title);
					$(".windows-bf_link a").attr('href',desc);
					img.hide('slide',{direction:'right'},100,function(){
						img.show('slide',{direction:'left'},100,function(){
							
						});
						img.attr('src',src);
					});	
				});
				//Click on close image to close the large image.
				$("#windows-popupBoxClose").click(function(){
					 $(".windows-overlay-bg").hide('scale',{percent:0,direction:'left'},500);
						$("#windows-popup_box").hide();
					$("body").css({
						"opacity": "1"  
					});
					
					
				});
				//Click on thumbnail to view image larger  with title and description
				$("#web-app-icon-gallery ul li a").click(function(){
					$(this).removeClass('current');
					$(this).addClass('current');
					var src = $(this).find('img').attr('alt');
					var title = $(this).find('img').attr('data-title');
					var desc = $(this).find('img').attr('data-desc');
					var img = $('#web-f_gallery');
					$(".web-bf_heading h2").text(title);
					$(".web-bf_link a").attr('href',desc);
					$(".web-bf_link a").text(desc);
					img.attr('src', src);
					$(".web-overlay-bg").show('scale',{percent:100},100,function(){
						$("#web-popup_box").show(500);
					});
					$(".web-fp_galleryList").css({
						"opacity": "0.3","background":"gray"  
					});
					
				});
				//Press esc to close the large image.
				$(document).keyup(function(e){
					 if(e.keyCode==27){
						 $(".web-overlay-bg").hide('scale',{percent:0,direction:'left'},500);
						$("#web-popup_box").hide();
						    $("body").css({
								"opacity": "1"
							});
					}
				});
				//click on right side arrow to view next large image.
				$(".bf_next").click(function(){
					var current = $("#web-app-icon-gallery ul li a.current");
					if(current.closest('li').next().find('a').length > 0)
						var next = current.closest('li').next().find('a');
					else
						var next = $('#web-app-icon-gallery ul li a:first');
					$("#web-app-icon-gallery ul li a.current").removeClass('current');
					next.addClass('current');	
					var src = next.find('img').attr('alt');
					var title = next.find('img').attr('data-title');
					var desc = next.find('img').attr('data-desc');	
					var img = $('#web-f_gallery');
					$(".web-bf_heading h2").text(title);
					$(".web-bf_link a").text(desc);
					$(".web-bf_link a").attr('href',desc);
					img.hide('slide',{direction:'left'},100,function(){
						
						img.show('slide',{direction:'right'},100,function(){
							
						});
						img.attr('src',src);
					});		
				});
				//click on left side arrow to view previous large image.
				$(".bf_prev").click(function(){
					var current = $("#web-app-icon-gallery ul li a.current");
					if(current.closest('li').prev().find('a').length > 0)
						var previous = current.closest('li').prev().find('a');
					else
						var previous = $("#web-app-icon-gallery ul li a:last");
					
					$("#web-app-icon-gallery ul li a.current").removeClass('current');
					previous.addClass('current');	
					var src = previous.find('img').attr('alt');
					var title = previous.find('img').attr('data-title');
					var desc = previous.find('img').attr('data-desc');	
					var img = $('#web-f_gallery');
					$(".web-bf_heading h2").text(title);
					$(".web-bf_link a").text(desc);
					$(".web-bf_link a").attr('href',desc);
					img.hide('slide',{direction:'right'},100,function(){
						img.show('slide',{direction:'left'},100,function(){
							
						});
						img.attr('src',src);
					});	
				});
				//Click on close image to close the large image.
				$("#web-popupBoxClose").click(function(){
					 $(".web-overlay-bg").hide('scale',{percent:0,direction:'left'},500);
						$("#web-popup_box").hide();
					$("body").css({
						"opacity": "1"  
					});
					
					
				});
 
});

		

function boxAnimate(){
	if($(window).width()==320)
	{
		$(".image-container").css({"top":-(screen.width)}).animate({"top":"30px"},200,function(){ 
	$(this).effect("bounce",{distance: 24,times: 3},"slow",function(){
		$(".closed-box").attr('src','img/open_box.gif');
		  $(".image1").delay(700).animate({"opacity":"+=1","top":"-100","left":"-80"},400,function(){
			 $(this).effect("bounce",{distance: 10,times: 3},500);
		}); 
		$(".image2").delay(700).animate({"opacity":"+=1","top":"-120","left":"-10"},400,function(){
			 $(this).effect("bounce",{distance: 10,times: 3},500);
		 });
		 $(".image3").delay(700).animate({"opacity":"+=1","top":"-100","left":"60"},400,function(){
			 $(this).effect("bounce",{distance: 10,times: 3},500);
		 });
		 $(".image4").delay(700).animate({"opacity":"+=1","top":"0","left":"-110"},400,function(){
			 $(this).effect('bounce',{distance: 10,direction: 'right',times: 3},500);
		 });
		 $(".image5").delay(700).animate({"opacity":"+=1","top":"-4","left":"100"},400,function(){
			 $(this).effect('bounce',{distance: 10,times: 3},500);
		 });
		 $(".image6").delay(700).animate({"opacity":"+=1","top":"-30","left":"60"},400,function(){
			 $(this).effect('bounce',{distance: 10,times: 3},500);
		 });
		 $(".image7").delay(700).animate({"opacity":"+=1","top":"-40","left":"-80"},400,function(){
			 $(this).effect('bounce',{distance: 10,times: 3},500);
		 });
		 $(".image8").delay(700).animate({"opacity":"+=1","top":"-70","left":"-130"},400,function(){
			 $(this).effect('bounce',{distance: 10,times: 3},500);
		 });
		 $(".image9").delay(700).animate({"opacity":"+=1","top":"-70","left":"110"},400,function(){
			 $(this).effect('bounce',{distance: 10,times: 3},500);
		 });
		 $(".image10").delay(700).animate({"opacity":"+=1","top":"-60","left":"20"},400,function(){
			 $(this).effect('bounce',{distance: 10,times: 3},500);
		 });
		 $(".image11").delay(700).animate({"opacity":"+=1","top":"-60","left":"-50"},400,function(){
		    $(this).effect('bounce',{distance: 10,times: 3},500);
		 });
		 $(".image12").delay(700).animate({"opacity":"+=1","top":"-30","left":"-6"},400,function(){
			$(this).effect('bounce',{distance: 10,times: 3},500);
		 });
		 $(".image13").delay(700).animate({"opacity":"+=1","top":"0","left":"-30"},400,function(){
			 $(this).effect('bounce',{distance: 10,times: 3},500);
		 });
		 $(".image14").delay(700).animate({"opacity":"+=1","top":"20","left":"5"},400,function(){
			 $(this).effect('bounce',{distance: 10,times: 3},500);
		 });
		 $(".image15").delay(700).animate({"opacity":"+=1","top":"40","left":"-6"},400,function(){
			 $(this).effect('bounce',{distance: 10,times: 3},500);
		 });	
	});
 });
	}
	else if($(window).width() <= 469){
	
		$(".image-container").css({"top":-(screen.width)}).animate({"top":"0"},200,function(){ 
	$(this).effect("bounce",{distance: 24,times: 3},"slow",function(){
		$(".closed-box").attr('src','img/open_box.gif');
		  $(".image1").delay(700).animate({"opacity":"+=1","top":"-140","left":"-90"},400,function(){
			 $(this).effect("bounce",{distance: 10,times: 3},500);
		}); 
		$(".image2").delay(700).animate({"opacity":"+=1","top":"-180","left":"0"},400,function(){
			 $(this).effect("bounce",{distance: 10,times: 3},500);
		 });
		 $(".image3").delay(700).animate({"opacity":"+=1","top":"-140","left":"90"},400,function(){
			 $(this).effect("bounce",{distance: 10,times: 3},500);
		 });
		 $(".image4").delay(700).animate({"opacity":"+=1","top":"0","left":"-140"},400,function(){
			 $(this).effect('bounce',{distance: 10,direction: 'right',times: 3},500);
		 });
		 $(".image5").delay(700).animate({"opacity":"+=1","top":"-10","left":"150"},400,function(){
			 $(this).effect('bounce',{distance: 10,times: 3},500);
		 });
		 $(".image6").delay(700).animate({"opacity":"+=1","top":"-40","left":"90"},400,function(){
			 $(this).effect('bounce',{distance: 10,times: 3},500);
		 });
		 $(".image7").delay(700).animate({"opacity":"+=1","top":"-60","left":"-100"},400,function(){
			 $(this).effect('bounce',{distance: 10,times: 3},500);
		 });
		 $(".image8").delay(700).animate({"opacity":"+=1","top":"-100","left":"-160"},400,function(){
			 $(this).effect('bounce',{distance: 10,times: 3},500);
		 });
		 $(".image9").delay(700).animate({"opacity":"+=1","top":"-100","left":"170"},400,function(){
			 $(this).effect('bounce',{distance: 10,times: 3},500);
		 });
		 $(".image10").delay(700).animate({"opacity":"+=1","top":"-80","left":"40"},400,function(){
			 $(this).effect('bounce',{distance: 10,times: 3},500);
		 });
		 $(".image11").delay(700).animate({"opacity":"+=1","top":"-80","left":"-50"},400,function(){
		    $(this).effect('bounce',{distance: 10,times: 3},500);
		 });
		 $(".image12").delay(700).animate({"opacity":"+=1","top":"-40","left":"0"},400,function(){
			$(this).effect('bounce',{distance: 10,times: 3},500);
		 });
		 $(".image13").delay(700).animate({"opacity":"+=1","top":"0","left":"-40"},400,function(){
			 $(this).effect('bounce',{distance: 10,times: 3},500);
		 });
		 $(".image14").delay(700).animate({"opacity":"+=1","top":"0","left":"40"},400,function(){
			 $(this).effect('bounce',{distance: 10,times: 3},500);
		 });
		 $(".image15").delay(700).animate({"opacity":"+=1","top":"40","left":"-6"},400,function(){
			 $(this).effect('bounce',{distance: 10,times: 3},500);
		 });	
	});
 });
	}
	else if($(window).height()>720 && $(window).height()<864)
	{
		$(".image-container").css({"top":-(screen.width)}).animate({"top":200},300,function(){ 
	$(this).effect("bounce",{distance: 24,times: 3},"slow",function(){
		$(".closed-box").attr('src','img/open_box.gif');
		   $(".image1").delay(700).animate({"opacity":"+=1","top":"-180","left":"-140"},300,function(){
			 $(this).effect("bounce",{distance: 10,times: 3},500);
		});
		 $(".image2").delay(700).animate({"opacity":"+=1","top":"-240","left":"0"},300,function(){
			 $(this).effect("bounce",{distance: 10,times: 3},500);
		 });
		 $(".image3").delay(700).animate({"opacity":"+=1","top":"-160","left":"150"},300,function(){
			 $(this).effect("bounce",{distance: 10,times: 3},500);
		 });
		 $(".image4").delay(700).animate({"opacity":"+=1","top":"-40","left":"-280"},300,function(){
			 $(this).effect('bounce',{distance: 10,direction: 'right',times: 3},500);
		 });
		 $(".image5").delay(700).animate({"opacity":"+=1","top":"-10","left":"240"},300,function(){
			 $(this).effect('bounce',{distance: 10,times: 3},500);
		 });
		 $(".image6").delay(700).animate({"opacity":"+=1","top":"-40","left":"160"},300,function(){
			 $(this).effect('bounce',{distance: 10,times: 3},500);
		 });
		 $(".image7").delay(700).animate({"opacity":"+=1","top":"-50","left":"-124"},300,function(){
			 $(this).effect('bounce',{distance: 10,times: 3},500);
		 });
		 $(".image8").delay(700).animate({"opacity":"+=1","top":"-110","left":"-220"},300,function(){
			 $(this).effect('bounce',{distance: 10,times: 3},500);
		 });
		 $(".image9").delay(700).animate({"opacity":"+=1","top":"-120","left":"260"},300,function(){
			 $(this).effect('bounce',{distance: 10,times: 3},500);
		 });
		 $(".image10").delay(700).animate({"opacity":"+=1","top":"-120","left":"90"},300,function(){
			 $(this).effect('bounce',{distance: 10,times: 3},500);
		 });
		 $(".image11").delay(700).animate({"opacity":"+=1","top":"-110","left":"-56"},300,function(){
		    $(this).effect('bounce',{distance: 10,times: 3},500);
		 });
		 $(".image12").delay(700).animate({"opacity":"+=1","top":"-60","left":"20"},300,function(){
			$(this).effect('bounce',{distance: 10,times: 3},500);
		 });
		 $(".image13").delay(700).animate({"opacity":"+=1","top":"0","left":"-30"},300,function(){
			 $(this).effect('bounce',{distance: 10,times: 3},500);
		 });
		 $(".image14").delay(700).animate({"opacity":"+=1","top":"0","left":"40"},300,function(){
			 $(this).effect('bounce',{distance: 10,times: 3},500);
		 });
		 $(".image15").delay(700).animate({"opacity":"+=1","top":"80","left":"-6"},300,function(){
			 $(this).effect('bounce',{distance: 10,times: 3},500);
		 });
		
	});
 });
	}
	else if($(window).height()>864)
	{
		$(".image-container").css({"top":-(screen.width)}).animate({"top":340},300,function(){ 
	$(this).effect("bounce",{distance: 24,times: 3},"slow",function(){
		$(".closed-box").attr('src','img/open_box.gif');
		   $(".image1").delay(700).animate({"opacity":"+=1","top":"-180","left":"-140"},300,function(){
			 $(this).effect("bounce",{distance: 10,times: 3},500);
		});
		 $(".image2").delay(700).animate({"opacity":"+=1","top":"-240","left":"0"},300,function(){
			 $(this).effect("bounce",{distance: 10,times: 3},500);
		 });
		 $(".image3").delay(700).animate({"opacity":"+=1","top":"-160","left":"150"},300,function(){
			 $(this).effect("bounce",{distance: 10,times: 3},500);
		 });
		 $(".image4").delay(700).animate({"opacity":"+=1","top":"-40","left":"-280"},300,function(){
			 $(this).effect('bounce',{distance: 10,direction: 'right',times: 3},500);
		 });
		 $(".image5").delay(700).animate({"opacity":"+=1","top":"-10","left":"240"},300,function(){
			 $(this).effect('bounce',{distance: 10,times: 3},500);
		 });
		 $(".image6").delay(700).animate({"opacity":"+=1","top":"-40","left":"160"},300,function(){
			 $(this).effect('bounce',{distance: 10,times: 3},500);
		 });
		 $(".image7").delay(700).animate({"opacity":"+=1","top":"-50","left":"-124"},300,function(){
			 $(this).effect('bounce',{distance: 10,times: 3},500);
		 });
		 $(".image8").delay(700).animate({"opacity":"+=1","top":"-110","left":"-220"},300,function(){
			 $(this).effect('bounce',{distance: 10,times: 3},500);
		 });
		 $(".image9").delay(700).animate({"opacity":"+=1","top":"-120","left":"260"},300,function(){
			 $(this).effect('bounce',{distance: 10,times: 3},500);
		 });
		 $(".image10").delay(700).animate({"opacity":"+=1","top":"-120","left":"90"},300,function(){
			 $(this).effect('bounce',{distance: 10,times: 3},500);
		 });
		 $(".image11").delay(700).animate({"opacity":"+=1","top":"-110","left":"-56"},300,function(){
		    $(this).effect('bounce',{distance: 10,times: 3},500);
		 });
		 $(".image12").delay(700).animate({"opacity":"+=1","top":"-60","left":"20"},300,function(){
			$(this).effect('bounce',{distance: 10,times: 3},500);
		 });
		 $(".image13").delay(700).animate({"opacity":"+=1","top":"0","left":"-30"},300,function(){
			 $(this).effect('bounce',{distance: 10,times: 3},500);
		 });
		 $(".image14").delay(700).animate({"opacity":"+=1","top":"0","left":"40"},300,function(){
			 $(this).effect('bounce',{distance: 10,times: 3},500);
		 });
		 $(".image15").delay(700).animate({"opacity":"+=1","top":"80","left":"-6"},300,function(){
			 $(this).effect('bounce',{distance: 10,times: 3},500);
		 });
		
	});
 });
	}
	else{
	$(".image-container").css({"top":-(screen.width)}).animate({"top":"120px"},300,function(){ 
	$(this).effect("bounce",{distance: 24,times: 3},"slow",function(){
		$(".closed-box").attr('src','img/open_box.gif');
		   $(".image1").delay(700).animate({"opacity":"+=1","top":"-180","left":"-140"},300,function(){
			 $(this).effect("bounce",{distance: 10,times: 3},500);
		});
		 $(".image2").delay(700).animate({"opacity":"+=1","top":"-240","left":"0"},300,function(){
			 $(this).effect("bounce",{distance: 10,times: 3},500);
		 });
		 $(".image3").delay(700).animate({"opacity":"+=1","top":"-160","left":"150"},300,function(){
			 $(this).effect("bounce",{distance: 10,times: 3},500);
		 });
		 $(".image4").delay(700).animate({"opacity":"+=1","top":"-40","left":"-280"},300,function(){
			 $(this).effect('bounce',{distance: 10,direction: 'right',times: 3},500);
		 });
		 $(".image5").delay(700).animate({"opacity":"+=1","top":"-10","left":"240"},300,function(){
			 $(this).effect('bounce',{distance: 10,times: 3},500);
		 });
		 $(".image6").delay(700).animate({"opacity":"+=1","top":"-40","left":"160"},300,function(){
			 $(this).effect('bounce',{distance: 10,times: 3},500);
		 });
		 $(".image7").delay(700).animate({"opacity":"+=1","top":"-50","left":"-124"},300,function(){
			 $(this).effect('bounce',{distance: 10,times: 3},500);
		 });
		 $(".image8").delay(700).animate({"opacity":"+=1","top":"-110","left":"-220"},300,function(){
			 $(this).effect('bounce',{distance: 10,times: 3},500);
		 });
		 $(".image9").delay(700).animate({"opacity":"+=1","top":"-120","left":"260"},300,function(){
			 $(this).effect('bounce',{distance: 10,times: 3},500);
		 });
		 $(".image10").delay(700).animate({"opacity":"+=1","top":"-120","left":"90"},300,function(){
			 $(this).effect('bounce',{distance: 10,times: 3},500);
		 });
		 $(".image11").delay(700).animate({"opacity":"+=1","top":"-110","left":"-56"},300,function(){
		    $(this).effect('bounce',{distance: 10,times: 3},500);
		 });
		 $(".image12").delay(700).animate({"opacity":"+=1","top":"-60","left":"20"},300,function(){
			$(this).effect('bounce',{distance: 10,times: 3},500);
		 });
		 $(".image13").delay(700).animate({"opacity":"+=1","top":"0","left":"-30"},300,function(){
			 $(this).effect('bounce',{distance: 10,times: 3},500);
		 });
		 $(".image14").delay(700).animate({"opacity":"+=1","top":"0","left":"40"},300,function(){
			 $(this).effect('bounce',{distance: 10,times: 3},500);
		 });
		 $(".image15").delay(700).animate({"opacity":"+=1","top":"80","left":"-6"},300,function(){
			 $(this).effect('bounce',{distance: 10,times: 3},500);
		 });
		
	});
 });
	}

}
