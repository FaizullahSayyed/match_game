import './index.css'

const ScoreCard = props => {
  const {score, resetGame} = props

  const onClickPlayAgain = () => {
    resetGame()
  }

  return (
    <div className="score-card-container">
      <div className="game-over-bg-container">
        <div className="result-container">
          <div className="trophy-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/match-game-trophy.png"
              alt="trophy"
              className="trophy"
            />
          </div>
          <div className="score-card-score-container">
            <p className="score-paragraph">Your Score</p>
            <p className="score-card-score">{score}</p>
            <div className="play-again-button-container">
              <button
                type="button"
                className="play-again-button"
                onClick={onClickPlayAgain}
              >
                <div className="reset-image-container">
                  <div className="reset-image-container">
                    <img
                      src="https://assets.ccbp.in/frontend/react-js/match-game-play-again-img.png "
                      alt="reset"
                      className="reset-image"
                    />
                  </div>
                  <p className="play-again-text">Play Again</p>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default ScoreCard
