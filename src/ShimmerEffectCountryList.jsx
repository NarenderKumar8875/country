import React from 'react'


const ShimmerEffectCountryList = () => {
  return (
    <div className='country'>
      {Array.from({length:30}).map((el ,i)=>{
        return <div key={i} className='card'></div>
      })}
    </div>
  )
}

export default ShimmerEffectCountryList
