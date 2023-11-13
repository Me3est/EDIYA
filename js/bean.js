$('window').ready(function() {
    $('.bean_tab_box div').eq(0).addClass('tab_active');
    for(let i=0; i<2; i++) {
        $('.bean_tab_box div').eq(i).click(function() {
            $('.bean_tab_box div').removeClass('tab_active')
            $(this).addClass('tab_active');
        })
    }
})