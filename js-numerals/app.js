/**
 * Created by Mahmoud El Kotoury on 11/9/2016.
 */

(function() {

    // Make Sure input is only number

    document.getElementById("num").onkeypress = function (evt) {
        evt = (evt) ? evt : window.event;
        var charCode = (evt.which) ? evt.which : evt.keyCode;
        if (!(charCode > 31 && (charCode < 48 || charCode > 57))) {
            return true;
        }
        return false;
    };

    const arr = x => Array.from(x);
    const num = x => Number(x) || 0;
    const isEmpty = xs => xs.length === 0;
    const take = n => xs => xs.slice(0,n);
    const drop = n => xs => xs.slice(n);
    const reverse = xs => xs.slice(0).reverse();
    const comp = f => g => x => f (g (x));
    const not = x => !x;
    const chunk = n => xs =>
    isEmpty(xs) ? [] : [take(n)(xs), ...chunk (n) (drop (n) (xs))];



// numToWords :: (Number a, String a) => a -> String
    let numToWords = n => {

        let a = [
            '', 'one', 'two', 'three', 'four',
            'five', 'six', 'seven', 'eight', 'nine',
            'ten', 'eleven', 'twelve', 'thirteen', 'fourteen',
            'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'
        ];

        let b = [
            '', '', 'twenty', 'thirty', 'forty',
            'fifty', 'sixty', 'seventy', 'eighty', 'ninety'
        ];

        let g = [
            '', 'thousand', 'million', 'billion', 'trillion', 'quadrillion',
            'quintillion', 'sextillion', 'septillion', 'octillion', 'nonillion'
        ];


        let makeGroup = ([ones,tens,huns]) => {
            return [
                num(huns) === 0 ? '' : a[huns] + ' hundred ',
                num(ones) === 0 ? b[tens] : b[tens] && b[tens] + '-' || '',
                a[tens+ones] || a[ones]
            ].join('');
        };

        let thousand = (group,i) => group === '' ? group : `${group} ${g[i]}`;

        if (typeof n === 'number')
            return numToWords(String(n));
        else if (n === '0')
            return 'zero';
        else
            return comp (chunk(3)) (reverse) (arr(n))
                .map(makeGroup)
                .map(thousand)
                .filter(comp(not)(isEmpty))
                .reverse()
                .join(' ');
    };

    let bConvert = document.getElementById("bConvert");
    bConvert.onclick = function  () {
        let num = document.getElementById("num").value;
        console.log(numToWords(num));
        let display = document.getElementById("display");
        display.value = numToWords(num);

    };



})
();