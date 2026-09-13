import React, { useState } from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  Polyline,
} from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { Truck, Phone } from "lucide-react";

/**
 * LiveVehicleTrackingMap
 * Real map version using react-leaflet + OpenStreetMap (100% free, no API key).
 *
 * Install first:
 *   npm install react-leaflet leaflet lucide-react
 *
 * Save this file as:
 *   frontend/src/components/LiveVehicleTrackingMap.jsx
 *
 * Use it as:
 *   import LiveVehicleTrackingMap from "../components/LiveVehicleTrackingMap";
 *   <LiveVehicleTrackingMap />
 */

// ---- Mock data (replace with real API / socket data later) ----
const vehicle = {
  vehicleNo: "DL 1LA 1234",
  vehicleType: "Tata Ace",
  driver: "Rohit Sharma",
  speed: "45 km/h",
  eta: "2:30 PM",
  distanceLeft: "18.6 km",
  fuelLevel: 68, // %
  position: [28.6448, 77.216], // [lat, lng] - Connaught Place area, live GPS point
};

// Real coordinates around Delhi-NCR for reference pins
const places = [
  {
    id: 1,
    label: "Connaught Place",
    pos: [28.6315, 77.2167],
    color: "#16a34a",
  },
  { id: 2, label: "New Delhi", pos: [28.6139, 77.209], color: "#334155" },
  { id: 3, label: "Meerut", pos: [28.9845, 77.7064], color: "#2563eb" },
  {
    id: 4,
    label: "Noida Sector 18",
    pos: [28.5708, 77.3211],
    color: "#f97316",
  },
  { id: 5, label: "Gurugram", pos: [28.4595, 77.0266], color: "#f97316" },
  { id: 6, label: "Faridabad", pos: [28.4089, 77.3178], color: "#2563eb" },
];

// The planned route the vehicle is following (dashed line on the map)
const routePath = [
  [28.6315, 77.2167], // Connaught Place
  [28.62, 77.26],
  [28.6, 77.29],
  [28.5708, 77.3211], // Noida Sector 18
];

// Build a small colored pin icon (SVG) for each place
function makePinIcon(color) {
  const svg = `
    <svg width="26" height="34" viewBox="0 0 22 30" xmlns="http://www.w3.org/2000/svg">
      <path d="M11 0C4.9 0 0 4.9 0 11c0 8.25 11 19 11 19s11-10.75 11-19C22 4.9 17.1 0 11 0Z" fill="${color}"/>
      <circle cx="11" cy="11" r="4.2" fill="white"/>
    </svg>`;
  return L.divIcon({
    html: svg,
    className: "",
    iconSize: [26, 34],
    iconAnchor: [13, 34],
    popupAnchor: [0, -30],
  });
}

// Truck icon for the live vehicle marker
function makeTruckIcon() {
  const svg = `
    <div style="
      background:#f97316;
      width:30px;height:30px;border-radius:50%;
      display:flex;align-items:center;justify-content:center;
      box-shadow:0 2px 6px rgba(0,0,0,0.3);
      border:2px solid white;
    ">
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M10 17h4V5H2v12h3"/><path d="M20 17h2v-3.34a4 4 0 0 0-1.17-2.83L19 9h-5v8h1"/>
        <circle cx="7.5" cy="17.5" r="2.5"/><circle cx="17.5" cy="17.5" r="2.5"/>
      </svg>
    </div>`;
  return L.divIcon({
    html: svg,
    className: "",
    iconSize: [30, 30],
    iconAnchor: [15, 15],
  });
}

export default function LiveVehicleTrackingMap() {
  const [center] = useState(vehicle.position);

  return (
    <div className="w-full max-w-xl max-h-screen bg-white rounded mt-3 shadow-sm border border-gray-100 p-3">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-base font-semibold text-gray-900">
          Live Vehicle Tracking
        </h3>
        <button className="text-sm font-medium text-indigo-600 hover:underline">
          View Full Map
        </button>
      </div>

      {/* Real map */}
      <div className="relative h-80 rounded-xl overflow-hidden">
        <MapContainer
          center={center}
          zoom={11}
          scrollWheelZoom={true}
          style={{ height: "100%", width: "100%" }}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

          {/* Reference place pins */}
          {places.map((p) => (
            <Marker key={p.id} position={p.pos} icon={makePinIcon(p.color)}>
              <Popup>{p.label}</Popup>
            </Marker>
          ))}

          {/* Dashed route */}
          <Polyline
            positions={routePath}
            pathOptions={{ color: "#6366f1", weight: 3, dashArray: "6,6" }}
          />

          {/* Live vehicle marker */}
          <Marker position={vehicle.position} icon={makeTruckIcon()}>
            <Popup>
              <div className="text-sm font-semibold">{vehicle.vehicleNo}</div>
              <div className="text-xs text-gray-500">{vehicle.speed}</div>
            </Popup>
          </Marker>
        </MapContainer>
      </div>

      {/* Bottom info bar */}
      <div className="mt-10">
        <div className="mt-4 flex items-center gap-4 flex-wrap">
          <div className="bg-indigo-100 text-indigo-600 p-3 rounded-xl">
            <Truck size={22} />
          </div>

          <div className="min-w-[110px]">
            <div className="text-sm font-semibold text-gray-900">
              {vehicle.vehicleNo}
            </div>
            <div className="text-xs text-gray-500">{vehicle.vehicleType}</div>
            <div className="text-xs text-gray-500">{vehicle.driver}</div>
          </div>

          <div className="min-w-[80px]">
            <div className="text-xs text-gray-400">Speed</div>
            <div className="text-sm font-semibold text-gray-900">
              {vehicle.speed}
            </div>
          </div>

          <div className="min-w-[80px]">
            <div className="text-xs text-gray-400">ETA</div>
            <div className="text-sm font-semibold text-gray-900">
              {vehicle.eta}
            </div>
          </div>

          <div className="min-w-[90px]">
            <div className="text-xs text-gray-400">Distance Left</div>
            <div className="text-sm font-semibold text-gray-900">
              {vehicle.distanceLeft}
            </div>
          </div>

          <div className="min-w-[90px]">
            <div className="text-xs text-gray-400">Fuel Level</div>
            <div className="text-sm font-semibold text-gray-900">
              {vehicle.fuelLevel}%
            </div>
            <div className="w-20 h-1.5 bg-gray-200 rounded-full mt-1">
              <div
                className="h-1.5 bg-indigo-600 rounded-full"
                style={{ width: `${vehicle.fuelLevel}%` }}
              />
            </div>
          </div>

          <button className="ml-auto bg-indigo-600 hover:bg-indigo-700 text-white p-2.5 rounded-lg shrink-0">
            <Phone size={16} />
          </button>
        </div>
      </div>
    </div>
  );
}
