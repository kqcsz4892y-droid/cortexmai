import Head from "next/head";
import { useState } from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import Container from "../components/container";
import { products } from "../data/products";

export default function Products() {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const openProductModal = (product) => {
    setSelectedProduct(product);
  };

  const closeProductModal = () => {
    setSelectedProduct(null);
  };
  return (
    <>
      <Head>
        <title>Products - CortexM AI | Digital Products Marketplace</title>
        <meta
          name="description"
          content="Browse our collection of premium digital products including automation scripts, AI workflows, and marketing tools."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      
      <Container className="py-16 animate-fade-in">
        <div className="text-center mb-16 animate-slide-up">
          <h1 className="text-4xl font-bold leading-snug tracking-tight text-gray-800 lg:text-5xl dark:text-white">
            Digital Products
          </h1>
          <p className="py-5 text-xl leading-normal text-gray-500 lg:text-xl dark:text-gray-300 max-w-2xl mx-auto">
            Discover premium automation scripts, AI workflows, and marketing tools to accelerate your business growth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {products.map((product, index) => (
            <div 
              key={product.id} 
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden hover:scale-105 animate-slide-up group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="h-48 bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center relative overflow-hidden">
                <div className="text-white text-6xl font-bold opacity-20 group-hover:opacity-30 transition-opacity">
                  {product.category.charAt(0)}
                </div>
                <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-10 transition-all"></div>
              </div>
              
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-lg font-bold text-gray-800 dark:text-white leading-tight">
                    {product.title}
                  </h3>
                  <span className="text-2xl font-bold text-indigo-600 dark:text-indigo-400 ml-4">
                    ${product.price}
                  </span>
                </div>
                
                <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed text-sm">
                  {product.description}
                </p>
                
                <div className="mb-6">
                  <span className="inline-block bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-200 text-xs px-3 py-1 rounded-full">
                    {product.category}
                  </span>
                </div>
                
                <div className="flex gap-3">
                  <button 
                    onClick={() => openProductModal(product)}
                    className="flex-1 bg-gray-100 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-800 dark:text-white font-semibold py-3 px-4 rounded-lg transition-all duration-200 hover:scale-105"
                  >
                    View Details
                  </button>
                  <a 
                    href={product.checkoutLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-4 rounded-lg transition-all duration-200 hover:scale-105 hover:shadow-lg text-center"
                  >
                    Buy Now
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>

      {/* Product Details Modal */}
      {selectedProduct && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white dark:bg-gray-800 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 p-6 flex justify-between items-center">
              <h2 className="text-2xl font-bold text-gray-800 dark:text-white">
                {selectedProduct.title}
              </h2>
              <button 
                onClick={closeProductModal}
                className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            <div className="p-6">
              <div className="h-48 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center mb-6">
                <div className="text-white text-8xl font-bold opacity-30">
                  {selectedProduct.category.charAt(0)}
                </div>
              </div>
              
              <div className="flex justify-between items-center mb-4">
                <span className="inline-block bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-200 text-sm px-3 py-1 rounded-full">
                  {selectedProduct.category}
                </span>
                <span className="text-3xl font-bold text-indigo-600 dark:text-indigo-400">
                  ${selectedProduct.price}
                </span>
              </div>
              
              <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                {selectedProduct.description}
              </p>
              
              <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4 mb-6">
                <h4 className="font-semibold text-gray-800 dark:text-white mb-2">Category:</h4>
                <span className="inline-block bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-200 text-sm px-3 py-1 rounded-full">
                  {selectedProduct.category}
                </span>
              </div>
              
              <div className="flex gap-4">
                <button 
                  onClick={closeProductModal}
                  className="flex-1 bg-gray-100 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-800 dark:text-white font-semibold py-3 px-6 rounded-lg transition-colors"
                >
                  Close
                </button>
                <a 
                  href={selectedProduct.checkoutLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200 hover:scale-105 hover:shadow-lg text-center"
                >
                  Buy Now - ${selectedProduct.price}
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </>
  );
}