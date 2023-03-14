$(document).ready(function(){
    $(window).scroll(function(){ 
        /* Upon scroll value of Y axis going above 20, add class Sticky */
        if(this.scrollY > 20)
            $(".navbar").addClass("sticky");
        else
            $(".navbar").removeClass("sticky");
    });

    /* Script for the hamburger menu, toggles class active to trigger effect */
    $('.menu-toggler').click(function(){
        $(this).toggleClass("active");
        $(".navbar-menu").toggleClass("active");
    });
});