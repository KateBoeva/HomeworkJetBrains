$(function () {
    $('ul li a').click(function(event) {
        var checkElement = $(this).next();
        checkElement.stop().animate({'height':'toggle'}, 500);
        if((checkElement.is('ul')) && (checkElement.is(':visible'))) {
            event.preventDefault();
        }
    });
});
