import React from 'react'
import Productcard from '../../ProductCard/Productcard'
import '../Recomme/Recommand.scss'
import data_product from '../../../assests/rentrecdata'
function Recommand() {
 


  return (
    
    <div className="heading">Recommeded
    <div className='contents'>
    {data_product.map((item)=>{
     return  <Productcard  name={item.name} image = {item.image}  />
      })}
    </div>
    </div>
  )
}

export default Recommand