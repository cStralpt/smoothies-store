import TransactionCard from "@/components/transaction/TransactionCard";

export default function Transaction() {
  return (
    <main className="grow p-4">
      <div className="flex flex-col gap-4">
        {[
          {
            date: "28 Januari 2024",
            menu: ["Smoothie King"],
            isFinish: true,
            purchaseTotal: 78000,
          },
          {
            date: "08 Maret 2024",
            menu: ["Avocado Cheese"],
            isFinish: false,
            purchaseTotal: 97000,
          },
          {
            date: "28 Januari 2024",
            menu: ["Smoothie King"],
            isFinish: true,
            purchaseTotal: 78000,
          },
          {
            date: "08 Maret 2024",
            menu: ["Avocado Cheese"],
            isFinish: false,
            purchaseTotal: 97000,
          },
          {
            date: "28 Januari 2024",
            menu: ["Smoothie King"],
            isFinish: true,
            purchaseTotal: 78000,
          },
          {
            date: "08 Maret 2024",
            menu: ["Avocado Cheese"],
            isFinish: false,
            purchaseTotal: 97000,
          },
        ].map((trx) => (
          <TransactionCard
            key={trx.date}
            date={trx.date}
            menu={trx.menu}
            isFinish={trx.isFinish}
            purchaseTotal={trx.purchaseTotal}
          />
        ))}
      </div>
    </main>
  );
}
