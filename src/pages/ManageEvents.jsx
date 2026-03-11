import React, { useState } from "react";
import Header from "../components/Header";

export default function ManageEvents() {
  const [events, setEvents] = useState([
    { name: "Tech Seminar", date: "2026-03-01" },
    { name: "Math Workshop", date: "2026-03-05" },
  ]);

  const [newEvent, setNewEvent] = useState({
    name: "",
    date: "",
  });

  const handleAddEvent = () => {
    if (!newEvent.name || !newEvent.date) return;

    setEvents([...events, newEvent]);
    setNewEvent({ name: "", date: "" });
  };

  const handleDelete = (index) => {
    const updated = events.filter((_, i) => i !== index);
    setEvents(updated);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />

      <main className="max-w-6xl mx-auto p-6">
        <h2 className="text-2xl font-bold mb-6">Manage Events</h2>

        {/* Add Event Form */}
        <div className="bg-white p-6 rounded-xl shadow-md mb-8">
          <h3 className="text-lg font-semibold mb-4">Add New Event</h3>

          <div className="flex flex-col md:flex-row gap-4">
            <input
              type="text"
              placeholder="Event Name"
              value={newEvent.name}
              onChange={(e) =>
                setNewEvent({ ...newEvent, name: e.target.value })
              }
              className="border p-2 rounded-lg w-full"
            />

            <input
              type="date"
              value={newEvent.date}
              onChange={(e) =>
                setNewEvent({ ...newEvent, date: e.target.value })
              }
              className="border p-2 rounded-lg w-full"
            />

            <button
              onClick={handleAddEvent}
              className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
            >
              Add Event
            </button>
          </div>
        </div>

        {/* Events List */}
        <div className="bg-white p-6 rounded-xl shadow-md">
          <h3 className="text-lg font-semibold mb-4">Event List</h3>

          <table className="min-w-full text-left">
            <thead>
              <tr>
                <th className="px-4 py-2 border-b">Event Name</th>
                <th className="px-4 py-2 border-b">Date</th>
                <th className="px-4 py-2 border-b">Actions</th>
              </tr>
            </thead>

            <tbody>
              {events.map((event, index) => (
                <tr key={index} className="hover:bg-gray-100 transition">
                  <td className="px-4 py-2">{event.name}</td>
                  <td className="px-4 py-2">{event.date}</td>
                  <td className="px-4 py-2">
                    <button
                      onClick={() => handleDelete(index)}
                      className="bg-red-500 text-white px-3 py-1 rounded-lg hover:bg-red-600 transition text-sm"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
}