$(document).ready(function() {
    "uses strick"

    let introH = $("#intro").innerHeight();
    let header = $("#header");
    let scrollOffSet = $(window).scrollTop();



    /* Fixed Header*/
    checkScroll(scrollOffSet);
    
    $(window).on("scroll", function() {
        
        scrollOffSet = $(this).scrollTop();

        checkScroll(scrollOffSet);
    });


    function checkScroll(scrollOffSet) {
        if( scrollOffSet  > introH ) {
            header.addClass("fixed");
        } else {
            header.removeClass("fixed");
        }
    }



    /*Sooth Scroll*/

    $("[data-scroll").on("click", function(event) {
        event.preventDefault();

    let $this = $(this);
        elementId = $this.data("scroll");
        elementOffSet = $(elementId).offset().top;
        

        $("#nav a").removeClass("active");
        $this.addClass("active");

        $("html, body").animate( {
            scrollTop: elementOffSet
        }, 700);
    });


    /*Burger menu*/

    $("#navToggle").on("click", function(event) {
        event.preventDefault();

        $("#nav").toggleClass("active");
    });


    /*Collapse*/

    $("[data-collaps]").on("click", function(event) {
        event.preventDefault();

        let $this = $(this)
        let elementId = $this.data("collaps");


            $this.toggleClass("active");
            
    });


    /*Sider*/

    $("[data-slider").slick( {
        infinite: true,
        fade: false,
        slidesToShow: 1,
        slidesToScroll: 1
    })
});