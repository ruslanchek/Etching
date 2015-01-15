var HeaderUI = {};

HeaderUI.Search = function(){
	this.init = function(){
		this.initTrigger();

		return this;
	};
};

HeaderUI.Menu = function(){
	var _this = this,
		opened = false,
		animTime = 400,
		trsholdTime = 50;

	var getHidedPanelTopPosition = function($panel){
		return -$panel.outerHeight();
	};

	this.recountHidedTopPositions = function(){
		$('.nav-main-popup:not(.show)').each(function(){
			$(this).css({
				top: getHidedPanelTopPosition($(this))
			});
		});
	};

	this.showPanel = function(anchor){
		if(opened == anchor) return;

		$('nav.main a.active').each(function(){
			if($(this).data('anchor')){
				$(this).removeClass('active');
			}
		});

		var $anchor = $('nav.main a[data-anchor="' + anchor + '"]');
		$anchor.addClass('active');

		var $panel = $('.nav-main-popup[data-anchor="' + anchor + '"]'),
			time = 0;

		if(opened){
			time = animTime + trsholdTime;
			this.hidePanel(opened);
		}

		setTimeout(function(){
			$panel.removeClass('out');
			$panel.addClass('in');

			setTimeout(function(){
				$panel.addClass('show').css({
					top: 0
				});

				setTimeout(function(){
					$panel.removeClass('in');
				}, animTime);
			}, trsholdTime);
		}, time);

		opened = anchor;
	};

	this.hidePanel = function(anchor){
		var $panel = $('.nav-main-popup[data-anchor="' + anchor + '"]');

		$panel.removeClass('in');
		$panel.addClass('out');

		setTimeout(function(){
			$panel.removeClass('show').css({
				top: getHidedPanelTopPosition($panel)
			});

			setTimeout(function(){
				$panel.removeClass('out');
			}, animTime);
		}, trsholdTime);

		opened = false;
	};

	this.openClose = function(anchor){
		if(opened == anchor){
			this.hidePanel(opened);
		}else{
			this.showPanel(anchor);
		}
	};

	this.initMenuTrigger = function(){
		$('nav.main a').on('click', function(e){
			if($(this).data('anchor')){
				e.preventDefault();
				_this.openClose($(this).data('anchor'));
			}
		});
	};

	this.init = function(){
		this.initMenuTrigger();

		return this;
	};
};

HeaderUI.init = function(){
    this.menu = new this.Menu().init();
};

$(function(){
    HeaderUI.init();
});