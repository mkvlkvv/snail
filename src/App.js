import React from 'react';
import Header from './Header';
import ProductCard from './ProductCard';
import ProductDetails from './ProductDetails';
import Rewiews from './Rewiews';
import SimilarModelCard from './SimilarModelCard';

const App = () => {
  return (
    <div>
      <Header />
      <ProductCard />
      <ProductDetails />
      <Rewiews />
      <SimilarModelCard />
    </div>
  );
};

export default App;

