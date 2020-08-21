/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  const seen = {};
  for(let i = 0; i < nums.length; i++){
      const current = nums[i]
      if (seen[current] >= 0){
          return [seen[current] , i]
      }
      seen[target - current] = i
  }
};
