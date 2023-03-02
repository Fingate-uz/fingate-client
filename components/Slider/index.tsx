'use client'
import React from 'react'
import 'keen-slider/keen-slider.min.css'
import { useKeenSlider } from 'keen-slider/react' // import from 'keen-slider/react.es' for to get an ES module

export default function Slider() {
  const [sliderRef, instanceRef] = useKeenSlider(
    {
      slideChanged() {
        console.log('slide changed')
      },
    },
    []
    )

  return (
    <div ref={sliderRef} className='keen-slider h-1/6'>
      {[...(new Array(10))].map((_, index) =>
        <div key={index} className='keen-slider__slide bg-orange-600'>{index + 1}</div>
      )}
    </div>
  )
}