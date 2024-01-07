import { CupSoda } from "lucide-react";

export default function Menus() {
  const iconSize = "h-5 w-5";
  return (
    <main className="grow flex p-4">
      <div className="sticky bottom-0- h-fit top-full bg-white border rounded-full overflow-hidden overflow-x-auto w-full hide-scrollbar">
        <nav className="w-full flex justify-between text-[10px] text-gray-500">
          {[
            {
              icon: (
                <CupSoda
                  strokeWidth={1}
                  className={`${iconSize} text-red-600`}
                />
              ),
              label: "Semua Menu",
            },
            {
              icon: (
                <CupSoda
                  strokeWidth={1}
                  className={`${iconSize} text-green-400`}
                />
              ),
              label: "Vegan Green",
            },
            {
              icon: (
                <CupSoda
                  strokeWidth={1}
                  className={`${iconSize} text-orange-400`}
                />
              ),
              label: "Energy",
            },
            {
              icon: (
                <CupSoda
                  strokeWidth={1}
                  className={`${iconSize} text-purple-400`}
                />
              ),
              label: "Protein",
            },
            {
              icon: (
                <CupSoda
                  strokeWidth={1}
                  className={`${iconSize} text-yellow-400`}
                />
              ),
              label: "Toping",
            },
            {
              icon: <CupSoda strokeWidth={1} className={`${iconSize}`} />,
              label: "Anak-anak",
            },
          ].map((nav) => (
            <button key={nav.label}>
              <input
                type="radio"
                id={nav.label}
                name="smoothies-category"
                className="hidden peer"
                required
              />
              <label
                htmlFor={nav.label}
                className="hover:bg-gray-200/50 peer-checked:text-emerald-800 cursor-pointer px-4 py-2 rounded-full flex flex-col items-center"
              >
                {nav.icon}
                <span className="font-light min-w-max">{nav.label}</span>
              </label>
            </button>
          ))}
        </nav>
      </div>
    </main>
  );
}
