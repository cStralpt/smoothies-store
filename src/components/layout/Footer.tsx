import {
  BadgeDollarSign,
  CupSoda,
  Home,
  MapPinned,
  UserRound,
} from "lucide-react";

export default function Footer() {
  const iconSize = "h-5 w-5";
  return (
    <footer className="footer sticky bottom-0 left-0 z-10 w-full border-t overflow-hidden overflow-x-auto bg-white">
      <nav className="w-full flex justify-between text-[10px] text-gray-500">
        {[
          {
            icon: <Home strokeWidth={1} className={`${iconSize}`} />,
            label: "Home",
          },
          {
            icon: <MapPinned strokeWidth={1} className={`${iconSize}`} />,
            label: "Cabang",
          },
          {
            icon: <CupSoda strokeWidth={1} className={`${iconSize}`} />,
            label: "Menu",
          },
          {
            icon: <BadgeDollarSign strokeWidth={1} className={`${iconSize}`} />,
            label: "Transaksi",
          },
          {
            icon: <UserRound strokeWidth={1} className={`${iconSize}`} />,
            label: "Akun",
          },
        ].map((nav) => (
          <button key={nav.label}>
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
        ))}
      </nav>
    </footer>
  );
}
