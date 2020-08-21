const findMedianSortedArrays = (nums1, nums2) => {
  const nums = nums1.concat(nums2).sort( (a,b) => a-b )
  const length = nums.length
  if (length % 2 === 0) return (nums[length/2 - 1] + nums[length/2]) / 2
  if (length % 2 === 1) return (nums[Math.floor(length/2)])
};

//Solution with Quicksort

const findMedianSortedArrays2 = (nums1, nums2) => {
    let nums = nums1.concat(nums2)

    const quickSort = arr => {
        if (arr.length <= 1) return arr;
        let pivotIndex = Math.floor(arr.length/2)
        let pivot = arr.splice(pivotIndex, 1)[0];
        let left = [];
        let right = []

        for (let i = 0; i < arr.length; i++) {
            if (arr[i] <= pivot ) {
                left.push(arr[i])
            } else {
                right.push(arr[i])
            }
        }
        return quickSort(left).concat([pivot], quickSort(right))
    }
    nums = quickSort(nums)

    const length = nums.length
    if (length % 2 === 0) return (nums[length/2 - 1] + nums[length/2]) / 2
    if (length % 2 === 1) return (nums[Math.floor(length/2)])
};
