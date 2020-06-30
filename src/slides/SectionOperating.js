import * as React from 'react'
import MarkdownSection from '../components/MarkdownSection'
import Probabilities from '../assets/probabilities.svg'

const SectionIntro = () => (
  // language=md
  <MarkdownSection>{`
  ### How can Tor be operated?
  * As User via SOCKS Proxy
  * As Node
  // TODO
  ---
  ### Birth of a new Relay
  * Phases: https://blog.torproject.org/lifecycle-new-relay
    * unmeasured
    * remote measurement
    * Ramping up as a guard relay
  ---
  ### Example statistics
  ![](${Probabilities}) <!-- .element width="80%" -->
  ---
  * consensus weight fraction = 1/weight
  * guard probability
  * middle probability
  * exit probability
  ---
  ### Hands-on: Operating a Relay
  * Quick Setup Guide
  * Statistics from https://metrics.torproject.org/
  `}</MarkdownSection>
)

export default SectionIntro
