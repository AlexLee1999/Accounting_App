import React, { useContext } from 'react';
import './style.css';
import { BillContext } from '../../Context/BillContext';

const EditBills = () => {

  const { bills, setEditModeEnabled, editBill, deleteBill } = useContext(BillContext);

  return (
    <div className='edit-bill-container'>
      <button className='edit-mode-done-btn' onClick={() => setEditModeEnabled(false)}>
        Done
      </button>
      {
        bills.map((bill, billIndex) => {
          return(
            <div key={billIndex} className='edit-bill-row'>
              <div className='edit-bill-row-content'>
                <div className='edit-bill-title'>{bill.title}</div>
                <div className='edit-bill-title'>Edit Amount</div>
                <input className='edit-bill-cost-input'
                  type='number'
                  value={bill.monthlyCost}
                  onChange={(e) => editBill({
                    title: bill.title,
                    enabled: bill.enabled,
                    monthlyCost: e.target.value,
                    type: bill.type,
                    date:bill.date
                  })}></input>
                  <div className='edit-bill-title'>Edit Type</div>
                  <input className='edit-bill-cost-input'
                  type='text'
                  value={bill.type}
                  onChange={(e) => editBill({
                    title: bill.title,
                    enabled: bill.enabled,
                    monthlyCost: bill.monthlyCost,
                    type: e.target.value,
                    date:bill.date
                  })}></input>
                  <button onClick={() => deleteBill(bill)} className='delete-button'>DELETE</button>
              </div>
              <hr></hr>
            </div>
          );
        })
      }
    </div>
  );
};

export default EditBills;