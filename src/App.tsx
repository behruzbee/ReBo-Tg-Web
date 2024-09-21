import { useInitData } from '@vkruglikov/react-telegram-web-app'
import './app.css'

const App = () => {
  const [initDataUnsafe] = useInitData()

  console.log(initDataUnsafe.user);
  console.log(initDataUnsafe);

  return (
    <div>
      {initDataUnsafe.user?.username || 'Ghost'}

      <h1>{JSON.stringify(initDataUnsafe)}</h1>
      <h2>{JSON.stringify(initDataUnsafe.user)}</h2>
    </div>
  )
}

export default App