var HeaderUI={};HeaderUI.Menu=function(){var n=this,t=!1,i=400,a=50,e=function(n){return-n.outerHeight()};this.recountHidedTopPositions=function(){$(".nav-main-popup:not(.show)").each(function(){$(this).css({top:e($(this))})})},this.showPanel=function(n){var e=$('.nav-main-popup[data-anchor="'+n+'"]'),o=0;t&&(o=i+a,this.hidePanel(t)),setTimeout(function(){e.removeClass("out"),e.addClass("in"),setTimeout(function(){e.addClass("show").css({top:0}),setTimeout(function(){e.removeClass("in")},i)},a)},o)},this.hidePanel=function(n){var t=$('.nav-main-popup[data-anchor="'+n+'"]');t.removeClass("in"),t.addClass("out"),setTimeout(function(){t.removeClass("show").css({top:e(t)}),setTimeout(function(){t.removeClass("out")},i)},a)},this.openClose=function(n){var i=$('nav.main a[data-anchor="'+n+'"]');$("nav.main a.active").each(function(){$(this).data("anchor")&&$(this).removeClass("active")}),t==n?(this.hidePanel(t),t=!1):(i.addClass("active"),this.showPanel(n),t=n)},this.initMenu=function(){$("nav.main a").on("click",function(t){$(this).data("anchor")&&(t.preventDefault(),n.openClose($(this).data("anchor")))})},this.init=function(){return this.initMenu(),this}},HeaderUI.init=function(){this.menu=(new this.Menu).init()},$(function(){HeaderUI.init()});