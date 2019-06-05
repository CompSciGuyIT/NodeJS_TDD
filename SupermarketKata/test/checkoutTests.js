const Checkout = require('../checkout.js');
var expect = require('chai').expect;
var checkout;

beforeEach(function(){
    checkout = new Checkout();
});

it('Can add item price', function(){
    checkout.addItemPrice('a', 1);
});

it('Can add item', function(){
    checkout.addItemPrice('a', 1);
    checkout.addItem('a');
});