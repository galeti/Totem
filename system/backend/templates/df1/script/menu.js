$(function(){
    $(".top-tabs ul").on("click", "li", function(){
        $this = $(this);
        $this.siblings().removeClass("active");
        $this.addClass("active");
        $this.closest(".window-holder").find(".content > .window").hide();
        $(".for-" + $this.attr("id")).show();
        window.location.hash = $this.attr("id");
    });

    if( (deepLink = window.location.hash) !== ''){
        $(deepLink).click();
    }

    $(".next-tab").click(function(){
        $(".top-tab ul").find(".active").next().click();
    });

    $(".preview-tab").click(function(){
        $(".top-tab ul").find(".active").prev().click();
    });
});