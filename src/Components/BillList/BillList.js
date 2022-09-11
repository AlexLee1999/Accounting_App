import React, { useContext } from 'react';
import './style.css';
import { BillContext } from '../../Context/BillContext';

const BillList = () => {

  const { bills, setEditModeEnabled } = useContext(BillContext);

  return (
    <div className='bill-list-container'>
      <button className='edit-mode-btn' onClick={() => setEditModeEnabled(true)}>Edit</button>
      {
        bills.map((bill, index) => {
          return(
            <div key={index} className='bill-list-row'>
              <div className='bill-list-row-content'>
                {index + 1}. {bill.date}  ({bill.type}) {bill.title} - ${bill.monthlyCost} 
              </div>
            </div>
          );
        })
      }
    </div>
  );
};

export default BillList;