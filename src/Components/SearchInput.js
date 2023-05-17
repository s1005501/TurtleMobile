import { useState, useEffect } from 'react'
import taiwan from './../Json/AllData.json'
import { FaSearch, FaChevronDown } from 'react-icons/fa'

function SearchInput({
  area,
  setArea,
  countyData,
  pointInput,
  setPointInput,
  pointInputData,
  filterCounty,
}) {
  const [areaOpen, setAreaOpen] = useState(false)

  useEffect(() => {
    if (areaOpen === true) {
      document.querySelector('.countyUl').style.display = 'none'
    }
  }, [areaOpen])

  // 下拉選單
  // 改不掉option樣式改用ul li
  const changeArea = (areaOpen) => {
    const dropdown = document.querySelector('.dropdown')
    setAreaOpen((areaOpen = !areaOpen))
    if (areaOpen === true) {
      dropdown.style.display = 'block'
    }
    if (areaOpen === false) {
      dropdown.style.display = 'none'
    }
  }

  return (
    <>
      <div className="searchInput">
        <div className="selectCounty">
          <input
            type="text"
            placeholder="選擇縣市"
            value={area}
            onChange={(e) => {
              setArea(e.target.value)
              filterCounty(e.target.value)
              document.querySelector('.dropdown').style.display = 'none'
            }}
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                if (area) {
                  document.querySelector('.countyUl').style.display = 'none'
                }
              }
            }}
          />
          <ul className="countyUl">
            {countyData?.map((v, i) => {
              return (
                <li
                  key={`countyLi${i}`}
                  onClick={(e) => {
                    setArea(e.target.innerText)
                    document.querySelector('.countyUl').style.display = 'none'
                  }}
                >
                  {v.CityName}
                </li>
              )
            })}
          </ul>
          <FaChevronDown
            onClick={() => {
              changeArea(areaOpen)
            }}
            className="arrow"
          />
          <ul className="dropdown">
            {taiwan.map((v, i) => {
              return (
                <li
                  key={`arrow${i}`}
                  onClick={(e) => {
                    setArea(e.target.innerText)
                    changeArea(areaOpen)
                  }}
                >
                  {v.CityName}
                </li>
              )
            })}
          </ul>
        </div>
        <div className="searchPoint">
          <div>
            <input
              className="searchPointInput"
              type="text"
              placeholder="搜尋站點"
              value={pointInput}
              onChange={(e) => {
                setPointInput(e.target.value)
                // onchange後輸入字串改顏色
                e.target.style.color = '#b5cc22'
              }}
              // 輸入確認鍵enter下拉選單消失
              onKeyDown={(e) => {
                // console.log(e)
                if (e.key === 'Enter') {
                  if (pointInput) {
                    document.querySelector('.dropdownPoint').style.display =
                      'none'
                  }
                }
              }}
            />
            <FaSearch className="magnifier" />
          </div>
          {pointInputData.length > 0 && pointInputData.length <= 6 ? (
            <ul className="dropdownPoint">
              {pointInputData.map((v, i) => {
                v.sna = v.sna?.split('YouBike2.0_')[1]
                return (
                  <li
                    key={i}
                    className={`searchPointResult${i}`}
                    onClick={(e) => {
                      setPointInput(e.target.innerText)
                    }}
                  >
                    {v.sna}
                  </li>
                )
              })}
            </ul>
          ) : (
            <></>
          )}
        </div>
      </div>
    </>
  )
}

export default SearchInput
