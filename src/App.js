//import './styles/main.css';
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
function App() {
  return (
    <div className='App'>
      <Router>
        <Routes>
          <Route path='/login' element={<AWSLogin/>} />
          <Route path='/' element={<NavLogin/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default (App);
