import * as React from 'react'
import Section from './components/Section'
import TorLogo from './assets/Tor-logo-2011-flat.svg'

const SectionIntro = () => (
  // language=md
  <Section>{`
  ![](${TorLogo})
  # The Tor Project

  ## Introduction and Hands-on
  ---
  ### Overview Distributed Systems
  
  * Performance Load Balancing
  * Anonymity
  ---
  ### How does Tor Work?
  * Figure with Guards, Relays and Exit nodes and Circuits
  * Why 3-Hop Circuits?
  * Rotation of Circuits
  `}</Section>
)

export default SectionIntro
