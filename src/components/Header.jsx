import React from 'react'

const Header = () => {
  return (
    <header className='header' >
        <div className='flex p-5 justify-between items-center lg:p-10'>
          <img src="./images/logo.svg" alt="Fylo logo" className=
          'w-24' loading='lazy'/>
          <nav aria-label='header-nav'>
            <ul className='flex space-x-5 text-white text-sm'
            >
              <li>Features</li>
              <li>Team</li>
              <li>Sign In</li>
            </ul>
          </nav>
        </div>
    </header>
    )
}

export default Header