import * as React from 'react'
import MarkdownSection from '../components/MarkdownSection'
import TorLogo from '../assets/Tor-logo-2011-flat.svg'
import Proxy from '../assets/proxy.drawio.svg'
import Simple from '../assets/simple.drawio.svg'
import Users from '../assets/users.png'
import Section from '../components/Section'

const SectionIntro = () => (
  <>
    {/*language=md*/}
    <MarkdownSection>{`
  ![](${TorLogo})
  # The Tor Project
  ---
  ### What is Tor?
  
  * Mitigates against tracking, surveillance and censorship by anonymizing users
  * Run by volunteers from all over the world
  * Over 2 million users currently
  
   ![](${Users}) <!-- .element height="400px" -->
  
  `}</MarkdownSection>
    <Section>
      <h3>What Tor is not</h3>
      <img src={Proxy} height={400} />
      <li>Proxy knows who you are and where you are going</li>
    </Section>
    <Section>
      <h3>What Tor is</h3>
      <img src={Simple} height={250} />
     <ul>
       <li>The <b>Guard Node</b> does not know where you want to go, but knows your ISP IP</li>
       <li className={"fragment"}>The <b>Relay Node</b> does not know where you come from and where you want to go</li>
       <li className={"fragment"}>The <b>Exit Node</b> does now know where you come from, but knows which IP you want to reach</li>
       <li className={"fragment"}>Nobody knows who you are <b>AND</b> where you are going</li>
     </ul>
    </Section>
  </>
)

export default SectionIntro
