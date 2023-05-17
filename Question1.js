import React from 'react'

function Question1() {
  let sum = 0
  let odd = 0
  let even = 0
  const numSum = (num) => {
    Array(num)
      .fill(1)
      .map((v, i) => {
        if ((i + 1) % 2 !== 0) {
          odd += i + 1
        }
        if ((i + 1) % 2 === 0) {
          even += i + 1
        }
      })
    odd = odd - 1
    even = even + 1
    sum = even - odd
    console.log('odd', odd)
    console.log('even', even)
    console.log('sum', sum)
  }
  numSum(10)
  return <></>
}

export default Question1
