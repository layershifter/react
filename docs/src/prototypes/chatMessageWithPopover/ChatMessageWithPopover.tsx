import { ChatMessage } from 'stardust-ui-test-react'

import * as React from 'react'
import cx from 'classnames'
import Popover from './Popover'

interface ChatMessageWithPopoverProps {
  className?: string
}

interface ChatMessageWithPopoverState {
  focused: boolean
}

class ChatMessageWithPopover extends React.Component<
  ChatMessageWithPopoverProps,
  ChatMessageWithPopoverState
> {
  state = {
    focused: false,
  }

  changeFocusState = (isFocused: boolean) => {
    this.state.focused !== isFocused && this.setState({ focused: isFocused })
  }

  handleFocus = () => {
    this.changeFocusState(true)
  }

  handleBlur = e => {
    const shouldPreserveFocusState = e.currentTarget.contains(e.relatedTarget)
    this.changeFocusState(shouldPreserveFocusState)
  }

  render() {
    return (
      <ChatMessage
        author="Jane Doe"
        timestamp="Yesterday, 10:15 PM"
        content={{
          content: (
            <div>
              <Popover className="actions" />
              <a href="/">Link</a> Hover me to see the actions <a href="/">Some Link</a>
            </div>
          ),
        }}
        onFocus={this.handleFocus}
        onBlur={this.handleBlur}
        className={cx(this.props.className, this.state.focused ? 'focused' : '')}
      />
    )
  }
}

export default ChatMessageWithPopover
