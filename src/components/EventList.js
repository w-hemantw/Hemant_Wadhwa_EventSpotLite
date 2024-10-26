import React, { useState, useEffect } from "react";
import EventCard from "./EventCard";
import Modal from "./Modal";

function EventList() {
  const [events, setEvents] = useState([]);
  const [filteredEvents, setFilteredEvents] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedEvent, setSelectedEvent] = useState(null);

  useEffect(() => {
    fetch("/events.json")
      .then((response) => response.json())
      .then((data) => {
        setEvents(data);
        setFilteredEvents(data);
      })
      .catch((error) => console.error("Error fetching events:", error));
  }, []);

  const handleSearchChange = (e) => {
    const term = e.target.value.toLowerCase();
    setSearchTerm(term);
    setFilteredEvents(
      events.filter(
        (event) =>
          event.title.toLowerCase().includes(term) ||
          event.location.toLowerCase().includes(term)
      )
    );
  };

  const openModal = (event) => setSelectedEvent(event);
  const closeModal = () => setSelectedEvent(null);

  return (
    <div className="container mx-auto px-4 py-8">
      <input
        type="text"
        value={searchTerm}
        onChange={handleSearchChange}
        placeholder="Search events..."
        className="w-full p-3 mb-4 border rounded-lg shadow-sm bg-white text-gray-900 dark:bg-gray-700 dark:text-gray-100 dark:placeholder-gray-500 border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 transition ease-in-out duration-200"
      />
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {filteredEvents.map((event) => (
          <EventCard
            key={event.id}
            event={event}
            onClick={() => openModal(event)}
          />
        ))}
      </div>
      {selectedEvent && <Modal event={selectedEvent} onClose={closeModal} />}
    </div>
  );
}

export default EventList;
