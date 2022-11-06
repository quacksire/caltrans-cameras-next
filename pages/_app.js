

// 1. import `NextUIProvider` component
import { NextUIProvider, createTheme } from '@nextui-org/react';
import { Analytics } from '@vercel/analytics/react';
import Layout from '../components/layout'
import NavBar from '../components/navbar'

const darkTheme = createTheme({
    type: 'light',
})

function MyApp({ Component, pageProps }) {
  return (
      // 2. Use at the root of your app {/*>*/}
     <NextUIProvider theme={darkTheme}>
          <NavBar />
            <Component {...pageProps} />
          <Analytics />
      </NextUIProvider>

  );
}
export default MyApp;
