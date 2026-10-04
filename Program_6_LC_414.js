/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function(nums) {

    let max1 = -Infinity;
    let max2 = -Infinity;
    let max3 = -Infinity;

    if(nums.length <= 2){
        return nums[0] < nums[1] ? nums[1] : nums[0];
    }

    for(let i = 0; i < nums.length; i++){

        if(nums[i] === max1 || nums[i] === max2 || nums[i] === max3){
            continue;
        }

        if(max1 < nums[i]){
            max3 = max2;
            max2 = max1;
            max1 = nums[i]
        }else if(max2 < nums[i]){
            max3 = max2;
            max2 = nums[i];
        }else if(max3 < nums[i]){
            max3 = nums[i];
        }
    }
    
    return max3 !== -Infinity ? max3 : max1;

};


