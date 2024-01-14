import { containerWidth } from "@/constants/container";
import { iconStrokeWidth, iconSize } from "@/constants/icon";
import {
  BadgeDollarSign,
  CupSoda,
  Home,
  MapPinned,
  UserRound,
} from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer
      className={`sticky bottom-0 bg-white border-t w-full ${containerWidth}`}
    >
      <nav className="w-full flex justify-between text-[10px] text-gray-500">
        {[
          {
            icon: (
              <Home
                strokeWidth={iconStrokeWidth}
                size={iconSize}
                className={`${iconSize}`}
              />
            ),
            label: "Home",
            destination: "/",
          },
          {
            icon: (
              <MapPinned
                strokeWidth={iconStrokeWidth}
                size={iconSize}
                className={`${iconSize}`}
              />
            ),
            label: "Cabang",
            destination: "/locations",
          },
          {
            icon: (
              <CupSoda
                strokeWidth={iconStrokeWidth}
                size={iconSize}
                className={`${iconSize}`}
              />
            ),
            label: "Menu",
            destination: "/menus",
          },
          {
            icon: (
              <BadgeDollarSign
                strokeWidth={iconStrokeWidth}
                size={iconSize}
                className={`${iconSize}`}
              />
            ),
            label: "Transaksi",
            destination: "/transactions",
          },
          {
            icon: (
              <UserRound
                strokeWidth={iconStrokeWidth}
                size={iconSize}
                className={`${iconSize}`}
              />
            ),
            label: "Akun",
            destination: "/account",
          },
        ].map((nav) => (
          <Link href={nav.destination} key={nav.label}>
            <button>
              <input
                type="radio"
                id={nav.label}
                name="nav-menu"
                className="hidden peer"
                required
              />
              <label
                htmlFor={nav.label}
                className="hover:bg-gray-200/50 peer-checked:text-emerald-800 cursor-pointer px-4 py-2 rounded-xl flex flex-col items-center"
              >
                {nav.icon}
                <span className="font-light">{nav.label}</span>
              </label>
            </button>
          </Link>
        ))}
      </nav>
    </footer>
  );
}
