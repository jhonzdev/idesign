import React from 'react';
import Home from './pages';
import { BrowserRouter as Router } from 'react-router-dom';
import MessengerCustomerChat from 'react-messenger-customer-chat';
import './App.css';

function App() {
  return (
    <Router>
      <Home />
      <MessengerCustomerChat pageId="2062396127416630" appId="422423462228253" />
    </Router>
  );
}

export default App;
