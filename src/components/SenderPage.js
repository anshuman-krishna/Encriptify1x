import React from 'react';
import backgroundImg from '../images/sender.jpg';
import Footer from '../components/shared/Footer';

const SenderPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-cover bg-center" style={{ backgroundImage: `url(${backgroundImg})` }}>
      <div className="flex flex-col items-center justify-center text-white">
        <h1 className="text-5xl font-bold mb-8">Sender</h1>

        <div className="w-full p-4 mb-6">
          <input
            type="text"
            placeholder="Enter text to encrypt"
            className="w-full p-4 border border-gray-300 rounded text-lg"
          />
        </div>

        <div className="w-full mb-6">
          <label htmlFor="firstInteger" className="block text-xl font-semibold text-gray-800 mb-2">
            First Integer
          </label>
          <input
            type="number"
            id="firstInteger"
            className="w-full p-4 border border-gray-300 rounded text-lg"
          />
        </div>

        <div className="w-full mb-6">
          <label htmlFor="secondInteger" className="block text-xl font-semibold text-gray-800 mb-2">
            Second Integer
          </label>
          <input
            type="number"
            id="secondInteger"
            className="w-full p-4 border border-gray-300 rounded text-lg"
          />
        </div>

        <button
          className="bg-blue-800 text-white py-4 px-8 rounded-full font-bold hover:bg-blue-900 transition duration-300 text-xl"
        >
          Encrypt Message
        </button>
      </div>

      {/* Footer component */}
      <Footer />
    </div>
  );
};

export default SenderPage;
