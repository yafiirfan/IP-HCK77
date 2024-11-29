import React from 'react'
import { useLocation } from 'react-router-dom'

export const SearchPage = () => {
  const location = useLocation()
  console.log("location", location);
  return (
    <div>SearchPage</div>
  )
}

export default SearchPage