import React from 'react'

function AdminDashboard({ user }) {
  return (
    <div>
      <h1>Welcome {user?.name}</h1>
    </div>
  )
}

export default AdminDashboard