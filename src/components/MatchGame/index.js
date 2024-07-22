import {Component} from 'react'

import Header from '../Header'
import RandomImage from '../RandomImage'
import TabItem from '../TabItem'
import ThumbnailItem from '../ThumbnailItem'
import ScoreCard from '../ScoreCard'

import './index.css'

class MatchGame extends Component {
  constructor(props) {
    super(props)
    const {imagesList, tabsList} = props
    const {tabId} = tabsList[0]

    this.state = {
      activeTab: tabId,
      score: 0,
      timer: 60,
      clickedImagesIdList: [],
      displayCard: false,
      randomImage: imagesList[0],
      unClickedImages: imagesList,
    }
  }

  componentDidMount() {
    this.timerId = setInterval(this.tick, 1000)
  }

  componentWillUnmount() {
    clearInterval(this.timerId)
  }

  tick = () => {
    const {score, timer} = this.state
    this.setState({timer: timer - 1})
    if (timer === 1 || score === 30) {
      clearInterval(this.timerId)
      this.updateDisplayCard()
    }
  }

  getFilteredImagesList = () => {
    const {imagesList} = this.props
    const {activeTab} = this.state

    const filteredList = imagesList.filter(
      image => image.category === activeTab,
    )

    return filteredList
  }

  getRandomImage = () => {
    const {unClickedImages} = this.state

    return unClickedImages[Math.floor(Math.random() * unClickedImages.length)]
  }

  updateTab = tabId => this.setState({activeTab: tabId})

  updateDisplayCard = () => this.setState({displayCard: true})

  updateClickedIds = id => {
    this.setState(prevState => ({
      unClickedImages: prevState.unClickedImages.filter(
        image => image.id !== id,
      ),
    }))
    const {clickedImagesIdList} = this.state
    if (clickedImagesIdList.includes(id)) {
      this.updateDisplayCard()
      clearInterval(this.timerId)
    } else {
      this.setState(prevState => ({
        clickedImagesIdList: [...prevState.clickedImagesIdList, id],
        score: prevState.score + 1,
        randomImage: this.getRandomImage(),
      }))
    }
  }

  resetGame = () => {
    const {tabsList, imagesList} = this.props
    this.setState({
      activeTab: tabsList[0].tabId,
      displayCard: false,
      score: 0,
      timer: 60,
      randomImage: imagesList[0],
      clickedImagesIdList: [],
      unClickedImages: imagesList,
    })
    this.timerId = setInterval(this.tick, 1000)
  }

  render() {
    const {score, activeTab, displayCard, timer, randomImage} = this.state
    const {tabsList} = this.props

    const filteredImagesList = this.getFilteredImagesList()

    return (
      <div className="bg-container">
        <Header score={score} timer={timer} />
        {displayCard ? (
          <ScoreCard score={score} resetGame={this.resetGame} />
        ) : (
          <div className="game-container">
            <div className="image-container">
              <RandomImage imageDetails={randomImage} />
            </div>
            <div className="input-container">
              <ul className="tabs-container">
                {tabsList.map(tab => (
                  <TabItem
                    key={tab.tabId}
                    tabDetails={tab}
                    activeTab={activeTab}
                    updateTab={this.updateTab}
                  />
                ))}
              </ul>
              <ul className="thumbnail-container">
                {filteredImagesList.map(eachImage => (
                  <ThumbnailItem
                    key={eachImage.id}
                    imageDetails={eachImage}
                    updateClickedIds={this.updateClickedIds}
                  />
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>
    )
  }
}

export default MatchGame
