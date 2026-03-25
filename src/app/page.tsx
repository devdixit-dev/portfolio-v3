import { Navbar } from "@/components/layout/navbar";
import { SocialRail } from "@/components/layout/social-rail";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-background text-foreground">
      <Navbar />
      <SocialRail />
      <main className="mx-auto flex w-full max-w-6xl flex-col px-6 py-20">
        <h1 className="text-balance text-4xl font-bold tracking-tight sm:text-xl">
          A
        </h1>
        <h1 className="text-balance text-4xl font-bold sm:text-3xl">
          Software Engineer
        </h1>
        <p className="mt-2 max-w-2xl text-lg leading-relaxed text-muted-foreground">
          Building scalable server-side applications with clean architecture and modern best practices.
        </p>
      </main>
    </div>
  );
}
