import React from 'react'
import { useLocation } from 'react-router-dom';

const Models = () => {
    const location = useLocation();
    console.log(location.state.item_name);
  return (
    <div>
         e
    </div>
  )
}

export default Models