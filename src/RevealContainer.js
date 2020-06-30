import * as React from 'react'
import { hot } from 'react-hot-loader/root'
import SectionIntro from './SectionIntro'
import SectionOperating from './SectionOperating'
import SectionHiddenServices from './SectionHiddenServices'

const RevealContainer = () => (
  <div class="reveal">
    <div class="slides">
      <SectionIntro />
      <SectionOperating />
      <SectionHiddenServices />
    </div>
  </div>
)

export default hot(RevealContainer)
