// Exposure problem

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {

    let cnt = 0;
    
    for(let i = s.length-1; i>= 0; i--){
        if(s[i] !== " "){
            cnt++;
        }else if(s[i] === " " && cnt !== 0){
            break;
        }
    }

    return cnt;

};