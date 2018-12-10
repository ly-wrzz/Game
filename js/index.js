var wife = {
    bind: function () {
        this.plug();
        this.myCarousel();
        this.roll();
        this.scrollUp();
    },
    plug:function () {
        $('#carousel-example-generic').hammer().on('swipeleft', function(){
            $(this).carousel('next');
        });
        $('#carousel-example-generic').hammer().on('swiperight', function(){
            $(this).carousel('prev');
        });
        $('#mouse').hammer().on('swipeleft', function(){
            $(this).carousel('next');
        });
        $('#mouse').hammer().on('swiperight', function(){
            $(this).carousel('prev');
        });
    },
    myCarousel:function () {
        $(".player_min>ul>li").click(function () {
            $(".player_min>ul>li").removeClass("current")
            $(this).addClass("current")
            console.log($(this).attr("value") == 1)
            if ($(this).attr("value") == 1){
                $(".player_max").css('marginLeft','-50%')
            }else {
                $(".player_max").css('marginLeft','0')
            }
        })
    },
    roll:function() {
        $(document).ready(function(){
            $(window).scroll(function(){
                var topp = $(document).scrollTop();
                if (topp >= 100){
                    $(".nav_location").css('top','0')
                }else {
                    $(".nav_location").css('top','-60px')
                }
            });
        });
    },
    scrollUp:function () {
        $(window).scroll(function(){
            var top=$(window).scrollTop();
            if(top>400){
                $(".scrollUp").fadeIn();
            }else{
                $(".scrollUp").fadeOut();
            };
        });
        $(".scrollUp").click(function () {
            var speed=500;
            $('body,html').animate({ scrollTop: 0 }, speed);
            return false;
        });
    }
}
wife.bind();