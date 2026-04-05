import { useState } from 'react'
import './scroll.css'

export default function Scroll() {
    return (
        <div className='scroll-container'>
            <div className="scroll-indicator">
                <div className="dot"></div>
                <div className="dot"></div>
                <div className="dot"></div>
            </div>
        </div>
    )
}