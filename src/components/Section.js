import * as React from 'react'

const MarkdownSection = (props) => {
  return (
    <section data-transition={props.transition ? props.transition : 'none'}>
      {props.children}
    </section>
  )
}

export default MarkdownSection
