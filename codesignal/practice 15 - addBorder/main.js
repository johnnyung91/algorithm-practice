function addBorder(picture) {
  let border = '';
  const frame = picture.map(line => `*${line}*`)
  for (let i = 0; i < frame[0].length; i++) {
      border += '*'
  }
  frame.unshift(border)
  frame.push(border)
  return frame
}

/* Other solutions

function addBorder(picture) {
    var width = picture[0].length + 2;
    return [
        '*'.repeat(width),
        ...picture.map(line => `*${line}*`),
        '*'.repeat(width)
    ];
}

function addBorder(picture) {
  const border = Array(picture[0].length + 2).fill('*').join('')
  return [
    border,
    ...picture.map(row => `*${row}*`),
    border
  ]
}

*/
