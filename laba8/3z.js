function spinWords(str) {
    const words = str.split(' ');
    const result = [];

    for (const word of words) {

        if (word.length >= 5) {
            result.push(word.split('').reverse().join(''));
        } else {
            result.push(word);
        }

    }

    return result.join(' ');
}

console.log(spinWords("Привет от Legacy"));
console.log(spinWords("This is a test"));