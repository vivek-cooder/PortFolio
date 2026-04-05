import { useState } from "react";
import GradientText from './GradientText'
import './GradientText.css'

export default function Experience() {
    return (
        <GradientText
  colors={["#5227FF","#FF9FFC","#B19EEF"]}
  id="experience"
  animationSpeed={8}
  showBorder={false}
  className="custom-class"
>
  Experience
</GradientText>
    )
}