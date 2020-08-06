function findEmailDomain(address) {
  const splitAddress = address.split('@')
  return splitAddress[splitAddress.length-1]
}


/* Other Solutions

function findEmailDomain(address) {
    return address.split('@').pop()
}

function findEmailDomain(address) {
  return address.slice(address.lastIndexOf('@') + 1)
}


*/
