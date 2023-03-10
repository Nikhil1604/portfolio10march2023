import React from 'react'
import IntroLeft from './IntroLeft'
import IntroRight from './IntroRight'
import "./intro.css"

const Intro = () => {
  return (
    <div className='Intro'>
        <IntroLeft />
        <IntroRight />
    </div>
  )
}

export default Intro;