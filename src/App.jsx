import { useState } from "react"
import { BrowserRouter as Router, Route , Routes } from "react-router-dom"
import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import LandingPage from "./pages/LandingPage"
import ResumeBuilder from "./pages/ResumeBuilder"
import JobOpening from "./pages/JobOpening"
import TrainingProgram from "./pages/TrainingProgram"
import Profile from "./pages/Profile"
import Error404 from "./components/Error404"


function App() {
  const [shownav, setshowNav] = useState(true)

  return (
    <>
      <Router>
          {shownav && <Navbar shownav={shownav} setshowNav={setshowNav} />}
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/home" element={<Home/>} />
            <Route path="/resume" element={<ResumeBuilder />} />
            <Route path="/job-opening/:id" element={<JobOpening />} />
            <Route path="/training-program/:id" element={<TrainingProgram />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="*" element={<Error404 />} />
          </Routes>
      </Router>
    </>
  )
}

export default App
