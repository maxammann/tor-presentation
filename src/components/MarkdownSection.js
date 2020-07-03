import * as React from 'react'

const MarkdownSection = (props) => {
  return (
    <section data-transition={props.transition ? props.transition : 'none'} data-markdown={''} data-separator="---" data-separator-vertical="----">
      <script type="text/template">
        {props.children}
      </script>
    </section>
  )
}

export default MarkdownSection
