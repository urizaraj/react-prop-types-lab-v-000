import React from 'react'
import PropTypes from 'prop-types'

class Product extends React.Component {
  render() {
    return (
      <div>
        {this.props.name}
        {this.props.producer}
        {this.props.hasWatermark}
        {this.props.color}
        {this.props.weight}
      </div>
    )
  }
}

Product.propTypes = {
  name: PropTypes.string.required,
  producer: PropTypes.string,
  hasWatermark: PropTypes.bool,
  color: PropTypes.oneof(['white', 'eggshell-white', 'salmon']),
  weight: function(props, propName, componentName) {
    if (props[propName] < 80 || props[propName] > 300) {
      return new Error('must be between 80 and 300')
    }
  }
}
