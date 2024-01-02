const {
  getAllPacientes,
} = require('../controllers/pacientesControllers');

const getPacientesHandlers = (req, res) => {
  try {
    const allPacientes = getAllPacientes();
    res.status(200).json(allPacientes);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

module.exports = {
  getPacientesHandlers,
}