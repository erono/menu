$(document).ready(function() {	
	/*--- Mobile Menu ---*/
	$('.menu-icon').bind('touchstart mousedown', function(e){
		$(".mobile-nav li").removeClass("open");
		$(".sub-nav").slideUp(200);
		$("body").toggleClass("menu-open");	
		if($("body").hasClass("search-open")){
			$("body").removeClass("search-open");
		}
		return false;
	});
	
	
	
	$(".has-children .toggle").click(function(e) {
		var sub_nav = $(this).closest("li").children(".sub-nav");
		if(sub_nav.is(':visible'))
		{
			$(this).closest("li").removeClass("open");
			sub_nav.slideUp(200);
		}
		else
		{
			$(".mobile-nav li").removeClass("open");
			$(this).closest("li").addClass("open");
			$(".sub-nav").slideUp(200);
			sub_nav.slideDown(200);
		}
				
		return false;
		
	});
	
	$("#content_mask, .menu-close").bind('touchstart mousedown', function(e){
		$(window).scrollTop(0);
		$(".mobile-nav li").removeClass("open");
		$(".sub-nav").slideUp(200);
		$("body").removeClass("menu-open search-open");
		return false;
	});
	
	/*--- Mobile Search Button ---*/
	$(".search-icon").click(function(e) {
		$("body").toggleClass("search-open");
		if($("body").hasClass("search-open")){
			$(".search-box").focus();
			$('html,body').animate({
				scrollTop: 47
			}, 800);
		}		
		return false;
  });
	
	
	$(".search-box").keyup(function(e) {
		if( !$(this).val() ) {
			$(".search-cancel").hide();
			$(".suggestions-list").slideUp(150);
    }
		else{
			$(".search-cancel").show();
			$(".suggestions-list").slideDown(150);
		}
    
  });
	
	$(".search-cancel").click(function(e) {
		$(".search-box").val("").focus();
		$(".suggestions-list").slideUp(150);
		$(this).hide();
	});
	
	
});
