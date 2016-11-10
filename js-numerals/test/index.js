/**
 * Created by Mahmoud El Kotoury on 11/9/2016.
 */
function convert(n) {
    var NUMERALS = [{ value: 1000000000000000000000, str: "sextillion" }, { value: 1000000000000000000, str: "quintillion" }, { value: 1000000000000000, str: "quadrillion" }, { value: 1000000000000, str: "trillion" }, { value: 1000000000, str: "billion" }, { value: 1000000, str: "million" }, { value: 1000, str: "thousand" }, { value: 100, str: "hundred" }, { value: 90, str: "ninety" }, { value: 80, str: "eighty" }, { value: 70, str: "seventy" }, { value: 60, str: "sixty" }, { value: 50, str: "fifty" }, { value: 40, str: "forty" }, { value: 30, str: "thirty" }, { value: 20, str: "twenty" }, { value: 19, str: "nineteen" }, { value: 18, str: "eighteen" }, { value: 17, str: "seventeen" }, { value: 16, str: "sixteen" }, { value: 15, str: "fifteen" }, { value: 14, str: "fourteen" }, { value: 13, str: "thirteen" }, { value: 12, str: "twelve" }, { value: 11, str: "eleven" }, { value: 10, str: "ten" }, { value: 9, str: "nine" }, { value: 8, str: "eight" }, { value: 7, str: "seven" }, { value: 6, str: "six" }, { value: 5, str: "five" }, { value: 4, str: "four" }, { value: 3, str: "three" }, { value: 2, str: "two" }, { value: 1, str: "one" }];

    if (n < 0) {
        return "minus " + convert(-n);
    } else if (n === 0) {
        return "zero";
    } else {
        var result = "";
        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
            for (var _iterator = NUMERALS[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                var numeral = _step.value;

                if (n >= numeral.value) {

                    if (n < 100) {
                        result += numeral.str;
                        n -= numeral.value;
                        if (n > 0) result += "-";
                    } else {
                        var times = Math.floor(n / numeral.value);
                        if (times == 1) {} else {

                            result += convert(times) + " " + numeral.str;
                            n -= numeral.value * times;
                            if (n > 0) result += " and ";
                        }
                    }
                }
            }
        } catch (err) {
            _didIteratorError = true;
            _iteratorError = err;
        } finally {
            try {
                if (!_iteratorNormalCompletion && _iterator.return) {
                    _iterator.return();
                }
            } finally {
                if (_didIteratorError) {
                    throw _iteratorError;
                }
            }
        }

        return result;
    }
}

exports.sanitize = function (input) {
    return convert(input);
};