import MapLocation from "@/components/MapLocation";
import React from "react";
import { Map } from "lucide-react";

export default function Locations() {
  return (
    <main className="grow">
      <div className="p-4">
        <b className="text-2xl text-emerald-950 flex gap-4 items-center">
          <Map className="w-16 h-16" />
          Lokasi Cabang King Smoothies
        </b>
        <MapLocation
          latitude={-8.6529017}
          longitude={116.5350673}
          height="350px"
        />
      </div>
    </main>
  );
}
