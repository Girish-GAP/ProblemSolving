/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
var numJewelsInStones = function (jewels, stones) {
  let cnt = 0;
  let jewelsSet = new Set(jewels);

  for (let i = 0; i < stones.length; i++) {
    if (jewelsSet.has(stones[i])) {
      cnt++;
    }
  }

  return cnt;
};
