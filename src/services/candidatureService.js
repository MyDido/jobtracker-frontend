// src/services/candidatureService.js
import api from './api';

const candidatureService = {
  // Récupérer toutes les candidatures
  getAll: async () => {
    const response = await api.get('/candidatures');
    return response.data;
  },

  // Récupérer une candidature par ID
  getById: async (id) => {
    const response = await api.get(`/candidatures/${id}`);
    return response.data;
  },

  // Créer une candidature
  create: async (candidatureData) => {
    const response = await api.post('/candidatures', candidatureData);
    return response.data;
  },

  // Modifier une candidature
  update: async (id, candidatureData) => {
    const response = await api.put(`/candidatures/${id}`, candidatureData);
    return response.data;
  },

  // Supprimer une candidature
  delete: async (id) => {
    const response = await api.delete(`/candidatures/${id}`);
    return response.data;
  },

  // Récupérer les statistiques
  getStatistics: async () => {
    const response = await api.get('/candidatures/statistics');
    return response.data;
  },
};

export default candidatureService;