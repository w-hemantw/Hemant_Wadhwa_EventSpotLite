import React from "react";
import EventList from "./components/EventList";
import DarkModeToggle from "./components/DarkModeToggle";

function App() {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <header className="flex justify-between items-center p-4 bg-blue-600 dark:bg-blue-800 shadow-md rounded-b-lg">
        <h1 className="text-4xl font-bold text-white">EventSpot Lite</h1>
        <DarkModeToggle />
      </header>
      <main className="p-6 mx-auto max-w-screen-lg">
        <EventList />
      </main>
    </div>
  );
}

export default App;