import React from 'react'

const Header = () => {
  return (
    <header className=' ' >
        <div className='flex p-5 justify-between items-center lg:p-10'>
          <img src="./images/logo.svg" alt="" className=
          'w-24'/>
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