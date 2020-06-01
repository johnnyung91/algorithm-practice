function alternatingSums(a) {
  let team1 = 0;
  let team2 = 0
  for (let i = 0; i < a.length; i++) {
      if (i % 2 === 0) team1 += a[i]
      else team2 += a[i]
  }
  return [team1, team2]
}


/* Other Solutions

function alternatingSums(a) {
  for (let i = 0, team1 = 0, team2 = 0; i < a.length; i++) {
    i % 2
      ? team2 += a[i]
      : team1 += a[i]
    if (i === a.length - 1) return [team1, team2]
  }
}

function alternatingSums(a) {
    return a.reduce((sum, next, i) => {
      i%2 === 0
        ? [sum[0] + next, sum[1]]
        : [sum[0], sum[1] + next]
    }, [0, 0]);
}

function alternatingSums(a) {
    const weights = [0, 0];
    a.forEach((a, i) => weights[i % 2] += a);
    return weights;
}

*/
