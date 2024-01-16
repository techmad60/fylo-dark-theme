import React, { useRef, useEffect } from 'react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';

function App() {
  gsap.registerPlugin(ScrollTrigger);
  const container = useRef(null);
  let tl = gsap.timeline()

  useGSAP(() => {
    const element = container.current;

    tl.from(
      element.querySelector('.logo'),
      {
        duration: 2,
        opacity: 0,
        scale: 0.3,
        ease: 'back',
        delay: 1,
      }
    );
  }, { scope: container });
  useGSAP(() => {
    const element = container.current;

    tl.from(
      element.querySelectorAll('.header-link'),
      {
        duration: 1.5,
        opacity: 0,
        scale: 0.3,
        ease: 'back',
        stagger: 0.25,
      }
    );
  }, { scope: container });

  useGSAP(() => {
    const element = container.current;

    tl.from(
      element.querySelector('.main'),
      {
        duration: 1.5,
        opacity: 0,
        scale: 0.3,
        ease: 'bounce',
      }
    );
  }, { scope: container });
  useGSAP(() => {
    const element = container.current;

    tl.from(
      element.querySelector('.illustration-img-one'),
      {
        duration: 1.5,
        x: '-200vw',
        ease: 'back',
      }
    );
  }, { scope: container });
  useGSAP(() => {
    const element = container.current;

    tl.from(
      element.querySelector('.intro'),
      {
        duration: 1.5,
        opacity: 0,
        scale: 0.3,
        y: '-100%',
        ease: 'bounce.out',
      }
    );
  }, { scope: container });
  useGSAP(() => {
    const element = container.current;

    gsap.from(
      element.querySelectorAll('.feature-section'),
      {
       opacity: 0,
       x: 50,
       stagger: 0.2,
       duration: 1,
       ease: 'power3.out',
       scrollTrigger: {
        trigger: element.querySelector('.features'),
        start: "top bottom",
        end: "bottom top",
       }
      }
    );
  }, { scope: container });
  useGSAP(() => {
    const element = container.current;

    gsap.to(
      element.querySelector('.more-features'),
      {
       rotation: 360,
       duration: 2,
       delay: 1,
       ease: 'bounce.out',
       scrollTrigger: {
        trigger: element.querySelector('.more-features'),
        start: "top 80%", // Adjust the start position as needed
        end: "bottom 20%", // Adjust the end position as needed
       }
      }
    );
  }, { scope: container });
  useGSAP(() => {
    const element = container.current;

    gsap.from(
      element.querySelectorAll('.testimonial'),
      {
       opacity: 0,
       x: 50,
       stagger: 0.2,
       duration: 1,
       delay: 1,
       ease: 'power3.out',
       scrollTrigger: {
        trigger: element.querySelector('.testimonial'),
        start: "top bottom",
        end: "bottom top",
       }
      }
    );
  }, { scope: container });
 



  return (
    <div className='app bg-Dark-Blue-intro' ref={container}>
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;

  // tl.from(".illustration-img-one", {duration: 1, x: '-100vw', ease: 'bounce'});
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
    // tl.to(".email", { rotation: 360, duration: 2, delay: 2, ease: "bounce.out" });
