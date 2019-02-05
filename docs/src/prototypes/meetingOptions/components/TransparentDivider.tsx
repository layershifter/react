import { Divider as StardustUIDivider } from 'stardust-ui-test-react'

export default props => {
  return StardustUIDivider.create(props, {
    defaultProps: {
      variables: { dividerColor: 'transparent' },
    },
  })
}
