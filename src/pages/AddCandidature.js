// src/pages/AddCandidature.js
import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import candidatureService from '../services/candidatureService';

function AddCandidature() {
  const navigate = useNavigate();
  const { id } = useParams(); // Si id existe, on est en mode modification
  const isEditMode = !!id;

  const [formData, setFormData] = useState({
    entreprise: '',
    poste: '',
    type_contrat: 'Stage',
    statut: 'En attente',
    date_candidature: '',
    date_relance: '',
    notes: '',
    url_annonce: ''
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  // Si mode modification, charger les données existantes
  useEffect(() => {
    if (isEditMode) {
      loadCandidature();
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  const loadCandidature = async () => {
    try {
      const response = await candidatureService.getById(id);
      const candidature = response.candidature;
      
      // Formater les dates pour les inputs
      setFormData({
        entreprise: candidature.entreprise,
        poste: candidature.poste,
        type_contrat: candidature.type_contrat,
        statut: candidature.statut,
        date_candidature: candidature.date_candidature.split('T')[0],
        date_relance: candidature.date_relance ? candidature.date_relance.split('T')[0] : '',
        notes: candidature.notes || '',
        url_annonce: candidature.url_annonce || ''
      });
    } catch (err) {
      setError('Erreur lors du chargement de la candidature');
      console.error(err);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      if (isEditMode) {
        await candidatureService.update(id, formData);
      } else {
        await candidatureService.create(formData);
      }

      navigate('/dashboard');
    } catch (err) {
      setError(err.response?.data?.message || 'Une erreur est survenue');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-900">
            {isEditMode ? 'Modifier la candidature' : 'Ajouter une candidature'}
          </h1>
          <button
            onClick={() => navigate('/dashboard')}
            className="px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition"
          >
            ← Retour
          </button>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-lg shadow p-8">
          {/* Message d'erreur */}
          {error && (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Entreprise */}
            <div>
              <label className="block text-gray-700 text-sm font-medium mb-2">
                Entreprise <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="entreprise"
                value={formData.entreprise}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Nom de l'entreprise"
              />
            </div>

            {/* Poste */}
            <div>
              <label className="block text-gray-700 text-sm font-medium mb-2">
                Poste <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="poste"
                value={formData.poste}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Intitulé du poste"
              />
            </div>

            {/* Type de contrat et Statut */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-gray-700 text-sm font-medium mb-2">
                  Type de contrat
                </label>
                <select
                  name="type_contrat"
                  value={formData.type_contrat}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="Stage">Stage</option>
                  <option value="CDI">CDI</option>
                  <option value="CDD">CDD</option>
                  <option value="Alternance">Alternance</option>
                </select>
              </div>

              <div>
                <label className="block text-gray-700 text-sm font-medium mb-2">
                  Statut
                </label>
                <select
                  name="statut"
                  value={formData.statut}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="En attente">En attente</option>
                  <option value="Relance">Relance</option>
                  <option value="Entretien">Entretien</option>
                  <option value="Refusé">Refusé</option>
                  <option value="Accepté">Accepté</option>
                </select>
              </div>
            </div>

            {/* Dates */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-gray-700 text-sm font-medium mb-2">
                  Date de candidature <span className="text-red-500">*</span>
                </label>
                <input
                  type="date"
                  name="date_candidature"
                  value={formData.date_candidature}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-gray-700 text-sm font-medium mb-2">
                  Date de relance
                </label>
                <input
                  type="date"
                  name="date_relance"
                  value={formData.date_relance}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>

            {/* URL de l'annonce */}
            <div>
              <label className="block text-gray-700 text-sm font-medium mb-2">
                URL de l'annonce
              </label>
              <input
                type="url"
                name="url_annonce"
                value={formData.url_annonce}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="https://..."
              />
            </div>

            {/* Notes */}
            <div>
              <label className="block text-gray-700 text-sm font-medium mb-2">
                Notes
              </label>
              <textarea
                name="notes"
                value={formData.notes}
                onChange={handleChange}
                rows="4"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Informations complémentaires..."
              ></textarea>
            </div>

            {/* Boutons */}
            <div className="flex gap-4">
              <button
                type="submit"
                disabled={loading}
                className="flex-1 bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition font-medium disabled:bg-gray-400 disabled:cursor-not-allowed"
              >
                {loading ? 'Enregistrement...' : isEditMode ? 'Modifier' : 'Ajouter'}
              </button>
              <button
                type="button"
                onClick={() => navigate('/dashboard')}
                className="px-6 py-3 bg-gray-300 text-gray-700 rounded-lg hover:bg-gray-400 transition font-medium"
              >
                Annuler
              </button>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
}

export default AddCandidature;