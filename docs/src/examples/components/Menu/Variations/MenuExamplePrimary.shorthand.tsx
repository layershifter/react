import * as React from 'react'
import { Menu } from 'stardust-ui-test-react'

const items = [
  { key: 'editorials', content: 'Editorials' },
  { key: 'review', content: 'Reviews' },
  { key: 'events', content: 'Upcoming Events' },
]

const MenuExamplePrimary = () => <Menu defaultActiveIndex={0} items={items} primary />

export default MenuExamplePrimary
