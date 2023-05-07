'use client'

import React from 'react'
import Lottie from 'react-lottie-player'
import lottieJson from 'public/404.json'

export default function NotFound() {
  return (
    <Lottie
      loop
      animationData={lottieJson}
      play
      style={{ width: 800, height: 700, margin: "auto"}}
    />
  )
}