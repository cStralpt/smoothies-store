import { iconSize, iconStrokeWidth } from "@/constants/icon";
import { CupSoda } from "lucide-react";
import Image from "next/image";

export default function Menus() {
  return (
    <main className="grow flex flex-col gap-4 py-4">
      <div className="">
        <div className="flex p-4 bg-emerald-800 text-emerald-50 items-center my-8 gap-4">
          <div className="flex flex-col items-center justify-center">
            <b className="text-xl">8</b>
            <div className="text-xs font-light">Menu Tersedia</div>
          </div>
          <div className="grow border-l-2 pl-2">
            <h1 className="text-2xl grow">Semua Menu</h1>
            <p className="text-xs font-light grow">
              Nikmati pilihan tanpa batas
            </p>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4 p-4">
          {[
            {
              image:
                "https://www.planetsmoothie.com/assets/webp/menu/newandfeatured/thumb.webp",
              menuName: "CupSoda",
            },
            {
              image:
                "https://www.planetsmoothie.com/assets/webp/menu/planetfavorites/thumb.webp",
              menuName: "CupSoda",
            },
            {
              image:
                "https://www.planetsmoothie.com/assets/webp/menu/energy/thumb.webp",
              menuName: "CupSoda",
            },
            {
              image:
                "https://www.planetsmoothie.com/assets/webp/menu/superfood/thumb.webp",
              menuName: "CupSoda",
            },
            {
              image:
                "https://www.planetsmoothie.com/assets/webp/menu/protein/thumb.webp",
              menuName: "CupSoda",
            },
            {
              image:
                "https://www.planetsmoothie.com/assets/webp/menu/mealreplacement/thumb.webp",
              menuName: "CupSoda",
            },
            {
              image:
                "https://www.planetsmoothie.com/assets/webp/menu/planetkids/thumb.webp",
              menuName: "CupSoda",
            },
          ].map((smoothie) => (
            <div
              key={smoothie.menuName}
              className="flex flex-col hover:opacity-50"
            >
              <div className="">
                <Image
                  src={smoothie.image}
                  className="aspect-auto w-full object-contain border-white"
                  alt="smoothies image"
                  width={400}
                  height={400}
                />
              </div>
              <b className="w-full text-center bg-gray-200 text-emerald-950 p-4 rounded-b-[30px]">
                {smoothie.menuName}
              </b>
            </div>
          ))}
        </div>
      </div>
      <div className="sticky bottom-14 h-fit">
        <div className="h-fit bg-white border rounded-full overflow-hidden overflow-x-auto w-full hide-scrollbar">
          <nav className="w-full flex justify-between text-[10px] text-gray-500">
            {[
              {
                icon: (
                  <CupSoda
                    strokeWidth={iconStrokeWidth}
                    className={`${iconSize} text-red-600`}
                  />
                ),
                label: "Semua Menu",
              },
              {
                icon: (
                  <CupSoda
                    strokeWidth={iconStrokeWidth}
                    className={`${iconSize} text-green-400`}
                  />
                ),
                label: "Vegan Green",
              },
              {
                icon: (
                  <CupSoda
                    strokeWidth={iconStrokeWidth}
                    className={`${iconSize} text-orange-400`}
                  />
                ),
                label: "Energy",
              },
              {
                icon: (
                  <CupSoda
                    strokeWidth={iconStrokeWidth}
                    className={`${iconSize} text-purple-400`}
                  />
                ),
                label: "Protein",
              },
              {
                icon: (
                  <CupSoda
                    strokeWidth={iconStrokeWidth}
                    className={`${iconSize} text-yellow-400`}
                  />
                ),
                label: "Toping",
              },
              {
                icon: (
                  <CupSoda
                    strokeWidth={iconStrokeWidth}
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
