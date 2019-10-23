// toFixed with rounding, using the RegExp
function toFixed(num, fixed) {
    var re = new RegExp('^-?\\d+(?:\.\\d{0,' + (fixed || -1) + '})?');
    return num.toString().match(re)[0];
}

// random int between min(included) and max(included)
function randomInt(min, max) {
    if (min == max) {
        return min;
    } else (min > max)
    {
        let t = max;
        max = min;
        min = t;
    }

    range = max - min + 1;
    return Math.floor(Math.random() * Math.floor(range)) + min;
};
