import { useState } from 'react'
import ScrollReveal from './ScrollReveal.jsx';
import './About.css'



export default function About() {
    return (
        <div id='scrollreveal'>
            <ScrollReveal
                baseOpacity={0}
                enableBlur
                baseRotation={3}
                blurStrength={8}
            >
                I bring 3 years of hands-on experience as a Desktop Support Engineer,
                where I developed strong problem-solving skills and deep user empathy.
                Now pursuing UI/UX development, I combine technical knowledge with design
                thinking to build seamless and user-focused digital products.

            </ScrollReveal>
        </div>
    )
}