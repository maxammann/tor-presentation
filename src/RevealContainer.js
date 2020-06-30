import * as React from 'react'
import { hot } from 'react-hot-loader/root'
import SectionIntro from './slides/SectionIntro'
import SectionOperating from './slides/SectionOperating'
import SectionHiddenServices from './slides/SectionHiddenServices'
import SectionHowTo from './slides/SectionHowTo'

const RevealContainer = () => (
  <div class="reveal">
    <div class="slides">
      <SectionIntro />
      <SectionHowTo />
      <SectionOperating />
      <SectionHiddenServices />
    </div>
  </div>
)

export default hot(RevealContainer)
