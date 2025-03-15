import { StateProvider } from './state-provider'
import { App } from './app'

export const AppRoot = () => {
  return (
    <StateProvider>
      <App />
    </StateProvider>
  )
}
