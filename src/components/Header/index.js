// Write your JS code here
import './index.css'

const Header = () => (
  <li className="header-container">
    <img
      src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
      alt="website logo"
      className="website-logo"
    />
    <div className="header-item-cont">
      <h1 className="item">Home</h1>
      <h1 className="item">Products</h1>
      <h1 className="item">Cart</h1>

      <button type="button" className="button">
        Logout
      </button>
    </div>
  </li>
)

export default Header
