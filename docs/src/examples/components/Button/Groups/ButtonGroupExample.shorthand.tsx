import * as React from 'react'
import { Button } from 'stardust-ui-test-react'

const ButtonGroupExampleShorthand = () => (
  <Button.Group
    buttons={[
      { key: 'book', icon: 'book', iconOnly: true },
      { key: 'coffee', icon: 'coffee', iconOnly: true },
      { key: 'play', icon: 'play', iconOnly: true },
    ]}
  />
)

export default ButtonGroupExampleShorthand
