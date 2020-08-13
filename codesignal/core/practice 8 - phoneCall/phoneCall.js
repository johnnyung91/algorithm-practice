function phoneCall(min1, min2_10, min11, s) {
  let minutes = 1
  while (s >= 0) {
      if (minutes === 1) s -= min1
      if (minutes > 1 && minutes <= 10) s -= min2_10
      if (minutes > 10) s -= min11
      minutes++
  }
  return minutes - 2
}
