import React from 'react'
import User from './user'

const Users = (props) => {
  const tableUsers = props.users.map((user) => {
    return (
      <User
        key={user._id}
        user={user}
        onDelete={props.onDelete}
        onBookmark={props.onBookmark}
      />
    )
  })

  return (
    <>
      <table className="table">
        <thead>
          {props.users.length === 0 ? null : (
            <tr>
              <th scope="col">Имя</th>
              <th scope="col">Качества</th>
              <th scope="col">Профессия</th>
              <th scope="col">Встретился, раз</th>
              <th scope="col">Оценка</th>
              <th scope="col">Избранное</th>
              <th scope="col"></th>
            </tr>
          )}
        </thead>
        <tbody>{tableUsers}</tbody>
      </table>
    </>
  )
}

export default Users
