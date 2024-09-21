const useTelegram = () => {
  const tg = window.Telegram?.WebApp

  const onClose = () => {
    tg.close()
  }

  const onToggle = () => {
    if (tg.MainButton.isVisible) {
      tg.MainButton.hide()
    } else {
      tg.MainButton.show()
    }
  }

  return {
    tg,
    user: tg?.initDataUnsafe?.user,
    onClose,
    onToggle
  }
}

export default useTelegram
