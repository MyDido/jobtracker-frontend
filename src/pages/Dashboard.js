// src/pages/Dashboard.js
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import candidatureService from '../services/candidatureService';
import authService from '../services/authService';

function Dashboard() {
  const navigate = useNavigate();
  const [candidatures, setCandidatures] = useState([]);
  const [statistics, setStatistics] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');

  const user = authService.getCurrentUser();

  // Charger les candidatures et statistiques au chargement de la page
  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    try {
      setLoading(true);
      const [candidaturesData, statsData] = await Promise.all([
        candidatureService.getAll(),
        candidatureService.getStatistics()
      ]);
      
      setCandidatures(candidaturesData.candidatures);
      setStatistics(statsData.statistics);
    } catch (err) {
      setError('Erreur lors du chargement des données');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  // Déconnexion
  const handleLogout = () => {
    authService.logout();
    navigate('/login');
  };

  // Supprimer une candidature
  const handleDelete = async (id) => {
    if (window.confirm('Êtes-vous sûr de vouloir supprimer cette candidature ?')) {
      try {
        await candidatureService.delete(id);
        loadData(); // Recharger les données
      } catch (err) {
        alert('Erreur lors de la suppression');
      }
    }
  };

  // Filtrer les candidatures par statut
  const filteredCandidatures = filterStatus === 'all'
    ? candidatures
    : candidatures.filter(c => c.statut === filterStatus);

  // Couleurs des statuts
  const getStatusColor = (statut) => {
    switch (statut) {
      case 'En attente': return 'bg-yellow-100 text-yellow-800';
      case 'Relance': return 'bg-orange-100 text-orange-800';
      case 'Entretien': return 'bg-blue-100 text-blue-800';
      case 'Refusé': return 'bg-red-100 text-red-800';
      case 'Accepté': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-xl text-gray-600">Chargement...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Job</h1>
            <p className="text-sm text-gray-600">Bonjour {user?.prenom || user?.email}</p>
          </div>
          <button
            onClick={handleLogout}
            className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
          >
            Déconnexion
          </button>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Statistiques */}
        {statistics && (
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-8">
            <div className="bg-white p-6 rounded-lg shadow">
              <p className="text-gray-600 text-sm">Total</p>
              <p className="text-3xl font-bold text-blue-600">{statistics.total}</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <p className="text-gray-600 text-sm">En attente</p>
              <p className="text-3xl font-bold text-yellow-600">{statistics.en_attente}</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <p className="text-gray-600 text-sm">À relancer</p>
              <p className="text-3xl font-bold text-orange-600">{statistics.relance}</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <p className="text-gray-600 text-sm">Entretiens</p>
              <p className="text-3xl font-bold text-blue-600">{statistics.entretien}</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <p className="text-gray-600 text-sm">Acceptées</p>
              <p className="text-3xl font-bold text-green-600">{statistics.accepte}</p>
            </div>
          </div>
        )}

        {/* Boutons d'action */}
        <div className="flex justify-between items-center mb-6">
          <div className="flex gap-2">
            <button
              onClick={() => setFilterStatus('all')}
              className={`px-4 py-2 rounded-lg transition ${
                filterStatus === 'all'
                  ? 'bg-blue-600 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-50'
              }`}
            >
              Toutes
            </button>
            <button
              onClick={() => setFilterStatus('En attente')}
              className={`px-4 py-2 rounded-lg transition ${
                filterStatus === 'En attente'
                  ? 'bg-blue-600 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-50'
              }`}
            >
              En attente
            </button>
            <button
              onClick={() => setFilterStatus('Entretien')}
              className={`px-4 py-2 rounded-lg transition ${
                filterStatus === 'Entretien'
                  ? 'bg-blue-600 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-50'
              }`}
            >
              Entretiens
            </button>
          </div>

          <button
            onClick={() => navigate('/add')}
            className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition font-medium"
          >
            + Ajouter une candidature
          </button>
        </div>

        {/* Message d'erreur */}
        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
            {error}
          </div>
        )}

        {/* Liste des candidatures */}
        {filteredCandidatures.length === 0 ? (
          <div className="bg-white rounded-lg shadow p-12 text-center">
            <p className="text-gray-600 text-lg">Aucune candidature trouvée</p>
            <button
              onClick={() => navigate('/add')}
              className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
            >
              Créer votre première candidature
            </button>
          </div>
        ) : (
          <div className="bg-white rounded-lg shadow overflow-hidden">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                    Entreprise
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                    Poste
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                    Type
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                    Statut
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                    Date
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {filteredCandidatures.map((candidature) => (
                  <tr key={candidature.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900">
                      {candidature.entreprise}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-gray-600">
                      {candidature.poste}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-gray-600">
                      {candidature.type_contrat}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(candidature.statut)}`}>
                        {candidature.statut}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-gray-600">
                      {new Date(candidature.date_candidature).toLocaleDateString('fr-FR')}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm">
                      <button
                        onClick={() => navigate(`/edit/${candidature.id}`)}
                        className="text-blue-600 hover:text-blue-800 mr-3"
                      >
                        Modifier
                      </button>
                      <button
                        onClick={() => handleDelete(candidature.id)}
                        className="text-red-600 hover:text-red-800"
                      >
                        Supprimer
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </main>
    </div>
  );
}

export default Dashboard;