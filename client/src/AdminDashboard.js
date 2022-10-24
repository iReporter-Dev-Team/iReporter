import React from 'react'

function AdminDashboard({ user }) {
  return (
    <div>Welcome {user?.name}!</div>
  )
}

export default AdminDashboard