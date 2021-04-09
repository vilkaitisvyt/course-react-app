import React, {useState, useEffect} from 'react';
import FirstPage from './components/FirstPage';
import SecondPage from './components/SecondPage';
import AppContext from './AppContext';
import ThirdPage from './components/ThirdPage';


const App = () => {
  const[page, setPage] = useState(1);
  const[selectedCourse, setSelectedCourse] = useState(null);

  useEffect(() => selectedCourse ? setPage(2): setPage(1), [selectedCourse]);

  return (
    <AppContext.Provider value={{pages:[page, setPage], courses: [selectedCourse, setSelectedCourse]}}>
      {page === 1 && <FirstPage />}
      {page === 2 && <SecondPage />}
      {page === 3 && <ThirdPage />}
    </AppContext.Provider>
  );
};

export default App;

