import './App.css';
import {Routes, Route} from "react-router-dom";
import UserLanding  from './User-Landing/UserLanding';
function App() {
  return (
    <div className="main">
     {/* <Routes>
        <Route exact path='/userlanding' element={<UserLanding />}/>
      </Routes> */}

      <UserLanding />
    </div>
  );
}

export default App;
