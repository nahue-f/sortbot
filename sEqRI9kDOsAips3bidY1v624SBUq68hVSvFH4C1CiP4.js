'use strict'

const question = [
  'onwards',
  'spanker',
  'core',
  'manslaughter',
  'mumbler',
  'plainsman',
  'liquescent',
  'poleax',
  'cure',
  'specie'
]

const vowels = [ 'a', 'e', 'i', 'o', 'u' ]
function howManyConsonants (str) {
  return [...str].filter(char => !vowels.includes(char)).length
}

console.log(
  question.sort((a, b) => {
    return howManyConsonants(a) - howManyConsonants(b)
  })
)
