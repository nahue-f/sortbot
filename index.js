'use strict'

const request = require('request')

// Certificate.
// {
//   "message":"This certifies that nahue-f completed the sortbot race in 3247.962 seconds.",
//   "elapsed":3247.962,
//   "completed":"2019-07-01T00:36:58.245Z"
// }
request('https://api.noopschallenge.com/sortbot/exam/certificate/qPtHXDTIsQKaTGEWdql8GSFFqoPYzyTHGmlkLJvES9GYfxTHSxXdBcbmbepH76pN', (err, res, body) => {
  if (err) console.log(err)
  console.log(body)
})

// const exam = 'a25-aZvF0yzqGxTIanE04_3LfZuSX_Bd5D2ma1rkcwM'

// Exam.
// request(`https://api.noopschallenge.com/sortbot/exam/${exam}`, (err, res, body) => {
//   if (err) console.log(err)
//   console.log(body)
// })

// Solution.
// request.post({
//   uri: `https://api.noopschallenge.com/sortbot/exam/${exam}`,
//   body: JSON.stringify({
//     solution:
//       [ 'Time brings us many changes.',
//         'Men think and plan and sometimes act.',
//         'We admire and love a good cook.',
//         'A flat pack takes less luggage space.',
//         'Send the stuff in a thick paper bag.',
//         'Send the stuff in a thick paper bag.',
//         'The bunch of grapes was pressed into wine.',
//         'At that high level the air is pure.',
//         'The cement had dried when he moved it.',
//         'Add the sum to the product of these three.' ]
//   })
// }, (err, res, body) => {
//   if (err) console.log(err)
//   console.log(body)
// })
