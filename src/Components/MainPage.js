import { Fragment, useState, useEffect } from 'react'
import axios from 'axios'

// 引入台灣縣市資料
import taiwan from './../Json/AllData.json'
import SearchInput from './SearchInput'
import Checkbox from './Checkbox'
import Table from './Table'

function MainPage() {
  const [area, setArea] = useState('')
  const [pointInput, setPointInput] = useState('')
  const [pointInputData, setPointInputData] = useState([])
  const [countyData, setCountyData] = useState([])
  const [districtData, setDistrictData] = useState([])

  let filterCountyData
  let newPointData

  // 選縣市文字輸入
  const filterCounty = (text) => {
    filterCountyData = taiwan.filter((v, i) => {
      if (v.CityName.includes(`${text}`)) {
        return v
      }
    })
    setCountyData(filterCountyData)
  }

  // 把鄉鎮市區篩選出來
  const filterCheckbox = () => {
    filterCountyData = countyData[0]?.AreaList
    setDistrictData(filterCountyData)
  }

  // 搜尋站點
  const getUbikeData = async (text) => {
    const response = await axios(
      'https://tcgbusfs.blob.core.windows.net/dotapp/youbike/v2/youbike_immediate.json'
    )
    newPointData = response.data.filter((v, i) => {
      if (v.sna.includes(`${text}`)) {
        return v
      }
    })
    if (newPointData.length >= 6) {
      newPointData.length = 6
    }
    if (text === '') {
      setPointInputData([])
      return
    }
    setPointInputData(newPointData)
  }

  useEffect(() => {
    filterCheckbox()
    if (!countyData.length) {
      document.querySelector('.countyUl').style.display = 'none'
    }
  }, [countyData])

  useEffect(() => {
    filterCounty(area)
    // 縣市搜尋往回刪的時候清掉舊搜尋資料
    if (area === '') {
      document.querySelector('.checkDiv').style.display = 'none'
      document.querySelector('.arrow').style.color = '#aeaeae'
      document.querySelector('.arrow').style.top = '30%'
      document.querySelector('.countyUl').style.display = 'none'
    } else {
      document.querySelector('.checkDiv').style.display = 'flex'
      document.querySelector('.arrow').style.color = 'black'
      document.querySelector('.arrow').style.top = '16px'
      document.querySelector('.countyUl').style.display = 'block'
    }
  }, [area])

  useEffect(() => {
    // 預設checkbox打勾
    document.querySelector('.allCheck').setAttribute('checked', true)
    if (document.querySelector('.allCheck').checked === true) {
      ;[...document.querySelectorAll('.checkInput')].map((v, i) => {
        v.setAttribute('checked', true)
      })
    }
  }, [districtData])

  // 搜尋站點動態更新搜尋結果
  useEffect(() => {
    getUbikeData(pointInput)
  }, [pointInput])

  useEffect(() => {
    // onchange後結果一改顏色
    const searchPointResult0 = document.querySelector('.searchPointResult0')
    if (searchPointResult0 !== null) {
      searchPointResult0.style.color = '#b5cc22'
    }
  }, [pointInputData])

  return (
    <main>
      <h2>站點資訊</h2>
      <div className="searchArea">
        <div className="searchAreaFirstDiv">
          <form>
            <SearchInput
              area={area}
              setArea={setArea}
              countyData={countyData}
              pointInput={pointInput}
              setPointInput={setPointInput}
              pointInputData={pointInputData}
              filterCounty={filterCounty}
            />
            <Checkbox districtData={districtData} area={area} />
          </form>
        </div>
        <div>
          <img src="/Images/Frame.png" alt="" />
        </div>
      </div>
      <Table pointInputData={pointInputData} />
    </main>
  )
}

export default MainPage
