const Checkout = require('../checkout.js');
var expect = require('chai').expect;

it('Can add item price', function(){
    var checkout = new Checkout();
    checkout.addItemPrice('a', 1);
});

it('Can add item', function(){
    var checkout = new Checkout();
    checkout.addItemPrice('a', 1);
    checkout.addItem('a');
});