import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function App() {
  const [location, setLocation] = useState("Unknown");
  const [status, setStatus] = useState("Idle");
  const [lastSeen, setLastSeen] = useState("Never");

  const locations = [
    "London",
    "New York",
    "Paris",
    "Mars",
    "The Bermuda Triangle",
    "Your Backyard",
  ];
  const statuses = [
    "Running",
    "Eating Pizza",
    "Hiding",
    "Dancing",
    "Lost in Space",
    "Watching Netflix",
  ];

  const updateTracking = () => {
    setLocation(locations[Math.floor(Math.random() * locations.length)]);
    setStatus(statuses[Math.floor(Math.random() * statuses.length)]);
    setLastSeen(new Date().toLocaleTimeString());
  };

  useEffect(() => {
    const interval = setInterval(updateTracking, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <motion.h1
        className="text-3xl font-bold mb-4"
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        Tracking Dave "Sexy Beast"...
      </motion.h1>
      <div className="w-96 text-center p-4 shadow-lg border rounded-lg">
        <p className="text-lg font-semibold">📍 Last Seen: {location}</p>
        <p className="text-lg font-semibold">🎮 Status: {status}</p>
        <p className="text-lg font-semibold">⏳ Updated: {lastSeen}</p>
        <button
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
          onClick={updateTracking}
        >
          Refresh Location
        </button>
      </div>
    </div>
  );
}
