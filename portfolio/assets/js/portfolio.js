$(document).ready(function() {

$('.question').click(function() {
		if ($(this).parent().is('.open')){
			$(this).closest('.question1').find('.answer_container').animate({'height':'0'},800);
			$(this).closest('.question1').removeClass('open');
			} else{
				var newHeight =$(this).closest('.question1').find('.answer').height() +'px';
				$(this).closest('.question1').find('.answer_container').animate({'height':newHeight},800);
				$(this).closest('.question1').addClass('open');
			}
})
});