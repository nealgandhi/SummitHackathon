import Landingpage from "./components/Landingpage";
import React from "react";
import "./styles/main.css";
import "@aws-amplify/ui-react/styles.css";
import AWSLogin from "./components/AWSLogin.js";
import Footer from "./components/Footer";
//Amplify.configure(awsconfig);
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <div>
        <Router>
          <Routes>
            {/* <route path='/dashboard/:userID' */}
            <Route path="/login" element={<AWSLogin />}></Route>
            <Route path="/" element={<Landingpage />}></Route>
          </Routes>
        </Router>
        <Footer />
      </div>
    </>
  );
}

export default App;
