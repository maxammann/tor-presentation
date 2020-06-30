import * as React from 'react'
import MarkdownSection from '../components/MarkdownSection'
import TorLogo from '../assets/Tor-logo-2011-flat.svg'
import Proxy from '../assets/vpn.drawio.svg'
import Simple from '../assets/simple.drawio.svg'
import Reasons from '../assets/reasons.drawio.svg'
import Section from '../components/Section'
import Detail from '../assets/detail.drawio.svg'
import Detail1 from '../assets/detail1.drawio.svg'
import Detail2 from '../assets/detail2.drawio.svg'
import Detail3 from '../assets/detail3.drawio.svg'
import Detail4 from '../assets/detail4.drawio.svg'

const SectionIntro = () => (
  <>
    {/*language=md*/}
    <MarkdownSection>{`
  ![Konzepte Verteilter Systeme Slide 18](${TorLogo})
  # The Tor Project
  ## Introduction and Hands-on
  ---
  ![](${Reasons})
  
  🡆 Proposal: Anonymisation is a further reason for distributed systems
  `}</MarkdownSection>
    <Section>
      <h3>Tor is not yet another Proxy or VPN</h3>
      <div className="r-stack">
        <div className="fragment fade-out" data-fragment-index="0">
          <img src={Proxy} height={400} />
          <li>Proxy knows who you are and where you are going</li>
        </div>
        <div className="fragment r-stretch" data-fragment-index="0">
          <img src={Simple} height={400} />
          <li>Multiple hops through a network of nodes</li>
          <li>Nobody knows who you are <bold>AND</bold> where you are going</li>
        </div>
      </div>
    </Section>
  </>
)

export default SectionIntro
