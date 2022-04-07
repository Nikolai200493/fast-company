import React from 'react'
import BookMark from './bookmark'
import Quality from './quality'
import PropTypes from 'prop-types'

const User = ({
  _id,
  name,
  qualities,
  profession,
  completedMeetings,
  rate,
  onDelete,
  bookmark,
  onBookmark,
}) => {
  return (
    <>
      <tr key={_id}>
        <td>{name}</td>
        <td>
          {qualities.map((quality) => {
            return <Quality key={quality._id} {...quality} />
          })}
        </td>
        <td>{profession.name}</td>
        <td>{completedMeetings}</td>
        <td>{rate + '/5'}</td>
        <BookMark onClick={() => onBookmark(_id)} status={bookmark} />
        <td>
          <button onClick={() => onDelete(_id)} className="btn btn-danger">
            Удалить
          </button>
        </td>
      </tr>
    </>
  )
}

User.propTypes = {
  _id: PropTypes.string,
  name: PropTypes.string.isRequired,
  qualities: PropTypes.array.isRequired,
  profession: PropTypes.object.isRequired,
  completedMeetings: PropTypes.number,
  rate: PropTypes.number,
  onDelete: PropTypes.func.isRequired,
  bookmark: PropTypes.bool.isRequired,
  onBookmark: PropTypes.func.isRequired,
}

export default User
