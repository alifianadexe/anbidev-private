import type { ReactNode } from "react";

type PanelProps = {
  className?: string;
  children: ReactNode;
};

export function Panel({ className = "", children }: PanelProps) {
  return <section className={`panel elevate rounded-[6px] p-6 ${className}`}>{children}</section>;
}
