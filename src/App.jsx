import React, { useRef } from 'react';
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';




function App() {
  const container = useRef(null);

  let tl = gsap.timeline()

  useGSAP(() => {
    // gsap code here...
   
    tl.from(".logo", {duration: 1.5, opacity: 0, scale: 0.3, ease: "back", delay: 1});
    tl.from(".header-link", {duration: 1.5, opacity: 0, scale: 0.3, ease: "back", stagger: 0.25});
    tl.from(".illustration-img-one", {duration: 1.5, x: '-100%', ease: 'bounce'});
    tl.from(".intro", {duration: 1.5, opacity: 0, scale: 0.3, ease: "bounce", delay: 1});


    
    // tl.to(".illustration-img-one", { 
    //   rotation: 360,
    //   x: '100vw',
    //   xPercent: -100,
    //   // special properties
    //   duration: 2,
    //   delay: 1, // how long the animation lasts
    //   repeat: 1, // the number of repeats - this will play 3 times
    //   yoyo: true, // this will alternate back and forth on each repeat. Like a yoyo
    // });
    tl.to(".email", { rotation: 360, duration: 2, delay: 2, ease: "bounce.out" });
  }, { scope: container }) // <-- scope for selector text (optional)
  
  return (
    <div className='app bg-Dark-Blue-intro' ref={container}>
      <Header/>
      <Main />
      <Footer />
    </div>
  )
};

export default App;
