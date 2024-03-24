// Write your code here

import Navbar from '../Navbar'
import ThemeContext from '../../context/ThemeContext'

import './index.css'

const NotFound = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      if (isDarkTheme) {
        return (
          <div>
            <Navbar />

            <div className="bottom-cont dark">
              <img
                src="https://assets.ccbp.in/frontend/react-js/not-found-img.png"
                alt="not found"
                className="bad-img"
              />
              <h1>Lost Your Way</h1>
              <p>We cannot seem to find</p>
            </div>
          </div>
        )
      }
      return (
        <div>
          <Navbar />

          <div className="bottom-cont">
            <img
              src="https://assets.ccbp.in/frontend/react-js/not-found-img.png"
              alt="not found"
              className="bad-img"
            />
            <h1>Lost Your Way?</h1>
            <p>We cannot seem to find the page you are looking for</p>
          </div>
        </div>
      )
    }}
  </ThemeContext.Consumer>
)

export default NotFound
