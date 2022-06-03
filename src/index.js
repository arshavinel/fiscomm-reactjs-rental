import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
document.title = 'Apartaments Rental';

root.render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>
);
