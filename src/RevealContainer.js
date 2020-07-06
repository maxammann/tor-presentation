import * as React from 'react'
import { hot } from 'react-hot-loader/root'
import SectionIntro from './slides/SectionIntro'
import SectionOperating from './slides/SectionHandsOnOperating'
import SectionHowTo from './slides/SectionHowTo'
import SectionReferences from './slides/SectionReferences'

const RevealContainer = () => (
  <div class="reveal">
    <div class="slides">
      <SectionIntro />
      <SectionHowTo />
      <SectionOperating />
      <SectionReferences />
    </div>
  </div>
)

export default hot(RevealContainer)
