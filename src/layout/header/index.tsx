import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header>
        <Link to='/'>Home</Link> <br />
        <Link to='/users'>Users</Link> <br />
        <Link to='/todo'>Todo</Link> <br />
    </header>
  )
}

export default Header