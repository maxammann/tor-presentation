import * as React from 'react'

const MarkdownSection = (props) => {
  return (
    <section data-markdown={''} data-separator="---" data-separator-vertical="----">
      <script type="text/template">
        {props.children}
      </script>
    </section>
  )
}

export default MarkdownSection
