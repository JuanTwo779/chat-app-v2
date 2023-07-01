import { signOut } from 'firebase/auth'
import React from 'react'

const Navbar = () => {
  return (
    <div className='navbar'>
      <span className='logo'>Chats</span>
      <div className='user'>
        <img src="https://images.pexels.com/photos/2709388/pexels-photo-2709388.jpeg?auto=compress&cs=tinysrgb&w=400" alt="" />
        <span>John</span>
        <button onClick={() => signOut()}> Logout </button>
      </div>
    </div>
  )
}

export default Navbar