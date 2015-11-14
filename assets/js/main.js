$(document).ready(function() {
	$('.post-link').click(function(){
		$('.ui.card').hide();
		$($(this).attr('href')).show();
		$('.post-link').removeClass('active');
		$(this).addClass('active');
	});
	var a = window.location.href.indexOf("#");
	if (a) {
		$url = window.location.href.substring(a);
		$('.post-link[href='+$url+']').addClass('active');
		$($url).show();
	}
});