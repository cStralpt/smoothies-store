"use client";
import { Checkbox } from "@/components/ui/checkbox";
import { TMenu } from "../../../type/menus";
import Image from "next/image";

export default function PurchaseList() {
  const menuMap = new Map();
  if (typeof window !== "undefined")
    return (
      <div className="flex flex-col gap-4">
        {localStorage.getItem("menuList") !== null &&
          JSON.parse(localStorage.getItem("menuList") as string).map(
            (smoothie: TMenu) => (
              <div key={smoothie.menuName} className="flex p-2 gap-2">
                <Checkbox
                  id={smoothie.menuName as string}
                  name={smoothie.menuName as string}
                  onCheckedChange={(e) => {
                    if (e === true) {
                      menuMap.set(smoothie.menuName, smoothie.price);
                      console.log({ menuMap });
                    } else {
                      menuMap.delete(smoothie.menuName);
                      console.log({ menuMap });
                    }
                  }}
                  className="h-5 w-5"
                />
                <label
                  htmlFor={smoothie.menuName as string}
                  className="flex grow gap-2"
                >
                  <div className="overflow-hidden rounded-xl border">
                    <Image
                      src={smoothie.image as string}
                      className="aspect-square w-24 h-24 object-contain border-white"
                      alt="smoothies image"
                      width={400}
                      height={400}
                    />
                  </div>
                  <div className="flex flex-col justify-between grow">
                    <div className="">
                      <h1 className="text-xs text-light">
                        {smoothie.menuName}
                      </h1>
                      <b className="text-xs">Rp {smoothie.price}</b>
                    </div>
                    <div className="h-fit border rounded-xl ml-auto">
                      <div className="flex px-2 text-emerald-600 text-xl gap-4">
                        <button className="">-</button>
                        <p className="grow text-center text-sm flex items-center justify-center">
                          1
                        </p>
                        <button className="">+</button>
                      </div>
                    </div>
                  </div>
                </label>
              </div>
            ),
          )}
      </div>
    );
}
