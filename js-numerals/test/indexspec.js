/**
 * Created by Mahmoud El Kotoury on 11/9/2016.
 */

var chai = require ('../node_modules/chai');
var expect = require ('../node_modules/chai').expect;

describe('Sanitize' , function () {
    it ('returns lowercase of a string ',function () {
        expect('HELLO WORLD').to.equal('HELLo WORLD');
    });
    it ('remove any hyphens ');
});