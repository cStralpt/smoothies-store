import { ShoppingBasket } from "lucide-react";
import Image from "next/image";
import React from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "../ui/card";

export default function TransactionCard({
  date,
  menu,
  isFinish,
  purchaseTotal,
}: {
  date: string;
  menu: Array<string>;
  isFinish: boolean;
  purchaseTotal: number;
}) {
  return (
    <Card className="p-2">
      <CardHeader className="flex-row py-2 px-0 items-center justify-between gap-2 border-b mx-2">
        <div className="flex items-center gap-2">
          <ShoppingBasket strokeWidth={1} />
          <div className="">
            <CardTitle className="text-xs">Smoothies</CardTitle>
            <CardDescription className="text-xs">{date}</CardDescription>
          </div>
        </div>
        <div className="h-full flex items-center">
          {isFinish ? (
            <span className="bg-emerald-100 text-emerald-600 text-[10px] font-bold p-1 rounded-sm">
              Selesai
            </span>
          ) : (
            <span className="bg-red-100 text-red-600 text-[10px] font-bold p-1 rounded-sm">
              Batal
            </span>
          )}
        </div>
      </CardHeader>
      <CardContent className="flex items-center p-2 gap-2">
        <Image
          src="https://www.planetsmoothie.com/assets/webp/menu/newandfeatured/thumb.webp"
          className="aspect-square w-10 h-10 object-contain border-white overflow-hidden rounded-sm"
          alt="smoothies image"
          width={400}
          height={400}
        />
        <div className="">
          <h1 className="text-xl font-bold">{menu[0]}</h1>
          <p className="text-[10px]">{menu.length} Barang</p>
        </div>
      </CardContent>
      <CardFooter className="flex justify-between p-2">
        <div className="">
          <p className="text-[10px]">Total Belanja</p>
          <b className="text-sm">Rp {purchaseTotal}</b>
        </div>
        <button className="p-2 text-xs rounded-sm border border-emerald-600 text-emerald-600">
          Beli Lagi
        </button>
      </CardFooter>
    </Card>
  );
}
