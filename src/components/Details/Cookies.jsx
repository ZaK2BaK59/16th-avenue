import React from 'react';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';

export default function Cookies() {
  return (
    <>
      <Header />
      <main style={{ padding: '100px 20px' }}>
        <h1>Politique de cookies</h1>
        <p>
          Nous utilisons des cookies pour personnaliser le contenu, fournir des fonctionnalités liées aux réseaux sociaux et analyser notre trafic. 
          En poursuivant votre navigation, vous acceptez l’utilisation des cookies.
        </p>
        <p>
          Vous pouvez à tout moment modifier vos préférences dans les paramètres de votre navigateur.
        </p>
      </main>
      <Footer />
    </>
  );
}
