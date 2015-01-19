var HeaderUI = {};

HeaderUI.Search = function(onOpen){
	var _this = this,
		searching = false,
		$input = $('nav.main .search-input input'),
		clickOutside = new UI.ClickOutside('nav.main .search-input', function(){
			_this.close();
		});

	clickOutside.bind();

	this.open = function(){
		searching = true;
		$('nav.main').addClass('searching');
		$input.focus();
		if(onOpen) onOpen();
	};

	this.close = function(){
		searching = false;
		$('nav.main').removeClass('searching');
	};

	this.initTrigger = function(){
		$('nav.main a.search').on('click', function(e){
			e.preventDefault();

			if(!searching){
				_this.open();
			}
		});

		$('nav.main .search-input .search-icon').on('click', function(){
			$input.focus();
		});

		$('nav.main .search-input .close-icon').on('click', function(){
			_this.close();
		});
	};

	this.init = function(){
		this.initTrigger();

		return this;
	};
};

HeaderUI.Menu = function(onOpenClose){
	var _this = this,
		opened = false,
		animTime = 400,
		trsholdTime = 50,
		clickOutside = new UI.ClickOutside('.nav-main-popup, nav.main a', function(){
			_this.hidePanel(_this.getOpened());
		});

	clickOutside.bind();

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

	this.getOpened = function(){
		return opened;
	};

	this.showPanel = function(anchor){
		if(opened == anchor) return;

		$('nav.main a.active').each(function(){
			if($(this).data('anchor')){
				$(this).removeClass('active');
			}
		});

		var $panel = $('.nav-main-popup[data-anchor="' + anchor + '"]'),
			time = 0;

		if(opened){
			time = animTime + trsholdTime;
			this.hidePanel(opened);
		}

		setTimeout(function(){
			$panel.removeClass('out');
			$panel.addClass('in');

			var $anchor = $('nav.main a[data-anchor="' + anchor + '"]');
			$anchor.addClass('active');

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

		$('nav.main a.active').each(function(){
			if($(this).data('anchor')){
				$(this).removeClass('active');
			}
		});

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
		if(onOpenClose) onOpenClose();

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
	var _this = this;

    this.search = new this.Search(function(){
    	_this.menu.hidePanel(_this.menu.getOpened());
    }).init();

    this.menu = new this.Menu(function(){
    	_this.search.close();
    }).init();
};

$(function(){
    HeaderUI.init();
});