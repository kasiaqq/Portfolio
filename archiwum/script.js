$(document).ready(function () {

    // OPEN ONE SECTION
    $(".box").click(function () {
        var that = this;
        $(this).addClass("active");
        $(this).animate({ width: "100vw", height: "100vh" }, 500);
        setTimeout(function () { $(".box").not(that).addClass("inactive"); }, 500);
        setTimeout(function () { $(".close").removeClass("inactive"); }, 500);
    })

    // CLOSE SECTION
    $(".close").click(function () {
        var that = $(".active");
        if ($("#about").hasClass("active")) {
            var wdth = "33%";
            var hth = "67%";
        };
        if ($("#skills").hasClass("active")) {
            var wdth = "67%";
            var hth = "33%";
        };
        if ($("#works").hasClass("active")) {
            var wdth = "67%";
            var hth = "67%";
        };

    //console.log("Nowe parametry to:" + wdth + hth);
    $(".close").addClass("inactive");
    $(".box").removeClass("inactive");
    that.animate({ width: wdth, height: hth }, 500);
    setTimeout(function () { that.removeAttr("style"); }, 600);
    setTimeout(function () { that.removeClass("active"); }, 600);


})

});