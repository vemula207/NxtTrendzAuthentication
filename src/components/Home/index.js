// Write your JS code here
import Header from '../Header'
import './index.css'

const Home = () => (
  <div className="home-container">
    <ul className="list-cont">
      <Header />
    </ul>

    <div className="home-bottom-cont">
      <div className="content-container">
        <h1 className="heading">Clothes That Get YOU Noticed</h1>
        <p className="para">
          Fashion is part of the daily air and it does not quite help that it
          changes all the time. Clothes have always been a marker of the era and
          we are in a revolution. Your fashion makes you been seen and heard
          that way you are. So, celebrates seasons and fashion on your own way.
        </p>
        <button type="button" className="shop-now-btn">
          Shop Now
        </button>
      </div>
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-img.png"
        alt="clothes that get you noticed"
        className="shopping-img"
      />
    </div>
  </div>
)

export default Home
