import MenuList from "@/components/menus/MenuList";
import { containerWidth } from "@/constants/container";
import { iconSize, iconStrokeWidth } from "@/constants/icon";
import { CupSoda } from "lucide-react";

export default function Menus() {
  return (
    <main className={`grow flex flex-col gap-4 py-4 w-full ${containerWidth}`}>
      <div className="">
        <div className="flex p-4 bg-emerald-800 text-emerald-50 items-center my-8 gap-4">
          <div className="flex flex-col items-center justify-center">
            <b className="text-xl">5</b>
            <div className="text-xs font-light">Menu Tersedia</div>
          </div>
          <div className="grow border-l-2 pl-2">
            <h1 className="text-2xl grow">Semua Menu</h1>
            <p className="text-xs font-light grow">
              Nikmati pilihan tanpa batas
            </p>
          </div>
        </div>
        <MenuList />
      </div>
      <div className="sticky bottom-14 h-fit">
        <div className="h-fit bg-white/50 backdrop-blur border rounded-full overflow-hidden overflow-x-auto w-full hide-scrollbar">
          <nav className="w-full flex justify-between text-[10px] text-gray-500">
            {[
              {
                icon: (
                  <CupSoda
                    strokeWidth={iconStrokeWidth}
                    size={iconSize}
                    className={`text-red-600`}
                  />
                ),
                label: "Semua Menu",
              },
              {
                icon: (
                  <CupSoda
                    strokeWidth={iconStrokeWidth}
                    size={iconSize}
                    className={`text-green-400`}
                  />
                ),
                label: "Vegan Green",
              },
              {
                icon: (
                  <CupSoda
                    strokeWidth={iconStrokeWidth}
                    size={iconSize}
                    className={`text-orange-400`}
                  />
                ),
                label: "Energy",
              },
              {
                icon: (
                  <CupSoda
                    strokeWidth={iconStrokeWidth}
                    size={iconSize}
                    className={`text-purple-400`}
                  />
                ),
                label: "Protein",
              },
              {
                icon: (
                  <CupSoda
                    strokeWidth={iconStrokeWidth}
                    size={iconSize}
                    className={`text-yellow-400`}
                  />
                ),
                label: "Toping",
              },
              {
                icon: (
                  <CupSoda
                    strokeWidth={iconStrokeWidth}
                    size={iconSize}
                    className={`${iconSize}`}
                  />
                ),
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
      </div>
    </main>
  );
}
