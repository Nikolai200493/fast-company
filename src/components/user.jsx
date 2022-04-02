import React from 'react'
import BookMark from './bookmark'
import Quality from './quality'

const User = (props) => {
  return (
    <>
      <tr key={props.user._id}>
        <td>{props.user.name}</td>
        <td>
          {props.user.qualities.map((quality) => {
            return (
              <Quality
                color={quality.color}
                name={quality.name}
                key={quality._id}
              />
            )
          })}
        </td>
        <td>{props.user.profession.name}</td>
        <td>{props.user.completedMeetings}</td>
        <td>{props.user.rate + '/5'}</td>
        <BookMark
          onBookmark={props.onBookmark}
          status={props.user.bookmark}
          id={props.user._id}
        />
        <td>
          <button
            onClick={() => props.onDelete(props.user._id)}
            className="btn btn-danger"
          >
            Удалить
          </button>
        </td>
      </tr>
    </>
  )
}

export default User
