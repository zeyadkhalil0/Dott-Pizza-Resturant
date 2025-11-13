import React, { useEffect, useState } from "react";
import Loader from "./Loader"
const Items = () => {
  const [items, setItems] = useState([]);
  const [filteredItems, setFilteredItems] = useState([]);
  const [activeFilter, setActiveFilter] = useState("All Items");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const categories = [
    "All Items",
    "Pizza",
    "Pasta",
    "Fries",
    "Extras",
    "Drinks",
    "Dessert",
  ];

  // Supabase configuration
  const SUPABASE_URL = "https://qbojtxkeayxsszvnblau.supabase.co";
  const SUPABASE_ANON_KEY =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFib2p0eGtlYXl4c3N6dm5ibGF1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjE2NDczODUsImV4cCI6MjA3NzIyMzM4NX0.XQexNZBjAoEF3dgdVKEakft0CEKYU3XD--qmVTRKZAE";

  // Fetch items from Supabase using fetch API
  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = async () => {
    try {
      setLoading(true);

      const response = await fetch(
        `${SUPABASE_URL}/rest/v1/Products?select=*`,
        {
          headers: {
            apikey: SUPABASE_ANON_KEY,
            Authorization: `Bearer ${SUPABASE_ANON_KEY}`,
          },
        }
      );

      if (!response.ok) {
        throw new Error("Failed to fetch items");
      }

      const data = await response.json();
      setItems(data || []);
      setFilteredItems(data || []);
    } catch (err) {
      setError(err.message);
      console.error("Error fetching items:", err);
    } finally {
      setLoading(false);
    }
  };

  // Filter items by category
  const handleFilter = (category) => {
    setActiveFilter(category);

    if (category === "All Items") {
      setFilteredItems(items);
    } else {
      const filtered = items.filter(
        (item) => item.category?.toLowerCase() === category.toLowerCase()
      );
      setFilteredItems(filtered);
    }
  };
useEffect(() => {
  if (loading) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = 'unset';
  }
  
  return () => {
    document.body.style.overflow = 'unset';
  };
}, [loading]);
  
  return (
    <>
{loading && (
            <div className="absolute flex flex-col space-y-8  items-center justify-center bg-orange-300 inset-0 w-screen h-screen z-50 overflow-hidden">
              <Loader/>
              <h1 className="text-xl mx-auto text-white animate-ping">Loading...</h1>
            </div>
          )}
      <section className="md:px-20 px-2 mt-16 bg-orange-300">
        <h1 className="text-center text-3xl font-semibold py-4">
          Discover Items
        </h1>
        <div className="flex items-center justify-center py-8 gap-4 flex-wrap">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => handleFilter(category)}
              className={`px-6 py-2 rounded-lg font-medium transition-all ${
                activeFilter === category
                  ? "bg-orange-600 text-white shadow-lg"
                  : "bg-white text-orange-600 hover:bg-orange-100"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </section>

        
      <section className="md:px-20 px-10 pb-16 mb-16 bg-orange-300">

        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
            <p className="font-bold">Error:</p>
            <p>{error}</p>
          </div>
        )}
    
        {!loading && !error && filteredItems.length === 0 && (
          <p className="text-center text-gray-600 py-12">
            No items found in this category.
          </p>
        )}

        {!loading && !error && filteredItems.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
           {/* MapItems */}
            {filteredItems.map((item) => (
              <div
                key={item.id}
                className=" flex flex-col items-left   bg-white rounded-lg shadow-2xl hover:shadow-xl transition-shadow overflow-hidden w-full"
              >
                {item.image_url &&  (
                  <img
                    src={item.image_url}
                    alt={item.name}
                    className="w-full h-48 object-cover"/>  
                )}
                {/* Item-Name Desc Badge */}
                <div className="p-4 flex flex-col justify-between">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    {item.name}
                  </h3>
                  {item.description && (
                    <p className="text-gray-600 text-sm mb-3">
                      {item.description}
                    </p>
                  )}
                  <div className="flex items-center justify-between">
                    {item.price_m && (
                      <span className="text-lg font-bold text-orange-600">
                        {item.price_l 
                          ? `M ${item.price_m} |  L ${item.price_l}`
                          : item.price_m.replace("M", "").trim()}
                      </span>
                    )}
                    
                    
                    {item.category && (
                      <span className="text-xs bg-orange-100 text-orange-800 px-2 py-1 rounded">
                        {item.category}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>
    </>
  );
};

export default Items;
