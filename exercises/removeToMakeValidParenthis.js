/**
 * 
 * @param {*} str
 * Given a string with parenthesis and alphabets
 * How many parenthesis we need to remove to make a valid string?
 * 
 * example: a)bc(d) => we remove 1 parenthesis after a :: abc(d)
 *          (abc)d) => we remove 1 parenthesis after d :: (abc)d
 */

function minRemoveInValidParenthesis(str){
    if (str.length == 0) return str;
    const bracketIndices = [],
          newStr = str.split('');
    for(let i = 0; i < newStr.length; i++) {
        if (newStr[i] == "(") {
            bracketIndices.push(i);
        } else if (newStr[i] == ")" && bracketIndices.length) {
            bracketIndices.pop();
        } else if (newStr[i] == ")") {
            newStr[i] = "";
        }
    }
    /**
     * now we need to loop through bracketIndices and replace
     * those index with empty string
     */
    while(bracketIndices.length) {
        const idx = bracketIndices.pop();
        newStr[idx] = "";
    }

    return newStr.join("");
}

console.log("a)(bcd) is cleaned as : ", minRemoveInValidParenthesis("a)(bcd)"));
console.log(" is cleaned as : ", minRemoveInValidParenthesis(""));
console.log("(a)()()((bcd) is cleaned as : ", minRemoveInValidParenthesis("(a)()()((bcd)"));
console.log("))(( is cleaned as : ", minRemoveInValidParenthesis("))(("));