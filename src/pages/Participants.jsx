import React, { useState } from "react";
import Header from "../components/Header";

export default function Participants() {
  const [participants, setParticipants] = useState([
    { name: "John Doe", event: "Tech Seminar" },
    { name: "Jane Smith", event: "Math Workshop" },
  ]);

  const [newParticipant, setNewParticipant] = useState({
    name: "",
    event: "",
  });

  const handleAdd = () => {
    if (!newParticipant.name || !newParticipant.event) return;

    setParticipants([...participants, newParticipant]);
    setNewParticipant({ name: "", event: "" });
  };

  const handleDelete = (index) => {
    const updated = participants.filter((_, i) => i !== index);
    setParticipants(updated);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />

      <main className="max-w-6xl mx-auto p-6">
        <h2 className="text-2xl font-bold mb-6">Participants</h2>

        {/* Add Participant */}
        <div className="bg-white p-6 rounded-xl shadow-md mb-8">
          <h3 className="text-lg font-semibold mb-4">Add Participant</h3>

          <div className="flex flex-col md:flex-row gap-4">
            <input
              type="text"
              placeholder="Participant Name"
              value={newParticipant.name}
              onChange={(e) =>
                setNewParticipant({ ...newParticipant, name: e.target.value })
              }
              className="border p-2 rounded-lg w-full"
            />

            <input
              type="text"
              placeholder="Event Name"
              value={newParticipant.event}
              onChange={(e) =>
                setNewParticipant({ ...newParticipant, event: e.target.value })
              }
              className="border p-2 rounded-lg w-full"
            />

            <button
              onClick={handleAdd}
              className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
            >
              Add
            </button>
          </div>
        </div>

        {/* Participants Table */}
        <div className="bg-white p-6 rounded-xl shadow-md">
          <h3 className="text-lg font-semibold mb-4">Participants List</h3>

          <table className="min-w-full text-left">
            <thead>
              <tr>
                <th className="px-4 py-2 border-b">Name</th>
                <th className="px-4 py-2 border-b">Event</th>
                <th className="px-4 py-2 border-b">Action</th>
              </tr>
            </thead>

            <tbody>
              {participants.map((p, index) => (
                <tr key={index} className="hover:bg-gray-100">
                  <td className="px-4 py-2">{p.name}</td>
                  <td className="px-4 py-2">{p.event}</td>
                  <td className="px-4 py-2">
                    <button
                      onClick={() => handleDelete(index)}
                      className="bg-red-500 text-white px-3 py-1 rounded-lg hover:bg-red-600 text-sm"
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