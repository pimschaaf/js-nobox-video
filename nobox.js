/**
 * prevents pillarboxing and letterboxing on video element
 * credits to Thomas - thomas@dpi.nl
 * 
 * has jQuery dependency
 */ 
function scaleVideoplayer() {
    $('#videoplayer-element.fullscreen').each(function () {
        var $window = $(window),
            left = '',
            width = '',
            top = '',
            height = '',
            ratio = 16 / 9,
            windowHeight = $window.height(),
            windowWidth = $window.width();

        if ((windowWidth / windowHeight) >= ratio) {
            height = Math.round(windowWidth / ratio);
            top = Math.round((((windowHeight - $("#header").height()) - height) / 2));
        } else {
            width = Math.round((windowHeight) * ratio);
            height = windowHeight;
            left = Math.round(((windowWidth - width) / 2));
        }

        // @todo This should perform better with a CSS3 transform
        $(this).css({
            top:top,
            height:height,
            left:left,
            width:width
        });
    });
}
