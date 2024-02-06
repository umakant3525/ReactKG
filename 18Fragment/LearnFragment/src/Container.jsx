import React from 'react'

const Container = (props) => {
  return (
    <div className='bg-info border rounded-lg vh-100 border-black m-4 '>
      {props.children}
    </div>
  );
};

export default Container;
