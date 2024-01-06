import { getUserAuth } from "@/lib/auth/utils";

export default async function Home() {
  const { session } = await getUserAuth();
  return (
    <main className="space-y-4 border-4 border-emerald-500 h-full">
      {session ? (
        <pre className="bg-card p-4 rounded-sm overflow-hidden">
          {JSON.stringify(session, null, 2)}
        </pre>
      ) : null}
      {/* <SignIn /> */}
    </main>
  );
}
