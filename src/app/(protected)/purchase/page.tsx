import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { iconSize, iconStrokeWidth } from "@/constants/icon";
import { CupSoda } from "lucide-react";
import Image from "next/image";

export default function Purchase() {
  return (
    <main className="grow">
      <div className="p-2">
        <div className="">
          <div className="flex gap-4 items-center p-2">
            <Checkbox id="smoothies" className="h-5 w-5" />
            <label
              htmlFor="smoothies"
              className="flex gap-[1px] items-center text-emerald-800"
            >
              <CupSoda size={iconSize} strokeWidth={iconStrokeWidth} />
              <strong className="text-xs font-bold text-emerald-950">
                Smoothies
              </strong>
            </label>
          </div>
          <div className="flex flex-col gap-4">
            {[
              {
                menuName: "Avocado Cheese",
                price: 98666,
              },
              {
                menuName: "All Natural Fruit",
                price: 67900,
              },
              {
                menuName: "After Workout",
                price: 137000,
              },
              {
                menuName: "Avocado Cheese",
                price: 98666,
              },
              {
                menuName: "All Natural Fruit",
                price: 67900,
              },
              {
                menuName: "After Workout",
                price: 137000,
              },
              {
                menuName: "Avocado Cheese",
                price: 98666,
              },
              {
                menuName: "All Natural Fruit",
                price: 67900,
              },
              {
                menuName: "After Workout",
                price: 137000,
              },
            ].map((smoothie) => (
              <div key={smoothie.menuName} className="flex p-2 gap-2">
                <Checkbox
                  id={smoothie.menuName}
                  name={smoothie.menuName}
                  className="h-5 w-5"
                />
                <label htmlFor={smoothie.menuName} className="flex grow gap-2">
                  <div className="overflow-hidden rounded-xl border">
                    <Image
                      src="https://www.planetsmoothie.com/assets/webp/menu/newandfeatured/thumb.webp"
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
            ))}
          </div>
        </div>
      </div>
      <div className="sticky bottom-[50px] bg-white/50 backdrop-blur">
        <div className="">
          <div className="mt-auto- p-2 h-fit flex justify-between items-center">
            <div className="text-emerald-950 text-xs flex gap-2 items-center">
              <Checkbox id="select-all-purchase" className="h-5 w-5" />
              <label
                htmlFor="select-all-purchase"
                className="flex gap-[1px] items-center text-emerald-950"
              >
                Semua
              </label>
            </div>
            <div className="flex gap-2 items-center">
              <div className="text-xs text-right text-emerald-950">
                <p className="">Total</p>
                <b className="">Rp 987.000</b>
              </div>
              <Button className="bg-emerald-950 text-emerald-50">Bayar</Button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
