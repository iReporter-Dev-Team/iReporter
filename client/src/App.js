import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./HomePage";
import SignIn from "./SignIn/SignIn";
import SignUp from "./SignUp/SignUp";
import AdminDashboard from "./AdminDashboard";
function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch("/me") 
    .then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, []);

  return (
    <div>
      <Routes>
      <Route exact path="/" element={<HomePage />}/>
      <Route exact path="/dashboard" element={<AdminDashboard user={user}/>}/>
      <Route exact path='/login' element={<SignIn onLogin={setUser}/>}/>
      <Route exact path="/signup" element={<SignUp onLogin={setUser}/>}/>
      </Routes>
    </div>
  );
}

export default App;
