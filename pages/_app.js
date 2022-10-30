

// 1. import `NextUIProvider` component
import { NextUIProvider, createTheme } from '@nextui-org/react';
import { Analytics } from '@vercel/analytics/react';
import Layout from '../components/layout'
const darkTheme = createTheme({
    type: 'dark',
})

function MyApp({ Component, pageProps }) {
  return (
      // 2. Use at the root of your app
      <NextUIProvider theme={darkTheme}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
          <Analytics />
      </NextUIProvider>

  );
}
export default MyApp;
