import * as React from 'react'
import MarkdownSection from '../components/MarkdownSection'
import Probabilities from '../assets/probabilities.svg'
import Socks from '../assets/socks.drawio.svg'

const SectionIntro = () => (
  // language=md
  <MarkdownSection>{`
  ### How can Tor be operated?
  * Censored user, human rights defender, activist persona
     * Tunnel traffic through the network
     * Hosting a Hidden Service
  * Tor Project contributor
     * As Guard or Relay node
     * As Exit node
  ---
  ### Tunnel TCP traffic as Tor User
  
  ![](${Socks})
  
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
