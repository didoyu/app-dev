import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="bg-blue-600 text-white p-4 shadow-md">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">Event Management System</h1>

        <nav className="space-x-4">
          <Link to="/" className="hover:underline">
            Dashboard
          </Link>
          <Link to="/manage-events" className="hover:underline">
            Manage Events
          </Link>
          <Link to="/participants" className="hover:underline">
            Participants
          </Link>
        </nav>
      </div>
    </header>
  );
}