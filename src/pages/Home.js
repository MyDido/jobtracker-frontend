// src/pages/Home.js
import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 flex flex-col">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">J</span>
              </div>
              <h1 className="text-2xl font-bold text-gray-900">JobTracker</h1>
            </div>
            <nav className="flex items-center space-x-4">
              <Link 
                to="/login" 
                className="text-gray-600 hover:text-blue-600 font-medium transition"
              >
                Se connecter
              </Link>
              <Link 
                to="/login" 
                className="bg-blue-600 text-white px-6 py-2.5 rounded-lg hover:bg-blue-700 font-medium transition shadow-sm"
              >
                S'inscrire
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Section principale - Centré verticalement */}
      <main className="flex-1 flex items-center">
        <div className="max-w-7xl mx-auto px-6 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* Colonne texte */}
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  Gérez vos candidatures
                  <span className="block text-blue-600">professionnelles</span>
                </h2>
                
                <p className="text-xl text-gray-600 leading-relaxed">
                  Centralisez, suivez et optimisez toutes vos candidatures au même endroit. 
                  Simple, efficace et professionnel.
                </p>
              </div>

              <div className="flex items-center space-x-4">
                <Link 
                  to="/login"
                  className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 shadow-lg hover:shadow-xl transition transform hover:scale-105"
                >
                  Commencer gratuitement
                </Link>
              </div>

              {/* Statistiques */}
              <div className="grid grid-cols-3 gap-6 pt-8 border-t border-gray-200">
                <div>
                  <div className="text-3xl font-bold text-blue-600">100%</div>
                  <div className="text-sm text-gray-600">Gratuit</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-blue-600">24/7</div>
                  <div className="text-sm text-gray-600">Accessible</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-blue-600">Sécurisé</div>
                  <div className="text-sm text-gray-600">Données cryptées</div>
                </div>
              </div>
            </div>

            {/* Colonne illustration */}
            <div className="relative hidden lg:block">
              <div className="relative">
                {/* Carte mockup */}
                <div className="bg-white rounded-2xl shadow-2xl p-8 transform rotate-2 hover:rotate-0 transition duration-300">
                  <div className="space-y-4">
                    {/* Header card */}
                    <div className="flex items-center justify-between pb-4 border-b border-gray-200">
                      <div className="flex items-center space-x-3">
                        <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                          <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"/>
                          </svg>
                        </div>
                        <div>
                          <div className="font-semibold text-gray-900">Mes Candidatures</div>
                          <div className="text-sm text-gray-500">12 actives</div>
                        </div>
                      </div>
                      <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                        <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/>
                        </svg>
                      </div>
                    </div>

                    {/* Liste items */}
                    <div className="space-y-3">
                      <div className="flex items-center space-x-3 p-3 bg-blue-50 rounded-lg">
                        <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                        <div className="flex-1">
                          <div className="font-medium text-gray-900">Google</div>
                          <div className="text-sm text-gray-600">Développeur Frontend</div>
                        </div>
                        <div className="text-xs font-medium text-blue-600 bg-blue-100 px-2 py-1 rounded">Entretien</div>
                      </div>

                      <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                        <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                        <div className="flex-1">
                          <div className="font-medium text-gray-900">Microsoft</div>
                          <div className="text-sm text-gray-600">Ingénieur Logiciel</div>
                        </div>
                        <div className="text-xs font-medium text-gray-600 bg-gray-200 px-2 py-1 rounded">En attente</div>
                      </div>

                      <div className="flex items-center space-x-3 p-3 bg-green-50 rounded-lg">
                        <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                        <div className="flex-1">
                          <div className="font-medium text-gray-900">Meta</div>
                          <div className="text-sm text-gray-600">Product Manager</div>
                        </div>
                        <div className="text-xs font-medium text-green-600 bg-green-100 px-2 py-1 rounded">Accepté</div>
                      </div>
                    </div>

                    {/* Stats */}
                    <div className="grid grid-cols-3 gap-4 pt-4 border-t border-gray-200">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-blue-600">12</div>
                        <div className="text-xs text-gray-600">Total</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-yellow-600">5</div>
                        <div className="text-xs text-gray-600">En cours</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-green-600">3</div>
                        <div className="text-xs text-gray-600">Acceptés</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Éléments décoratifs */}
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-blue-200 rounded-full opacity-50 blur-2xl"></div>
                <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-indigo-200 rounded-full opacity-50 blur-2xl"></div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Home;