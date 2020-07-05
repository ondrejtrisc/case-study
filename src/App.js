import React, { useState, useEffect } from 'react';
import './App.scss';
import Preview from './Preview.js';
import Estate from './Estate.js';

function App() {

  const [estatesData, setEstatesData] = useState([]);
  const [variableEstate, setVariableEstate] = useState('right');  //which side of the comparison changes when a different preview is clicked
  const [leftEstateIndex, setLeftEstateIndex] = useState(0);
  const [rightEstateIndex, setRightEstateIndex] = useState(1);

  //fetches the data about the estates from an API
  useEffect(() => {
    const fetchData = async () => {
      const apiURL = 'https://estate-comparison.codeboot.cz/list.php';
      const response = await fetch(apiURL);
      const data = await response.json();
      setEstatesData(data);
    };    
    fetchData();
  }, []);

  //when a preview of an estate is clicked the estate gets displayed on the appropriate side of the comparison
  const handleClick = index => {
    switch (variableEstate) {
      case 'left':
        if (index !== rightEstateIndex) {
          setLeftEstateIndex(index);
        }
      break;
      default:
        if (index !== leftEstateIndex) {
          setRightEstateIndex(index);
        }
    }
  };

  //displays the previews for the first 10 estates
  const previews = estatesData.slice(0, 10).map((estate, index) => {
    return(
      <Preview text={estate.name_extracted + ' ' + estate.locality}
               image={estate.images[0]}
               selection={(index === leftEstateIndex) ? 'A' :
                         ((index === rightEstateIndex) ? 'B' : '')}
               handleClick={() => {handleClick(index)}}
               key={'preview-' + estate.id}
      />
    );
  });

  //displays the 2 selected estates (provided the data has aleady been fetched)
  const selectedEstatesData = [estatesData[leftEstateIndex], estatesData[rightEstateIndex]];
  const estates = selectedEstatesData.map((estate, index) => {
    return (
      (estate === undefined) ? <></> : <Estate image={estate.images[0]}
                                               name={estate.name}
                                               price={estate.prize_czk}
                                               priceComparison={(estate.prize_czk <= selectedEstatesData[1 - index].prize_czk) ? 'better' : 'worse'}
                                               locality={estate.locality}
                                               floorArea={estate.building_area}
                                               floorAreaComparison={(Number(estate.building_area) >= Number(selectedEstatesData[1 - index].building_area)) ? 'better' : 'worse'}
                                               landArea={estate.land_area}
                                               landAreaComparison={(Number(estate.land_area) >= Number(selectedEstatesData[1 - index].land_area)) ? 'better' : 'worse'}
                                               companyLogo={estate.company_logo}
                                               companyName={estate.company_name}
                                               handleClick={() => {setVariableEstate((index === 0) ? 'left' : 'right')}}
                                               key={(index === 0) ? 'left' : 'right'}
                                        />
    );
  });
    
  return (
    <div className="App">
      <header>
        <h1>Estate Comparison</h1>
      </header>
      <hr />
      <div className="previews">{previews}</div>
      <div className="estates">{estates}</div>
    </div>
  );
}

export default App;
