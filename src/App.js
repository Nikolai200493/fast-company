import React, { useState } from 'react'
import api from './api'
import SearchStatus from './components/searchStatus'
import Users from './components/users'

const App = () => {
  const [users, setUsers] = useState(api.users.fetchAll())

  const handleDelete = (userId) => {
    setUsers(
      users.filter((user) => {
        return user._id !== userId
      })
    )
  }

  const handleBookmark = (id) => {
    setUsers(
      users.map((user) => {
        if (user._id === id) {
          return { ...user, bookmark: !user.bookmark }
        }
        return user
      })
    )
  }

  return (
    <>
      <SearchStatus length={users.length} />
      <Users
        users={users}
        onDelete={handleDelete}
        onBookmark={handleBookmark}
      />
    </>
  )
}

export default App
