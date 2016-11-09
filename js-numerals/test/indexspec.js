/**
 * Created by Mahmoud El Kotoury on 11/9/2016.
 */

var chai = require ('../node_modules/chai');
var expect = require ('../node_modules/chai').expect;
var test = require ('./index');

describe('Sanitize' , function () {


    it ('number matches the english phrase ',function () {
        var inputNumber = 100;
        var outputNumber = test.sanitize(inputNumber).trim();
        expect(outputNumber).to.equal('one hundred');
    });

});