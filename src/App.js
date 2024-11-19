

// import React from 'react';
// import SignupForm from './components/signup';
// import Home from './components/Home';
// function App() {
//    return (
//       <div className="App">
//          <Home/>
//          <SignupForm />
//       </div>
//    );
// }

// export default App;




import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import SignupForm from "./components/signup";
import Front from "./components/front";

function App() {
   return (
      <Router>
         <div className="App">
            <Front/>
            <Routes>
               <Route path="/" element={<Home />} />
               <Route path="/signup" element={<SignupForm />} />
            </Routes>
         </div>
      </Router>
   );
}

export default App;
