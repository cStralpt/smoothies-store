import { Slider } from "@/components/home/Slider";
import Image from "next/image";
import { getUserAuth } from "@/lib/auth/utils";

export default async function Home() {
  const { session } = await getUserAuth();
  return (
    <main className="grow">
      {session ? (
        <pre className="bg-card p-4 rounded-sm overflow-hidden">
          {JSON.stringify(session, null, 2)}
        </pre>
      ) : null}
      {/* <SignIn /> */}
      <Slider />
      <div className="flex flex-col items-center p-4">
        <strong className="text-2xl w-full text-center mb-8">
          Rekomendasi Menu Kami
        </strong>
        <div className="grid grid-cols-4 grid-rows-3 gap-4">
          {[
            {
              image:
                "https://smoothiefactory.net/wp-content/uploads/2019/05/Juice.png",
              menuName: "Juice Orange",
            },
            {
              image:
                "https://smoothiefactory.net/wp-content/uploads/2019/05/Real-Fruit-Smoothies.png",
              menuName: "Real Fruit Smoothies",
            },
            {
              image:
                "https://smoothiefactory.net/wp-content/uploads/2019/05/All-Natural-Frozen-Yogurt.png",
              menuName: "All Natural Frozen Yogurt",
            },
            {
              image:
                "https://smoothiefactory.net/wp-content/uploads/2020/07/Salad-cup-1.png",
              menuName: "Baguettes & Wraps",
            },
            {
              image:
                "https://smoothiefactory.net/wp-content/uploads/2020/07/Healthy-Halo-Cup.jpg",
              menuName: "Salads",
            },
            {
              image:
                "https://smoothiefactory.net/wp-content/uploads/2019/05/bowl.png",
              menuName: "Healthy Halo Cups",
            },
            {
              image:
                "https://smoothiefactory.net/wp-content/uploads/2019/05/Juice-Cleanse-Programs.png",
              menuName: "Superfood Bowls",
            },
            {
              image:
                "https://smoothiefactory.net/wp-content/uploads/2020/07/Immunity-Defense.jpg",
              menuName: "Juice Cleanse Programs",
            },
            {
              image:
                "https://smoothiefactory.net/wp-content/uploads/2020/07/Baguettes-Salads-1.png",
              menuName: "Wellness Shots",
            },
          ].map((recMenu) => (
            <div
              key={recMenu.menuName}
              className="flex flex-col justify-center items-center hover:opacity-50 rounded-xl"
            >
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
          ))}
        </div>
      </div>
    </main>
  );
}
