import './app.css'
import useTelegram from './hooks/useTelegram'

const App = () => {
  const { user } = useTelegram()
  return (
    <div>{user?.username || 'Ghost'}</div>
  )
}

export default App