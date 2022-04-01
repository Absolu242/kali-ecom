import "../styles/home.styles.css";
import "../styles/globals.css";
import { Provider } from "react-redux";
import { store, persistor } from "../redux/store";
import NextNProgress from "nextjs-progressbar";
import { PersistGate } from "redux-persist/integration/react";

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NextNProgress color="#000" />
        <Component {...pageProps} />;
      </PersistGate>
    </Provider>
  );
}

export default MyApp;
