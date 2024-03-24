// Write your code here
import Navbar from '../Navbar'
import ThemeContext from '../../context/ThemeContext'
import './index.css'

const Home = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      if (isDarkTheme) {
        return (
          <div>
            <Navbar />
            <div className="bottom-cont dark">
              <img
                src="https://assets.ccbp.in/frontend/react-js/home-dark-img.png"
                alt="home"
                className="about-img"
              />
              <h1>Home</h1>
            </div>
          </div>
        )
      }
      return (
        <div>
          <Navbar />
          <div className="bottom-cont">
            <img
              src="https://assets.ccbp.in/frontend/react-js/home-light-img.png"
              alt="home"
              className="about-img"
            />
            <h1>Home</h1>
          </div>
        </div>
      )
    }}
  </ThemeContext.Consumer>
)

export default Home
