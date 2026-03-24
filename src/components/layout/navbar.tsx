import Link from "next/link";

import { siteConfig } from "@/config/site";
import { ThemeToggle } from "@/components/theme/theme-toggle";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/90 backdrop-blur">
      <nav className="mx-auto flex w-full max-w-6xl items-center justify-between gap-4 px-6 py-4">
        <Link href="/" className="inline-flex items-center gap-2 text-lg font-semibold tracking-tight text-foreground">
          <span>{siteConfig.name}</span>
        </Link>

        <div className="hidden items-center gap-4 sm:flex md:gap-7">
          {siteConfig.navItems.map((item) => (
            <Link
              key={item}
              href="#"
              className="text-sm font-medium text-muted-foreground transition hover:text-foreground"
            >
              {item}
            </Link>
          ))}
        </div>

        <ThemeToggle />
      </nav>
    </header>
  );
}
