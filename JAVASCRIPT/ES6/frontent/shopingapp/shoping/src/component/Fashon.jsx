import React from 'react'
import "./Fashon.css"

function Fashon({props}) {
  return (
    <div id="card">
        <img src={props.image}alt="" height={100} width={100} />
        <h4>Title:{props.title}</h4>
        <h4>price:{props.price}</h4>

    </div>
  )
}

export default Fashon