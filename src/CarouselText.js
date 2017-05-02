import React, { Component, PropTypes } from 'react'
/**
 * Next release support not loop
 **/
export default class CarouselText extends Component {
  constructor () {
    super()
    this.state = {
      index: 0
    }
  }
  loopIndex () {
    setInterval(() => this.setState({index: (this.state.index + 1) % this.props.text.length}), this.props.timeout)
  }
  componentWillMount () {
    this.loopIndex()
  }
  render() {
    const { text, loop, timeout } = this.props
    const { index } = this.state
    return (
      <span className={'CarouselText'}>{text?text[index]:null}</span>
    )
  }
}
CarouselText.propTypes = {
  text: PropTypes.array.isRequired,
  timeout: PropTypes.number
}
CarouselText.defaultProps = {
  timeout: 2000
}