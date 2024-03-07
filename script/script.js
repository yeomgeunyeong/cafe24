$(function(){

    //팝업
    $(".pop").hide();
    $(".pop").slideDown("fast");

    $(".close").click(function(){
        $(".pop").slideUp();
    })


    //메뉴슬라이드
    $(".main_re").hover(function(){
        $(".sub").stop().show()
    }, function(){
        $(".sub").stop().hide()
    })


    //고객센터 슬라이드
    $(".t_icon, .top_hover").hover(function(){
        $(".t_icon").css({rotate:"180deg"})
        $(".top_sub").stop().slideDown();
    }, function(){
        $(".t_icon").css({rotate:"0deg"})
        $(".top_sub").stop().slideUp();
    })





    $(".viewer").slick({
        // autoplay: true,
        dots:true,
        arrows:false,
        // autoplaySpeed:3500,
    })


    //탭메뉴
    $(".skin_tab").click(function(e){
        e.preventDefault();
        $(".skin_tab").removeClass("on");
        $(this).addClass("on");

        n=$(this).index();
        console.log(n);

        $(".product_wrap > ul").removeClass("active");
        $(".product_wrap > ul").eq(n).addClass("active")
    })



    $(".topseller_list").slick({
        slidesToShow:4,
        slidesToScroll:1,
        arrows:true,
        pauseOnHover:true,
        
    })


    // $(".modal, .s_pop").hide();
    $(".s_click").click(function(){
        $(".modal, .s_pop").fadeIn();
    })

    $(".pop_close").click(function(){
        $(".modal, .s_pop").fadeOut();
    })
})//