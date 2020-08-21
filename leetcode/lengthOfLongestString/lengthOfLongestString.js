const lengthOfLongestSubstring = s => {
  let start = 0;
  let max = 0;
  const map = {};

  for (let i = 0; i < s.length; i++) {
    const cur = s[i];
    if (map.hasOwnProperty(cur) && map[cur] >= start) {
      start = Math.min(map[cur], i) + 1;
    }
    map[cur] = i;
    max = Math.max(max, i - start + 1);
  }
  return max;
};
