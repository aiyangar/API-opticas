const { Router } = require('express');

const pacientesRouter = Router();

const {
  getPacientesHandlers,
} = require('../handlers/pacientesHandlers');

pacientesRouter.get('/', getPacientesHandlers);

module.exports = pacientesRouter;