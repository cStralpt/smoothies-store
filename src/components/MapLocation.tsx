"use client";

import "leaflet/dist/leaflet.css";
import { useEffect } from "react";

export default function MapLocation({
  latitude,
  longitude,
  height = "400px",
}: {
  latitude: number;
  longitude: number;
  height?: string;
}): React.JSX.Element {
  useEffect(() => {
    if (typeof window !== "undefined") {
      const L = require("leaflet");

      const map = L.map("map", {
        center: [51.505, -0.09],
        zoom: 13,
        scrollWheelZoom: false,
      }).setView([latitude, longitude], 12);

      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        maxZoom: 18,
      }).addTo(map);

      const markerIcon = L.icon({
        iconUrl:
          "https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png",
        iconSize: [25, 41],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
      });

      L.marker([latitude, longitude], { icon: markerIcon })
        .addTo(map)
        .on("click", function () {
          window.open(`https://maps.google.com/maps?q=${Number(
            latitude,
          )},${Number(longitude)}
          `);
        });

      L.marker([latitude, longitude], { icon: markerIcon })
        .addTo(map)
        .bindPopup(
          `<a href="https://maps.google.com/maps?q=${Number(latitude)},${Number(
            longitude,
          )}" target="_blank">Open in Google Map</a>`,
        );

      map.once("focus", function () {
        map.scrollWheelZoom.enable();
      });

      return () => {
        map.remove();
      };
    }
  }, [latitude, longitude]);

  return (
    <div
      id="map"
      className="z-10 rounded-md"
      style={{ width: "100%", height }}
    />
  );
}
