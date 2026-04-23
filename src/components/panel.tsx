import type { ReactNode } from "react";

type PanelProps = {
  className?: string;
  children: ReactNode;
};

export function Panel({ className = "", children }: PanelProps) {
  return <section className={`panel elevate rounded-3xl p-6 ${className}`}>{children}</section>;
}
