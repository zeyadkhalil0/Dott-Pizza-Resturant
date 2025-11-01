import React from 'react'
import { Award, Clock, Heart, Users} from 'lucide-react';

export const WhyChooseUs = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-4 text-gray-800">
          Why Choose Us
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          We're committed to delivering exceptional dining experiences with
          quality food and outstanding service
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center p-6 rounded-lg hover:shadow-lg transition-shadow">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-100 rounded-full mb-4">
              <Award className="w-8 h-8 text-orange-600" />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-gray-800">
              Quality Food
            </h3>
            <p className="text-gray-600">
              Fresh ingredients and authentic recipes prepared by expert chefs
              daily
            </p>
          </div>

          <div className="text-center p-6 rounded-lg hover:shadow-lg transition-shadow">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-100 rounded-full mb-4">
              <Clock className="w-8 h-8 text-orange-600" />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-gray-800">
              Fast Delivery
            </h3>
            <p className="text-gray-600">
              Quick and reliable delivery service ensuring your food arrives hot
              and fresh
            </p>
          </div>

          <div className="text-center p-6 rounded-lg hover:shadow-lg transition-shadow">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-100 rounded-full mb-4">
              <Heart className="w-8 h-8 text-orange-600" />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-gray-800">
              Made with Love
            </h3>
            <p className="text-gray-600">
              Every dish is crafted with passion and attention to detail
            </p>
          </div>

          <div className="text-center p-6 rounded-lg hover:shadow-lg transition-shadow">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-100 rounded-full mb-4">
              <Users className="w-8 h-8 text-orange-600" />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-gray-800">
              Expert Team
            </h3>
            <p className="text-gray-600">
              Skilled professionals dedicated to providing excellent service
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
