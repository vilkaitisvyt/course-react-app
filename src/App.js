import React from "react";
import { Switch, Route } from "react-router-dom";
import FirstPage from "./components/FirstPage";
import SecondPage from "./components/SecondPage";
import { AppContextProvider } from "./AppContext";
import ThirdPage from "./components/ThirdPage";
import Header from "./components/Header";
import ScrollToTop from "./components/ScrollToTop";

const App = () => (
  <AppContextProvider>
    <ScrollToTop />
    <Header />
    <Switch>
      <Route exact path="/">
        <FirstPage />
      </Route>
      <Route path="/course">
        <SecondPage />
      </Route>
      <Route path="/congratulations">
        <ThirdPage />
      </Route>
    </Switch>
  </AppContextProvider>
);
export default App;
