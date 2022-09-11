import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Components/App/App';
import { BillProvider } from './Context/BillContext';

ReactDOM.render(<BillProvider><App /></BillProvider>, document.getElementById('root'));
