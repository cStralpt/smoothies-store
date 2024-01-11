"use client";
import Link from "next/link";
import Image from "next/image";
import { TMenuList } from "../../../type/menus";

export default function MenuList() {
  let menuList: TMenuList = [];
  return (
    <div className="grid grid-cols-2 gap-4 p-4">
      {[
        {
          image:
            "https://www.planetsmoothie.com/assets/webp/menu/newandfeatured/thumb.webp",
          menuName: "King Mango",
        },
        {
          image:
            "https://www.planetsmoothie.com/assets/webp/menu/planetfavorites/thumb.webp",
          menuName: "King Avocado",
        },
        {
          image:
            "https://www.planetsmoothie.com/assets/webp/menu/energy/thumb.webp",
          menuName: "King Strowberry",
        },
        {
          image:
            "https://www.planetsmoothie.com/assets/webp/menu/superfood/thumb.webp",
          menuName: "King Dragon",
        },
        {
          image:
            "https://www.planetsmoothie.com/assets/webp/menu/protein/thumb.webp",
          menuName: "King Chocolate",
        },
      ].map((smoothie) => (
        <Link
          key={smoothie.menuName}
          href="/purchase?id=xxx123"
          onClick={() => {
            if (localStorage.getItem("menuList") === null) {
              const newMenu = {
                ...smoothie,
                price: 15000,
              };
              menuList.push(newMenu);
              localStorage.setItem("menuList", JSON.stringify(menuList));
            } else {
              if (localStorage.getItem("menuList") !== null) {
                menuList = JSON.parse(
                  localStorage.getItem("menuList") as string,
                ) as typeof menuList;
              }
              const newMenu = {
                ...smoothie,
                price: 15000,
              };
              menuList.push(newMenu);
              localStorage.setItem("menuList", JSON.stringify(menuList));
            }
          }}
        >
          <div className="flex flex-col hover:opacity-50">
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
              <p className="font-semibold text-emerald-600">
                {smoothie.menuName}
              </p>
              <p className="text-xs font-bold">Rp.15K</p>
            </b>
          </div>
        </Link>
      ))}
    </div>
  );
}
