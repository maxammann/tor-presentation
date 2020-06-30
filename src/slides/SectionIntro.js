import * as React from 'react'
import Section from '../components/Section'
import TorLogo from '../assets/Tor-logo-2011-flat.svg'

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
  ### How can Tor be operated?
  * As User via SOCKS Proxy
  * As Node
  // TODO
  
  `}</Section>
)

export default SectionIntro
