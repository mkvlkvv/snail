import React, { useState } from 'react';
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
import ProfileReports from './ProfileReports.js';
import NewCard from './NewCard.js';
import NotFound from './NotFound.js';

const CARD_OF_PRODUCT = ({ onDataReceived }) => (
  <div>
    <ProductCard onDataReceived={onDataReceived}/>
    <ProductDetails onDataReceived={onDataReceived}/>
    <Rewiews onDataReceived={onDataReceived}/>
    <Remixes onDataReceived={onDataReceived}/>
    <SimilarModelCard onDataReceived={onDataReceived}/>
  </div>
);

const NEW_CARD = () => (
  <div>
    <NewCard />
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

const USER_PROFILE = ({ onDataReceived }) => (
  <div>
    <Profile />
    <ProfileWorks  onDataReceived={onDataReceived} />
  </div>
)

const USER_PROFILE_WORKS = () => ({ onDataReceived }) => (
  <div>
    <Profile />
    <ProfileWorks  onDataReceived={onDataReceived} />
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

const USER_PROFILE_REP = () => (
  <div>
    <Profile />
    <ProfileReports />
  </div>
)

const NOT_FOUND = () =>(
  <div>
    <NotFound />
  </div>
)

const App = () => {
  const [responseData, setResponseData] = useState(null);
  const onDataReceived = (data) => {
    console.log('Данные получены:', data);
  }
  const urls = {
    card: {
      path: '/',
      element: <CARD_OF_PRODUCT onDataReceived={onDataReceived}/>
    },
    profile: {
      path: '/profile',
      element: <USER_PROFILE onDataReceived={onDataReceived}/>
    },
    profile_collections: {
      path: '/profile/collection',
      element: <USER_PROFILE_COLLECTION />
    },
    profile_favourites: {
      path: '/profile/favourites',
      element: <USER_PROFILE_FAV />
    },
    profile_works: {
      path: '/profile/works',
      element: <USER_PROFILE_WORKS/>
    },
    profile_reports: {
      path: '/profile/reports',
      element: <USER_PROFILE_REP />
    },
    main_page: {
      path: '/snailweb',
      element: <MAIN_PAGE />
    },
    new_card: {
      path: '/new_card',
      element: <NEW_CARD />
    },
    not_found: {
      element: <NOT_FOUND />
    }

  };


  return (
    <Router>
      <div className='page'>
        <Header />
        <Routes>
          <Route path={urls.card.path} element={urls.card.element} />
          <Route path={urls.profile.path} element={urls.profile.element} />
          <Route path={urls.profile_collections.path} element={urls.profile_collections.element} />
          <Route path={urls.profile_favourites.path} element={urls.profile_favourites.element} />
          <Route path={urls.profile_works.path} element={urls.profile_works.element}/>
          <Route path={urls.profile_reports.path} element={urls.profile_reports.element} />
          <Route path={urls.main_page.path} element={urls.main_page.element} />
          <Route path={urls.new_card.path} element={urls.new_card.element}/>
          <Route path="*" element={urls.not_found.element} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};
export default App;