import React from "react";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import rootReducer from "./store/rootReducer";
import rootSaga from "./store/rootSaga";
import HomePage from "./pages/HomePage";
import { Center, Container } from "./components/styled/Container";
const sagaMiddleware = createSagaMiddleware();
const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);

const App: React.FC = () => {
  return (
    <Center>
      <Container>
        <Provider store={store}>
          <HomePage />
        </Provider>
      </Container>
    </Center>
  );
};

export default App;
