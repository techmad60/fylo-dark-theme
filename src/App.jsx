import React, { useRef } from 'react';
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';

gsap.registerPlugin(ScrollTrigger);



function App() {
  const container = useRef(null);

  let tl = gsap.timeline()

  useGSAP(() => {
    // gsap code here...
   
    tl.from(".logo", {duration: 1.5, opacity: 0, scale: 0.3, ease: "back", delay: 1});
    tl.from(".header-link", {duration: 1.5, opacity: 0, scale: 0.3, ease: "back", stagger: 0.25});
    tl.from(".main", {duration: 1.5, opacity: 0, scale: 0.3, ease: "bounce"});

    // tl.from(".illustration-img-one", {duration: 1, x: '-100vw', ease: 'bounce'});
    tl.from(".illustration-img-one", {duration: 1.5, x: '-100vw', ease: 'back'});
    tl.from(".intro", {duration: 1.5, opacity: 0, scale: 0.3, ease: "back",});
    tl.fromTo(".icon-one", {duration: 1.5, y: '-100vh', ease: "back", scrollTrigger: ".features"})


    
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
