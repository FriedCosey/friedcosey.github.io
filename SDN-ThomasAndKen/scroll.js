$(document).ready(function(){
    var keyhold = {};
    $("nav a").on("click", function(e){
        e.preventDefault();
        var curUri = $(this).attr("href");
        var scrollIdIndex = curUri.lastIndexOf('#')+1;
        var scrollId = curUri.substring(scrollIdIndex);
        $("html, body").animate({scrollTop:$("#sdn-"+scrollId).offset().top}, 1000);
    }); 
    
    $(document).on("mousewheel", debounce(function(e){
        e.preventDefault();
            if(e.deltaY < 0){
                scrolldown();
            }
            else if(e.deltaY > 0){
                scrollup();
            }
    
    },50));
    $(document).on("keydown", function(e){
        e.preventDefault();
        if(e.keyCode == 40 && keyhold[40] == null){
            keyhold[40] = true;
            scrolldown();
        }
        else if(e.keyCode == 38 && keyhold[38] == null){
            keyhold[38] = true;
            scrollup();
        }
    });

    $(document).on("keyup", function(e){
        e.preventDefault();
        keyhold[e.keyCode] = null;
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
    // Credit to https://davidwalsh.name/javascript-debounce-function
    function debounce(func, wait, immediate) {
    var timeout;
    return function() {
        var context = this, args = arguments;
        var later = function() {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        var callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
};

});
