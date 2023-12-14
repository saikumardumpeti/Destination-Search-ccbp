import './index.css'

const DestinationItem = props => {
  const {destinationCards} = props
  const {imgUrl, name} = destinationCards

  return (
    <li className="destination-item">
      <img src={imgUrl} alt={name} className="destination-image" />
      <p className="name">{name}</p>
    </li>
  )
}

export default DestinationItem
