import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import CardSec from "./components/CardSec";
import FIvesec from "./components/FIvesec";
import Footer from "./components/Footer";
import HeroSec from "./components/HeroSec";
import Lastsec from "./components/Lastsec";
import Loading from "./components/Loading";
import Secondsec from "./components/SecondSec";
import ThirdSec from "./components/ThirdSec";
import Foursec from "./components/foursec";

function App() {
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    // Simulate a network request
    setTimeout(() => setLoading(false), 1000);
  }, []);

  return (
    <div className="App">
      {loading ? (
        <Loading />
      ) : (
        <Router>
          <Routes>
          <Route path="/" element={<Home />} /> 
          <Route path="/card" element={<CardSec />} /> 
          <Route path="/five" element={<FIvesec />} /> 
          <Route path="/footer" element={<Footer />} /> 
          <Route path="/hero" element={<HeroSec />} />
          <Route path="/second" element={<Secondsec/>} />
           <Route path="/last" element={<Lastsec />} />
            <Route path="/loading" element={<Loading />} /> 
             <Route path="/third" element={<ThirdSec />} />
              <Route path="/four" element={<Foursec />} />
          </Routes>
        </Router>
      )}
    </div>
  );
}

export default App;
