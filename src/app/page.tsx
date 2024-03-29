import { Slider } from "@/components/home/Slider";
import Image from "next/image";
import { getUserAuth } from "@/lib/auth/utils";
import Link from "next/link";

export default async function Home() {
  const { session } = await getUserAuth();
  return (
    <main className="grow flex flex-col gap-16 w-full max-w-[400px]">
      {session ? (
        <pre className="bg-card p-4 rounded-sm overflow-hidden">
          {JSON.stringify(session, null, 2)}
        </pre>
      ) : null}
      {/* <SignIn /> */}
      <Slider />
      <div className="flex flex-col items-center p-4">
        <strong className="text-2xl w-full text-center mb-8 text-emerald-950">
          Rekomendasi Menu Kami
        </strong>
        <div className="grid grid-cols-4 grid-rows-3 gap-4">
          {[
            {
              image:
                "https://smoothiefactory.net/wp-content/uploads/2019/05/Juice.png",
              menuName: "King Mango",
            },
            {
              image:
                "https://smoothiefactory.net/wp-content/uploads/2019/05/Real-Fruit-Smoothies.png",
              menuName: "King Avocado",
            },
            {
              image:
                "https://smoothiefactory.net/wp-content/uploads/2019/05/All-Natural-Frozen-Yogurt.png",
              menuName: "King Strowberry",
            },
            {
              image:
                "https://smoothiefactory.net/wp-content/uploads/2020/07/Salad-cup-1.png",
              menuName: "King Dragon",
            },
            {
              image:
                "https://smoothiefactory.net/wp-content/uploads/2020/07/Healthy-Halo-Cup.jpg",
              menuName: "King Chocolate",
            },
            {
              image:
                "https://smoothiefactory.net/wp-content/uploads/2019/05/Juice.png",
              menuName: "King Mango",
            },
            {
              image:
                "https://smoothiefactory.net/wp-content/uploads/2019/05/Real-Fruit-Smoothies.png",
              menuName: "King Avocado",
            },
            {
              image:
                "https://smoothiefactory.net/wp-content/uploads/2019/05/All-Natural-Frozen-Yogurt.png",
              menuName: "King Strowberry",
            },
            {
              image:
                "https://smoothiefactory.net/wp-content/uploads/2020/07/Salad-cup-1.png",
              menuName: "King Dragon",
            },
            {
              image:
                "https://smoothiefactory.net/wp-content/uploads/2020/07/Healthy-Halo-Cup.jpg",
              menuName: "King Chocolate",
            },
          ].map((recMenu) => (
            <Link key={recMenu.menuName} href="/purchase?id=xxx123">
              <div className="flex flex-col justify-center items-center hover:opacity-50 rounded-xl">
                <div className="rounded-xl bg-emerald-50/90 p-4">
                  <Image
                    src={recMenu.image}
                    className="aspect-square w-full object-contain"
                    alt="image"
                    width={400}
                    height={400}
                  />
                </div>
                <label className="text-center font-light text-[10px]">
                  {recMenu.menuName}
                </label>
              </div>
            </Link>
          ))}
        </div>
      </div>
      <div className="flex flex-col px-4 text-center bg-emerald-50 py-12 gap-6">
        <h1 className="text-3xl font-bold text-emerald-950">
          Kami Persembahkan Buah Yang Berkualitas
        </h1>
        <p className="text-sm">
          Kami dengan sepenuh hati menyajikan hidangan berkualitas tinggi dengan
          bahan-bahan segar dan asli. Keaslian dan ketulusan dalam setiap sajian
          kami adalah kunci utama kesuksesan.
        </p>
        <div className="grid grid-cols-2 gap-4">
          <Image
            src="https://images.unsplash.com/photo-1543208541-0961a29a8c3d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            className="aspect-square w-full object-cover border-4 border-white"
            alt="image"
            width={400}
            height={400}
          />
          <Image
            src="https://images.unsplash.com/photo-1601039641847-7857b994d704?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            className="aspect-square w-full object-cover border-4 border-white"
            alt="image"
            width={400}
            height={400}
          />
        </div>
      </div>
    </main>
  );
}
