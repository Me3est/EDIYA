$(window).ready(function() {
    // Main Slide
    let slide = $('.slide');
    let idx = 0;
    slide.eq(0).css({left:0});
    $('#R_btn').click(function() {
        slider(idx%7, '-100%', (idx+1)%7, '100%', idx++);
    })
    $('#L_btn').click(function() {
        slider(idx%7, '100%', (idx-1)%7, '-100%', idx--);
    })
    function slider(o_idx, o_pos, c_idx, c_pos, next_idx) {
        $('.btn').css('pointer-events','none')
        setTimeout(() => {
            $('.btn').css('pointer-events','auto')
        }, 1000)
        slide.eq(o_idx).animate({
            left:o_pos
        }, 1000)
        slide.eq(c_idx).css({
            left:c_pos}).animate({
                left:'0%'
            }, 1000)
        next_idx;
    }
    function autoSlide() {
        interval = setInterval(function() {
            slider(idx%7, '-100%', (idx+1)%7, '100%', idx++);
        }, 3000)
    }
    autoSlide();
    $('.slide-inner').hover(function(){
        clearInterval(interval)
    }, function() {
        autoSlide();
    });
    // SEC2
    $('.beanist_slide_box').slick({
        dots:true,
        infinite: true,
        speed:500
    });
})