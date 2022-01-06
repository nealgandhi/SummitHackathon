import React from 'react';
import './styles/main.css';
import Dashboard from './components/Dashboard';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Header />
      <div class="h-screen m-8">
        <Dashboard />
      </div>
      <Footer />
    </>
  );
}

export default App;
