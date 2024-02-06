import React from 'react'

const Random = () => {
    let rn = Math.random()*1000
  return (
    <div style={{background: "orange", margin: "4px"}}>Random Number is +{Math.round(rn)}</div>
  )
}

export default Random