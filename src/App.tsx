import { useInitData } from '@vkruglikov/react-telegram-web-app'
import './app.css'

const App = () => {
  const [initDataUnsafe] = useInitData()
  return (
    <div>{initDataUnsafe.user?.username || 'Ghost'}</div>
  )
}

export default App