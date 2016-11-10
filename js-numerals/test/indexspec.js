/**
 * Created by Mahmoud El Kotoury on 11/9/2016.
 */

var chai = require ('../node_modules/chai');
var expect = require ('../node_modules/chai').expect;
var test = require ('./index');

describe('Sanitize' , function () {

    it ('7 == seven ',function () {
        var inputNumber = 7;
        var outputNumber = test.sanitize(inputNumber).trim();
        expect(outputNumber).to.equal('seven');
    });
    it ('42  == forty-two',function () {
        var inputNumber = 42;
        var outputNumber = test.sanitize(inputNumber).trim();
        expect(outputNumber).to.equal('forty-two');
    });
    it ('2001 == two thousand and one',function () {
        var inputNumber = 2001;
        var outputNumber = test.sanitize(inputNumber).trim();
        expect(outputNumber).to.equal('two thousand and one');
    });
    it ('1999 == nineteen hundred and ninety-nine',function () {
        var inputNumber = 1999;
        var outputNumber = test.sanitize(inputNumber).trim();
        expect(outputNumber).to.equal('nineteen hundred and ninety-nine');
    });
});