import React from 'react'

const BookMark = (props) => {
  let classes = props.status ? 'bi bi-bookmark-fill' : 'bi bi-bookmark'
  return (
    <td>
      <button onClick={() => props.onBookmark(props.id)}>
        <i className={classes}></i>
      </button>
    </td>
  )
}

export default BookMark
