$(function(){
    $('.slider-sub .frame').sly({
        horizontal: 1,
        itemNav: 'basic',
        smart: 1,
        activateOn: 'click',
        mouseDragging: 1,
        touchDragging: 1,
        releaseSwing: 1,
        startAt: 1,
        scrollBy: 1,
        activatePageOn: 'click',
        speed: 700,
        elasticBounds: 1,
        easing: 'easeOutExpo',
        dragHandle: 1,
        dynamicHandle: 1,
        clickBar: 1

        // Buttons
        //forward: $wrap.find('.forward'),
        //backward: $wrap.find('.backward'),
        //prev: $wrap.find('.prev'),
        //next: $wrap.find('.next'),
        //prevPage: $wrap.find('.prevPage'),
        //nextPage: $wrap.find('.nextPage')
    });

    $('.slider-reviews .frame').sly({
        horizontal: 1,
        itemNav: 'basic',
        smart: 1,
        activateOn: 'click',
        mouseDragging: 1,
        touchDragging: 1,
        releaseSwing: 1,
        startAt: 1,
        scrollBy: 1,
        activatePageOn: 'click',
        speed: 700,
        elasticBounds: 1,
        easing: 'easeOutExpo',
        dragHandle: 1,
        dynamicHandle: 1,
        clickBar: 1,

        // Buttons
        //forward: $wrap.find('.forward'),
        //backward: $wrap.find('.backward'),
        prevPage: $('.reviews .left'),
        nextPage: $('.reviews .right')
        //prevPage: $wrap.find('.prevPage'),
        //nextPage: $wrap.find('.nextPage')
    });

    $(window).resize(function(e) {
        $('.slider-sub .frame').sly('reload');
        $('.slider-reviews .frame').sly('reload');
    });
});