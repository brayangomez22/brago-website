$(document).ready(function(){
    // WOW Instance
    new WOW().init();
    
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $(".navbar").addClass("sticky");
            $(".goTop").fadeIn();
        }
        else{
            $(".navbar").removeClass("sticky");
        }
    });

    $(".goTop").click(function(){scroll(0,0)});

});