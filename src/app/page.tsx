"use client";

import { useMemo, useState } from "react";
import { AppFrame } from "@/components/app-frame";
import { Panel } from "@/components/panel";

type Horizon = "24H" | "7D" | "30D";
type ModelKey = "astra-1" | "nusa-agent" | "batik-reasoner";

const modelStats: Record<
  ModelKey,
  { latency: string; cost: string; success: string; tokens: string }
> = {
  "astra-1": {
    latency: "420ms",
    cost: "$0.006 / 1K tok",
    success: "97.8%",
    tokens: "14.2M",
  },
  "nusa-agent": {
    latency: "610ms",
    cost: "$0.004 / 1K tok",
    success: "96.4%",
    tokens: "22.7M",
  },
  "batik-reasoner": {
    latency: "840ms",
    cost: "$0.009 / 1K tok",
    success: "98.9%",
    tokens: "9.6M",
  },
};

const horizonTraffic: Record<Horizon, number[]> = {
  "24H": [18, 22, 24, 35, 30, 42, 44, 38, 48, 53, 45, 57],
  "7D": [24, 31, 33, 36, 39, 44, 46, 49, 56, 52, 64, 60],
  "30D": [28, 26, 34, 38, 42, 45, 48, 52, 56, 61, 64, 69],
};

const pipeline = [
  {
    name: "Dataset Sync",
    status: "Healthy",
    detail: "6 sources connected, 1.8GB indexed",
    color: "bg-emerald-400",
  },
  {
    name: "Evaluation Grid",
    status: "Running",
    detail: "4 benchmark suites in progress",
    color: "bg-amber-400",
  },
  {
    name: "Safety Guard",
    status: "Online",
    detail: "Policy checks passing at 99.1%",
    color: "bg-sky-400",
  },
];

const commandSuggestions = [
  "Generate weekly AI product brief in Indonesian",
  "Compare model output for fintech onboarding flow",
  "Draft tutorial: Prompt testing with retrieval",
  "Create social snippet for new AnbiDev release",
];

export default function Home() {
  const [horizon, setHorizon] = useState<Horizon>("7D");
  const [model, setModel] = useState<ModelKey>("astra-1");
  const [activeCommand, setActiveCommand] = useState(commandSuggestions[0]);

  const bars = useMemo(() => horizonTraffic[horizon], [horizon]);
  const stats = useMemo(() => modelStats[model], [model]);

  return (
    <AppFrame
      eyebrow="Indonesia AI Builders Hub"
      title="Building practical AI products for teams that move fast."
      description="AnbiDev v2 is focused on applied AI. We combine education, model operations, and product execution so creators can ship real value."
      actions={
        <>
          <button className="rounded-full bg-emerald-400 px-5 py-2.5 text-sm font-semibold text-slate-900 transition hover:bg-emerald-300">
            Explore AI Programs
          </button>
          <button className="rounded-full border border-amber-300/40 bg-amber-300/10 px-5 py-2.5 text-sm font-semibold text-amber-100 transition hover:border-amber-200/70">
            View Product Roadmap
          </button>
        </>
      }
    >
      <Panel className="stagger-in stagger-in-delay-2 lg:col-span-4">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-slate-300">
          Control Tower
        </p>
        <div className="mt-5 space-y-4">
          <div className="rounded-2xl border border-white/10 bg-slate-900/70 p-4">
            <p className="text-xs uppercase tracking-[0.15em] text-slate-400">
              Active Communities
            </p>
            <p className="mt-2 text-3xl font-semibold text-white">15,420</p>
            <p className="mt-1 text-xs text-emerald-300">+18% this month</p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-slate-900/70 p-4">
            <p className="text-xs uppercase tracking-[0.15em] text-slate-400">
              AI Workflow Completion
            </p>
            <p className="mt-2 text-3xl font-semibold text-white">93.7%</p>
            <p className="mt-1 text-xs text-amber-200">Last sync: 2 mins ago</p>
          </div>
        </div>
      </Panel>

      <Panel className="stagger-in stagger-in-delay-2 lg:col-span-8">
        <div className="flex items-center justify-between gap-4">
          <h2 className="text-lg font-semibold text-white">Usage Signal</h2>
          <div className="flex items-center gap-2 rounded-full border border-white/10 bg-slate-950/70 p-1">
            {(["24H", "7D", "30D"] as Horizon[]).map((item) => (
              <button
                key={item}
                onClick={() => setHorizon(item)}
                className={`rounded-full px-3 py-1.5 text-xs font-medium transition ${
                  horizon === item
                    ? "bg-emerald-300 text-slate-900"
                    : "text-slate-300 hover:text-white"
                }`}
              >
                {item}
              </button>
            ))}
          </div>
        </div>
        <div className="mt-6 flex h-52 items-end gap-2 md:gap-3">
          {bars.map((value, idx) => (
            <div key={`${horizon}-${idx}`} className="group flex-1">
              <div
                className="rounded-t-xl bg-gradient-to-t from-emerald-500/35 to-cyan-300/70 transition-all duration-500 group-hover:from-emerald-300 group-hover:to-cyan-100"
                style={{ height: `${value}%` }}
                aria-label={`Chart bar ${idx + 1}: ${value}%`}
              />
            </div>
          ))}
        </div>
        <p className="mt-4 font-mono text-xs uppercase tracking-[0.16em] text-slate-400">
          Engagement from builder cohorts and AI tooling labs
        </p>
      </Panel>

      <Panel className="stagger-in stagger-in-delay-3 lg:col-span-5">
        <div className="flex items-center justify-between gap-2">
          <h2 className="text-lg font-semibold text-white">Model Stack</h2>
          <span className="rounded-full border border-emerald-300/40 bg-emerald-300/10 px-3 py-1 text-xs text-emerald-200">
            Live
          </span>
        </div>
        <div className="mt-4 flex flex-wrap gap-2">
          {(["astra-1", "nusa-agent", "batik-reasoner"] as ModelKey[]).map(
            (item) => (
              <button
                key={item}
                onClick={() => setModel(item)}
                className={`rounded-xl border px-3 py-2 text-xs font-semibold uppercase tracking-[0.12em] transition ${
                  model === item
                    ? "border-emerald-300/70 bg-emerald-200/90 text-slate-900"
                    : "border-white/10 bg-slate-950/60 text-slate-300 hover:text-white"
                }`}
              >
                {item}
              </button>
            ),
          )}
        </div>
        <div className="mt-5 grid grid-cols-2 gap-3">
          <StatCard label="Latency" value={stats.latency} />
          <StatCard label="Cost" value={stats.cost} />
          <StatCard label="Success" value={stats.success} />
          <StatCard label="Tokens" value={stats.tokens} />
        </div>
      </Panel>

      <Panel className="stagger-in stagger-in-delay-3 lg:col-span-7">
        <h2 className="text-lg font-semibold text-white">Command Studio</h2>
        <p className="mt-2 text-sm text-slate-300">
          A builder interface for creating AI workflows, articles, and model
          evaluations in one place.
        </p>
        <div className="mt-5 rounded-2xl border border-white/10 bg-slate-950/70 p-4">
          <p className="font-mono text-xs text-slate-500">prompt://anbidev</p>
          <div className="mt-3 rounded-xl border border-white/10 bg-black/40 p-3 text-sm text-slate-100">
            {activeCommand}
          </div>
          <div className="mt-4 flex flex-wrap gap-2">
            {commandSuggestions.map((command) => (
              <button
                key={command}
                onClick={() => setActiveCommand(command)}
                className={`rounded-lg border px-3 py-2 text-left text-xs transition md:text-sm ${
                  activeCommand === command
                    ? "border-cyan-300/70 bg-cyan-200/15 text-cyan-100"
                    : "border-white/10 text-slate-300 hover:text-white"
                }`}
              >
                {command}
              </button>
            ))}
          </div>
        </div>
      </Panel>

      <Panel className="stagger-in stagger-in-delay-4 lg:col-span-12">
        <h2 className="text-lg font-semibold text-white">Pipeline Health</h2>
        <div className="mt-4 grid grid-cols-1 gap-3 md:grid-cols-3">
          {pipeline.map((item) => (
            <div
              key={item.name}
              className="rounded-2xl border border-white/10 bg-slate-950/60 p-4"
            >
              <div className="flex items-center justify-between">
                <p className="font-medium text-slate-100">{item.name}</p>
                <span className="inline-flex items-center gap-2 text-xs text-slate-300">
                  <span className={`h-2 w-2 rounded-full ${item.color}`} />
                  {item.status}
                </span>
              </div>
              <p className="mt-2 text-sm text-slate-400">{item.detail}</p>
            </div>
          ))}
        </div>
      </Panel>
    </AppFrame>
  );
}

function StatCard({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-slate-950/60 p-3">
      <p className="text-xs uppercase tracking-[0.12em] text-slate-400">{label}</p>
      <p className="mt-2 text-base font-semibold text-white md:text-lg">{value}</p>
    </div>
  );
}
