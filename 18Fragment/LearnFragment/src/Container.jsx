import React from 'react'

const Container = (props) => {
  return (
    <div className='bg-info border rounded-lg vh-100 border-black m-4 '>
        {
            true ? props.children : <p>Loading......</p>
        }
    </div>
  )
}

export default Container