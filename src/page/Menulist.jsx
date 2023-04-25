import React, { useContext } from 'react';
import DataContext from '../context/DataContext';

export default function Menulist() {
  const { data } = useContext(DataContext);
  const { ddd } = data;
  const filteredDonuts = ddd.filter((donut) => donut.category === 'FILLED');
  
  return (
    <div>
      {filteredDonuts.map((donut, index) => (
        <div key={index}>
          <li>{donut.name}</li>
          <li>{donut.detail}</li>
          <img style={{width: '200px'}} src={donut.image} alt={donut.name} />
          <li>{donut.price}</li>
          <br />
        </div>
      ))}
    </div>
  );
}
