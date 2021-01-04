/*global $,JQuery,alert*/
//loading-overlay//
$(window).on("load", function() {
    var loadlay = $(".loading-overlay");
    $("body").css("overflow", "auto");
    loadlay.fadeOut(1000, function() {
        loadlay.remove()
    });
})

//loading-overlay//

$(function() {

        $("body").css({
            paddingTop: $(".navbar").innerHeight() + "px"
        });
        $('.carousel').carousel({
            interval: 5000
        })

        //trigger nicescoll//

        $("html").niceScroll({
                zindex: "9999999999",
                cursorcolor: "#325BFF",
                cursorwidth: "12px",
                cursorborderradius: "0",
                cursorborder: "2px solid #325BFF",
                cursoropacitymin: "1"
            })
            //trigger nicescoll//
        var placehold = "";

        $("[placeholder]").focus(function() {
                placehold = $(this).attr("placeholder");
                $(this).attr("placeholder", "")
            }).blur(function() {
                $(this).attr("placeholder", placehold)
            })
            //option box//
        var optionbox = $(".option-box");
        $(".option-box i").click(function() {
                $(this).toggleClass("open");
                if ($(this).hasClass("open")) {
                    optionbox.animate({
                        left: "-3px"
                    })
                } else {
                    optionbox.animate({
                        left: "-250px"
                    })
                }
            })
            //option box//
            //change page color//

        $(".option-box ul li").click(function() {

                $("link[href*='theme']").attr(
                    "href", "css/" + $(this).data("color")
                )
            })
            //change page color//
            //scroll to top//
        var scrollbutt = $("#scroll-top");
        $(window).scroll(function() {
            if ($(this).scrollTop() >= 1500) {
                scrollbutt.fadeIn()
            } else {
                scrollbutt.fadeOut()
            }
        })

        scrollbutt.click(function() {
                $("body,html").animate({
                    "scrollTop": "0"
                }, 800)
            })
            //scroll to top//

    })
    //trigerd wow js//

new WOW().init();
//triggrd wow js//