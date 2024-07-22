import './index.css'

const TabItem = props => {
  const {tabDetails, activeTab, updateTab} = props
  const {tabId, displayText} = tabDetails

  const onClickTab = () => {
    updateTab(tabId)
  }

  return (
    <li className={activeTab === tabId ? 'active-tab' : 'list-item'}>
      <nav>
        <button type="button" className="tab-button" onClick={onClickTab}>
          {displayText}
        </button>
      </nav>
    </li>
  )
}

export default TabItem
