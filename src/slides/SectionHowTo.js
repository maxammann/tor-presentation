import * as React from 'react'
import Section from '../components/Section'
import Probabilities from '../assets/probabilities.svg'

const SectionHowTo = () => (
  // language=md
  <Section>{`
  ### How does Tor Work?
  * Figure with Guards, Relays and Exit nodes and Circuits
    * Example figure
  * Why 3-Hop Circuits?
  * Rotation of Circuits
  
  * Directory Authorities and Bridges
    * How does Consensus work?
  * How is a Circuit Created?
    * Families
    * Guard Pinning https://skerritt.blog/how-does-tor-really-work/#guard-pinning-
  `}</Section>
)

export default SectionHowTo
