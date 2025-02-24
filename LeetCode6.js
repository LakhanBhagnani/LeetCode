//Valid Parentheses
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    let valid = true;
    let braces = [];
    for (let i = 0; i < s.length; i++) {
        let currchar = s[i];
        if (currchar == "[" || currchar == "{" || currchar == "(") {
            braces.push(currchar);
        }
        else if (currchar == "]") {
            let popup = braces.pop();
            if (popup == "[") valid = true; else valid = false;
        }
        else if (currchar == "}") {
            let popup = braces.pop();
            if (popup == "{") valid = true; else valid = false;
        }
        else if (currchar == ")") {
            let popup = braces.pop();
            if (popup == "(") valid = true; else valid = false;
        }
        else {

            valid = false;
            break;
        }
    }
    return valid;
};

let s = "{[}}"
console.log(isValid(s));