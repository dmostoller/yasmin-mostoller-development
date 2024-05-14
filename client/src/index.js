import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import { UserProvider } from "./context/user";
import { AdminProvider } from "./context/admin";
import { DeviceProvider } from './context/device';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Router>
        <UserProvider>
            <AdminProvider>
                <DeviceProvider>
                    <App />
                </DeviceProvider>
            </AdminProvider>
        </UserProvider>
    </Router>
);

