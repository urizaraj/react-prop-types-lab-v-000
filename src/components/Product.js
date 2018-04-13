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

Product.
