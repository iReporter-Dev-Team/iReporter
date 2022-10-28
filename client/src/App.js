import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../src/components/Home";
import DashBoardViewDetails from "../src/components/DashBoardViewDetails";
import SignIn from "./SignIn/SignIn";
import SignUp from "./SignUp/SignUp";
import AdminDashboard from "./AdminDashboard";
import Profile from "./components/Profile/profile";
import UserLanding from "./User-Landing/UserLanding";
import UsersList from "./components/UsersList";
import NotFound from "./components/NotFound";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, []);

  return (
    <div className="row mt-3">
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        {user?.is_admin ? (<Route exact path="/interventions/:interventionId" element={<DashBoardViewDetails />}/>) : (<Route path="/*" element={<NotFound/>}/>)}
        {user?.is_admin ? (<Route exact path="/dashboard"element={<AdminDashboard user={user} />}/>) : (<Route path="/*" element={<NotFound/>}/>)}
        <Route exact path="/login" element={<SignIn onLogin={setUser} />} />
        <Route exact path="/get-started" element={<SignUp onLogin={setUser} />} />
        {user ? (<Route exact path="/user-landing" element={<UserLanding user={user}/>} />) : (<Route path="/*" element={<NotFound/>}/>)}
        {user?.is_admin ? (<Route exact path="/users" element={<UsersList user={user} />} />) : (<Route path="/*" element={<NotFound/>}/>)}
        {user ? (<Route exact path="/profile" element={<Profile user={user} />} />) : (<Route path="/*" element={<NotFound/>}/>)}
        <Route path="/*" element={<NotFound/>}/>
      </Routes>
    </div>
  );
}

export default App;
