var ProductUI={};ProductUI.SliderGallery=function(){var e=$(".slider-gallery .frame");return this.init=function(){return e.sly({horizontal:1,itemNav:"centered",smart:1,activateOn:"click",mouseDragging:1,touchDragging:1,releaseSwing:1,forceCenter:1,centered:1,startAt:1,scrollBy:1,activatePageOn:"click",speed:700,elasticBounds:1,easing:"easeOutExpo",dragHandle:1,dynamicHandle:1,clickBar:1}),this},this.resize=function(){e.sly("reload")},this},ProductUI.init=function(){this.sliderGallery=(new this.SliderGallery).init()},ProductUI.resize=function(){this.sliderGallery.resize()},$(function(){ProductUI.init()}),$(window).on("resize.ProductUI",function(){ProductUI.resize()});