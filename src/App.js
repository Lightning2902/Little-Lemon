import "./styles/App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Header from "./components/Header";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Home from "./components/Home";
import About from "./components/About";
import Menu from "./components/Menu";
import OrderOnline from "./components/OrderOnline";
import Login from "./components/Login";
import BookingPage from "./components/BookingPage";
import ConfirmedBooking from './components/ConfirmedBooking'; 



function App() {
  return (
    <Router>
      <div className="App">
        {/* <header className="main-header">
          <Header /> */}
          <Nav />
        {/* </header> */}
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/booking-page" element={<BookingPage/>} />
            <Route path="/order-online" element={<OrderOnline />} />
            <Route path="/login" element={<Login />} />
            <Route path="/confirmed" element={<ConfirmedBooking />} />
          </Routes>

        {/* <Main /> */}

        <Footer />
      </div>
    </Router>
  );
}

export default App;

