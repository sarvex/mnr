import { useState, useEffect } from 'react'

const Header = ({ message }) => {
  return (
    <div className="container">
      <div className="header">{message}</div>
    </div>
  )
}

export default Header
