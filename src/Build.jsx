import { useState } from "react";
import ShinyText from './component/ShinyText';
import './Build.css';

export default function Build() {
    return (<>
    <div>
        <h1>PROJECT BUILD WITH 💪</h1>
    </div>
        <div className="shiny">
        <ShinyText
        className="shiny"
  text="✨ Javascript ✨
  ✨ React ✨
  ✨ Bootstrap ✨
  ✨ Spline ✨
  ✨ GSAP ✨"
  speed={3}
  delay={0}
  color="#b5b5b5"
  shineColor="#ffffff"
  fontSize="20rem"
  spread={120}
  direction="left"
  yoyo={false}
  pauseOnHover={false}
  disabled={false}
/></div>
</>
    )
}