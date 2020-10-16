import * as React from 'react'
import MarkdownSection from '../components/MarkdownSection'
import Detail from '../assets/detail.drawio.svg'
import Detail1 from '../assets/detail1.drawio.svg'
import Detail2 from '../assets/detail2.drawio.svg'
import Detail3 from '../assets/detail3.drawio.svg'
import Detail4 from '../assets/detail4.drawio.svg'
import Reuse from '../assets/reuse.drawio.svg'
import DA from '../assets/da.drawio.svg'
import Consensus from '../assets/consensus.drawio.svg'
import Bridge from '../assets/bridge.drawio.svg'
import Section from '../components/Section'
import HS1 from '../assets/hidden-service1.drawio.svg'
import HS2 from '../assets/hidden-service2.drawio.svg'
import HS3 from '../assets/hidden-service3.drawio.svg'
import HS4 from '../assets/hidden-service4.drawio.svg'
import HS5 from '../assets/hidden-service5.drawio.svg'

const SectionHowTo = () => (
  <>
    <Section>
      <h3>Onion Architecture</h3>
      <div className="r-stack">
        <img className="fragment fade-out" data-fragment-index="0" src={Detail} height={600} />
        <img className="fragment" data-fragment-index="0" src={Detail1} height={600} />
        <img className="fragment" src={Detail2} height={600} />
        <img className="fragment" src={Detail3} height={600} />
        <img className="fragment" src={Detail4} height={600} />
      </div>
    </Section>
    <Section>
      <h3>Properties of Anonymization</h3>
      <div className="r-stack">
        <div className="fragment fade-out" data-fragment-index="0">
          <blockquote>
            Tor does not replace transport encryption which is provided by HTTPS
          </blockquote>
          <img src={Detail4} height={350} />
        </div>
        <div className="fragment current-visible" data-fragment-index="0">
          <blockquote>
            Anonymization fails if the adversary controls a Guard and Exit node of a given circuit
          </blockquote>
          <p>
            True for all current practical low-latency anonymity designs
          </p>
        </div>
        <div className="fragment current-visible">
          <blockquote>
            The identical node, node from a similar network or node from the same family is not choosen twice for the
            same path.
          </blockquote>
          <p>
            If a node is reused, then the network is technically reduced to a 2-hop circuit
          </p>
          <img src={Reuse} />
        </div>
      </div>
    </Section>
    {/*language=md*/}
    <MarkdownSection>
      {`
  ### Directory Authority Nodes
  
  ![](${DA}) <!-- .element height="400px" -->
  
  * There are currently 10 hardcoded DAs in Tor
  * DAs are operated by various organisations which builds trust  <!-- .element class="fragment" -->
      
  Note: Source Code linked in References    
  ---
  ### Bridge Nodes

  ![](${Bridge}) <!-- .element height="350px" -->

  * Bridge Nodes offer a way to get a consensus even in DAs are IP-blocked
  * The full list of Bridge Nodes is never published. There are various distribution methods (email, social networks etc.)
 
  ---
   
   ### Voting Process in a Nutshell
   
   ![](${Consensus}) <!-- .element height="400px" -->
   
   More details about the individual steps can be found in the [Tor directory protocol, version 3
](https://gitweb.torproject.org/torspec.git/plain/dir-spec.txt?id=0bfbfadc15e3f55ee0733a295c6b5237f57a9e34)
   
   ---
   
   ${""/*
   #### Example of a Consensus
   
   <pre><code data-line-numbers="1|2|5|6">r flageolet AAbeLnfjw+xeGCWwduUlf9IA7Qo rCoA4CvcGdIOjY5VzZXxR/wveUg 2020-06-30 19:18:19 80.195.122.166 9090 9091
   s Fast Guard HSDir Running Stable V2Dir Valid
   v Tor 0.4.2.7
   pr Cons=1-2 Desc=1-2 DirCache=1-2 HSDir=1-2 HSIntro=3-5 HSRend=1-2 Link=1-5 LinkAuth=1,3 Microdesc=1-2 Relay=1-2 Padding=2 FlowCtrl=1
   w Bandwidth=780
   p reject 1-65535
   r seele AAoQ1DAR6kkoo19hBAX5K0QztNw dHJn3UGmbesTubXGCw5b6TWNz8o 2020-06-30 11:32:27 67.174.243.193 9001 0
   s Running Stable V2Dir Valid
   v Tor 0.4.3.5
   pr Cons=1-2 Desc=1-2 DirCache=1-2 HSDir=1-2 HSIntro=3-5 HSRend=1-2 Link=1-5 LinkAuth=1,3 Microdesc=1-2 Relay=1-2 Padding=2 FlowCtrl=1
   w Bandwidth=9
   </code></pre>
  
  [2020-06-30-20-00-00-consensus](https://collector.torproject.org/recent/relay-descriptors/consensuses/2020-06-30-20-00-00-consensus)
  
  ---*/}
  ### Hidden Service

  * TCP services within the Tor network
  * The identity of the Hidden Service is obfuscated <!-- .element class="fragment" -->
`}
    </MarkdownSection>
    <Section>
      <div className="r-stack">
        <div className="fragment fade-out" data-fragment-index="0">
          <h4>Service Registration</h4>
          <img src={HS1} height={600} />
        </div>
        <div className="fragment fade-out current-visible" data-fragment-index="0">
          <h4>Lookup the DHT</h4>
          <img src={HS2} height={600} />
        </div>
        <div className="fragment fade-out current-visible">
          <h4>Knocking at the door</h4>
          <img src={HS3} height={600} />
        </div>
        <div className="fragment fade-out current-visible">
          <h4>Offer a Rendevouz Point</h4>
          <img src={HS4} height={600} />
        </div>
        <div className="fragment fade-out current-visible">
          <h4>Meeting at the Rendevouz Point</h4>
          <img src={HS5} height={600} />
        </div>
      </div>
    </Section>
    {/*language=md*/}
  {/*  <MarkdownSection>{`*/}
  {/*### Onion Addresses*/}

  {/** Addresses are not guessable, but also not memoriable*/}
  {/** Onion addresses are hight-entropy to Zooko's triangle:  <!-- .element class="fragment" -->*/}
  {/*![](${Petnames})   <!-- .element class="fragment" -->*/}
  {/*    `}</MarkdownSection>*/}
  </>

)

export default SectionHowTo
