var UI = {};

UI.SliderMain = function(){
    var $wrap = $('.slider-main'),
        $frame = $wrap.find('.frame');

    this.init = function(){
        resizeItems();

        $frame.sly({
            horizontal: 1,
            itemNav: 'forceCentered',
            smart: 1,
            activateMiddle: 1,
            mouseDragging: 1,
            touchDragging: 1,
            releaseSwing: 1,
            startAt: 0,
            pagesBar: $wrap.find('.pages-bar'),
            activatePageOn: 'click',
            scrollBy: 1,
            speed: 300,
            elasticBounds: 1,
            easing: 'easeOutExpo',
            dragHandle: 1,
            dynamicHandle: 1,
            clickBar: 1,
            prevPage: $wrap.find('.left'),
            nextPage: $wrap.find('.right'),
            interactive: $frame.find('.content')
        });

        return this;
    };

    var resizeItems = function(){
        var $frame = $('.slider-main .frame'),
            $items = $frame.find('ul li');

        $items.css('width', $frame.width());

        $('.slider-main').find('.left, .right').css({
            width: ($frame.width() - 1000) / 2
        });
    };

    this.resize = function(){
        resizeItems();
        $frame.sly('reload');
    };

    return this;
};

UI.SliderSub = function(){
    var $frame = $('.slider-sub .frame');

    this.init = function(){
        $frame.sly({
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

        return this;
    };

    this.resize = function(){
        $frame.sly('reload');
    };

    return this;
};

UI.SliderReviews = function(){
    var $frame = $('.slider-reviews .frame');

    this.init = function(){
        $frame.sly({
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

        return this;
    };

    this.resize = function(){
        $frame.sly('reload');
    };

    return this;
};

UI.init = function(){
    this.sliderMain = new this.SliderMain().init();
    this.sliderSub = new this.SliderSub().init();
    this.sliderReviews = new this.SliderReviews().init();
};

UI.resize = function(){
    this.sliderMain.resize();
    this.sliderSub.resize();
    this.sliderReviews.resize();
};

$(function(){
    UI.init();
});

$(window).on('resize', function(){
    UI.resize();
});