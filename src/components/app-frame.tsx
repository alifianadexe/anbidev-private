import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { BrandNav } from "./brand-nav";
import { ThemeToggle } from "./theme-toggle";

type AppFrameProps = {
  eyebrow: string;
  title: string;
  description: string;
  actions?: ReactNode;
  children: ReactNode;
};

export function AppFrame({
  eyebrow,
  title,
  description,
  actions,
  children,
}: AppFrameProps) {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <div className="mx-auto flex w-full max-w-[1720px] flex-col px-4 pb-20 pt-8 md:px-8 md:pt-10">
        <header className="panel elevate stagger-in rounded-[6px] px-5 py-4 md:px-6">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <Link href="/" className="inline-flex items-center" aria-label="AnbiDev Home">
              <Image
                src="/logo.svg"
                alt="AnbiDev logo"
                width={120}
                height={40}
                className="h-8 w-auto invert"
                priority
              />
            </Link>
            <div className="flex items-center gap-2">
              <ThemeToggle />
              <BrandNav />
            </div>
          </div>
        </header>

        <section className="panel stagger-in stagger-in-delay-1 relative mt-6 overflow-hidden rounded-[6px] p-6 md:p-8">
          <p className="mono-ui text-xs text-white">
            {eyebrow}
          </p>
          <h1 className="display-title mt-3 max-w-5xl text-5xl md:text-7xl lg:text-8xl">
            {title}
          </h1>
          <p className="mt-4 max-w-3xl text-sm text-[#999999] md:text-base">
            {description}
          </p>
          {actions ? <div className="mt-6 flex flex-wrap gap-3">{actions}</div> : null}
        </section>

        <main className="mt-6 grid grid-cols-1 gap-5 lg:grid-cols-12">{children}</main>
      </div>
    </div>
  );
}
