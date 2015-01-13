$(function(){
    $('.slider-sub .frame').sly({
        horizontal: 1,
        itemNav: 'centered',
        smart: 1,
        activateOn: 'click',
        mouseDragging: 1,
        touchDragging: 1,
        releaseSwing: 1,
        forceCenter: 1,
        centered: 1,
        startAt: 1,
        scrollBy: 1,
        activatePageOn: 'click',
        speed: 700,
        elasticBounds: 1,
        easing: 'easeOutExpo',
        dragHandle: 1,
        dynamicHandle: 1,
        clickBar: 1
    });

    $('.slider-reviews .frame').sly({
        horizontal: 1,
        itemNav: 'centered',
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
        prevPage: $('.reviews .left'),
        nextPage: $('.reviews .right')
    });

    $(window).resize(function(e) {
        $('.slider-sub .frame').sly('reload');
        $('.slider-reviews .frame').sly('reload');
    });
});