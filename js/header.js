var HeaderUI = {};

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
	};

	this.openClose = function(anchor){
		var $anchor = $('nav.main a[data-anchor="' + anchor + '"]');

		$('nav.main a.active').each(function(){
			if($(this).data('anchor')){
				$(this).removeClass('active');
			}
		});

		if(opened == anchor){
			this.hidePanel(opened);
			opened = false;
		}else{
			$anchor.addClass('active');
			this.showPanel(anchor);
			opened = anchor;
		}
	};

	this.initMenu = function(){
		$('nav.main a').on('click', function(e){
			if($(this).data('anchor')){
				e.preventDefault();
				_this.openClose($(this).data('anchor'));
			}
		});
	};

	this.init = function(){
		this.initMenu();

		return this;
	};
};

HeaderUI.init = function(){
    this.menu = new this.Menu().init();
};

$(function(){
    HeaderUI.init();
});