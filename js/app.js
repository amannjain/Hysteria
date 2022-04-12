
$(document).ready(function(){
    $('.slider').slick({
        arrows:false,
        dots:true,
        appendDots:'.slider-dots',
        dotsClass:'dots'
    });
    $("#fest").mouseenter(function(){
        $("#fest").animate({width:'1300px',height:'700px',opacity:'1.0'},2000)
    });

    $("#yearshow").mouseenter(function(){
        $("#year").show(2000)
    });
    $("#abhinav").hover(function(){
        $("#organizing").show(1000)
    });
    $("#anisha").hover(function(){
        $("#promotion").show(1000)
    });
    $("#pratham").hover(function(){
        $("#technical").show(1000)
    });
    $("#aman").hover(function(){
        $("#cultural").show(1000)
    });
    $("#intro").mouseenter(function(){
        $(this).animate({fontSize:'20px'});
        $(this).css("color","red")
    });
   
});
