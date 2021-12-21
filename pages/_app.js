import "../styles/home.styles.css";
import "../styles/globals.css";
import { Provider } from "react-redux";
import store from "../redux/store";
import NextNProgress from "nextjs-progressbar";

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <NextNProgress color="#000" />
      <Component {...pageProps} />;
    </Provider>
  );
}

export default MyApp;
