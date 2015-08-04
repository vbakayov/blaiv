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


});




