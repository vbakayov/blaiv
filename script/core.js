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
    $('form').submit(function () {

        var
            $success = $(this).find('.success'),
            $submit = $(this).find('button[type=submit]');

        $submit.hide();
        $success.show();
    });
    //Scroll down to position
    $('a').click(function () {
        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top
        }, 500);
        return false;
    });



    $('#collapseButton').bind('click', function() {
        if(!$("#collapseButton").hasClass("collapsed")) {
            $("#navigation").css("height", "");
            $("#navigation").css("overflow", "hidden");
        }else {
            $("#navigation").css("height", "200");
            $("#navigation").css("overflow", "");


        }

        });



    $(".toggleIt").hover( function () {
        $(this).addClass("active"); },
        function () { $(this).removeClass("active"); } );

    $(document).ready(function(){
        $("#start-project").click(function(){

                var e = document.getElementById("myAnchor");
                if(e.style.display == 'block')
                    e.style.display = 'none';
                else
                    e.style.display = 'block';
            })
    });


    //control the navbar fadein/out initial nav
    var previousScroll = 0,lastKnownScrollY=0 ,
        headerOrgOffset = 600
    var tolerance = 500;
    var direction = '';
    var currentDiffrence = 0;

$(function(){
if($('div').is('.down-arrow')) {
    //$('.navbar').height($('.navbar').height());

    $(window).on('scroll',function() {
        var currentScroll = $(this).scrollTop();

        //var header = document.getElementById("header-container");
        //if ($(this).scrollTop() == 0) {
        //    //$('.navbar').removeClass("navbar-harvest").addClass("navbar-custom");
        //    $('.navbar-brand').removeClass("visible").addClass("hidden");
        //    $("#header-container").removeClass("container-fluid-background");
        //
        //}
        //
        //if ($(this).scrollTop() != 1) {
        //    //$('.navbar').addClass("navbar-harvest").removeClass("navbar-custom");
        //    $('.navbar-brand').removeClass("hidden").addClass("visible");
        //    $('#header-container').addClass("container-fluid-background");
        //}

        if ($(this).scrollTop() > 200) {
            $('.down-arrow').addClass("toflip animated fadeOutDown");
        }

        if ($(this).scrollTop() == 0) {
            $('.down-arrow').removeClass("toflip animated fadeOutDown").addClass("toflip animated fadeInDown");
        }


    //if ($(this).scrollTop() > headerOrgOffset) {
    //    //FIND THE DIRECTION
    //    if (previousScroll > currentScroll) {
    //        if (direction === "down") currentDiffrence = 0
    //        direction = "up";
    //        currentDiffrence += currentScroll - previousScroll;
    //        console.log(direction + currentDiffrence);
    //        //   if(currentDiffrence > tolerance){
    //        $('.navbar').slideDown(500);
    //    }
    //    else {
    //        if (direction === "up") currentDiffrence = 0
    //        direction = "down";
    //        currentDiffrence += currentScroll - previousScroll;
    //        console.log(direction + currentDiffrence);
    //        //  if(currentDiffrence > tolerance){
    //        //     console.log("I AM HEREEE")
    //        $('.navbar').slideUp(500);
    //    }
    //
    //
    //    previousScroll = currentScroll;
    //
    //}
//
    });
}

});






});




//$('#submit').click(function()
//{
//    $.ajax({
//        url: sendMail.php,
//        type:'POST',
//        data : $('#form').serialize(),
//        success: function(msg)
//        {
//            alert('Email Sent');
//        }
//    });
//});



//$('.toflip').waypoint(function(direction,event) {
//
//    console.log("Waypoint moved "+direction);
//    if (direction === "down") {
//        $(this).removeClass("animated fadeOutDown").addClass("animated fadeIn")
//    }if(direction ==='up')
//        $(this).removeClass("animated fadeInUp").addClass("animated fadeOutDown");
//
//}, {
//    offset: '100%'
//});






