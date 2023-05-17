import { useState } from 'react'

function Table({ pointInputData }) {
  return (
    <div className="pointTable">
      <table>
        <thead>
          <tr>
            <td>縣市</td>
            <td>區域</td>
            <td>站點名稱</td>
            <td>可借車輛</td>
            <td>可還空位</td>
          </tr>
        </thead>
        <tbody>
          {pointInputData?.map((v, i) => {
            return (
              <tr key={v.sno}>
                <td>臺北市</td>
                <td>{v.sarea}</td>
                <td>{v.sna}</td>
                <td>{v.tot}</td>
                <td>{v.sbi}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}

export default Table
