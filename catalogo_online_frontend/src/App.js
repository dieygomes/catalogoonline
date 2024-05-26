import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Searchbox from './components/Searchbox/Searchbox';
import Banner from './components/Banner/Banner';
import CategoryList from './components/Categorylist/Categorylist';
import Footer from './components/Footer/Footer';
import CommerceDetails from './components/CommerceDetails/CommerceDetails';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route exact path="/" element={
            <>
              <Searchbox />
              <div className="banners">
                <Banner title="Banner Promocional 1" imageUrl="path/to/image1.jpg" />
                <Banner title="Banner Promocional 2" imageUrl="path/to/image2.jpg" />
                <Banner title="Banner Promocional 3" imageUrl="path/to/image3.jpg" />
                <Banner title="Banner Promocional 4" imageUrl="path/to/image4.jpg" />
                <Banner title="Banner Promocional 5" imageUrl="path/to/image5.jpg" />
                <Banner title="Banner Promocional 6" imageUrl="path/to/image6.jpg" />
              </div>
              <CategoryList />
            </>
          } />
          <Route path="/commerce/:id" element={<CommerceDetails />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
