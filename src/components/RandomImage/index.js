import './index.css'

const RandomImage = props => {
  const {imageDetails} = props
  const {imageUrl} = imageDetails

  return (
    <div className="main-image-container">
      <img src={imageUrl} alt="match" className="main-image" />
    </div>
  )
}

export default RandomImage
