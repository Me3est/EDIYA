$(window).ready(function() {
    // 음료 tab
    tab_click2('.DRINK', 'url(/img/drink_visual.jpg) no-repeat center / cover', '음료', 'EDIYA COFFEE', '.food_container', '.md_container', '.drink_container');
    // 푸드 tab
    tab_click2('.FOOD', 'url(/img/bakery_visual.jpg) no-repeat center / cover', '베이커리', 'EDIYA BAKERY','.drink_container', '.food_container', '.md_container');
    // MD tab
    tab_click2('.MD', 'url(/img/product_visual.jpg) no-repeat center / cover', 'MD', 'EDIYA MD','.md_container', '.food_container', '.drink_container');
    function tab_click2(click_div, background, h_text, s_text, d_n1, d_n2, d_b) {
        $(click_div).click(function() {
            $('.main_bean').css({
                background: background,
            })
            $('.main_bean h2').text(h_text)
            $('.main_bean span span').text(s_text)
            $(d_n1).css({display:'none'});
            $(d_n2).css({display:'none'});
            $(d_b).css({display:'block'});
        })
    }
    // banner slide
    let bn = $('.banner');
    let idx = 0
    let md_width = $('.rc_slider').width();
    let item_width = md_width / 3;
    let b_count = $('.banner').length;
    for(let i =0; i<b_count; i++) {
        $('.banner').eq(i).css({left:item_width * i})
    }
    $('#btn_banner_R').click(function() {
        $('.btn_banner').css({pointerEvents: 'none'})
        // 일정시간 후에 버튼 다시 살리기
        setTimeout(() => {
            $('.btn_banner').css({pointerEvents: 'auto'})
        }, 500);
        $('.banner').animate({ left: `-=${item_width}` }, 500,'linear');
        $('.banner').eq(idx%b_count).animate({
            left:md_width
        }, 0)
        idx+=1;
    })
    $('#btn_banner_L').click(function() {
        idx-=1;
        $('.banner').eq(idx%b_count).animate({
            left:-1*item_width
        }, 0)
        $('.banner').animate({ left: `+=${item_width}` }, 500,'linear');
    })
    // 자동 슬라이드 
    let interval ="";
    function auto_banner() {
        interval = setInterval(()=>{
            $('#btn_banner_R').trigger('click')
        }, 2000 + 500) // 500은 멈춰있을 시간   
    }
    auto_banner();
    // 마우스 오버시 자동 슬라이드 멈춤
    $('.rc_slider').hover(function(){
        clearInterval(interval)
    }, function(){
        auto_banner()
    });
})