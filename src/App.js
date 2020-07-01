import React, { useState, useEffect } from 'react';
import './App.scss';
import Preview from './Preview.js';
import Estate from './Estate.js';

function App() {

  const [estatesData, setEstatesData] = useState([]);
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

  console.log(estatesData);

  const previews = estatesData.map(estate => <Preview text={estate.name_extracted + ' ' + estate.locality}
                                                      imageURL={estate.images[0]}
                                                      key={'preview-' + estate.id}
                                              />
                                  );

  const leftEstate = estatesData[leftEstateIndex];
  const rightEstate = estatesData[rightEstateIndex];
  const estates = [
    (leftEstate === undefined) ? <></> : <Estate name={leftEstate.name}
                                                 price={leftEstate.prize_czk}
                                                 localicty={leftEstate.locality}
                                                 floor_area={leftEstate.building_area}
                                                 land_area={leftEstate.land_area}
                                                 company_logo={leftEstate.company_logo}
                                                 company_name={leftEstate.company_name}
                                                 key="left"
                                          />,
    (rightEstate === undefined) ? <></> : <Estate name={rightEstate.name}
                                                  price={rightEstate.prize_czk}
                                                  localicty={rightEstate.locality}
                                                  floor_area={rightEstate.building_area}
                                                  land_area={rightEstate.land_area}
                                                  company_logo={rightEstate.company_logo}
                                                  company_name={rightEstate.company_name}
                                                  key="right"
                                          />
  ];                     

  return (
    <div className="App">
      <header>
        <h1 className="main-heading">Estate Comparison</h1>
      </header>
      <hr className="horizontal-line" />
      <div className="stripe">{previews}</div>
      <div className="estates">
        {estates}
      </div>
    </div>
  );
}

export default App;
