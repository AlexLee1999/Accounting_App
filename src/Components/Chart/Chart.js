import React, { useContext } from 'react';
import './style.css';
import { BillContext } from '../../Context/BillContext';

const Chart = () => {

  const { bills } = useContext(BillContext);
  const calculate = (bills) => {
    bills.map((bill) => {
        
    });
  }
  return (  
    <div>
        <div>Summary</div>
        <div>
            
        </div>
    </div>
  );
};

export default Chart;