import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/layout/NavBar";
import Dashboard from "./components/dashboard/Dashboard";
import ChallengeDetails from "./components/challenges/ChallengeDetails";
import Login from "./components/auth/Login";
import CreateChallenge from "./components/challenges/CreateChallenge";
import ChallengeContextProvider from "./contexts/ChallengeContextProvider";
import UserContextProvider from "./contexts/UserContextProvider";
import MyChallenges from "./components/challenges/MyChallenges";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <ChallengeContextProvider>
          <UserContextProvider>
            <NavBar />
            <Routes>
              <Route path="/" element={<Dashboard />} index />
              <Route path="/challenge/:id" element={<ChallengeDetails />} />
              <Route path="/create" element={<CreateChallenge />} />
              <Route path="/myChallenges" element={<MyChallenges />} />
              <Route path="/login" element={<Login />} />
            </Routes>
          </UserContextProvider>
        </ChallengeContextProvider>
      </div>
    </BrowserRouter>
  );
}

export default App;
