import React from 'react'

const Footer = () => {
  return (
        <footer className='footer bg-Dark-Blue-footer flex flex-col text-white px-5 pt-56 lg:px-10 z-30'>

        <div className='py-5'>
            <img src="/images/logo.svg" alt="" />
        </div>
        
        <div className='lg:grid grid-cols-2'>
            <div className='flex flex-col py-4 lg:grid lg:grid-cols-2 gap-12'>
                <div className='flex space-x-4 items-baseline py-3'>
                    <img src="/images/icon-location.svg" alt="" />
                    <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et 
                    dolore magna aliqua
                    </p>
                </div>

                <div>
                    <div className='flex space-x-4 items-baseline py-3'>
                        <img src="/images/icon-phone.svg" alt="" />
                        <p> +1-543-123-4567
                        </p>
                    </div>
                    <div className='flex space-x-4 items-center py-3'>
                        <img src="/images/icon-email.svg" alt="" />
                        <p> example@fylo.com
                        </p>
                    </div>
                </div>
            </div>
            
            <nav aria-label='footer-nav' className='w-full lg:grid lg:grid-cols-3 items-start'>
                <ul className='leading-9 py-4'>
                    <li>About Us</li>
                    <li>Jobs</li>
                    <li> Press</li>
                    <li>Blog</li>
                </ul>
                <ul className='leading-9 py-4'>
                    <li>Contact Us</li>
                    <li>Terms</li>
                    <li> Privacy</li>
                </ul>

                <ul className='text-white flex space-x-3 text-center mx-auto  justify-center items-center my-6'>
                    <li className='flex justify-center items-center border border-white rounded-full'><i class="p-3 w-10 h-10 fa-brands fa-facebook-f"></i></li>

                    <li className='flex justify-center items-center border border-white rounded-full'><i class="p-3 w-10 h-10 fa-brands fa-twitter"></i></li>

                    <li className='flex justify-center items-center border border-white rounded-full'><i class="p-3 w-10 h-10 fa-brands fa-instagram"></i></li>
                </ul>

            </nav>
        </div>
       
  </footer>
  )
}

export default Footer