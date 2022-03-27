import React, { useState } from 'react'
import api from '../api'

const Users = () => {
  const [users, setUsers] = useState(api.users.fetchAll())

  const handleDelete = (userId) => {
    setUsers(
      users.filter((user) => {
        return user._id !== userId
      })
    )
  }

  const renderPhrase = (number) => {
    let personWord = 'человек'
    let partyWord = 'тусанут'
    if (number === 1) {
      personWord = 'человек'
      partyWord = 'тусанет'
    } else if (number === 2 || number === 3 || number === 4) {
      personWord = 'человека'
      partyWord = 'тусанут'
    } else if (number >= 20) {
      const lastNum = number.toString().split('').length - 1
      console.log(lastNum)
      if (+lastNum === 2 || +lastNum === 3 || +lastNum === 4) {
        personWord = 'человека'
        partyWord = 'тусанут'
      }
    }

    return users.length
      ? users.length + ' ' + personWord + ' ' + partyWord + ' c тобой сегодня'
      : 'Никто с тобой не тусанет'
  }

  const tableUsers = users.map((user) => {
    return (
      <tr key={user._id}>
        <td>{user.name}</td>
        <td>
          {user.qualities.map((quality) => {
            return (
              <span
                key={quality.name}
                className={'badge m-1 bg-' + quality.color}
              >
                {quality.name}
              </span>
            )
          })}
        </td>
        <td>{user.profession.name}</td>
        <td>{user.completedMeetings}</td>
        <td>{user.rate + '/5'}</td>
        <td>
          <button
            onClick={() => handleDelete(user._id)}
            className="btn btn-danger"
          >
            Удалить
          </button>
        </td>
      </tr>
    )
  })

  return (
    <>
      <h2>
        <span
          className={'badge bg-' + (users.length > 0 ? 'primary' : 'danger')}
        >
          {renderPhrase(users.length)}
        </span>
      </h2>
      <table className="table">
        <thead>
          {users.length === 0 ? null : (
            <tr>
              <th scope="col">Имя</th>
              <th scope="col">Качества</th>
              <th scope="col">Профессия</th>
              <th scope="col">Встретился, раз</th>
              <th scope="col">Оценка</th>
            </tr>
          )}
        </thead>
        <tbody>{tableUsers}</tbody>
      </table>
    </>
  )
}

export default Users
