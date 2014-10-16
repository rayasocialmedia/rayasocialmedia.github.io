jQuery(document).ready(function(){
    jQuery(".select-section-form").not(":visible").css("right",jQuery(window).width() + "px");
    
    jQuery(".cause-section").click(function(){
        jQuery("#step2").show().animate({"right": "0"}, 1000);
        jQuery(".fill-cause").addClass("create-cause-step-active");
        jQuery("#step1").delay(190).animate({"right": "-" + jQuery(window).width()}, 1000, function(){
            jQuery("#step1").hide();
        });
    });
    
    jQuery(".cause-form-action").click(function(){
        jQuery("#step3").show().animate({"right": "0"}, 1000);
        jQuery(".submit-cause").addClass("create-cause-step-active");
        jQuery("#step2").delay(190).animate({"right": "-" + jQuery(window).width()}, 1000, function(){
            jQuery("#step1").hide();
        });
    });
});