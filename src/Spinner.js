import React, { Component, PropTypes } from 'react'
export default class Spinner extends Component {
  constructor () {
    super()
    this.state = {
      spinnerStyle: {
      }
    }
  }
  componentWillMount () {
    const { size } = this.props
    this.setState({
      spinnerStyle: {
        width: size+'px',
        height: size+'px',
        lineHeight: size+'px'
      }
    })
  }
  render() {
    const { size } = this.props
    const { spinnerStyle } = this.state
    return (
      <div is class={'Spinner'} style={spinnerStyle} data-width={(size/20)+'px'}>
        {this.props.children}
      </div>
    )
  }
}
Spinner.propTypes = {
  size: PropTypes.string
}
Spinner.defaultProps = {
  size: 44
}