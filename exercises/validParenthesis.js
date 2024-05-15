/**
 * 
 * @param {*} str
 * A string has valid parenthesis if all opened brackets are closed at one point in time
 * e.g { [ ( ) ] }  
 */

const parenthesis = {
    "(": ")",
    "[": "]",
    "{": "}",
}



const checkParenthesisValidity = (str) => {
    const brackets = [];
    if (str.length == 0) return true;
    for(const s of str) {
        // this is start bracket
        if (parenthesis[s]) {
            brackets.push(s);
        } else {
            // this is end bracket
            const lastStored = brackets.pop();
            const correctCloseBracket = parenthesis[lastStored];
            if (correctCloseBracket != s) return false; 
        }
    }

    // also check if there are any remaining opened brackets
    return brackets.length == 0;
}

console.log("{[()]} is : ", checkParenthesisValidity("{[()]}"));
console.log("{[]()} is : ", checkParenthesisValidity("{[]()}"));
console.log("{[() is : ", checkParenthesisValidity("{[()"));
console.log("{[())) is : ", checkParenthesisValidity("{[()))"));
