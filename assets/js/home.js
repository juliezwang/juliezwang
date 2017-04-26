$(document).ready(function() {
// card flip

  //"slide to left" when the user clicks on #carousel-next
    $('#carousel-next').click(function() {
        var val = parseInt($('#carousel').css('margin-left').replace("px", ""));
        if (val == -2880) {
            $('#carousel-next').css('opacity', 0.2);   
        }
        if (val == -3840) {
            return false;  
        }
        else {
            $('#carousel').css('margin-left', val - 960); 
            $('#carousel-prev').css('opacity', 1); 
        }
    })

  //"slide to right" when the user clicks on #carousel-prev
    $('#carousel-prev').click(function() {
        var val = parseInt($('#carousel').css('margin-left').replace("px", ""));
        if (val == -960) {
            $('#carousel-prev').css('opacity', 0.2);   
        }
        if (val == 0) {
            return false;  
        }
        else {
            $('#carousel').css('margin-left', val + 960);  
            $('#carousel-next').css('opacity', 1); 
        }
    })

});



