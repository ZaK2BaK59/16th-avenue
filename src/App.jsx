// src/App.jsx
import React from 'react';
import './styles/global.scss';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Stats from './components/Stats/Stats';
import Story from './components/Story/Story';
import Services from './components/Services/Services';
import ExclusiveAccess from './components/ExclusiveAccess/ExclusiveAccess';
import OffMarketListing from './components/OffMarketListing/OffMarketListing';
import FeaturedProperties from './components/FeaturedProperties/FeaturedProperties';
import Commitment from './components/Commitment/Commitment';
import Commitment2 from './components/Commitment/Commitment2';
import ClientReviews from './components/ClientReviews/ClientReviews';
import Faq from './components/Faq/Faq';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Stats />
      <Story />
      <Services />
      <ExclusiveAccess />
      <OffMarketListing />
      <FeaturedProperties />
      <Commitment />
      <Commitment2/>
      <ClientReviews />
      <Faq />
      <Footer />

    </>
  );
}


export default App;
