import { useState } from 'react'
import Shuffle from './Shuffle.jsx';
import './Me.css'

export default function Me() {
    return (
        <div id='shuffle-txt'>
            <Shuffle
                text="About ME"
                shuffleDirection="right"
                duration={0.55}
                animationMode="evenodd"
                shuffleTimes={1}
                ease="power3.out"
                stagger={0.63}
                threshold={0.1}
                triggerOnce={true}
                triggerOnHover
                respectReducedMotion={true}
                loop={true}
                loopDelay={0}
            />
        </div>
    )
}