import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Button from "../components/Button";

const stats = [
  { title: "Total Events", value: 12 },
  { title: "Today’s Events", value: 3 },
  { title: "Total Participants", value: 245 },
  { title: "Present Today", value: 180 },
];

const events = [
  { name: "Tech Seminar", attendees: 120, time: "10:00 AM", status: "active" },
  { name: "Math Workshop", attendees: 80, time: "1:00 PM", status: "upcoming" },
  { name: "Science Fair", attendees: 95, time: "3:00 PM", status: "active" },
];

export default function Dashboard() {
  const navigate = useNavigate();

  const handleManageEvents = () => {
    navigate("/manage-events");
  };

  return (
    <div className="min-h-screen bg-gray-100">
      
      {/* Reusable Header */}
      <Header />

      <main className="max-w-6xl mx-auto p-6">

        {/* Stats Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-8">
          {stats.map((stat) => (
            <div
              key={stat.title}
              className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl hover:scale-105 transition duration-300"
            >
              <h2 className="text-lg font-semibold">{stat.title}</h2>
              <p className="text-2xl font-bold mt-2">{stat.value}</p>
            </div>
          ))}
        </div>

        {/* Events Table */}
        <div className="bg-white rounded-xl shadow-md p-6 mb-8 overflow-x-auto">
          <h2 className="text-xl font-semibold mb-4">Today's Events</h2>

          <table className="min-w-full text-left">
            <thead>
              <tr>
                <th className="px-4 py-2 border-b">Event</th>
                <th className="px-4 py-2 border-b">Attendees</th>
                <th className="px-4 py-2 border-b">Time</th>
                <th className="px-4 py-2 border-b">Status</th>
              </tr>
            </thead>

            <tbody>
              {events.map((event) => (
                <tr key={event.name} className="hover:bg-gray-100 transition">
                  <td className="px-4 py-2">{event.name}</td>
                  <td className="px-4 py-2">{event.attendees}</td>
                  <td className="px-4 py-2">{event.time}</td>
                  <td className="px-4 py-2">
                    <span
                      className={`px-3 py-1 rounded-full text-white text-xs font-semibold ${
                        event.status === "active"
                          ? "bg-green-500"
                          : "bg-yellow-500"
                      }`}
                    >
                      {event.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Reusable Button */}
        <div className="flex justify-end">
          <Button
            label="Manage Events"
            variant="primary"
            onClick={handleManageEvents}
          />
        </div>

      </main>
    </div>
  );
}