import Landingpage from './components/Landingpage';
import React from 'react';
import './styles/main.css';
import Dashboard from './components/Dashboard';
import Header from './components/Header';
import Footer from './components/Footer';
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
    </>
  );
}

export default App;
