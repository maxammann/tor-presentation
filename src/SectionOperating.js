import * as React from 'react'
import Section from './components/Section'
import TorLogo from './assets/Tor-logo-2011-flat.svg'

const SectionIntro = () => (
  // language=md
  <Section>{`
  ### Birth of a new Relay
  * Phases: https://blog.torproject.org/lifecycle-new-relay
    * unmeasured
    * remote measurement
    *  Ramping up as a guard relay
  ---
  ### Hands-on: Operating a Relay
  * Quick Setup Guide
  * Statistics from https://metrics.torproject.org/
  `}</Section>
)

export default SectionIntro
