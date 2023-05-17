import { useEffect, useState } from 'react'

function Question2() {
  const [prize, setPrize] = useState([
    { prizeName: '一獎', prizeNumber: 1, probability: 1 }, // 0 ~ 1
    { prizeName: '二獎', prizeNumber: 1, probability: 30 }, // 1 ~ 31
    { prizeName: '三獎', prizeNumber: 3, probability: 130 }, // 31 ~ 161
    { prizeName: '四獎', prizeNumber: 5, probability: 180 }, // 161 ~ 341
    { prizeName: '五獎', prizeNumber: 9, probability: 250 }, // 341 ~ 591
  ])
  const [result, setResult] = useState('')

  // 檢查一下
  useEffect(() => {
    console.log(prize)
  }, [prize])

  const lottery = () => {
    const rand = Number(Math.floor(Math.random() * 1000))
    console.log(rand)
    let probabilitySum = 0

    // 不能用map因為它的特性是每個值都一定會執行一次，這樣結果永遠都會被最後符合的值給蓋掉
    for (let i = 0; i < prize.length; i++) {
      // 機率加總
      probabilitySum += prize[i].probability

      // 如果隨機出來的數字小於本輪迴圈加總的機率表示抽中該迴圈輪數的獎項
      if (rand < probabilitySum) {
        const newPrize = prize[i]
        console.log(newPrize)
        // 抽中減掉抽獎池裡的數量
        newPrize.prizeNumber--

        if (newPrize.prizeNumber === 0) {
          // 該獎項抽完移除
          prize.splice(i, 1)
        }
        setResult(newPrize.prizeName)
        setPrize([...prize])
        return
      }
      setResult('很抱歉!本次並未中獎!')
    }
  }
  return (
    <>
      <button
        type="button"
        id="btn"
        onClick={() => {
          lottery()
        }}
      >
        抽起來
      </button>
      <p>{result}</p>
    </>
  )
}

export default Question2
