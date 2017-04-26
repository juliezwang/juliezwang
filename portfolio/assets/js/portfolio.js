$(document).ready(function() {

$('.question').click(function() {
		if ($(this).parent().is('.open')){
			$(this).closest('.faqs').find('.answer_container').animate({'height':'0'},800);
			$(this).closest('.faqs').removeClass('open');
			} else{
				var newHeight =$(this).closest('.faqs').find('.answer').height() +'px';
				$(this).closest('.faqs').find('.answer_container').animate({'height':newHeight},800);
				$(this).closest('.faqs').addClass('open');
			}
})
});