import { useState } from 'react'

function Checkbox({ districtData, area }) {
  return (
    <div className="checkResult">
      <div className="allCheckDiv">
        <input
          type="checkbox"
          name="allCheck"
          className="allCheck"
          radioGroup="1"
          onClick={(e) => {
            console.log(e.target.checked)
            if (e.target.checked === true) {
              ;[...document.querySelectorAll('.checkInput')].map((v, i) => {
                v.setAttribute('checked', true)
              })
            }
            if (e.target.checked === false) {
              ;[...document.querySelectorAll('.checkInput')].map((v, i) => {
                v.removeAttribute('checked')
              })
            }
          }}
        />
        <label htmlFor="allCheck" className="checkLabel">
          全部勾選
        </label>
      </div>
      <div className="checkDiv">
        {districtData === undefined
          ? ''
          : districtData.map((v, i) => {
              return (
                <div key={v.ZipCode}>
                  <input
                    type="checkbox"
                    name={area}
                    className="checkInput"
                    radioGroup="1"
                  />
                  <label htmlFor={area} className="checkLabel">
                    {v.AreaName}
                  </label>
                </div>
              )
            })}
      </div>
    </div>
  )
}

export default Checkbox
