import React from 'react'

const Main = () => {
  return (
    <main className='main flex flex-col justify-center items-center '>
        <section className='hero flex items-center flex-col justify-center min-h-full text-center bg-no-repeat bg-center  lg:bg-bottom z-20 py-4'> 
          <img loading='lazy' src="./images/illustration-intro.png" alt="" className='illustration-img-one px-5 z-20 lg:my-4' /> 
          
          <div className='intro flex flex-col justify-center items-center z-20'>
            <h1 className='
            font-raleway font-bold text-2xl text-white px-5 pt-4 leading-9 z-20 lg:text-4xl lg:leading-[3.5rem]'>All your files in one secure location,<br className='hidden lg:block pt-4 lg:py-4'/> accessible anywhere.</h1>

            <p className=' text-white px-7 pt-4 pb-8  z-20 lg:px-64'>
            Fylo stores all your most important files in one secure location. Access them wherever 
            you need, share and collaborate with friends family, and co-workers.
            </p>

            <button className='bg-Cyan-grdaient text-white p-3 rounded-3xl w-60 z-20 font-semibold'>Get Started</button>
          </div>
          
        </section>
        
        <div className='bg-Dark-Blue-main text-center flex flex-col lg:grid lg:grid-rows-2 lg:grid-cols-2'>
          <section className=''>
            <div className='pt-32 flex items-center justify-center flex-col text-white lg:pt-28'>
              <img loading='lazy' src="/images/icon-access-anywhere.svg" alt="" />
              <h2 className='text-xl pt-10 font-bold'>Access your files, anywhere</h2>
              <p className='px-8 py-3'>The ability to use a smartphone, tablet, or computer to access your account means your 
            files follow you everywhere.</p>
            </div>
          </section>

          <section className=''>
            <div className='pt-24 flex items-center justify-center flex-col text-white'>
              <img loading='lazy' src="/images/icon-security.svg" alt=""/>
              <h2 className='text-xl pt-10 font-bold'>Security you can trust</h2>
              <p className='px-8 py-3'>2-factor authentication and user-controlled encryption are just a couple of the security features we allow to help secure your files.</p>
            </div>
          </section>

          <section className=''>
            <div className='pt-24 flex items-center justify-center flex-col text-white'>
              <img loading='lazy' src="/images/icon-collaboration.svg" alt="" />
              <h2 className='text-xl pt-10 font-bold'>Real-time collaboration</h2>
              <p className='px-8 py-3'>Securely share files and folders with friends, family and colleagues for live collaboration. 
              No email attachments required.
              </p>
            </div>
          </section>
          <section className=''>
            <div className='pt-24 flex items-center justify-center flex-col text-white '>
              <img loading='lazy' src="/images/icon-any-file.svg" alt="" />
              <h2 className='text-xl pt-10 font-bold'>Store any type of file</h2>
              <p className='px-8 py-3'> Whether you're sharing holidays photos or work documents, Fylo has you covered allowing for all 
              file types to be securely stored and shared.</p>
            </div>
          </section>
        </div>
       
        <section className=' bg-Dark-Blue-main text-start w-full'>
          <div className='pt-32 flex  flex-col text-white px-5 lg:grid lg:grid-cols-2 lg:justify-between lg:items-center lg:px-10 lg:space-x-8'>
            <div className='flex-grow'>
              <img loading='lazy' src="/images/illustration-stay-productive.png" alt="" />
            </div>
            
            <div>
              <h2 className='text-xl pt-10 font-bold lg:text-3xl'>Stay productive,<br className='hidden lg:block'/> wherever you are</h2>
              <p className='py-4'>Never let location be an issue when accessing your files. Fylo has you covered for all of your file 
              storage needs.</p>
              <p className='py-4'>
              Securely share files and folders with friends, family and colleagues for live collaboration. No email 
              attachments required.
              </p>
              <div className='text-start flex items-center space-x-2 py-2 border-b border-cyan-300 w-fit'>
                <p className='text-cyan-300'>See how Fylo works</p>
                <img loading='lazy' src="/images/icon-arrow.svg" alt="" className='w-5'/>
              </div>
            </div>
          </div>
        </section>

        <section className='testimonials-firstchild flex flex-col items-center justify-center bg-Dark-Blue-main text-white pb-96 pt-44 text-sm w-full lg:flex lg:flex-row lg:justify-between lg:space-x-6 lg:px-10'>
          <div className='bg-Dark-Blue-testimonials w-10/12 p-5 flex flex-col rounded-md mb-6'>
            <p className='leading-6 py-4'>Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has 
            become a well-oiled collaboration machine</p>
            <div className='flex space-x-4 items-center'>
              <img loading='lazy' src="/images/profile-1.jpg" alt="" className='w-12 h-12 rounded-full' />
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
              <img loading='lazy' src="/images/profile-2.jpg" alt="" className='w-12 h-12 rounded-full' />
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
              <img loading='lazy' src="/images/profile-3.jpg" alt="" className='w-12 h-12 rounded-full' />
              <div className='leading-6 '>
                <h3 className='font-bold tracking-wider'>Iva Boyd</h3>
                <p className='text-xs'>Founder & CEO, Huddle</p>
              </div>
            </div>
          </div>
        </section>
        
        <div className='relative flex justify-center items-center w-full'>
        <section className='email flex items-center flex-col justify-center justify-self-end text-white absolute  bg-Dark-Blue-email text-center w-11/12 rounded-md shadow-black shadow-md px-6 pt-3 z-50 pb-8 lg:w-3/4 lg:px-12'>
          <h2 className='text-xl font-semibold py-4 lg:text-2xl'>Get early access today</h2>

          <p className='pb-3 lg:px-6'>It only takes a minute to sign up and our free starter tier is extremely generous. If you have any 
          questions, our support team would be happy to help you.</p>
          
          <form className='lg:flex lg:w-full lg:space-x-6 lg:pt-3'>
            <input type="email" placeholder="email@example.com" className='w-full placeholder:text-sm placeholder:pl-5 py-3 px-5 rounded-3xl my-3 text-black lg:m-0 lg:p-2 lg:w-3/4' />
            <input className="cta bg-Cyan-grdaient w-full py-3 rounded-3xl mt-3 mb-5 lg:m-0 lg:p-2 lg:w-1/2" type="submit" value="Get Started For Free" />
          </form>
        </section>
        </div>
        
    </main>
  )
}

export default Main