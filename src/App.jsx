
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import About from "./components/About";
import FeaturedArticles from "./components/FeaturedArticles";
import FeaturedTutorials from "./components/FeaturedTutorials";
import Gallery from "./components/Gallery";
import Newsletter from "./components/Newsletter";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";
import NewPost from "./pages/NewPost.jsx";

import "./App.css";

function HomePage() {
  return (
    <>
      <Banner />
      <About />
      <FeaturedArticles />
      <FeaturedTutorials />
      <Gallery />
      <Newsletter />
      <Contact />
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/post" element={<NewPost />} />
        <Route path="*" element={<HomePage />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
