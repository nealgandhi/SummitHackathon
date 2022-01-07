import Landingpage from './components/Landingpage';
import React from 'react';
import './styles/main.css';
import Dashboard from './components/Dashboard';
import Header from './components/Header';
import Footer from './components/Footer';
import CategoryList from './components/CategoryList'
import Login from './components/Login.js';
import Amplify from 'aws-amplify';
import awsconfig from './aws-exports';
import awsExports from "./aws-exports";
import { AmplifySignOut, withAuthenticator } from '@aws-amplify/ui-react'
import '@aws-amplify/ui-react/styles.css';
import AWSLogin from './components/AWSLogin.js'
import NavLogin from './components/NavLogin.js'
//Amplify.configure(awsconfig)
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CategoryList from './components/CategoryList';

function App() {
  return (
    <>
      <div>
        <Landingpage />
      </div>
      <Header />
      <div class='h-screen mr-8 ml-8'>
        <Dashboard />
      </div>
      <Footer />

      <div className='App'>
      <Router>
        <Routes>
          <Route path='/' element={<AWSLogin/>} />
          <Route path='/' element={<NavLogin/>} />
        </Routes>
      </Router>
    </div>
    </>
  );
}

export default App;
