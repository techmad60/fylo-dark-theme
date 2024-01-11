import React from 'react'


function App() {
  
  return (
    <div className='bg-Dark-Blue-intro'>
      <header className=' ' >
        <div className='flex p-5 justify-between items-center '>
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


      <main className='flex flex-col justify-center items-center'>
        <section className='hero flex items-center flex-col justify-center min-h-full text-center bg-no-repeat bg-center lg:bg-curvy-desktop lg:bg-bottom z-20 py-4'> 
          <img src="./images/illustration-intro.png" alt="" className='px-5 z-20' /> 

          <h1 className='
           font-raleway font-bold text-2xl text-white px-5 pt-4 leading-9 z-20'>All your files in one secure location, accessible anywhere.</h1>

          <p className=' text-white px-7 pt-4 pb-8  z-20'>
          Fylo stores all your most important files in one secure location. Access them wherever 
          you need, share and collaborate with friends family, and co-workers.
          </p>

          <button className='bg-Cyan-grdaient text-white p-3 rounded-3xl w-60 z-20 font-semibold'>Get Started</button>
        </section>

        <section className=' bg-Dark-Blue-main text-center'>
          <div className='pt-32 flex items-center justify-center flex-col text-white'>
            <img src="/images/icon-access-anywhere.svg" alt="" />
            <h2 className='text-xl pt-10 font-bold'>Access your files, anywhere</h2>
            <p className='px-5 py-3'>The ability to use a smartphone, tablet, or computer to access your account means your 
           files follow you everywhere.</p>
          </div>
        </section>

        <section className=' bg-Dark-Blue-main text-center'>
          <div className='pt-24 flex items-center justify-center flex-col text-white'>
            <img src="/images/icon-security.svg" alt=""/>
            <h2 className='text-xl pt-10 font-bold'>Security you can trust</h2>
            <p className='px-5 py-3'>2-factor authentication and user-controlled encryption are just a couple of the security features we allow to help secure your files.</p>
          </div>
        </section>

        <section className=' bg-Dark-Blue-main text-center'>
          <div className='pt-24 flex items-center justify-center flex-col text-white'>
            <img src="/images/icon-collaboration.svg" alt="" />
            <h2 className='text-xl pt-10 font-bold'>Real-time collaboration</h2>
            <p className='px-5 py-3'>Securely share files and folders with friends, family and colleagues for live collaboration. 
            No email attachments required.
            </p>
          </div>
        </section>
        <section className=' bg-Dark-Blue-main text-center'>
          <div className='pt-24 flex items-center justify-center flex-col text-white '>
            <img src="/images/icon-any-file.svg" alt="" />
            <h2 className='text-xl pt-10 font-bold'>Store any type of file</h2>
            <p className='px-5 py-3'> Whether you're sharing holidays photos or work documents, Fylo has you covered allowing for all 
            file types to be securely stored and shared.</p>
          </div>
        </section>
        <section className=' bg-Dark-Blue-main text-start'>
          <div className='pt-32 flex  flex-col text-white px-5'>
            <img src="/images/illustration-stay-productive.png" alt="" />
            <h2 className='text-xl pt-10 font-bold'>Stay productive, wherever you are</h2>
            <p className='py-4'>Never let location be an issue when accessing your files. Fylo has you covered for all of your file 
            storage needs.</p>
            <p className='py-4'>
            Securely share files and folders with friends, family and colleagues for live collaboration. No email 
            attachments required.
            </p>
            <div className='text-start flex items-center space-x-2 py-2 border-b border-cyan-300 w-fit'>
              <p className='text-cyan-300'>See how Fylo works</p>
              <img src="/images/icon-arrow.svg" alt="" className='w-5'/>
            </div>
          </div>
        </section>

        <section className='testimonials-firstchild flex flex-col items-center justify-center bg-Dark-Blue-main text-white pt-44 text-sm'>
          <div className='bg-Dark-Blue-testimonials w-10/12 p-5 flex flex-col rounded-md mb-6'>
            <p className='leading-6 py-4'>Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has 
            become a well-oiled collaboration machine</p>
            <div className='flex space-x-4 items-center'>
              <img src="/images/profile-1.jpg" alt="" className='w-12 h-12 rounded-full' />
              <div className='leading-6 '>
                <h3 className='font-bold tracking-wider'>Satish Patel</h3>
                <p className='text-xs'>Founder & CEO, Huddle</p>
              </div>
            </div>
          </div>

          <div className='bg-Dark-Blue-testimonials w-10/12 p-5 flex flex-col rounded-md mb-6'>
            <p className='leading-6 py-4'>Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has 
            become a well-oiled collaboration machine</p>
            <div className='flex space-x-4 items-center'>
              <img src="/images/profile-2.jpg" alt="" className='w-12 h-12 rounded-full' />
              <div className='leading-6 '>
                <h3 className='font-bold tracking-wider'>Bruce McKenzie</h3>
                <p className='text-xs'>Founder & CEO, Huddle</p>
              </div>
            </div>
          </div>
          <div className='bg-Dark-Blue-testimonials w-10/12 p-5 flex flex-col rounded-md mb-6'>
            <p className='leading-6 py-4'>Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has 
            become a well-oiled collaboration machine</p>
            <div className='flex space-x-4 items-center'>
              <img src="/images/profile-3.jpg" alt="" className='w-12 h-12 rounded-full' />
              <div className='leading-6 '>
                <h3 className='font-bold tracking-wider'>Iva Boyd</h3>
                <p className='text-xs'>Founder & CEO, Huddle</p>
              </div>
            </div>
          </div>
        </section>
        
        <div className='relative w-full flex justify-center items-center top-44'>
          <section className='email flex items-center flex-col justify-center justify-self-end text-white bg-Dark-Blue-testimonials text-center w-11/12 rounded-md shadow-black px-6 py-3 z-50'>
            <h2 className='text-xl font-semibold py-4'>Get early access today</h2>

            <p className='pb-3'>It only takes a minute to sign up and our free starter tier is extremely generous. If you have any 
            questions, our support team would be happy to help you.</p>

            <input type="email" className='w-full placeholder:text-sm py-3 px-5 rounded-3xl my-3 text-black' placeholder='email@example.com'/>
            <button className='bg-Cyan-grdaient w-full py-3 rounded-3xl mt-3 mb-5' type='submit'> Get Started For Free</button>
          </section>
        </div>
        
      </main>

      <footer className='bg-Dark-Blue-footer flex flex-col text-white px-5'>
        <div className='mt-56 '>
          <div className='py-5'>
            <img src="/images/logo.svg" alt="" />
          </div>
        </div>

        <div className='flex flex-col py-4'>
          <div className='flex space-x-4 items-baseline py-3'>
            <img src="/images/icon-location.svg" alt="" />
            <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et 
            dolore magna aliqua
            </p>
          </div>
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
        
        <nav aria-label='footer-nav'>
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

          <ul className='text-white flex space-x-3 text-center mx-auto w-full justify-center items-center my-6'>
            <li className='flex justify-center items-center border border-white rounded-full'><i class="p-3 flex w-50  h-50  fa-brands fa-facebook-f"></i></li>

            <li className='flex justify-center items-center border border-white rounded-full'><i class="p-3 flex w-50  h-50  fa-brands fa-x-twitter"></i></li>

            <li className='flex justify-center items-center border border-white rounded-full'><i class="p-3 flex w-50  h-50  fa-brands fa-instagram"></i></li>
          </ul>
        </nav>
      </footer>
    </div>
  )
}

export default App
