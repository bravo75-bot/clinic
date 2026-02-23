const express = require('express');
const { PrismaClient } = require('@prisma/client');
const cors = require('cors');
const { z } = require('zod');
require('dotenv').config();

const app = express();
const prisma = new PrismaClient();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Booking validation schema
const bookingSchema = z.object({
  name: z.string().min(2, "Le nom est trop court"),
  phone: z.string().min(8, "Numéro de téléphone invalide"),
  service: z.string().min(1, "Veuillez choisir un service"),
  date: z.string().min(1, "La date est requise"),
});

// Routes
app.post('/api/bookings', async (req, res) => {
  try {
    const validatedData = bookingSchema.parse(req.body);

    const newBooking = await prisma.booking.create({
      data: {
        ...validatedData,
        status: 'PENDING'
      }
    });

    console.log('Nouveau rendez-vous enregistré:', newBooking);
    res.status(201).json({
      success: true,
      message: 'Rendez-vous enregistré avec succès',
      booking: newBooking
    });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return res.status(400).json({
        success: false,
        message: 'Données invalides',
        errors: error.errors
      });
    }
    console.error('Erreur lors de la création du rendez-vous:', error);
    res.status(500).json({
      success: false,
      message: 'Erreur interne du serveur'
    });
  }
});

app.get('/api/test', (req, res) => {
  res.json({ message: 'Le serveur EL RAPHA est opérationnel' });
});

// Start server
app.listen(PORT, () => {
  console.log(`Serveur EL RAPHA démarré sur http://localhost:${PORT}`);
});
