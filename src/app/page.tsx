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
  "astra-1": { latency: "420ms", cost: "$0.006 / 1K tok", success: "97.8%", tokens: "14.2M" },
  "nusa-agent": { latency: "610ms", cost: "$0.004 / 1K tok", success: "96.4%", tokens: "22.7M" },
  "batik-reasoner": { latency: "840ms", cost: "$0.009 / 1K tok", success: "98.9%", tokens: "9.6M" },
};

const horizonTraffic: Record<Horizon, number[]> = {
  "24H": [18, 22, 24, 35, 30, 42, 44, 38, 48, 53, 45, 57],
  "7D": [24, 31, 33, 36, 39, 44, 46, 49, 56, 52, 64, 60],
  "30D": [28, 26, 34, 38, 42, 45, 48, 52, 56, 61, 64, 69],
};

const pipeline = [
  { name: "Dataset Sync", status: "Healthy", detail: "6 sources connected, 1.8GB indexed" },
  { name: "Evaluation Grid", status: "Running", detail: "4 benchmark suites in progress" },
  { name: "Safety Guard", status: "Online", detail: "Policy checks passing at 99.1%" },
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
      description="AnbiDev is focused on applied AI. We combine education, model operations, and product execution so creators can ship real value."
      actions={
        <>
          <button className="btn-pill">Explore AI Programs</button>
          <button className="btn-pill">View Product Roadmap</button>
        </>
      }
    >
      <Panel className="stagger-in stagger-in-delay-2 interactive-card lg:col-span-4">
        <p className="mono-ui text-xs text-white">Control Tower</p>
        <div className="mt-5 space-y-4">
          <div className="interactive-tile rounded-[6px] border border-[#999999] p-4">
            <p className="mono-ui text-[12px] text-[#999999]">Active Communities</p>
            <p className="mt-2 text-3xl text-white">15,420</p>
            <p className="mt-1 text-xs text-[#999999]">+18% this month</p>
          </div>
          <div className="interactive-tile rounded-[6px] border border-[#999999] p-4">
            <p className="mono-ui text-[12px] text-[#999999]">AI Workflow Completion</p>
            <p className="mt-2 text-3xl text-white">93.7%</p>
            <p className="mt-1 text-xs text-[#999999]">Last sync: 2 mins ago</p>
          </div>
        </div>
      </Panel>

      <Panel className="stagger-in stagger-in-delay-2 interactive-card lg:col-span-8">
        <div className="flex items-center justify-between gap-4">
          <h2 className="display-title line-heading text-4xl text-white">Usage Signal</h2>
          <div className="flex items-center gap-2 rounded-full border border-[#999999] p-1">
            {(["24H", "7D", "30D"] as Horizon[]).map((item) => (
              <button
                key={item}
                onClick={() => setHorizon(item)}
                className={`mono-ui tab-animate rounded-full px-3 py-1.5 text-[12px] transition ${
                  horizon === item
                    ? "bg-white text-black border border-white"
                    : "text-white border border-transparent hover:border-white"
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
                className="bar-animate rounded-t-[6px] border border-[#999999] bg-white/20 transition group-hover:bg-white/35"
                style={{ height: `${value}%`, animationDelay: `${idx * 45}ms` }}
                aria-label={`Chart bar ${idx + 1}: ${value}%`}
              />
            </div>
          ))}
        </div>
        <p className="mono-ui mt-4 text-[12px] text-[#999999]">
          Engagement from builder cohorts and AI tooling labs
        </p>
      </Panel>

      <Panel className="stagger-in stagger-in-delay-3 interactive-card lg:col-span-5">
        <div className="flex items-center justify-between gap-2">
          <h2 className="display-title line-heading text-4xl text-white">Model Stack</h2>
          <span className="mono-ui rounded-full border border-white px-3 py-1 text-[12px] text-white">
            Live
          </span>
        </div>
        <div className="mt-4 flex flex-wrap gap-2">
          {(["astra-1", "nusa-agent", "batik-reasoner"] as ModelKey[]).map((item) => (
            <button
              key={item}
              onClick={() => setModel(item)}
              className={`mono-ui tab-animate rounded-[6px] border px-3 py-2 text-[12px] transition ${
                model === item
                  ? "border-white bg-white text-black"
                  : "border-[#999999] text-white hover:border-white"
              }`}
            >
              {item}
            </button>
          ))}
        </div>
        <div className="mt-5 grid grid-cols-2 gap-3">
          <StatCard label="Latency" value={stats.latency} />
          <StatCard label="Cost" value={stats.cost} />
          <StatCard label="Success" value={stats.success} />
          <StatCard label="Tokens" value={stats.tokens} />
        </div>
      </Panel>

      <Panel className="stagger-in stagger-in-delay-3 interactive-card lg:col-span-7">
        <h2 className="display-title line-heading text-4xl text-white">Command Studio</h2>
        <p className="mt-2 text-sm text-[#999999]">
          A builder interface for creating AI workflows, articles, and model
          evaluations in one place.
        </p>
        <div className="mt-5 rounded-[6px] border border-[#999999] p-4">
          <p className="mono-ui text-[12px] text-[#999999]">prompt://anbidev</p>
          <div className="mt-3 rounded-[6px] border border-[#999999] p-3 text-sm text-white">
            {activeCommand}
          </div>
          <div className="mt-4 flex flex-wrap gap-2">
            {commandSuggestions.map((command) => (
              <button
                key={command}
                onClick={() => setActiveCommand(command)}
                className={`tab-animate rounded-[6px] border px-3 py-2 text-left text-xs transition md:text-sm ${
                  activeCommand === command
                    ? "command-active border-white bg-white text-black"
                    : "border-[#999999] text-white hover:border-white"
                }`}
              >
                {command}
              </button>
            ))}
          </div>
        </div>
      </Panel>

      <Panel className="stagger-in stagger-in-delay-4 interactive-card lg:col-span-12">
        <h2 className="display-title line-heading text-4xl text-white">Pipeline Health</h2>
        <div className="mt-4 grid grid-cols-1 gap-3 md:grid-cols-3">
          {pipeline.map((item) => (
            <div key={item.name} className="interactive-tile rounded-[6px] border border-[#999999] p-4">
              <div className="flex items-center justify-between">
                <p className="text-white">{item.name}</p>
                <span className="mono-ui inline-flex items-center gap-2 text-[12px] text-[#999999]">
                  <span className="status-pulse h-2 w-2 rounded-full border border-white" />
                  {item.status}
                </span>
              </div>
              <p className="mt-2 text-sm text-[#999999]">{item.detail}</p>
            </div>
          ))}
        </div>
      </Panel>
    </AppFrame>
  );
}

function StatCard({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-[6px] border border-[#999999] p-3">
      <p className="mono-ui text-[12px] text-[#999999]">{label}</p>
      <p className="mt-2 text-base text-white md:text-lg">{value}</p>
    </div>
  );
}
