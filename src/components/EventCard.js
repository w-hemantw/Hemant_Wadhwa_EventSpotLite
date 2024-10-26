import React from 'react';

function EventCard({ event, onClick }) {
  return (
    <div 
      className="p-5 border rounded-lg shadow-md bg-white dark:bg-gray-800 dark:border-gray-700 transition-transform transform hover:scale-105 hover:shadow-lg cursor-pointer"
      onClick={onClick}
    >
      <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-1">{event.title}</h3>
      <p className="text-gray-600 dark:text-gray-400 mb-1"><strong>Location:</strong> {event.location}</p>
      <p className="text-gray-500 dark:text-gray-300"><strong>Date:</strong> {event.date}</p>
    </div>
  );
}

export default EventCard;
