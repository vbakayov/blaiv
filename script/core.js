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

    $('form').submit(function() {



        var formData = $(this).serialize(),
            $success = $(this).find('.success'),
            $submit = $(this).find('button[type=submit]');

        $submit.hide();

       console.log  ("I ama hereee ");
        $.post( '/get-started/', formData).done(function() {
            $success.show();
        });

        return false;
    });
    //Scroll down to position
    $('a').click(function(){
        $('html, body').animate({
            scrollTop: $( $(this).attr('href') ).offset().top
        }, 500);
        return false;
    });

    $(document).ready(function(){
        $("#start-project").click(function(){

                var e = document.getElementById("myAnchor");
                if(e.style.display == 'block')
                    e.style.display = 'none';
                else
                    e.style.display = 'block';
            })
    });


});

var previousScroll = 0,
    headerOrgOffset = $('.navbar').height();

$('.navbar').height($('.navbar').height());

$(window).scroll(function () {
    var currentScroll = $(this).scrollTop();
    if ($(this).scrollTop() > 400) {
        if (currentScroll > headerOrgOffset) {
            if (currentScroll > previousScroll) {
                $('.navbar').slideUp(500);
            } else {
                $('.navbar').slideDown(500);
            }
        } else {
            $('.navbar').slideDown(500);
        }
        previousScroll = currentScroll;
    }
});






