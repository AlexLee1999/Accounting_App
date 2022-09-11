import React, { useContext } from 'react';
import './App.css';
import AddBill from '../AddBill/AddBill';
import { BillContext } from '../../Context/BillContext';
import BillList from '../BillList/BillList';
import BillTotal from '../BillTotal/BillTotal';
import EditBills from '../EditBills/EditBills';
import Chart from '../Chart/Chart';

const App = () => {

  const { editModeEnabled } = useContext(BillContext);

  return (
    <div className='bills-container'>
      {
        editModeEnabled ? <EditBills /> : <><div><AddBill /></div> <div><BillTotal /></div><div><BillList /><Chart/></div></>
      }
    </div>
  );
}

export default App;
