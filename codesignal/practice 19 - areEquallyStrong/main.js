function areEquallyStrong(yourLeft, yourRight, friendsLeft, friendsRight) {
  const yourTotal = yourLeft + yourRight;
  const friendsTotal = friendsLeft + friendsRight;

  const yourArray = [yourLeft, yourRight].sort((a, b) => a-b)
  const friendArray = [friendsLeft, friendsRight].sort((a, b) => a-b)

  return (yourTotal === friendsTotal && yourArray[1] === friendArray[1])
}


/* Other solutions

function areEquallyStrong(yourLeft, yourRight, friendsLeft, friendsRight) {
  return yourLeft + yourRight === friendsLeft + friendsRight
  && Math.max(yourLeft, yourRight) === Math.max(friendsLeft, friendsRight)
}

function areEquallyStrong(yourLeft, yourRight, friendsLeft, friendsRight) {
    return Math.min(yourLeft, yourRight) === Math.min(friendsLeft, friendsRight)
    && Math.max(yourLeft, yourRight) === Math.max(friendsLeft, friendsRight);
}


*/
