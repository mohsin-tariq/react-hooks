import React from 'react'
import { useHistory } from 'react-router-dom'

export const Dashboard: React.FC = () => {
  const history = useHistory()

  return (
    <>
      <h1>Dashboard</h1>
      <button
        type="button"
        className="btn"
        cy-data="go-back-button"
        onClick={() => history.push('/')}
      >
        Go back
      </button>
    </>
  )
}
