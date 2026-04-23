"use client";

import { useState } from "react";
import { AppFrame } from "@/components/app-frame";
import { Panel } from "@/components/panel";

type Track = "Builder" | "Prompt Engineer" | "AI Product";

const modules: Record<Track, { title: string; level: string; completion: number }[]> = {
  Builder: [
    { title: "AI Workflow Basics", level: "Starter", completion: 88 },
    { title: "No-Code Agent Orchestration", level: "Intermediate", completion: 64 },
    { title: "Production Observability", level: "Advanced", completion: 41 },
  ],
  "Prompt Engineer": [
    { title: "Prompt Design Patterns", level: "Starter", completion: 92 },
    { title: "Prompt Test Harness", level: "Intermediate", completion: 58 },
    { title: "Safety and Red Teaming", level: "Advanced", completion: 36 },
  ],
  "AI Product": [
    { title: "AI Product Discovery", level: "Starter", completion: 81 },
    { title: "Human-in-the-Loop UX", level: "Intermediate", completion: 52 },
    { title: "AI KPI and Rollout", level: "Advanced", completion: 33 },
  ],
};

export default function AcademyPage() {
  const [track, setTrack] = useState<Track>("Builder");

  return (
    <AppFrame
      eyebrow="AnbiDev Academy"
      title="Learn AI by shipping real products, not just watching tutorials."
      description="Structured tracks for Indonesian builders. Each module is tied to a mini project so your learning ends with a deployable result."
    >
      <Panel className="stagger-in stagger-in-delay-2 lg:col-span-8">
        <div className="flex items-center justify-between gap-3">
          <h2 className="text-lg font-semibold text-white">Learning Tracks</h2>
          <div className="flex flex-wrap gap-2">
            {(Object.keys(modules) as Track[]).map((name) => (
              <button
                key={name}
                onClick={() => setTrack(name)}
                className={`rounded-full border px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.12em] transition ${
                  track === name
                    ? "border-emerald-300/70 bg-emerald-300 text-slate-900"
                    : "border-white/10 text-slate-300 hover:text-white"
                }`}
              >
                {name}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-5 space-y-4">
          {modules[track].map((item) => (
            <div key={item.title} className="rounded-2xl border border-white/10 bg-slate-950/60 p-4">
              <div className="flex items-center justify-between gap-2">
                <p className="font-medium text-white">{item.title}</p>
                <span className="rounded-full border border-cyan-300/40 bg-cyan-300/10 px-3 py-1 text-xs text-cyan-100">
                  {item.level}
                </span>
              </div>
              <div className="mt-4 h-2 rounded-full bg-slate-800">
                <div
                  className="h-2 rounded-full bg-gradient-to-r from-emerald-400 to-cyan-300"
                  style={{ width: `${item.completion}%` }}
                />
              </div>
              <p className="mt-2 text-xs text-slate-400">Completion signal: {item.completion}%</p>
            </div>
          ))}
        </div>
      </Panel>

      <Panel className="stagger-in stagger-in-delay-3 lg:col-span-4">
        <h2 className="text-lg font-semibold text-white">Program Snapshot</h2>
        <div className="mt-4 space-y-3">
          <Metric name="Active Learners" value="3,280" note="+12% monthly growth" />
          <Metric name="Projects Deployed" value="214" note="Last 30 days" />
          <Metric name="Mentor Sessions" value="56" note="This week" />
        </div>
      </Panel>

      <Panel className="stagger-in stagger-in-delay-4 lg:col-span-12">
        <h2 className="text-lg font-semibold text-white">Upcoming Cohorts</h2>
        <div className="mt-4 grid grid-cols-1 gap-3 md:grid-cols-3">
          {[
            "AI Automation for Marketing Teams",
            "RAG Fundamentals for Internal Knowledge",
            "Building Agentic Products End-to-End",
          ].map((cohort) => (
            <div key={cohort} className="rounded-2xl border border-white/10 bg-slate-950/60 p-4">
              <p className="font-medium text-slate-100">{cohort}</p>
              <p className="mt-2 text-sm text-slate-400">
                Practical cohort with guided project, peer review, and demo day.
              </p>
            </div>
          ))}
        </div>
      </Panel>
    </AppFrame>
  );
}

function Metric({ name, value, note }: { name: string; value: string; note: string }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-slate-950/60 p-4">
      <p className="text-xs uppercase tracking-[0.12em] text-slate-400">{name}</p>
      <p className="mt-2 text-2xl font-semibold text-white">{value}</p>
      <p className="mt-1 text-xs text-emerald-300">{note}</p>
    </div>
  );
}
