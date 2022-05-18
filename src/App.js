import "./App.css";
import Home from "./frontend/pages/Home/Home";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import VideoListing from "./frontend/pages/VideoListing/VideoListing";
import Navbar from "./frontend/components/Navbar/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/videos' element={<VideoListing />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;
