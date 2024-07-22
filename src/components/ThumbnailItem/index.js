import './index.css'

const ThumbnailItem = props => {
  const {imageDetails, updateClickedIds} = props
  const {id, thumbnailUrl} = imageDetails

  const onClickThumbnail = () => {
    updateClickedIds(id)
  }

  return (
    <li className="thumbnail-list-item">
      <button
        type="button"
        className="thumbnail-button"
        onClick={onClickThumbnail}
      >
        <img src={thumbnailUrl} className="thumbnail" alt="thumbnail" />
      </button>
    </li>
  )
}

export default ThumbnailItem
