import * as React from 'react'
import { Avatar } from 'stardust-ui-test-react'

const AvatarExampleNameShorthand = () => (
  <Avatar
    name="John Doe"
    status={{
      color: 'green',
      icon: 'check',
      title: 'Available',
    }}
  />
)

export default AvatarExampleNameShorthand
