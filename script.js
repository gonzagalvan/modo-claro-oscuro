$(document).ready(function() {
    $('.modo-claro').click(function() {
        $('body').removeClass('modo-oscuro');
        $('body').addClass('modo-claro');
    });

    $('.modo-oscuro').click(function() {
        $('body').removeClass('modo-claro');
        $('body').addClass('modo-oscuro');
    });
});
