import * as React from 'react'
import { Menu } from 'stardust-ui-test-react'

const items = [
  { key: 'editorials', content: 'Editorials' },
  { key: 'review', content: 'Reviews' },
  { key: 'events', content: 'Upcoming Events' },
]

const MenuExample = () => <Menu defaultActiveIndex={0} items={items} />

export default MenuExample
