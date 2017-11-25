$(document).ready(function(){
    $("nav a").on("click", function(e){
        e.preventDefault();
        var curUri = $(this).attr("href");
        var scrollIdIndex = curUri.lastIndexOf('#')+1;
        var scrollId = curUri.substring(scrollIdIndex);
        $("html, body").animate({scrollTop:$("#sdn-"+scrollId).offset().top}, 1000);
    }); 

    $(document).on("keydown", function(e){
        e.preventDefault();
        if(e.keyCode == 40)
            scrolldown();
        else if(e.keyCode == 38)
            scrollup();
    
    });

    $('.down').on("click", function(e){
        e.preventDefault();
        scrolldown();
    });

    $('.up').on("click", function(e){
        e.preventDefault();
        scrollup();
    });
   
    function scrollup(){
       $($("section").get().reverse()).each(function(i, section) {
        let target = $(section).offset().top;
        if (target < $(window).scrollTop()) {
            $("html, body").animate({scrollTop:target}, 1000);
            return false;
        }
       });
    } 
    function scrolldown(){
       $("section").each(function(i, section) {
        let target = $(section).offset().top;
        if (target > $(window).scrollTop()) {
            $("html, body").animate({scrollTop:target}, 1000);
            return false;
        }
       });

    }
});
