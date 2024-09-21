declare global {
  interface Window {
    Telegram: {
      WebApp: {
        close: () => void
        MainButton: {
          isVisible: boolean
          show: () => void
          hide: () => void
        }
        initDataUnsafe: {
          user: {
            id: number
            first_name: string
            last_name?: string
            username?: string
          }
        }
      }
    }
  }
}

export {}