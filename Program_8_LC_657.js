/**
 * @param {string} moves
 * @return {boolean}
 */
var judgeCircle = function(moves) {
    let xMove = 0;
    let yMove = 0;

    for(let i = 0; i < moves.length; i++){
        if(moves[i] === "U"){
            yMove++;
        }else if(moves[i] === "D"){
            yMove--;
        }else if(moves[i] === "L"){
            xMove--;
        }else if(moves[i] === "R"){
            xMove++;
        }
    }

    return xMove === 0 && yMove === 0 ? true : false;
};