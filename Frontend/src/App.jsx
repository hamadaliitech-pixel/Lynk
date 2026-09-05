import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Profile from "./Pages/Profile";
import Lynk_Creation_Form from "./Pages/Lynk_Creation_Form";
const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Lynk_Creation_Form />} />
          <Route path="/Profile" element={<Profile />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App