const { createCard, updateCard, getCard } = require('../controllers/Card.controller');
const cardRouter = require('express').Router();

cardRouter.post('/', createCard);
cardRouter.get('/', getCard);
cardRouter.patch('/', updateCard);

module.exports = cardRouter;