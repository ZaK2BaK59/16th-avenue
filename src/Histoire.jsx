// src/Histoire.jsx
import React from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import './styles/global.scss'; // Si besoin pour appliquer les styles globaux

export default function Histoire() {
  return (
    <>
      <Header />
      <main style={{ padding: '120px 2rem 60px', maxWidth: '900px', margin: '0 auto', lineHeight: '1.8' }}>
        <h1 style={{ fontSize: '2.5rem', marginBottom: '2rem' }}>Notre Histoire</h1>

        <p>L’immobilier n’a jamais été, pour nous, une simple affaire de transactions. C’est une aventure humaine, faite de rencontres, d’opportunités et d’engagements.</p>
        <p>Depuis plus de 10 ans, nous avons accompagné plus de 1 600 projets immobiliers et cumulé plus de 350 millions d’euros de volume de ventes.</p>
        <p>Mais derrière ces chiffres, il y a une vision : celle d’un immobilier plus humain, plus juste et plus stratégique, où chaque projet mérite une approche unique et sur-mesure.</p>

        <h2>Une vision différente dès le départ</h2>
        <p>Issus d’univers professionnels distincts, nous avons construit notre expertise en bousculant les codes. Florian, avec son Master II en finance de marché, aborde l’immobilier avec une vision analytique et stratégique.</p>
        <p>En 2012, il intègre Century 21 Albert 1er à Antibes. Rapidement récompensé, il devient Centurion en 2013 et figure parmi les meilleurs conseillers de France.</p>

        <h2>Construire notre propre modèle</h2>
        <p>En 2015, nous devenons associés de l’agence ERA Vision à Antibes et lançons HumanAquilinoGroup. Très vite, l’agence devient la meilleure de France en 2016 et 2017.</p>
        <p>En 2018, nous créons Keller Williams Palmes d’Or, un véritable incubateur immobilier structuré autour de l’excellence, du coaching et d’une stratégie de croissance.</p>

        <h2>Un engagement qui change une carrière</h2>
        <p>Marie-Aude entreprend des études d’infirmière et découvre l’association ALISON. Elle s’investit à fond, crée l’événement national "Le Don Dans Le Sang" et devient Ambassadrice Culture Keller Williams France.</p>

        <h2>16th Avenue : une évidence, une nouvelle ère</h2>
        <p>En 2023, nous vendons Keller Williams Palmes d’Or pour créer une agence indépendante, agile, digitale : 16th Avenue.</p>
        <p>Nous accompagnons nos clients avec passion, stratégie et rigueur. Chaque projet est unique. Chaque rencontre est une opportunité de bâtir ensemble une histoire de confiance.</p>

        <h3>Vous envisagez un projet immobilier ?</h3>
        <p>Parlons-en, et écrivons ensemble la suite de votre histoire.</p>
      </main>
      <Footer />
    </>
  );
}
