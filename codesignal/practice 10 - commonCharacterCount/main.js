function commonCharacterCount(s1, s2) {
  let count = 0
  let s1Array = s1.split('')
  let s2Array = s2.split('')

  for (let i = 0; i < s1Array.length; i++) {
      for (let j = 0; j < s2Array.length; j++) {
          if (s1Array[i] === s2Array[j]) {
              count ++;
              s2Array.splice(j, 1);
              break;
          }
      }
  }

  return count;
}


/* other solutions:

function commonCharacterCount(s1, s2) {
    for (var i = 0; i < s1.length; i++) {
        s2 = s2.replace(s1[i], "!");
    }
    return s2.replace(/[^!]/g, "").length;
}

function commonCharacterCount(s1, s2) {
  var a=s1.split(""),r=0
  while (a.length){
    var t=a.pop()
    if(s2.includes(t)){
      r++
      s2=s2.replace(t,"")
    }
  }
  return r
}

*/
