import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../src/components/Home";
import DashBoardViewDetails from "../src/components/DashBoardViewDetails";
import SignIn from "./SignIn/SignIn";
import SignUp from "./SignUp/SignUp";
import AdminDashboard from "./AdminDashboard";
import UserLanding from "./User-Landing/UserLanding";
import UsersList from "./components/UsersList";

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
        <Route
          exact
          path="/interventions/:interventionId"
          element={<DashBoardViewDetails />}
        ></Route>
        <Route
          exact
          path="/dashboard"
          element={<AdminDashboard user={user} />}
        />
        <Route exact path="/login" element={<SignIn onLogin={setUser} />} />
        <Route exact path="/signup" element={<SignUp onLogin={setUser} />} />
        <Route exact path="/user-landing" element={<UserLanding />} />
        <Route exact path="/users" element={<UsersList user={user} />} />
      </Routes>
    </div>
  );
}

export default App;
