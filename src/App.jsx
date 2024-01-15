import React, { useRef } from 'react';
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';




function App() {
  const container = useRef(null);

  useGSAP(() => {
    // gsap code here...
    gsap.to(".header", {rotation: 360}); // <-- automatically reverted
    gsap.to(".illustration-img-one", { 
      rotation: 360,
      x: '100vw',
      xPercent: -100,
      // special properties
      duration: 2,
      delay: 1, // how long the animation lasts
      repeat: 1, // the number of repeats - this will play 3 times
      yoyo: true, // this will alternate back and forth on each repeat. Like a yoyo
    });
    gsap.to(".email", { rotation: 360, duration: 2, delay: 2, ease: "bounce.out" });
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
