import type { ReactNode } from "react";
import { BrandNav } from "./brand-nav";

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
      <div className="mx-auto flex w-full max-w-7xl flex-col px-4 pb-20 pt-8 md:px-8 md:pt-10">
        <header className="panel elevate stagger-in rounded-2xl px-5 py-4 md:px-6">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <span className="pulse-dot inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400" />
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-slate-300">
                AnbiDev v2
              </p>
            </div>
            <BrandNav />
          </div>
        </header>

        <section className="panel stagger-in stagger-in-delay-1 scanlines relative mt-6 overflow-hidden rounded-3xl p-6 md:p-8">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-emerald-200/80">
            {eyebrow}
          </p>
          <h1 className="mt-3 max-w-4xl text-3xl font-semibold leading-tight text-white md:text-5xl">
            {title}
          </h1>
          <p className="mt-4 max-w-3xl text-sm text-slate-300 md:text-base">
            {description}
          </p>
          {actions ? <div className="mt-6 flex flex-wrap gap-3">{actions}</div> : null}
        </section>

        <main className="mt-6 grid grid-cols-1 gap-5 lg:grid-cols-12">{children}</main>
      </div>
    </div>
  );
}
