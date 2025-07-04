const express = require('express');
const cors = require('cors');
const sendEmail = require('./smtp');
require('dotenv').config();

const app = express();
const PORT = 3001;
const path = require('path');

app.use('/images', express.static(path.join(__dirname, '../../public')));


app.use(cors());
app.use(express.json());

app.post('/api/send-email', async (req, res) => {
    const { name, email, message, subject } = req.body;

    const result = await sendEmail({
        to: process.env.EMAIL_USER,
        subject: subject || 'Formulaire site web',
        text: `Nom: ${name}\nEmail: ${email}\nMessage:\n${message}`,
      });

  if (result.success) {
    res.status(200).json({ message: 'Email envoyé' });
  } else {
    res.status(500).json({ error: result.error });
  }
});

app.get('/api/featured-properties', (req, res) => {
    const properties = [
      {
        id: 1,
        image: '/images/Maison_2.jpg',
        surface: '200m²',
        terrain: '500m²',
        chambres: 4,
        sdb: 2
      },
      {
        id: 2,
        image: '/images/Maisonk.png',
        surface: '180m²',
        terrain: '450m²',
        chambres: 3,
        sdb: 1
      },
      {
        id: 3,
        image: '/images/Villa Piscine.png',
        surface: '250m²',
        terrain: '700m²',
        chambres: 5,
        sdb: 3
      }
    ];
    res.json(properties);
  });
  


app.listen(PORT, () => {
  console.log(`Serveur mail lancé sur http://localhost:${PORT}`);
});
