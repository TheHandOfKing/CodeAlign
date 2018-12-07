$(document).ready(function(){

    window.onscroll = function() {scrollToTop()};

	function scrollToTop() {
	if (document.documentElement.scrollTop > 200) { 
            $("#scrollTop").stop().fadeIn(300);
		} else {
            $("#scrollTop").stop().fadeOut(300);
		}
	}

	$("#scrollTop").click(function(){
		$("html, body").animate({scrollTop : 0}, "fast");
	});


	$('#hover3').hover(function(){
		$('#hover2').stop().animate({
			width:"200px"
		}, 1000);
		$('#hover1').stop().animate({
			width:"200px"
		}, 1000);
		$(this).stop().animate({
			width:"75%"
		}, 1000);
		$('#hover1 p').stop().fadeOut( 400 )
		$('#hover2 p').stop().fadeOut( 400 )
		$('#hover3 .fa-spinner').stop().fadeOut( 100 );
		$('.fa-space-shuttle').stop().rotate({
			angle: 0,
			  animateTo:-90,
			  duration:2000
		})
		$('#hover3 .forShow').stop().fadeOut(500);
		$('#hover3 .smallPr').stop().fadeOut(500);
		$('#hover3 .topContentHalf').stop().css("display", "inline-flex").hide().fadeIn();
		$('#hover3 .bottomContentHalf').stop().css("display", "inline-flex").hide().fadeIn();
	},function(){
		$('#hover2').stop().animate({
			width:"500px"
		}, 1000);
		$('#hover1').stop().animate({
			width:"500px"
		}, 1000);
		$(this).stop().animate({
			width:"500px"
		}, 1000);
		$('#hover1 p').stop().fadeIn( 400 )
		$('#hover2 p').stop().fadeIn( 400 )
		$('#hover3 .fa-spinner').stop().fadeIn( 1000 );
		$('.fa-space-shuttle').stop().rotate({
			angle: -90,
			  animateTo:0,
			  duration:2000
		})
		$('#hover3 .forShow').stop().fadeIn(500);
		$('#hover3 .smallPr').stop().fadeIn(500);
		$('#hover3 .topContentHalf').stop().css("display", "none")
		$('#hover3 .bottomContentHalf').stop().css("display", "none")
	})

	$('#hover2').hover(function(){
		$('#hover3').stop().animate({
			width:"200px"
		}, 1000);
		$('#hover1').stop().animate({
			width:"200px"
		}, 1000);
		$(this).stop().animate({
			width:"75%"
		}, 1000);
		$('#hover1 p').stop().fadeOut( 400 )
		$('#hover3 p').stop().fadeOut( 400 )
		$('#hover2 .fa-spinner').stop().fadeOut( 100 );
		$('#hover2 .forShow').stop().fadeOut(500);
		$('#hover2 .smallPr').stop().fadeOut(500);
		$('#hover2 .topContentHalf').stop().css("display", "inline-flex").hide().fadeIn();
		$('#hover2 .bottomContentHalf').stop().css("display", "inline-flex").hide().fadeIn();
	},function(){
		$('#hover3').stop().animate({
			width:"500px"
		}, 1000);
		$('#hover1').stop().animate({
			width:"500px"
		}, 1000);
		$(this).stop().animate({
			width:"500px"
		}, 1000);
		$('#hover1 p').stop().fadeIn( 400 )
		$('#hover3 p').stop().fadeIn( 400 )
		$('#hover2 .fa-spinner').stop().fadeIn( 100 );
		$('#hover2 p').stop().fadeIn(1000);
		$('#hover2 .topContentHalf').stop().css("display", "none")
		$('#hover2 .bottomContentHalf').stop().css("display", "none")
	}
	
	)

	$('#hover1').hover(function(){
		$('#hover3').stop().animate({
			width:"200px"
		}, 1000);
		$('#hover2').stop().animate({
			width:"200px"
		}, 1000);
		$(this).stop().animate({
			width:"75%"
		}, 1000);
		$('#hover2 p').stop().fadeOut( 400 )
		$('#hover3 p').stop().fadeOut( 400 )
		$('#hover1 .fa-spinner').stop().fadeOut( 100 )
		$('.fa-plane').stop().rotate({
			angle: 0,
			  animateTo:-90,
			  duration:2000
		})
		$('#hover1 .topContentHalf').stop().css("display", "inline-flex").hide().fadeIn();
		$('#hover1 .bottomContentHalf').stop().css("display", "inline-flex").hide().fadeIn();
		$('#hover1 .forShow').stop().fadeOut(500);
		$('#hover1 .smallPr').stop().fadeOut(500);
	},function(){
		$('#hover3').stop().animate({
			width:"500px"
		}, 1000);
		$('#hover2').stop().animate({
			width:"500px"
		}, 1000);
		$(this).stop().animate({
			width:"500px"
		}, 1000);
		$('#hover2 p').stop().fadeIn( 1000 )
		$('#hover3 p').stop().fadeIn( 1000 )
		$('#hover1 .fa-spinner').stop().fadeIn( 100 );
		$('.fa-plane').stop().rotate({
			angle: -90,
			  animateTo:0,
			  duration:2000
		})
		$('#hover1 .topContentHalf').stop().css("display", "none")
		$('#hover1 .bottomContentHalf').stop().css("display", "none")
		$('#hover1 .forShow').stop().fadeIn(500);
		$('#hover1 .smallPr').stop().fadeIn(500);
	}
	
	)
});


