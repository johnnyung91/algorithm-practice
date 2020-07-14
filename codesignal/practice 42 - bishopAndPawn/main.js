function bishopAndPawn(bishop, pawn) {
  const rise = bishop[1] - pawn[1]
  const run = bishop.charCodeAt(0) - pawn.charCodeAt(0)
  return Math.abs(rise/run) === 1
}
