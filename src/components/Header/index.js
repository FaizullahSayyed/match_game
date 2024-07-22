import './index.css'

const Header = props => {
  const {score, timer} = props

  return (
    <div className="header-container">
      <div className="title-container">
        <div className="title-logo-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/match-game-website-logo.png"
            alt="website logo"
            className="title-logo"
          />
        </div>
      </div>
      <div className="score-container">
        <p className="score-text">
          Score: <span className="score">{score}</span>
        </p>
        <div className="timer-container">
          <div className="timer-image-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/match-game-timer-img.png"
              alt="timer"
              className="timer-image"
            />
          </div>
          <p className="timer-countdown">{timer} sec</p>
        </div>
      </div>
    </div>
  )
}
export default Header
