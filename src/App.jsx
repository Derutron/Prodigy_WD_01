// import Home from './Components/Home'
// import Navbar from './Components/Navbar'
// import Services from './Components/Services'
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


// const App = () => {
//   return (
//     <Router>
//     <Routes>

//       <Navbar />
     
//       <Route path="/Home" element={<Home />} />
//       <Route path="/Services" element={<Services/>} />
//       </Routes>
//     </Router>
//   )
// }

// export default App






import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import Services from './Components/Pages/Services';
import About from './Components/Pages/About';
import Testimonials from './Components/Pages/Testimonials';
import Contact from './Components/Pages/Contact';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/Services" element={<Services />} />
        <Route path="/About" element={<About/>} />
        <Route path="/Testimonials" element={<Testimonials/>} />
        <Route path="/Contact" element={<Contact/>} />
        {/* Add more routes as needed */}
      </Routes>
    </Router>
  );
};

export default App;
