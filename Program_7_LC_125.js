/**
 * @param {string} s
 * @return {boolean}
 */


const checkAlpha = (alpha) => {
    // if(alpha >= 'a' || alpha <= 'z' || alpha >= 'A' || alpha <= 'Z'){
    //   return true;
    // }
    // return false;

    return /[a-zA-Z0-9]/.test(alpha);
}


var isPalindrome = function (s) {

    let i = 0;
    let j = s.length - 1;

    while (i < j) {

        if (checkAlpha(s[i]) && checkAlpha(s[j])) {
            if (s[i].toLowerCase() === s[j].toLowerCase()) {
                i++;
                j--;
            } else {
                return false;
            }
        }

        if (!checkAlpha(s[i])) {
            i++;
        }

        if (!checkAlpha(s[j])) {
            j--;
        }
    }
    return true;
}