import * as React from 'react'
import MarkdownSection from '../components/MarkdownSection'
import Probabilities from '../assets/probabilities.svg'

const SectionReferences = () => (
  // language=md
  <MarkdownSection>{`
  ### References
  <!-- .slide: style="font-size: 20px;"-->
  * Bauer B., Konzepte Verteilter Systeme, Slide 18
  * Tor Project, Tor directory protocol, version 3, URL: \`https://gitweb.torproject.org/torspec.git/tree/dir-spec.txt\`
  * Tor Project, The lifecycle of a new relay, URL: \`https://blog.torproject.org/lifecycle-new-relay\`
  * Tor Project, What are Entry Guards?, URL: \`https://2019.www.torproject.org/docs/faq#EntryGuards\`
  * Tor Project, Tor Source Code, URL: \`https://gitweb.torproject.org/tor.git/tree/src/app/config/auth_dirs.inc\`
  * Skerritt B., How Does Tor Really Work?, URL: \`https://skerritt.blog/how-does-tor-really-work/\`
  * Dingledine R., Mathewson N., Syverson P., Tor: The Second-Generation Onion Router, URL: \`https://svn-archive.torproject.org/svn/projects/design-paper/tor-design.pdf\`
  * Lovecruft I., Kadianakis G, Bini O., URL: \`https://github.com/torproject/torspec/blob/master/proposals/271-another-guard-selection.txt\`
  * Wright J., How Tor Works Part Three - The Consensus, URL: \`https://jordan-wright.com/blog/2015/05/14/how-tor-works-part-three-the-consensus/\`
  * Stiegler M, An Introduction to Petname Systems, URL: \`http://www.skyhunter.com/marcs/petnames/IntroPetNames.html\`
)
  `}</MarkdownSection>
)

export default SectionReferences
