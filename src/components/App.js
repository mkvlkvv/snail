import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Header';
import ProductCard from './ProductCard';
import ProductDetails from '../ProductDetails';
import Rewiews from '../Rewiews';
import SimilarModelCard from '../SimilarModelCard';
import Remixes from '../Remixes';
import Profile from './Profile';
import Footer from './Footer';
import ProfileWorks from './ProfileWorks';

const CARD_OF_PRODUCT = () => (
  <div>
    <ProductCard />
    <ProductDetails />
    <Rewiews />
    <Remixes />
    <SimilarModelCard />
  </div>
);

const USER_PROFILE = () => (
  <div>
    <Profile />
    <ProfileWorks />
  </div>
)

const App = () => {
  return (
    <Router>
      <div className='page'>
        <Header />
        <Routes>
          <Route path="/" element={<CARD_OF_PRODUCT />} />
          <Route path="/profile" element={<USER_PROFILE />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};
export default App;