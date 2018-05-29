import React from 'react';

// functional component to have it render when no restaurants are found
const NotFound = () =>{
  return(
  <div>
    <h2 className="not-found">Not Restaurants found, please try searching for another city</h2>
  </div>
  )
}

export default NotFound;