$(document).ready(function(){

   $('body').fadeIn(500);
	
	$("#sticker").sticky({topSpacing:0});


	$(".carousel").carousel({
		pause: "true",
	});

	$('.toggle').on('click', function() {
		$('.menu').toggleClass('active');
	});


	$(".left-btn").hover(function() {
		$(this).attr("src","images/gauche-hover.png");
			}, function() {
		$(this).attr("src","images/gauche.png");
	});

	$(".right-btn").hover(function() {
		$(this).attr("src","images/droite-hover.png");
			}, function() {
		$(this).attr("src","images/droite.png");
	});


        var input_text_mail_default = 'votre e-mail';
	$('input[type="email"]').focus(function(){
            if ($(this).attr('value') == input_text_mail_default) {
                $(this).attr('value', '');
            };
	}).focusout(function(){
            if ($(this).attr('value') == '') {
                $(this).attr('value', input_text_mail_default);
            };
	});


	// browser window scroll (in pixels) after which the "back to top" link is shown
	var offset = 300,
		//browser window scroll (in pixels) after which the "back to top" link opacity is reduced
		offset_opacity = 1200,
		//duration of the top scrolling animation (in ms)
		scroll_top_duration = 700,
		//grab the "back to top" link
		$back_to_top = $('.cd-top');

	//hide or show the "back to top" link
	$(window).scroll(function(){
		( $(this).scrollTop() > offset ) ? $back_to_top.addClass('cd-is-visible') : $back_to_top.removeClass('cd-is-visible cd-fade-out');
		if( $(this).scrollTop() > offset_opacity ) { 
			$back_to_top.addClass('cd-fade-out');
		}
	});

	//smooth scroll to top
	$back_to_top.on('click', function(event){
		event.preventDefault();
		$('body,html').animate({
			scrollTop: 0 ,
		 	}, scroll_top_duration
		);
	});

	});

	jQuery('#cody-info ul li').eq(1).on('click', function(){
	$('#cody-info').hide()


	$(document).ready(function(){
	
	$('#portfolio-list').filterable();

	});

	
});

