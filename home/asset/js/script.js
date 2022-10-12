
// Layanan Scroll
$(".Layanan").click(function() {
    $('html,body').animate({
        scrollTop: $("#Layanan").offset().top},
        'slow');
});