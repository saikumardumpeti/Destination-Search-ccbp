// Write your code here
import {Component} from 'react'
import DestinationItem from '../DestinationItem'
import './index.css'

class DestinationSearch extends Component {
  state = {searchInp: ''}

  onSearchDestination = event => {
    this.setState({searchInp: event.target.value})
    console.log(event.target.value)
  }

  render() {
    const {destinationsList} = this.props
    const {searchInp} = this.state

    const searchedDestination = destinationsList.filter(eachCard =>
      eachCard.name.toLowerCase().includes(searchInp.toLowerCase()),
    )

    return (
      <div className="app-container">
        <div className="destinations-search-container">
          <h1>Destination Search</h1>
          <div className="search-input-container">
            <input
              type="search"
              className="search-input"
              placeholder="Search"
              value={searchInp}
              onChange={this.onSearchDestination}
            />
            <img
              src="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png"
              alt="search icon"
              className="search-icon"
            />
          </div>
          <ul className="destinations-list">
            {searchedDestination.map(eachCard => (
              <DestinationItem destinationCards={eachCard} key={eachCard.id} />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default DestinationSearch
