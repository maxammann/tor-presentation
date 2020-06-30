import * as React from 'react'
import MarkdownSection from '../components/MarkdownSection'
import Probabilities from '../assets/probabilities.svg'

const SectionReferences = () => (
  // language=md
  <MarkdownSection>{`
  * Konzepte Verteilter Systeme Slide 18
  * https://blog.torproject.org/lifecycle-new-relay
  * https://2019.www.torproject.org/docs/faq#EntryGuards
  * https://skerritt.blog/how-does-tor-really-work/
  * https://svn-archive.torproject.org/svn/projects/design-paper/tor-design.pdf
  * https://github.com/torproject/torspec/blob/master/proposals/271-another-guard-selection.txt (Guard Formulas)
  * https://gitweb.torproject.org/tor.git/tree/src/app/config/auth_dirs.inc (Hardcoded DAs)
  * https://gitweb.torproject.org/torspec.git/tree/dir-spec.txt
)
  `}</MarkdownSection>
)

export default SectionReferences
