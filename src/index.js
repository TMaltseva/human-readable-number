module.exports = function toReadable (number) {
    const numberIndex= number.toString().length;
    const numbrs = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    const tens = ['', 'ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    const hundrds = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];

    const numbrsIndex = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];


    let result = '';
        if (numberIndex === 1) {
            result = `${numbrs[number]}`
        } else if (numberIndex === 2 && number > 10 && number < 20) {
            result = `${numbrsIndex[number % 10]}`
        } else if (numberIndex === 2) {
            result = `${tens[Math.trunc(number / 10)]} ${hundrds [number % 10]}`.trim()
        } else if (numberIndex === 3 && number % 100 > 10 && number % 100 < 20) {
            result = `${hundrds[Math.trunc(number / 100)]} hundred ${numbrsIndex[number % 10]}`
        } else {result = `${hundrds[Math.trunc(number / 100)]} hundred ${tens[Math.trunc(number % 100 / 10)]} ${hundrds[number % 10]}`.trim().replaceAll('  ', ' ')
        }
  return result
};

