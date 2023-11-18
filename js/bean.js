$('window').ready(function() {
    $('.bean_tab_box div').eq(0).addClass('tab_active');
    for(let i=0; i<$('.bean_tab_box div').length; i++) {
        $('.bean_tab_box div').eq(i).click(function() {
            $('.bean_tab_box div').removeClass('tab_active');
            $(this).addClass('tab_active');
        })
    }
    // 품질 tab
    tab_click('.Quarlity', 'url(/img/franchise_visual.jpg) no-repeat center / cover', '품질', 'EDIYA COFFEE', '.bean_container', '.quality_container');
    // 원두 tab
    tab_click('.BEAN', 'url(/img/bean_visual.jpg) no-repeat center / cover', '원두', 'EDIYA BEAN', '.quality_container', '.bean_container');
    function tab_click(click_div, background, h_text, s_text, d_n, d_b) {
        $(click_div).click(function() {
            $('.main_bean').css({
                background: background,
            })
            $('.main_bean h2').text(h_text)
            $('.main_bean span span').text(s_text)
            $(d_n).css({display:'none'});
            $(d_b).css({display:'block'});
        })
    }
})