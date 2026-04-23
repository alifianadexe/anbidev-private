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
          <h2 className="display-title text-4xl text-white">Learning Tracks</h2>
          <div className="flex flex-wrap gap-2">
            {(Object.keys(modules) as Track[]).map((name) => (
              <button
                key={name}
                onClick={() => setTrack(name)}
                className={`mono-ui rounded-full border px-4 py-2 text-[12px] transition ${
                  track === name
                    ? "border-white bg-white text-black"
                    : "border-[#999999] text-white hover:border-white"
                }`}
              >
                {name}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-5 space-y-4">
          {modules[track].map((item) => (
            <div key={item.title} className="rounded-[6px] border border-[#999999] p-4">
              <div className="flex items-center justify-between gap-2">
                <p className="text-white">{item.title}</p>
                <span className="mono-ui rounded-full border border-[#999999] px-3 py-1 text-[12px] text-white">
                  {item.level}
                </span>
              </div>
              <div className="mt-4 h-2 rounded-full border border-[#999999]">
                <div
                  className="h-2 rounded-full bg-white"
                  style={{ width: `${item.completion}%` }}
                />
              </div>
              <p className="mono-ui mt-2 text-[12px] text-[#999999]">Completion signal: {item.completion}%</p>
            </div>
          ))}
        </div>
      </Panel>

      <Panel className="stagger-in stagger-in-delay-3 lg:col-span-4">
        <h2 className="display-title text-4xl text-white">Program Snapshot</h2>
        <div className="mt-4 space-y-3">
          <Metric name="Active Learners" value="3,280" note="+12% monthly growth" />
          <Metric name="Projects Deployed" value="214" note="Last 30 days" />
          <Metric name="Mentor Sessions" value="56" note="This week" />
        </div>
      </Panel>

      <Panel className="stagger-in stagger-in-delay-4 lg:col-span-12">
        <h2 className="display-title text-4xl text-white">Upcoming Cohorts</h2>
        <div className="mt-4 grid grid-cols-1 gap-3 md:grid-cols-3">
          {[
            "AI Automation for Marketing Teams",
            "RAG Fundamentals for Internal Knowledge",
            "Building Agentic Products End-to-End",
          ].map((cohort) => (
            <div key={cohort} className="rounded-[6px] border border-[#999999] p-4">
              <p className="text-white">{cohort}</p>
              <p className="mt-2 text-sm text-[#999999]">
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
    <div className="rounded-[6px] border border-[#999999] p-4">
      <p className="mono-ui text-[12px] text-[#999999]">{name}</p>
      <p className="mt-2 text-2xl text-white">{value}</p>
      <p className="mono-ui mt-1 text-[12px] text-[#999999]">{note}</p>
    </div>
  );
}
