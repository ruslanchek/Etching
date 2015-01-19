var UI = {};

UI.ClickOutside = function(container, onClickOutside){
	var _id = _.uniqueId(),
		$container = $(container);

	this.bind = function(){
		$(document).on('mouseup.UIClickOutside_' + _id, function (e){
			if (!$container.is(e.target) && $container.has(e.target).length === 0){
			    if(onClickOutside) onClickOutside();
			}
		});
	};

	this.unbind = function(){
		$(document).off('mouseup.UIClickOutside_' + _id);
	};
};