import { Image, Button } from 'stardust-ui-test-react'

import * as React from 'react'

export interface GridPickerItemProps {
  title?: string
  imageSrc: string
  onClick?: (e: React.SyntheticEvent, props: GridPickerItemProps) => void
}

const imageButtonStyles = {
  minWidth: '56px',
  height: '56px',
  padding: '0',
  background: '#fff',
}

class GridImagePickerItem extends React.Component<GridPickerItemProps> {
  render() {
    const { title, imageSrc, onClick } = this.props

    return (
      <li>
        <Button styles={imageButtonStyles} onClick={onClick} title={title} role="listitem">
          {imageSrc && <Image src={imageSrc} fluid />}
        </Button>
      </li>
    )
  }
}

export default GridImagePickerItem
