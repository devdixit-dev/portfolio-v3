import { Navbar } from "@/components/layout/navbar";
import { SocialRail } from "@/components/layout/social-rail";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-background text-foreground">
      <Navbar />
      <SocialRail />
      <main className="mx-auto flex w-full max-w-6xl flex-col px-6 py-20">
        <h1 className="text-balance text-4xl font-bold tracking-tight sm:text-5xl">
          Build your portfolio faster with a clean Next.js foundation.
        </h1>
        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted-foreground">
          This starter includes a production-ready folder structure, Tailwind CSS,
          Lucide icons, and a global light/dark theme switcher.
        </p>
      </main>
    </div>
  );
}
