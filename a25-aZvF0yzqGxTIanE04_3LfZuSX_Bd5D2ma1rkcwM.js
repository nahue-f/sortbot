'use strict'

const question = [
  'Men think and plan and sometimes act.',
  'Add the sum to the product of these three.',
  'Send the stuff in a thick paper bag.',
  'Time brings us many changes.',
  'Send the stuff in a thick paper bag.',
  'We admire and love a good cook.',
  'The bunch of grapes was pressed into wine.',
  'At that high level the air is pure.',
  'A flat pack takes less luggage space.',
  'The cement had dried when he moved it.'
]

function howManyWords (str) {
  return [...str].filter(char => char === ' ').length
}

console.log(
  question.sort((a, b) => {
    return howManyWords(a) - howManyWords(b)
  })
)
