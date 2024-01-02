const { Router } = require('express');

const pacientesRouter = require('./pacientesRouters')

const mainRouter = Router();

mainRouter.use('/pacientes', pacientesRouter);

module.exports = mainRouter;