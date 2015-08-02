/**
 * Created by Viktor on 8/2/2015.
 */
var fissa = 0;



$(document).ready(function() {
    $(".filtri a").click(function() {
        $(".filtri a.current").removeClass("current");
        $(this).addClass("current");
        var g = $(this).d
        ata("filtro").substr(7);
        if (g == "tutti") {
            $(".grid-item").animate({
                opacity: 1
            }, 300);
        } else {
            $(".grid-item").each(function() {
                if (!$(this).hasClass(g)) {
                    $(this).animate({
                        opacity: 0.1
                    }, 300);
                } else {
                    $(this).animate({
                        opacity: 1
                    }, 300);
                }
            });
        }
        return false;
    });
    var a = {};
    $(".carousel-montere").hammer(a).on("swipeleft dragleft", function(g) {
        $(this).carousel("next");
    }).on("swiperight dragright", function(g) {
        $(this).carousel("prev");
    });
    if ($("#section_nav").length > 0) {
        $("#section_nav a").tooltip();
    }
    $("#faq-group .collapse").each(function(g, i) {
        var i = $(i);
        var h = i.parent().find("h3");
        i.on("show.bs.collapse", function() {
            $("html, body").animate({
                scrollTop: h.offset().top - 90 - 40
            }, 1000, "easeInOutExpo", function() {});
            h.addClass("aperto");
        });
        i.on("hidden.bs.collapse", function() {
            h.removeClass("aperto");
        });
    });
    $(".dot-irecommendthis").click(function(h) {
        var g = $(this);
        if (g.hasClass("active")) {
            return false;
        }
        var j = $(this).attr("id");
        var i = g.find(".dot-irecommendthis-suffix").text();
        $.post("/wp-admin/admin-ajax.php", {
            action: "dot-irecommendthis",
            recommend_id: j,
            suffix: i
        }, function(k) {
            g.html(k).addClass("active").attr("title", "");
        });
        h.preventDefault();
    });
    if ($("#gmap").length > 0) {
        attiva_mappa_produttori();
    }
    jQuery(window).hashchange(function() {
        var h = location.hash;
        if (h != "" && h != "#!" && h != "#!/") {
            var g = h.replace("#!/", "");
            console.log(g);
        }
    });
    jQuery(window).hashchange();
    $("textarea").autosize();
    $("textarea").focus(function(g) {
        if ($(this).val() == "MESSAGGIO" || $(this).val() == "MESSAGE") {
            $(this).val("").css("color", "#555");
        }
    });
    $("textarea").blur(function(g) {
        if ($(this).val() == "") {
            $(this).val("MESSAGGIO").css("color", "#999");
        }
    });
    if ($(window).width() > 1200) {
        $(".parallax").each(function(g, i) {
            var h = $(i);
            h.scrollAnimate({
                startScroll: h.offset().top - $(window).height(),
                endScroll: h.offset().top + h.height(),
                cssProperty: "background-position-y",
                before: 0,
                after: -100
            });
        });
        $(".img-block").each(function(g, i) {
            var h = $(i);
            h.scrollAnimate({
                startScroll: h.offset().top - $(window).height(),
                endScroll: h.offset().top + h.height(),
                cssProperty: "background-position-y",
                before: 300,
                after: -300
            });
        });
    }
    $(".scroll-top").click(function(g) {
        $("body, html").animate({
            scrollTop: 0
        }, 1000, "easeInOutExpo");
        g.preventDefault();
    });
    $.fn.waypoint.defaults = {
        context: window,
        continuous: true,
        enabled: true,
        horizontal: false,
        offset: 0,
        triggerOnce: false
    };
    if ($(window).width() > 1024) {
        $.fn.waypoint.defaults = {
            context: window,
            continuous: true,
            enabled: true,
            horizontal: false,
            offset: "80%",
            triggerOnce: false
        };
        $(".totop-wrapper").waypoint(function(g) {
            if (g == "down") {
                $("#section_nav").fadeOut();
            } else {
                $("#section_nav").fadeIn();
            }
        });
        if (!$("html").hasClass("ie8") && !$("html").hasClass("ie9")) {
            $(".tofade,.toflip,.tofadel,.tofader").css("opacity", 0);
            $(".tofade").waypoint(function(g) {
                if (g == "down") {
                    $(this).removeClass("animated fadeOutDown").addClass("animated fadeInUp");
                } else {
                    $(this).removeClass("animated fadeInUp").addClass("animated fadeOutDown");
                }
            });
            $(".toflip").waypoint(function(g) {
                if (g == "down") {
                    $(this).removeClass("animated fadeOutDown").addClass("animated flipInY");
                } else {
                    $(this).removeClass("animated flipInY").addClass("animated fadeOutDown");
                }
            });
            $(".tofadel").waypoint(function(g) {
                if (g == "down") {
                    $(this).removeClass("animated fadeOutLeft").addClass("animated fadeInLeft");
                } else {
                    $(this).removeClass("animated fadeInLeft").addClass("animated fadeOutLeft");
                }
            });
            $(".tofader").waypoint(function(g) {
                if (g == "down") {
                    $(this).removeClass("animated fadeOutRight").addClass("animated fadeInRight");
                } else {
                    $(this).removeClass("animated fadeInRight").addClass("animated fadeOutRight");
                }
            });
        }
    }





    function c() {
        var n = $("#tracking-form-in-page");
        var m = $("#tracking-form-in-page #a");
        var l = $("#tracking-form-in-page #b");
        var k = $("#tracking-form-in-page #c");
        var j = $("#tracking-form-in-page #d");
        if (m.val() != "" && j.val() != "" && k.val() != "" && j.val() != "") {
            var h = $(".track-result > .loader-temp");
            var i = $(".track-result > .inner");
            var g = $(".track-result");
            n.find(".btn").attr("disabled", "disabled");
            g.animate({
                height: 50
            }, 500, "easeInOutExpo", function() {
                $.ajax({
                    type: "POST",
                    url: "/form-tracking.php",
                    data: n.serialize(),
                    success: function(o) {
                        console.log(n.serialize());
                        i.html(o);
                        h.animate({
                            height: 0
                        }, 500, "easeInOutExpo", function() {});
                        i.find(".img-responsive").load(function() {
                            $("body, html").animate({
                                scrollTop: i.offset().top - 150
                            }, 1000, "easeInOutExpo", function() {});
                            g.animate({
                                height: i.height() + 200
                            }, 1000, "easeInOutExpo", function() {
                                if ($(".facebook").length > 0) {
                                    window.fbAsyncInit = function() {
                                        FB.init();
                                        FB.Canvas.setAutoGrow();
                                    };
                                }
                                $(".reset-button").click(function(p) {
                                    f();
                                    return false;
                                    p.preventDefault();
                                });
                            });
                        });
                    }
                });
            });
        }
    }
    $("#tracking-form-in-page").submit(function(g) {
        c();
        g.preventDefault();
    });
    $("#tracking-form").submit(function(g) {
        $("#tracking-form .btn").val("").addClass("loader-temp-mini");
    });
    if ($("#tracking-form-in-page").find("#a").val() != "" && $("#tracking-form-in-page").find("#b").val() != "" && $("#tracking-form-in-page").find("#c").val() != "" && $("#tracking-form-in-page").find("#d").val() != "") {
        if ($(".track-result > .inner").length > 0) {
            var b = $(".track-result > .inner");
            $("body, html").animate({
                scrollTop: b.offset().top - 200
            }, 1500, "easeInOutExpo", function() {
                $("#tracking-form-in-page").trigger("submit");
            });
        }
    }
    $(window).trigger("resize");
});
