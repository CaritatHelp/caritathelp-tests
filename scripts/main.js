$(document).ready(function() {
	$('.post-link').click(function(){
		$('.ui.card').hide();
		$($(this).attr('href')).show();
		$('.post-link').removeClass('active');
		$(this).addClass('active');
	});
});