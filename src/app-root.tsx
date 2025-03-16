import { StateProvider } from './state-provider'
import { App } from './app'
import { ConfigProvider, theme } from 'antd'

export const AppRoot = () => {
  // yah we can honor the window event if the mode changes, but, that's complicated and low ROI.
  // in browser the user simply reloads the page; if ported to an electron app then hook the events.
  const windowQuery = { matches: false }; // window.matchMedia("(prefers-color-scheme:dark)");

  return (
    <StateProvider>
      <ConfigProvider theme={{
        algorithm: windowQuery.matches ? 
          theme.darkAlgorithm : 
          theme.defaultAlgorithm
      }}>
        <App />
      </ConfigProvider>
    </StateProvider>
  )
}
