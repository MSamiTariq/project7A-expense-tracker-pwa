import React from 'react';
import './App.css';
import Header from './components/Header';
import { Balance } from './components/Balance';
import { AccountSummary } from './components/AccountSummary';
import { TransactionHistory } from './components/TransactionHistory';
import {AddTransaction} from './components/AddTransaction';
import firebase from './firebase'
// Import Provider
import { GlobalProvider } from './context/GlobalState';

function App() {
  const messaging = firebase.messaging();
  Notification.requestPermission().then((permission) => {
    if(permission === 'granted'){
      return messaging.getToken();
    }
  }).then((token: any) => {
    console.log(token);
  })
  return (
    <GlobalProvider>
      <Header />
      <div className="container">
        <Balance />
        <AccountSummary />
        <TransactionHistory />
        <AddTransaction />
      </div>
      </GlobalProvider>
);
}

export default App;