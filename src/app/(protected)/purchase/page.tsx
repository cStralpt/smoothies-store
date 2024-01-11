import { PayDrawer } from "@/components/purchase/PaymentDrawer";
import PurchaseList from "@/components/purchase/PurchaseList";
import { Checkbox } from "@/components/ui/checkbox";
import { iconSize, iconStrokeWidth } from "@/constants/icon";
import { CupSoda } from "lucide-react";

export default function Purchase() {
  return (
    <main className="grow">
      <div className="p-2 h-full">
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
          <PurchaseList />
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
              <PayDrawer />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
