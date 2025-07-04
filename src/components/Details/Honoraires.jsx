import React from 'react';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';

export default function Honoraires() {
  return (
    <>
      <Header />
      <main style={{ padding: '100px 20px' }}>
        <h1>Nos honoraires</h1>
        <p>
          Notre politique d’honoraires est transparente et compétitive :
        </p>
        <ul>
          <li>🏠 Vente immobilière : 5% TTC</li>
          <li>📍 Mandat exclusif : 4,5% TTC</li>
          <li>📊 Estimation de bien : gratuite</li>
        </ul>
        <p>
          Pour plus de détails, contactez directement notre équipe.
        </p>
      </main>
      <Footer />
    </>
  );
}
