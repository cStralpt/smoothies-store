"use client";
import * as React from "react";
import { Button } from "@/components/ui/button";
import QRCode from "react-qr-code";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";

export function PayDrawer() {
  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button className="bg-emerald-950 text-emerald-50" variant="ghost">
          Pembayaran
        </Button>
      </DrawerTrigger>
      <DrawerContent>
        <div className="mx-auto w-full max-w-sm">
          <DrawerHeader>
            <DrawerTitle>Pembayaran</DrawerTitle>
            <DrawerDescription>
              Scan QR Code di Bawah Untuk Bayar
            </DrawerDescription>
          </DrawerHeader>
          <div className="p-4 pb-0 m-0">
            <div className="flex items-center justify-center space-x-2 max-w-[200px] mx-auto">
              <QRCode
                size={256}
                style={{ height: "100%", maxWidth: "100%", width: "100%" }}
                value={`https://link.dana.id/minta/2ti5ce4ldul?params=[source=request_money]`}
                viewBox={`0 0 256 256`}
              />
            </div>
          </div>
          <DrawerFooter className="flex-row gap-2 grow mt-4">
            <Button
              className="grow bg-emerald-950 text-emerald-50"
              onClick={() =>
                open(
                  "https://link.dana.id/minta/2ti5ce4ldul?params=[source=request_money]",
                )
              }
            >
              App Dana
            </Button>
            <DrawerClose asChild className="grow">
              <Button variant="outline">Batal</Button>
            </DrawerClose>
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
  );
}
