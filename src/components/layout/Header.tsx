import { Bell, ShoppingCart } from "lucide-react";

export default function Header() {
  return (
    <header className="flex p-2 w-full max-w-[400px]">
      <input
        type="text"
        placeholder="Avocado Cheese"
        className="grow border rounded-xl p-2 placeholder:text-sm"
      />
      <div className="flex justify-center items-center p-2 gap-4">
        <div className="relative">
          <Bell strokeWidth={1} />
          <span className="px-1 rounded-full bg-red-600 text-white absolute -top-1 -right-1 text-xs">
            8
          </span>
        </div>
        <ShoppingCart strokeWidth={1} />
      </div>
    </header>
  );
}
