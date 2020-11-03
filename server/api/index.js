const express = require('express');

const router = express.Router();

router.get('/pokemon', (req, res) => {
  const pokemon = [
    {
      name: 'Pikachu',
      description: 'pika :O',
      type1: 'Electric',
      type2: null,
      image: 'https://en.meming.world/images/en/2/2c/Surprised_Pikachu_HD.jpg',
      moves: [
        {
          name: 'Scratch',
          power: 100,
          type: 'Normal'
        },
        {
          name: 'Bolt Strike',
          power: 5,
          type: 'Electric'
        }
      ]
    },
    {
      name: 'Snorlax',
      description: 'moo',
      type1: 'Normal',
      type2: null,
      image: '',
      moves: [
        {
          name: 'Extreme Speed',
          power: 80,
          type: 'Normal'
        },
        {
          name: 'Yawn',
          power: 100,
          type: 'Ghost'
        }
      ]
    },
  ];

  res.status(200).json({ pokemon });
});

router.post('/pokemon', async (req, res) => {
  const { pokemon } = req.body;
  const { name, description, type1, type2, image, moves } = pokemon;
  const hasMissingFields = !name || !description || !type1 || !image || !moves;
  const hasMoreThanFourMoves = moves && moves.length > 4;
  if(hasMissingFields || hasMoreThanFourMoves) {
    res.status(400).json({ error: 'Invalid input' });
  }
  const punchMoves = moves.filter((move) => move.name.includes('Punch'));
  res.status(200).json({ punchMoves });
})

module.exports = router;
