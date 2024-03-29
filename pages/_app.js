// 1. import `NextUIProvider` component
import { NextUIProvider, createTheme } from "@nextui-org/react";
import { Analytics } from "@vercel/analytics/react";
import Layout from "../components/layout";
import NavBar from "../components/navbar";
import '../styles/style.css'
import Footer from "../components/footer";

const darkTheme = createTheme({
  type: "dark",
});

function MyApp({ Component, pageProps }) {
  return (
    // 2. Use at the root of your app {/*>*/}
    <NextUIProvider theme={darkTheme}>
      <NavBar />
      <Component {...pageProps} />
        <Footer />
      <Analytics />
    </NextUIProvider>
  );
}
export default MyApp;
