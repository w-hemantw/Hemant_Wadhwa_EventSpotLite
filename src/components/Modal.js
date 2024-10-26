import React from 'react';

function Modal({ event, onClose }) {
  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-50 dark:bg-opacity-70 flex items-center justify-center z-50"
      onClick={onClose}
    >
      <div 
        className="bg-white dark:bg-gray-800 rounded-lg p-6 w-full max-w-md mx-4 md:mx-0 shadow-xl transform transition-all"
        onClick={(e) => e.stopPropagation()}
      >
        <img src={event.image} alt={event.title} className="w-full h-48 object-cover rounded-md mb-4" />
        <h2 className="text-2xl font-bold mb-2 dark:text-gray-100">{event.title}</h2>
        <p className="text-sm text-gray-500 dark:text-gray-400 mb-1"><strong>Location:</strong> {event.location}</p>
        <p className="text-sm text-gray-500 dark:text-gray-400 mb-3"><strong>Date:</strong> {event.date}</p>
        <p className="text-gray-700 dark:text-gray-300 mb-4">{event.description}</p>
        <button 
          onClick={onClose} 
          className="mt-4 bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md transform transition-transform hover:scale-105 focus:outline-none shadow-md"
        >
          Close
        </button>
      </div>
    </div>
  );
}

export default Modal;
