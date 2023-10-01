import React from 'react'
import './style.css'
function header() {
  return (
    <div className='headerDiv'>
      <header id='header'>
        <img className='logo' src='https://www.gstatic.com/youtube/img/promos/growth/9049009268c77e7d21b0598358f273bde20df8a76ac232f9cd75aeed9d562340_244x112.webp'></img>
        <div className='serach'>
            <input type='text' placeholder='Search'></input>
            <p className='serch'>Search</p>
        </div>
        <div className='V'>
            <p className='vv'>V</p>
        </div>
      </header>
    </div>
  )
}

export default header
