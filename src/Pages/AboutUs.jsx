import React from 'react'

const AboutUs = () => {
  return (
    <>
       <section className="py-16 bg-orange-50">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-6 text-gray-800">About Us</h2>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Welcome to our restaurant, where culinary excellence meets warm hospitality. 
              Since our establishment, we've been committed to serving delicious, authentic 
              dishes that bring people together.
            </p>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Our journey began with a simple vision: to create a dining experience that 
              combines traditional flavors with modern culinary techniques. Every dish on 
              our menu tells a story of passion, quality, and dedication.
            </p>
            <p className="text-gray-700 leading-relaxed">
              We source the finest ingredients, work with talented chefs, and ensure every 
              meal exceeds your expectations. Whether you're dining in or ordering delivery, 
              we promise an unforgettable experience.
            </p>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <img 
              src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=400" 
              alt="Restaurant interior" 
              className="rounded-lg shadow-md w-full h-48 object-cover"
            />
            <img 
              src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400" 
              alt="Food preparation" 
              className="rounded-lg shadow-md w-full h-48 object-cover mt-8"
            />
            <img 
              src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400" 
              alt="Delicious dish" 
              className="rounded-lg shadow-md w-full h-48 object-cover -mt-8"
            />
            <img 
              src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400" 
              alt="Happy customers" 
              className="rounded-lg shadow-md w-full h-48 object-cover"
            />
          </div>
        </div>
      </div>
    </section>
    </>
  )
}

export default AboutUs
