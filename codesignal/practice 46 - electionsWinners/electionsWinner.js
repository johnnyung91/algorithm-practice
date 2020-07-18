function electionsWinners(votes, k) {
  const max = Math.max(...votes)
  let counter = 0;
  let highestVotes = []
  for (const voter of votes) {
      if (voter + k > max) counter++
      if (voter === max) highestVotes.push(voter)
  }
  if (!k && highestVotes.length === 1) counter++
  return counter
}
