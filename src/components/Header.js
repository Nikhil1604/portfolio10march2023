import HeaderLeft from "./HeaderLeft"
import HeaderRight from "./HeaderRight"
import "./header.css"
const Header = () => {
  return (
    <div className="Header">
        <HeaderLeft />
        <HeaderRight />
    </div>
  )
}

export default Header