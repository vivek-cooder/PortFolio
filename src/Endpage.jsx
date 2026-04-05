import { useState } from "react";
import CurvedLoop from "./CurvedLoop";

export default function Endpage() {
    return (
        

// With custom props
<CurvedLoop 
  marqueeText="Be ✦ Creative ✦ With ✦ React ✦ Bits ✦"
  speed={2}
  curveAmount={100}
  direction ="right"
  interactive
  className="custom-text-style"
/>
 
    )
}