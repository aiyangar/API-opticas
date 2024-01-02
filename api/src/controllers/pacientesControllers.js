const { Paciente } = require('../db');
const { Sequelize } = require('sequelize');

const getAllPacientes = async () => {
  return 'Estoy en el Endpoint de pacientes';
}

module.exports = {
  getAllPacientes,
}