jQuery(document).ready(function(){
    jQuery(".flowchart-item-details").not(":visible").css("height","0px");
    jQuery(".t-r").not(":visible").css("height","0px");
    
    jQuery(".flowchart a").click(function(){
        var item = jQuery(this).attr("id");
        if(!jQuery("." + item + "-flowchart-details").is(":visible")){
            jQuery(".flowchart-item-details:visible").animate({height: "0"}, 600, function(){
                jQuery(".flowchart-item-details:visible").hide();
                jQuery("." + item + "-flowchart-details").show().animate({height: "181"}, 600);
            });
        }
    });
    
    jQuery(".t-r").click(function(){
        jQuery(".t-r:visible").animate({height: "0"}, 600, function(){jQuery(this).hide()});
        jQuery(".t-r").not(":visible").show().animate({height: "657"}, 600);
    });
});