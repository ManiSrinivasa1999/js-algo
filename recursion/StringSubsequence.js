function getSubSequences(word) {
  // returns string containing subsequences for given word
  if (word === '') return ''
  const first = word.charAt(0)

  const rest = getSubSequences(word.substring(1))

  let res = ''

  rest.split(',').forEach((subseq) => {
    res += ',' + first + subseq
    res += ',' + subseq
  })
  return res.substring(1)
}

seq = getSubSequences('abc')
console.log(seq) 
