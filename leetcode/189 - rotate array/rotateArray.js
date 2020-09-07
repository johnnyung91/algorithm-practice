const rotate = (nums, k) => {
  while (k > 0) {
      const last = nums.pop()
      nums.unshift(last)
      k--
  }
  return nums
};

const rotate2 = (nums, k) => {
    const lastIndex = nums.length-1
    k %= nums.length
    reverse(nums, 0, lastIndex)
    reverse(nums, 0, k-1)
    reverse(nums, k, lastIndex)
}

function reverse(array, start, end) {
    while (start < end) {
        let temp = array[start]
        array[start] = array[end]
        array[end] = temp
        start++
        end--
    }
}
