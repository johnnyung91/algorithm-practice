const maxArea = function(height) {
    let maxArea = 0
    for (let i = 0; i < height.length; i++) {
        for (let j = i+1; j < height.length; j++) {
            maxArea = Math.max(maxArea, Math.min(height[i], height[j]) * (j-i))
        }
    }
    return maxArea
};


const maxArea2 = function(height) {
    let maxArea = 0;
    let left = 0;
    let right = height.length - 1

    while (left < right) {
        maxArea = Math.max(maxArea, Math.min(height[left], height[right]) * (right - left))
        if (height[left] < height[right]) left++
        else (right--)
    }

    return maxArea
}
