// src/pages/Home.js
import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header avec logo */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <div className="border-4 border-blue-500 px-4 py-2 rounded-lg">
                <h1 className="text-2xl font-bold text-blue-500">JobTracker</h1>
              </div>
            </div>
            <nav className="flex space-x-6">
              <Link to="/login" className="text-gray-600 hover:text-blue-600">
                Se connecter
              </Link>
              <Link 
                to="/login" 
                className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
              >
                S'inscrire
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Section principale */}
      <main className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Colonne texte */}
          <div className="space-y-8">
            <h2 className="text-5xl font-bold text-gray-900 leading-tight">
              Gérez vos candidatures professionnelles
            </h2>
            
            <p className="text-xl text-gray-600">
              Application construite avec React et Tailwind CSS côté client,
              et Express et PostgreSQL côté serveur.
            </p>

            <div className="flex items-center space-x-4">
              <Link 
                to="/login"
                className="bg-blue-500 text-white px-8 py-4 rounded-lg text-lg font-medium hover:bg-blue-600 shadow-lg hover:shadow-xl transition"
              >
                Connexion/Inscription
              </Link>
            </div>

            <p className="text-sm text-blue-600 font-medium">
              Par LEMOU E. Dieu donné - Projet Académique 2024-2025
            </p>
          </div>

          {/* Colonne illustration */}
          <div className="relative">
            <div className="relative z-10">
              <svg viewBox="0 0 500 500" className="w-full h-auto">
                {/* Fond décoratif */}
                <circle cx="250" cy="250" r="200" fill="#EEF2FF" opacity="0.5"/>
                
                {/* Carte principale */}
                <rect x="100" y="150" width="300" height="200" rx="15" fill="white" stroke="#E5E7EB" strokeWidth="2"/>
                
                {/* Lignes de texte */}
                <rect x="130" y="180" width="200" height="10" rx="5" fill="#DBEAFE"/>
                <rect x="130" y="205" width="150" height="10" rx="5" fill="#DBEAFE"/>
                <rect x="130" y="230" width="180" height="10" rx="5" fill="#DBEAFE"/>
                
                {/* Graphique circulaire */}
                <circle cx="380" cy="200" r="40" fill="#3B82F6" opacity="0.2"/>
                <path d="M 380 160 A 40 40 0 0 1 420 200 L 380 200 Z" fill="#3B82F6"/>
                
                {/* Coche de validation */}
                <circle cx="350" cy="300" r="25" fill="#10B981"/>
                <path d="M 340 300 L 347 307 L 360 290" stroke="white" strokeWidth="3" fill="none" strokeLinecap="round"/>
                
                {/* Personnage stylisé */}
                <circle cx="180" cy="380" r="25" fill="#6366F1"/>
                <rect x="165" y="405" width="30" height="50" rx="5" fill="#6366F1"/>
                
                {/* Éléments décoratifs flottants */}
                <circle cx="80" cy="100" r="8" fill="#DBEAFE"/>
                <circle cx="420" cy="350" r="6" fill="#DBEAFE"/>
                <circle cx="450" cy="120" r="10" fill="#FDE68A"/>
              </svg>
            </div>
          </div>
        </div>

        {/* Section fonctionnalités */}
        <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-xl shadow-md">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"/>
              </svg>
            </div>
            <h3 className="text-lg font-semibold mb-2">Suivi centralisé</h3>
            <p className="text-gray-600">Toutes vos candidatures au même endroit</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md">
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/>
              </svg>
            </div>
            <h3 className="text-lg font-semibold mb-2">Statistiques en temps réel</h3>
            <p className="text-gray-600">Suivez l'évolution de vos candidatures</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md">
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
              </svg>
            </div>
            <h3 className="text-lg font-semibold mb-2">Relances automatiques</h3>
            <p className="text-gray-600">Ne manquez aucune relance importante</p>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Home;