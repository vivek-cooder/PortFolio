import { useState } from 'react'
import './App.css'

import TextPressure from './/component/TextPressure';
import { Color } from 'three/src/Three.Core.js';

function Splashscreen() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div style={{ position: 'relative', height: '300px' }}>
        <TextPressure
          className=''
          text="Hello!"
          flex={false}
          alpha={false}
          stroke={false}
          width={1}
          weight
          italic
          textColor="#ffffff"
          strokeColor="#5227FF"
          minFontSize={35}
        />
      </div>
    </>
  )
}
export default Splashscreen
