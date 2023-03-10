$(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
        $(".scrollUp").addClass("show");
    }
    else {
        $(".scrollUp").removeClass("show");
    }
})