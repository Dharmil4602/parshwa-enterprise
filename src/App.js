import './App.css';
import Body from './components/Body';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import About from './components/About';
import Product from './components/Product';
import Contact from './components/Contact';


function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route
            exact
            path="/"
            element={
              <div>
                <Body />
              </div>
            }
          />
          <Route
            exact
            path="/products"
            element={
              <div className="container">
                <Product />
              </div>
            }
          />
          <Route
            exact
            path="/about"
            element={
              <div className="container">
                <About />
              </div>
            }
          />
          <Route
            exact
            path="/contact"
            element={
              <div className="container">
                <Contact />
              </div>
            }
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
