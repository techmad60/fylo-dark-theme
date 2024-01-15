import React from 'react'

const Header = () => {
  return (
    <header className='header' >
        <div className='flex p-5 justify-between items-center lg:p-10'>
          <img src="./images/logo.svg" alt="Fylo logo" className=
          'logo w-24' loading='lazy'/>
          <nav aria-label='header-nav'>
            <ul className='flex space-x-5 text-white text-sm'
            >
              <li><a href="#" className='header-link'>Features</a></li>
              <li><a href="#" className='header-link'>Team</a></li>
              <li><a href="#" className='header-link'>Sign In</a></li>
            </ul>
          </nav>
        </div>
    </header>
    )
}

export default Header