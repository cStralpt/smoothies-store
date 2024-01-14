import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Pencil } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { containerWidth } from "@/constants/container";

export default function Account() {
  return (
    <main
      className={`p-4 grow flex flex-col gap-8 text-emerald-950 w-full ${containerWidth}`}
    >
      <div className="flex justify-between items-center">
        <div className="flex gap-4 items-center">
          <Avatar className="h-20 w-20">
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <div className="">
            <b className="text-xl">Satria Alipatullah</b>
            <p className="text-xs font-light">085930970697</p>
            <p className="text-xs font-light">satrialipatullah@gmail.com</p>
          </div>
        </div>
        <Pencil strokeWidth={1} />
      </div>
      <div className="bg-white p-4 rounded-xl border flex flex-col">
        <div className="">
          <h1 className="text-xl pb-2 font-bold">Keamanan Akun</h1>
          <form className="flex flex-col gap-4">
            <Input
              type="password"
              placeholder="Kata Sandi"
              className="placeholder:text-xs text-xs"
            />
            <Input
              type="password"
              placeholder="Konfirmasi Kata Sandi"
              className="placeholder:text-xs text-xs"
            />
            <Button className="bg-emerald-950 text-emerald-50">Simpan</Button>
          </form>
        </div>
      </div>
    </main>
  );
}
