import React, {
  useState,
  useEffect,
} from 'react';
import './dashboard.css';
import Card from './MedicalRecords/Card.jsx';
import data from './data.js';
import Popup from './Popup/Popup';
import Search from './Search/index.jsx';

export default function Dashboard() {
  const [medicalData, setMedicalData] = useState(
    []
  );
  const handleSearch = (term) => {
    if (term.length) {
      let searchTerm = term.toLowerCase();
      let searchResults = medicalData.filter(
        (record) =>
          record.Name.toLowerCase().startsWith(
            searchTerm
          )
      );
      console.log(searchResults);
      setMedicalData(searchResults);
    } else setMedicalData(data);
  };

  const addMedicalRecord = (data) => {
    setMedicalData([...medicalData, data]);
  };

  useEffect(() => {
    setMedicalData(data);
  }, []);

  return (
    <>
      <div className='align-buttons'>
        <Search handleSearch={handleSearch} />
        <Popup
          addMedicalRecord={addMedicalRecord}
        />
      </div>
      <main className='dashboard-page'>
        {medicalData.map((item, index) => (
          <Card key={index} record={item} />
        ))}
      </main>
    </>
  );
}
