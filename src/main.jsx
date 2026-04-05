import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "@studio-freight/lenis";

import './index.css'
import Splashscreen from './App.jsx'
import ColorBends from './Home.jsx'
import Scroll from './scroll.jsx'
import Data from './Data.jsx'
import Test from './Test.jsx'
import About from './About.jsx'
import Me from './Me.jsx'
import Robot from './Robot.jsx'
import Gallery from './Gallery.jsx'
import Work from './Work.jsx'
import ScrollLine from './Scroll-line.jsx'
import Experience from './Experience.jsx';
import Scrollprogress from './Scroll-progress.jsx'
import StaggMenu from './StaggMenu.jsx';
import Build from './Build.jsx';
import Contact from './Contact.jsx';

gsap.registerPlugin(ScrollTrigger);

const lenis = new Lenis({
  duration: 1.7,
  smooth: true,
});

// Update ScrollTrigger on scroll
lenis.on("scroll", ScrollTrigger.update);

// Use GSAP ticker ONLY (no extra RAF loop)
gsap.ticker.add((time) => {
  lenis.raf(time * 1000);
});

gsap.ticker.lagSmoothing(0);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Splashscreen />
    
    <ColorBends /><br />
    <Scroll /><br />
    <Data />
    <Me />
    <About />
    <Robot /><br />
    <Work />
    <Gallery />
    <ScrollLine />
    <Experience  />
    <Scrollprogress />
    <Build />
    <Contact />
  </StrictMode>
)
