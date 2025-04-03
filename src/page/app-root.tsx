
import { ConfigProvider, theme } from 'antd'
import { StateProvider } from './state-provider';
import { App } from './app';
import { useHashLocation } from 'wouter/use-hash-location';
import { Router } from 'wouter';

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
        <Router hook={useHashLocation}>
          <App />
        </Router>
      </ConfigProvider>
    </StateProvider>
  )
}
