import * as React from 'react'

const Section = (props) => {
  return (
    <div class="slides">
      <section data-markdown={''} data-separator="---">
        <script type="text/template">
          {props.children}
        </script>
      </section>
    </div>
  )
}

export default Section
