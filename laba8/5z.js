function longestCommonSubstring(strs) {
    if (strs.length === 0) {
        return "";
    }

    let result = "";
    let word = strs[0];

    for (let i = 0; i < word.length; i++) {
        for (let j = i + 1; j <= word.length; j++) {

            let part = word.slice(i, j);
            let found = true;

            for (let k = 1; k < strs.length; k++) {
                if (!strs[k].includes(part)) {
                    found = false;
                    break;
                }
            }

            if (found && part.length >= 2 && part.length > result.length) {
                result = part;
            }
        }
    }

    return result;
}

console.log(longestCommonSubstring(["цветок", "поток", "хлопок"]));
console.log(longestCommonSubstring(["собака", "гоночная машина", "машина"]));