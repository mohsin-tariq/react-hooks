import { useHistory } from 'react-router-dom'

const Dashboard = (): JSX.Element => {
  const history = useHistory()

  return (
    <>
      <h1>Dashboard Page</h1>
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

export default Dashboard
