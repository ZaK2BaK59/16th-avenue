import React, { useState } from 'react'; // ✅ importer useState
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

import Popup2 from './components/Services/Popup2'; // ✅ importe ta popup
import Popup3 from './components/Services/Popup3'; // ✅ importe ta popup

function App() {
  const [popup, setPopup] = useState(null); // ✅ gère quelle popup est ouverte

  return (
    <>
      <Header onOpenPopup={setPopup} /> {/* ✅ passe la fonction au Header */}
      <main style={{ paddingTop: '100px' }}>
        <Hero />
        <Stats />
        <Story />

        <section id="acheter">
          <Services />
        </section>

        <section id="listing">
          <ExclusiveAccess />
        </section>

        <section id="offmarket">
          <OffMarketListing />
        </section>

        <section id="vendre">
          <FeaturedProperties />
        </section>

        <section id="estimer">
          {/* Optionnel */}
        </section>

        <Commitment />
        <Commitment2 />
        <ClientReviews />

        <section id="faq">
          <Faq />
        </section>

        <Footer />
      </main>

      {/* ✅ affiche la popup si demandée */}
      {popup === 'vendre' && <Popup2 onClose={() => setPopup(null)} />}
      {popup === 'contact' && <Popup3 onClose={() => setPopup(null)} />}
    </>
  );
}

export default App;
