import React from 'react';
import { Pizza, Heart, Users, Award } from 'lucide-react';

export default function AboutUs() {
  return (
    <div className="min-h-screen bg-amber-50">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-red-600 to-orange-600 text-white py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <Pizza className="w-16 h-16 mx-auto mb-4 animate-bounce" />
          <h1 className="text-5xl font-bold mb-4">About Italiano Pizza</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Bringing authentic Italian flavors to your table since 1995
          </p>
        </div>
      </div>

      {/* Our Story Section */}
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold text-gray-800 mb-6">Our Story</h2>
            <p className="text-gray-600 mb-4 leading-relaxed">
              Founded in Naples by the Rossi family, Italiano Pizza began as a small family kitchen 
              where generations perfected the art of authentic Italian pizza. Our journey started with 
              a simple mission: to share the true taste of Italy with the world.
            </p>
            <p className="text-gray-600 mb-4 leading-relaxed">
              Using traditional recipes passed down through four generations, we craft each pizza 
              with passion and pride. From our wood-fired ovens to our hand-selected ingredients 
              imported directly from Italy, every detail matters.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Today, we continue to honor our heritage while creating unforgettable dining 
              experiences for families and friends to gather, share, and savor.
            </p>
          </div>
          <div className="bg-red-600 rounded-lg p-8 text-white shadow-xl">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <Heart className="w-8 h-8 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold mb-2">Made with Love</h3>
                  <p className="text-red-100">Every pizza is crafted with care and authentic Italian passion</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Users className="w-8 h-8 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold mb-2">Family Tradition</h3>
                  <p className="text-red-100">Four generations of pizza-making expertise in every bite</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Award className="w-8 h-8 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold mb-2">Award Winning</h3>
                  <p className="text-red-100">Recognized for excellence in authentic Italian cuisine</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div className="bg-white py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">Our Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="bg-red-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-4xl">🍕</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Authenticity</h3>
              <p className="text-gray-600">
                We stay true to traditional Italian recipes and techniques, using only the finest imported ingredients
              </p>
            </div>
            <div className="text-center p-6">
              <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-4xl">🌿</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Fresh Ingredients</h3>
              <p className="text-gray-600">
                From farm to table, we source the freshest vegetables, meats, and cheeses daily
              </p>
            </div>
            <div className="text-center p-6">
              <div className="bg-orange-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-4xl">❤️</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Community</h3>
              <p className="text-gray-600">
                We're more than a restaurant – we're a gathering place where memories are made
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-gradient-to-r from-orange-600 to-red-600 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Experience the Italian Tradition</h2>
          <p className="text-xl mb-8">Visit us today and taste the difference that passion makes</p>
          <button className="bg-white text-red-600 px-8 py-3 rounded-full font-bold text-lg hover:bg-gray-100 transition-colors shadow-lg">
            Make a Reservation
          </button>
        </div>
      </div>
    </div>
  );
}