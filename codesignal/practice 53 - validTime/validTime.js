function validTime(time) {
  time = time.split(':')
  const hour = time[0]
  const minute = time[1]
  return Number(hour) > 23 || Number(minute) > 59 ? false : true
}
