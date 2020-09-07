const rotate = (nums, k) => {
  while (k > 0) {
      const last = nums.pop()
      nums.unshift(last)
      k--
  }
  return nums
};
