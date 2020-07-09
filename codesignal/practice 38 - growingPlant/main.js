function growingPlant(upSpeed, downSpeed, desiredHeight) {
  let plant = 0;
  let days = 0

  while (plant <= desiredHeight) {
      days++
      plant += upSpeed
      if (plant >= desiredHeight) return days
      plant -= downSpeed
  }
}


/* Other Solutions

function growingPlant(upSpeed, downSpeed, desiredHeight) {
  let days = 1
  for (let height = 0; height < desiredHeight; height -= downSpeed, days++) {
    height += upSpeed
    if (height >= desiredHeight) return days
  }
}

*/
