const express = require('express');
const Pokemon = require('../models/pokemon');
const config = require('../config');
const axios = require('axios');

const router = express.Router();

router.get('/pokemon', async (req, res) => {
  const pokemon = await Pokemon.find().exec();
  res.status(200).json({ pokemon });
})

router.get('/pokemon/:id', async (req, res) => {
  const pokemon = await Pokemon.findById(req.params.id).exec();
  res.status(200).json({ pokemon });
})

router.get('/pokemonName', async (req, res) => {
  const response =  await axios.get(config.rng_url);
  const pokemonName = response.data[0];
  res.status(200).json({ pokemonName });
})

router.post('/pokemon', async (req, res) => {
  const { name, description, type1, type2, image, moves } = req.body;
  const newPokemon = { name, description, image, type1, type2, moves };
  const pokemon = await Pokemon.create(newPokemon);
  res.status(200).json({ pokemon });
})

module.exports = router;
