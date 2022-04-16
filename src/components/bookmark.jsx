import React from 'react'
import PropTypes from 'prop-types'

const BookMark = ({ status, ...rest }) => {
  const classes = status ? 'bi bi-bookmark-fill' : 'bi bi-bookmark'
  return (
    <td>
      <button {...rest}>
        <i className={classes}></i>
      </button>
    </td>
  )
}

BookMark.propTypes = {
  status: PropTypes.bool.isRequired
}

export default BookMark
