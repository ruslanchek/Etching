var HeaderUI = {};

HeaderUI.Cart = function(){

};

HeaderUI.init = function(){
    this.cart = new this.Cart().init();
};

$(function(){
    HeaderUI.init();
});