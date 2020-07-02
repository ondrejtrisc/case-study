import React, { useState, useEffect } from 'react';
import './App.scss';
import Preview from './Preview.js';
import Estate from './Estate.js';

function App() {

  const [estatesData, setEstatesData] = useState([]);
  const [selectedEstate, setSelectedEstate] = useState('right');
  const [leftEstateIndex, setLeftEstateIndex] = useState(0);
  const [rightEstateIndex, setRightEstateIndex] = useState(1);

  useEffect(() => {
    const fetchData = async () => {
      const apiURL = 'https://estate-comparison.codeboot.cz/list.php';
      const response = await fetch(apiURL);
      const data = await response.json();
      setEstatesData(data);
    };    
    fetchData();
  }, []);

  const handleClick = index => {
    switch (selectedEstate) {
      case 'left':
        setLeftEstateIndex(index);
      break;
      case 'right':
        setRightEstateIndex(index);
      break;
    }
  };

  const previews = estatesData.slice(0, 10).map((estate, index) => <Preview text={estate.name_extracted + ' ' + estate.locality}
                                                                            image={estate.images[0]}
                                                                            handleClick={() => {handleClick(index)}}
                                                                            key={'preview-' + estate.id}
                                                                   />
                                                );

  const leftEstate = estatesData[leftEstateIndex];
  const rightEstate = estatesData[rightEstateIndex];
  const estates = [
    (leftEstate === undefined) ? <></> : <Estate image={leftEstate.images[0]}
                                                 name={leftEstate.name}
                                                 price={leftEstate.prize_czk}
                                                 localicty={leftEstate.locality}
                                                 floorArea={leftEstate.building_area}
                                                 landArea={leftEstate.land_area}
                                                 companyLogo={leftEstate.company_logo}
                                                 companyName={leftEstate.company_name}
                                                 handleClick={() => {setSelectedEstate('left')}}
                                                 key="left"
                                          />,
    (rightEstate === undefined) ? <></> : <Estate image={rightEstate.images[0]}
                                                  name={rightEstate.name}
                                                  price={rightEstate.prize_czk}
                                                  localicty={rightEstate.locality}
                                                  floorArea={rightEstate.building_area}
                                                  landArea={rightEstate.land_area}
                                                  companyLogo={rightEstate.company_logo}
                                                  companyName={rightEstate.company_name}
                                                  handleClick={() => {setSelectedEstate('right')}}
                                                  key="right"
                                          />
  ];                     

  return (
    <div className="App">
      <header>
        <h1 className="main-heading">Estate Comparison</h1>
      </header>
      <hr className="horizontal-line" />
      <div className="preview-stripe">{previews}</div>
      <div className="estates">{estates}</div>
    </div>
  );
}

export default App;
