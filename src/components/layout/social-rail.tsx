import Link from "next/link";
import { FaGithub, FaInstagram, FaLinkedinIn, FaXTwitter } from "react-icons/fa6";

import { siteConfig } from "@/config/site";

const iconMap = {
  github: FaGithub,
  linkedin: FaLinkedinIn,
  twitter: FaXTwitter,
  instagram: FaInstagram,
} as const;

export function SocialRail() {
  return (
    <aside className="fixed right-6 top-24 z-40 hidden items-center gap-4 md:flex">
      <div className="h-28 w-px bg-border" aria-hidden="true" />
      <div className="flex flex-col items-center gap-3">
        {siteConfig.socialLinks.map((social) => {
          const Icon = iconMap[social.icon as keyof typeof iconMap];

          return (
            <Link
              key={social.name}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.name}
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border bg-card text-muted-foreground transition hover:text-foreground"
            >
              <Icon className="h-4 w-4" />
            </Link>
          );
        })}
      </div>
    </aside>
  );
}
