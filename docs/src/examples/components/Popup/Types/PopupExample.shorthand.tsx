import * as React from 'react'
import { Button, Popup } from 'stardust-ui-test-react'

const PopupExample = () => <Popup trigger={<Button icon="expand" />} content="Hello from popup!" />

export default PopupExample
