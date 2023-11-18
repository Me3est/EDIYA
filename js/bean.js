$('window').ready(function() {
    $('.bean_tab_box div').eq(0).addClass('tab_active');
    for(let i=0; i<2; i++) {
        $('.bean_tab_box div').eq(i).click(function() {
            $('.bean_tab_box div').removeClass('tab_active');
            $(this).addClass('tab_active');
        })
    }
    $('.Quarlity').click(function() {
        $('.main_bean').css({
            background: 'url(/img/franchise_visual.jpg) no-repeat center / cover',
        })
        $('.main_bean h2').text('품질')
        $('.main_bean span').text('ALWAYS BESIDE YOU, EDIYA COFFEE')
        $('.bean_container').css({display:'none'});
        $('.quality_container').css({display:'block'});
    })
    $('.BEAN').click(function(){
            $('.main_bean').css({
                background: 'url(/img/bean_visual.jpg) no-repeat center / cover',
            })
            $('.main_bean h2').text('원두')
            $('.main_bean span').text('ALWAYS BESIDE YOU, EDIYA BEAN')
            $('.quality_container').css({display:'none'});
            $('.bean_container').css({display:'block'});
    })
    // else if($('.Quarilty').click) {
    // }
})