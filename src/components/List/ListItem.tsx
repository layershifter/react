import * as React from 'react'
import * as PropTypes from 'prop-types'
import * as cx from 'classnames'

import { createShorthandFactory, customPropTypes, pxToRem, UIComponent } from '../../lib'
import Layout from '../Layout'
import { ListItemBehavior } from '../../lib/accessibility'
import { Accessibility } from '../../lib/accessibility/interfaces'

class ListItem extends UIComponent<any, any> {
  static create: Function

  static displayName = 'ListItem'

  static className = 'ui-list__item'

  static propTypes = {
    as: customPropTypes.as,

    /** Additional classes. */
    className: PropTypes.string,

    contentMedia: PropTypes.any,

    /** Shorthand for primary content. */
    content: PropTypes.any,

    /** Toggle debug mode */
    debug: PropTypes.bool,

    header: PropTypes.any,
    endMedia: PropTypes.any,
    headerMedia: PropTypes.any,

    /** A list item can appear more important and draw the user's attention. */
    important: PropTypes.bool,
    media: PropTypes.any,
    renderContentArea: PropTypes.any,
    renderHeaderArea: PropTypes.any,
    renderMainArea: PropTypes.any,

    /** A list item can indicate that it can be selected. */
    selection: PropTypes.bool,
    truncateContent: PropTypes.bool,
    truncateHeader: PropTypes.bool,

    /** Accessibility behavior if overridden by the user. */
    accessibility: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),

    /** Custom styles to be applied for component. */
    styles: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),

    /** Custom variables to be applied for component. */
    variables: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
  }

  static handledProps = [
    'accessibility',
    'as',
    'className',
    'content',
    'contentMedia',
    'debug',
    'endMedia',
    'header',
    'headerMedia',
    'important',
    'media',
    'renderContentArea',
    'renderHeaderArea',
    'renderMainArea',
    'selection',
    'styles',
    'truncateContent',
    'truncateHeader',
    'variables',
  ]

  static defaultProps = {
    as: 'li',
    accessibility: ListItemBehavior as Accessibility,

    renderMainArea: (props, state, classes) => {
      const { renderHeaderArea, renderContentArea } = props

      const headerArea = renderHeaderArea(props, state, classes)
      const contentArea = renderContentArea(props, state, classes)

      return (
        <div
          className="ui-list__item__main"
          // vertical
          // disappearing
          // rootCSS={{
          //   gridTemplateRows: "1fr 1fr"
          // }}
          style={{
            gridTemplateRows: '1fr 1fr',
          }}
          // start={headerArea}
          // end={contentArea}
        >
          {headerArea}
          {contentArea}
        </div>
      )
    },

    renderHeaderArea: (props, state, classes) => {
      const { debug, header, headerMedia, truncateHeader, selection } = props
      const { isHovering } = state

      const mergedClasses = cx('ui-list__item__header', classes.header)
      const mediaClasses = cx('ui-list__item__headerMedia', classes.headerMedia)
      const headerMediaStyle =
        headerMedia && selection && isHovering ? { color: 'inherit' } : undefined

      return !header && !headerMedia ? null : (
        <Layout
          className={mergedClasses}
          alignItems="end"
          gap={pxToRem(8)}
          debug={debug}
          // disappearing={!truncateHeader}
          truncateMain={truncateHeader}
          rootCSS={selection && isHovering ? { color: 'inherit' } : undefined}
          main={header}
          end={
            headerMedia && (
              <span style={headerMediaStyle} className={mediaClasses}>
                {headerMedia}
              </span>
            )
          }
        />
      )
    },

    renderContentArea: (props, state, classes) => {
      const { debug, content, contentMedia, truncateContent, selection } = props
      const { isHovering } = state

      const mergedClasses = cx('ui-list__item__content', classes.content)

      return !content && !contentMedia ? null : (
        <Layout
          className={mergedClasses}
          alignItems="start"
          gap={pxToRem(8)}
          debug={debug}
          // disappearing={!truncateContent}
          truncateMain={truncateContent}
          rootCSS={selection && isHovering ? { color: 'inherit' } : undefined}
          main={content}
          end={!isHovering && contentMedia}
        />
      )
    },
  }

  state: any = {}

  handleMouseEnter = () => {
    this.setState({ isHovering: true })
  }

  handleMouseLeave = () => {
    this.setState({ isHovering: false })
  }

  renderComponent({ ElementType, classes, accessibility, rest }) {
    const { as, debug, endMedia, media, renderMainArea } = this.props
    const { isHovering } = this.state

    const startArea = media
    const mainArea = renderMainArea(this.props, this.state, classes)
    const endArea = isHovering && endMedia

    return (
      <Layout
        as={as}
        alignItems="center"
        gap={pxToRem(8)}
        className={classes.root}
        debug={debug}
        reducing
        start={startArea}
        main={mainArea}
        end={endArea}
        onMouseEnter={this.handleMouseEnter}
        onMouseLeave={this.handleMouseLeave}
        {...accessibility.attributes.root}
        {...rest}
      />
    )
  }
}

ListItem.create = createShorthandFactory(ListItem, main => ({ main }))

export default ListItem
