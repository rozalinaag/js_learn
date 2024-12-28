console.log('1')

Promise.resolve().then(() => {
  console.log('Promise 1')
})

console.log('2')

setTimeout(() => {
  console.log('seTimeout 1')

  Promise.resolve().then(() => {
    console.log('Promise 2')
  })
}, 0)

setTimeout(() => {
  console.log('Interval 1')
}, 10)

console.log('3')

Promise.resolve().then(() => {
  console.log('Promise 3')
})

//1 2 3 Promise 1 Promise 3 setTimeout 1 Promise 2 Inteval 1