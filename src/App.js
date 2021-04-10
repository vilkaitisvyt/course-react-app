import React from 'react';
import FirstPage from './components/FirstPage';
import SecondPage from './components/SecondPage';
import { AppContextProvider } from './AppContext';
import ThirdPage from './components/ThirdPage';
import { Switch, Route } from 'react-router-dom';
import Header from './components/Header';


const App = () => {  

  return (
    <AppContextProvider >
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
};

export default App;

