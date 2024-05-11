import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { connect } from "react-redux";
import { selectSavedCardId } from "./selectors.js";

import { Provider } from "react-redux";
import store from "./store/store.js";

import Header from "./Page/Header.js";
import ProductCard from "./Card/ProductCard.js";
import ProductDetails from "./Card/ProductDetails.js";
import Rewiews from "./Card/Rewiews.js";
import SimilarModelCard from "./Card/SimilarModelCard.js";
import Remixes from "./Card/Remixes.js";
import Profile from "./Profile/Profile.js";
import Footer from "./Page/Footer.js";
import ProfileWorks from "./Profile/ProfileWorks.js";
import ProfileCollection from "./Profile/ProfileCollection.js";
import ProfileFav from "./Profile/ProfileFavourites.js";
import MainPageSlider from "./MainPage/MainPageSlider.js";
import MainPageTags from "./MainPage/MainPageTags.js";
import MainPageTop from "./MainPage/MainPageTop.js";
import MainPageNew from "./MainPage/MainPageNew.js";
import MainPageForYou from "./MainPage/MainPageForYou.js";
import MainPageAuthors from "./MainPage/MainPageAuthors.js";
import ProfileReports from "./Profile/ProfileReports.js";
import NewCard from "./NewCard/NewCard.js";
import NotFound from "./Page/NotFound.js";

const CARD_OF_PRODUCT = () => (
  <div>
    <ProductCard />
    <ProductDetails />
    <Rewiews />
    <Remixes />
    <SimilarModelCard />
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
);

const USER_PROFILE = ({ onDataReceived, onClickCard }) => (
  <div>
    <Profile />
    <ProfileWorks onDataReceived={onDataReceived} onClick={onClickCard} />
  </div>
);

const USER_PROFILE_WORKS =
  () =>
  ({ onDataReceived }) =>
    (
      <div>
        <Profile />
        <ProfileWorks onDataReceived={onDataReceived} />
      </div>
    );

const USER_PROFILE_COLLECTION = () => (
  <div>
    <Profile />
    <ProfileCollection />
  </div>
);

const USER_PROFILE_FAV = () => (
  <div>
    <Profile />
    <ProfileFav />
  </div>
);

const USER_PROFILE_REP = () => (
  <div>
    <Profile />
    <ProfileReports />
  </div>
);

const NOT_FOUND = () => (
  <div>
    <NotFound />
  </div>
);

const App = ({ savedCardId }) => {
  const onDataReceived = (data) => {
    console.log("Данные получены:", data);
  };
  const [cardPath, setCardPath] = useState(null);
  const [cardId, setCardId] = useState(null);

  useEffect(() => {
    console.log('savedCardId:', savedCardId);
    if (typeof savedCardId === 'number' && !isNaN(savedCardId)) {
      setCardId(savedCardId);
    }
  }, [savedCardId]);

  const urls = {
    profile: {
      path: "/profile",
      element: <USER_PROFILE onDataReceived={onDataReceived} />,
    },
    profile_collections: {
      path: "/profile/collection",
      element: <USER_PROFILE_COLLECTION />,
    },
    profile_favourites: {
      path: "/profile/favourites",
      element: <USER_PROFILE_FAV />,
    },
    profile_works: {
      path: "/profile/works",
      element: <USER_PROFILE_WORKS />,
    },
    profile_reports: {
      path: "/profile/reports",
      element: <USER_PROFILE_REP />,
    },
    main_page: {
      path: "/snailweb",
      element: <MAIN_PAGE />,
    },
    new_card:{
      path: "/new_card",
      element: <NEW_CARD />,
    },
    not_found: {
      element: <NOT_FOUND />,
    },
  };

  return (
    <Provider store={store}>
    <Router>
      <div className="page">
        <Header />
        <Routes>
          {Object.entries(urls).map(([key, { path, element }]) => (
            <Route key={key} path={path} element={element} />
          ))}
          <Route path="/card/:id" element={<CARD_OF_PRODUCT />} />
          <Route path="*" element={<NOT_FOUND />} />
        </Routes>
        <Footer />
      </div>
    </Router>
    </Provider>
  );
};

const mapStateToProps = (state) => {
  console.log(state.savedCardId);
  return {
    savedCardId: selectSavedCardId(state),
  };
};

export default connect(mapStateToProps)(App);
