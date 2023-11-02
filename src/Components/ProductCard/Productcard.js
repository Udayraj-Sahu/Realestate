import React from 'react'
import '../ProductCard/Productcard.scss'

function Productcard(props) {
  return (
    <div className="product-card">
      <img src={props.image} alt={props.name} />
      <h2>{props.name}</h2>
    </div>
  )
}

export default Productcard