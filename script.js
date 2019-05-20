// PRELOADER
setTimeout(function(){
    
$(document).ready(function () {

    // OPEN SECTION
    $(".box").click(function () {
        var that = this;
        $(this).addClass("active");
        $(".box").removeClass("small");
        $(".logo").addClass("inactive");
        $("footer").addClass("inactive");
        $(this).animate({ width: "100%", height: "100%" }, 500);
        setTimeout(function () { $(".box").not(that).addClass("inactive"); }, 500);
        setTimeout(function () { $(".close").removeClass("inactive"); }, 500);

    // OPEN WORKS SECTION  
        if ($("#works").hasClass("active")) {

            $("#darkness").addClass("works-bg2");
            $("#darkness").removeClass("works-bg1");
            setTimeout(function () { $("#darkness>div").removeClass("inactive"); }, 500);
        }
    // OPEN SKILLS SECTION
    if ($("#skills").hasClass("active")) {
        setTimeout(function () { $("#skills .container").removeClass("inactive"); }, 500);
    }
    // OPEN ABOUT SECTION
    if ($("#about").hasClass("active")) {
        setTimeout(function () { $("#about .container").removeClass("inactive"); }, 500);
    }
    })

    // CLOSE SECTION
    $(".close").click(function () {
        var that = $(".active");
        if ($("#works").hasClass("active")) {
            var wdth = "65%";
            var hth = "100%";
            var changeBg = function (){
                $("#darkness").removeClass("works-bg2");
                $("#darkness").addClass("works-bg1");
           }
           setTimeout(changeBg, 400);
        }
        else {
            var wdth = "35%";
            var hth = "50%";
        };

        //console.log("Nowe parametry to:" + wdth + hth);
        $(".close").addClass("inactive");
        $(".box").removeClass("inactive");
        
        that.animate({ width: wdth, height: hth }, 500);
        setTimeout(function () { $("footer").removeClass("inactive"); }, 500);
        setTimeout(function () { $(".logo").removeClass("inactive"); }, 500);
        setTimeout(function () { that.removeAttr("style"); }, 600);
        setTimeout(function () { that.removeClass("active"); }, 600);
        setTimeout(function () { $(".box").addClass("small"); }, 600);

    // CLOSE WORKS SECTION
    if ($("#works").hasClass("active")) {
        $("#darkness>div").addClass("inactive");
    }
    // CLOSE SKILLS SECTION
    if ($("#skills").hasClass("active")) {
        $("#skills .container").addClass("inactive");
    }
    // CLOSE ABOUT SECTION
    if ($("#about").hasClass("active")) {
        $("#about .container").addClass("inactive");
    }

    })

    //  MOUSEOVER PORTFOLIO
    $(".project-box").mouseover(function(){
        $(".content").removeClass("inactive");
    })
});
}, 2000);