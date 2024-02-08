import { ApiProvider } from "@reduxjs/toolkit/query/react";
import { store } from "./src/store/store";
import { Navigator } from "./Navigator";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { PaperProvider } from "react-native-paper";
import { Provider } from 'react-redux'

export default function App() {
  return (
    <Provider store={store}>
      <PaperProvider>
        <SafeAreaProvider>
          <Navigator />
        </SafeAreaProvider>
      </PaperProvider>
    </Provider>
  );
}