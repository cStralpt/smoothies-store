import TransactionCard from "@/components/transaction/TransactionCard";

export default function Transaction() {
  return (
    <main className="grow p-4">
      <div className="flex flex-col gap-4">
        {[
          {
            date: "08 Januari 2024",
            menu: ["King Dragon"],
            isFinish: true,
            purchaseTotal: 15000,
            image:
              "https://www.planetsmoothie.com/assets/webp/menu/protein/thumb.webp",
          },
          {
            date: "09 Januari 2024",
            image:
              "https://www.planetsmoothie.com/assets/webp/menu/newandfeatured/thumb.webp",
            menu: ["King Strowberry"],
            isFinish: false,
            purchaseTotal: 15000,
          },
          {
            date: "10 Januari 2024",
            image:
              "https://www.planetsmoothie.com/assets/webp/menu/energy/thumb.webp",
            menu: ["King Chocolate"],
            isFinish: true,
            purchaseTotal: 15000,
          },
          {
            date: "11 Januari 2024",
            image:
              "https://www.planetsmoothie.com/assets/webp/menu/planetfavorites/thumb.webp",
            menu: ["King Manggo"],
            isFinish: false,
            purchaseTotal: 15000,
          },
          {
            date: "12 Januari 2024",
            image:
              "https://www.planetsmoothie.com/assets/webp/menu/superfood/thumb.webp",
            menu: ["King Avocado"],
            isFinish: true,
            purchaseTotal: 15000,
          },
        ].map((trx) => (
          <TransactionCard
            key={trx.date}
            date={trx.date}
            menu={trx.menu}
            image={trx.image}
            isFinish={trx.isFinish}
            purchaseTotal={trx.purchaseTotal}
          />
        ))}
      </div>
    </main>
  );
}
