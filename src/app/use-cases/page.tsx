"use client";

import { useMemo, useState } from "react";
import { AppFrame } from "@/components/app-frame";
import { Panel } from "@/components/panel";

type Category = "All" | "Marketing" | "Operations" | "Education" | "Support";

const cases = [
  {
    name: "Campaign Brief Generator",
    category: "Marketing",
    impact: "+47% faster planning",
    status: "Live",
  },
  {
    name: "SOP Assistant for Ops",
    category: "Operations",
    impact: "-33% process delay",
    status: "Pilot",
  },
  {
    name: "Adaptive Learning Coach",
    category: "Education",
    impact: "+29% completion rate",
    status: "Live",
  },
  {
    name: "Smart Ticket Triage",
    category: "Support",
    impact: "-41% first response time",
    status: "Live",
  },
  {
    name: "Automated Insight Reporter",
    category: "Operations",
    impact: "+3x reporting speed",
    status: "Pilot",
  },
  {
    name: "Personalized Prompt Lab",
    category: "Education",
    impact: "+2.4x prompt quality",
    status: "Beta",
  },
];

export default function UseCasesPage() {
  const [category, setCategory] = useState<Category>("All");
  const filtered = useMemo(
    () =>
      category === "All"
        ? cases
        : cases.filter((item) => item.category === category),
    [category],
  );

  return (
    <AppFrame
      eyebrow="AnbiDev Use Cases"
      title="AI solutions designed for outcomes, not hype."
      description="A playbook of repeatable implementations we use to help teams adopt AI with measurable impact."
    >
      <Panel className="stagger-in stagger-in-delay-2 lg:col-span-12">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <h2 className="display-title text-4xl text-white">Solution Library</h2>
          <div className="flex flex-wrap gap-2">
            {(["All", "Marketing", "Operations", "Education", "Support"] as Category[]).map(
              (item) => (
                <button
                  key={item}
                  onClick={() => setCategory(item)}
                  className={`mono-ui rounded-full border px-4 py-2 text-[12px] transition ${
                    category === item
                      ? "border-white bg-white text-black"
                      : "border-[#999999] text-white hover:border-white"
                  }`}
                >
                  {item}
                </button>
              ),
            )}
          </div>
        </div>

        <div className="mt-5 grid grid-cols-1 gap-3 md:grid-cols-2 xl:grid-cols-3">
          {filtered.map((item) => (
            <div key={item.name} className="rounded-[6px] border border-[#999999] p-4">
              <div className="flex items-center justify-between gap-2">
                <p className="text-white">{item.name}</p>
                <span className="mono-ui rounded-full border border-[#999999] px-2.5 py-1 text-[12px] text-white">
                  {item.status}
                </span>
              </div>
              <p className="mono-ui mt-3 text-[12px] text-[#999999]">{item.category}</p>
              <p className="mt-2 text-sm text-white">{item.impact}</p>
            </div>
          ))}
        </div>
      </Panel>

      <Panel className="stagger-in stagger-in-delay-3 lg:col-span-6">
        <h2 className="display-title text-4xl text-white">Implementation Cycle</h2>
        <ol className="mt-4 space-y-3 text-sm text-[#999999]">
          <li className="rounded-[6px] border border-[#999999] p-3">1. Identify repetitive work and baseline KPI.</li>
          <li className="rounded-[6px] border border-[#999999] p-3">2. Build a focused AI flow with fallback controls.</li>
          <li className="rounded-[6px] border border-[#999999] p-3">3. Test with team users and monitor quality gates.</li>
          <li className="rounded-[6px] border border-[#999999] p-3">4. Launch and track business impact weekly.</li>
        </ol>
      </Panel>

      <Panel className="stagger-in stagger-in-delay-4 lg:col-span-6">
        <h2 className="display-title text-4xl text-white">Performance Snapshot</h2>
        <div className="mt-4 space-y-3">
          <Snapshot name="Avg. Time Saved" value="31%" />
          <Snapshot name="Quality Score Lift" value="+24 pts" />
          <Snapshot name="Adoption After 14 Days" value="78%" />
        </div>
      </Panel>
    </AppFrame>
  );
}

function Snapshot({ name, value }: { name: string; value: string }) {
  return (
    <div className="rounded-[6px] border border-[#999999] p-4">
      <p className="mono-ui text-[12px] text-[#999999]">{name}</p>
      <p className="mt-2 text-2xl text-white">{value}</p>
    </div>
  );
}
