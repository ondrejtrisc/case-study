import React, { useState, useEffect } from 'react';
import './App.scss';

function App() {

  const [estatesData, setEstatesData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const apiURL = 'https://estate-comparison.codeboot.cz/list.php';
      const response = await fetch(apiURL);
      const data = await response.json();
      setEstatesData(data);
    };    
    fetchData();
  }, []);

  return (
    <div className="App">
      <header>
        <h1 className="main-heading">Estate Comparison</h1>
      </header>
      <hr className="horizontal-line" />
      <div className="stripe"></div>
    </div>
  );
}

export default App;
