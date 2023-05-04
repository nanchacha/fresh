'use client'

import React from 'react'
import Lottie from 'react-lottie-player'
import lottieJson from 'public/ecommerce.json'

export default function Animation() {
  return (
    <Lottie
      loop
      animationData={lottieJson}
      play
      style={{ width: 800, height: 700, margin: "auto"}}
    />
  )
}