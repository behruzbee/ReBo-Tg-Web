import './app.css'
import useTelegram from './hooks/useTelegram'

const App = () => {
  const { user } = useTelegram()
  return (
    <div>{user.username}</div>
  )
}

export default App