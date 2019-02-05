import * as React from 'react'
import { Layout } from 'stardust-ui-test-react'

const LayoutExampleDisappearing = () => (
  <Layout
    debug
    disappearing
    main="This is the main content.  Notice there is no layout container."
  />
)

export default LayoutExampleDisappearing
