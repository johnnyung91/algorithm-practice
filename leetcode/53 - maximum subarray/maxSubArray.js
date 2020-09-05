const maxSubArray = nums => {
    var prev = nums.shift();
    var max = prev;

    for (var i = 0; i < nums.length; i++) {
      prev = Math.max(prev + nums[i], nums[i]);
      max = Math.max(max, prev);
    }
    return max;
  }
