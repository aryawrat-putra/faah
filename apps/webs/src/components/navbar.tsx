"use client";

import { Link} from "@heroui/react";

import { siteConfig } from "@/config/site";
import { ThemeSwitch } from "@/components/theme-switch";
import {GithubIcon,Logo,} from "@/components/icons";

export const Navbar = () => {
  return (
    <nav className="sticky top-0 z-40 w-full border-b border-separator bg-background/70 backdrop-blur-lg">
      <header className="mx-auto flex h-16 max-w-[1280px] items-center justify-between gap-4 px-6">
        <div className="flex items-center gap-4">
          <a className="flex items-center gap-2" href="/">
            <Logo />
            <p className="font-bold text-2xl">Faah</p>
          </a>
        </div>

        <div className="hidden sm:flex items-center gap-4">
          <Link
            aria-label="Github"
            href={siteConfig.links.github}
            rel="noopener noreferrer"
            target="_blank"
          >
            <GithubIcon className="text-muted" />
          </Link>
          <ThemeSwitch />
          </div>

        <div className="flex sm:hidden items-center gap-4">
          <Link
            aria-label="Github"
            href={siteConfig.links.github}
            rel="noopener noreferrer"
            target="_blank"
          >
            <GithubIcon className="text-muted" />
          </Link>
          <ThemeSwitch />
        </div>
      </header>
    </nav>
  );
};
