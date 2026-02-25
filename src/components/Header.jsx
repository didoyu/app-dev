import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="bg-blue-600 text-white shadow-md">
      <div className="max-w-6xl mx-auto p-6 flex flex-col sm:flex-row justify-between items-center">
        
        {/* PROJECT TITLE — DO NOT CHANGE */}
        <div>
          <h1 className="text-2xl font-bold">
            Smart Attendance Monitoring System
          </h1>
          <p className="text-sm">Web-Based Event Attendance Tracker</p>
        </div>

        {/* Navigation */}
        <nav className="mt-4 sm:mt-0 space-x-6">
          <Link className="hover:text-gray-200 transition" to="/">
            Home
          </Link>
          <Link className="hover:text-gray-200 transition" to="/about">
            About
          </Link>
          <Link className="hover:text-gray-200 transition" to="/contact">
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}