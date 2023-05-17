import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { FaBars, FaTimes } from 'react-icons/fa'
function Header() {
  const navigate = useNavigate()

  const [open, setOpen] = useState(true)

  return (
    <>
      <header>
        <div className="navbar">
          <div
            onClick={() => {
              navigate('/')
            }}
          >
            <img className="UbikeLogo" src={'/Images/logo.svg'} alt="" />
          </div>
          <div
            onClick={() => {
              navigate('/HowToUse')
            }}
            className="navbarText"
          >
            <p>使用說明</p>
          </div>
          <div
            onClick={() => {
              navigate('/Charge')
            }}
            className="navbarText"
          >
            <p>收費方式</p>
          </div>
          <div
            onClick={() => {
              navigate('/PointNews')
            }}
            className="navbarText"
          >
            <p>站點資訊</p>
          </div>
          <div
            onClick={() => {
              navigate('/LatestNews')
            }}
            className="navbarText"
          >
            <p>最新消息</p>
          </div>
          <div
            onClick={() => {
              navigate('/Activity')
            }}
            className="navbarText"
          >
            <p>活動專區</p>
          </div>
        </div>
        <div className="loginButton">
          <button>登入</button>
        </div>
        <div
          onClick={() => {
            setOpen(!open)
          }}
        >
          {open ? (
            <FaBars
              className="hamburger"
              onClick={() => {
                document.querySelector('.rwdFullNav').style.display = 'block'
              }}
            />
          ) : (
            <FaTimes
              className="cancel"
              onClick={() => {
                document.querySelector('.rwdFullNav').style.display = 'none'
              }}
            />
          )}
        </div>
      </header>
      {/* RWD */}
      <div className="rwdFullNav" hidden>
        <div
          onClick={() => {
            navigate('/HowToUse')
          }}
          className="rwdFullNavText"
        >
          <p>使用說明</p>
        </div>
        <div
          onClick={() => {
            navigate('/Charge')
          }}
          className="rwdFullNavText"
        >
          <p>收費方式</p>
        </div>
        <div
          onClick={() => {
            navigate('/PointNews')
          }}
          className="rwdFullNavText"
        >
          <p>站點資訊</p>
        </div>
        <div
          onClick={() => {
            navigate('/LatestNews')
          }}
          className="rwdFullNavText"
        >
          <p>最新消息</p>
        </div>
        <div
          onClick={() => {
            navigate('/Activity')
          }}
          className="rwdFullNavText"
        >
          <p>活動專區</p>
        </div>
        <div className="rwdFullNavLogin">
          <button>登入</button>
        </div>
      </div>
    </>
  )
}

export default Header
