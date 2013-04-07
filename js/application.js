function switch_images(){
    var visibleImageIndex = jQuery(".intro img:visible").index(".intro img");
    if(++visibleImageIndex >= jQuery(".intro img").length){
        visibleImageIndex = 0;
    }
    jQuery(".intro img:visible").fadeOut(function(){
        jQuery(".intro img").eq(visibleImageIndex).fadeIn();
    });
}

jQuery(document).ready(function(){

    var offsetTop = jQuery(".navbar").height();
    
    jQuery(".nav a").click(function(){
        var section = jQuery(this).attr("id").replace("-nav","");
        var offset = jQuery("#" + section).offset().top;
        var scrollTop = offset - offsetTop;
        jQuery(".nav li").removeClass("active");
        jQuery(this).closest('li').addClass("active");
        jQuery("body").animate({
            scrollTop: scrollTop
        }, 400);
    });

    setInterval("switch_images();", 3000);
});