import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Header.js';
import ProductCard from './ProductCard.js';
import ProductDetails from './ProductDetails';
import Rewiews from './Rewiews';
import SimilarModelCard from './SimilarModelCard';
import Remixes from './Remixes';
import Profile from './Profile';
import Footer from './Footer';
import ProfileWorks from './ProfileWorks';
import ProfileCollection from './ProfileCollection';
import ProfileFav from './ProfileFavourites';
import MainPageSlider from './MainPageSlider.js'
import MainPageTags from './MainPageTags.js'
import MainPageTop from './MainPageTop.js'
import MainPageNew from './MainPageNew.js';
import MainPageForYou from './MainPageForYou.js'
import MainPageAuthors from './MainPageAuthors.js';

const CARD_OF_PRODUCT = () => (
  <div>
    <ProductCard />
    <ProductDetails />
    <Rewiews />
    <Remixes />
    <SimilarModelCard />
  </div>
);

const MAIN_PAGE = () => (
  <div>
    <MainPageSlider />
    <MainPageTags />
    <MainPageTop />
    <MainPageNew />
    <MainPageAuthors />
    <MainPageForYou />
  </div>
)

const USER_PROFILE = () => (
  <div>
    <Profile />
    <ProfileWorks />
  </div>
)

const USER_PROFILE_WORKS = () => (
  <div>
    <Profile />
    <ProfileWorks />
  </div>
)

const USER_PROFILE_COLLECTION = () => (
  <div>
    <Profile />
    <ProfileCollection />
  </div>
)

const USER_PROFILE_FAV = () => (
  <div>
    <Profile />
    <ProfileFav />
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
          <Route path="/profile/collection" element={<USER_PROFILE_COLLECTION />} />
          <Route path="/profile/favourites" element={<USER_PROFILE_FAV />} />
          <Route path="/profile/works" element={<USER_PROFILE_WORKS />} />
          <Route path="/snailweb" element={<MAIN_PAGE />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};
export default App;