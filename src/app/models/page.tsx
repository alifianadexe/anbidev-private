"use client";

import { useMemo, useState } from "react";
import { AppFrame } from "@/components/app-frame";
import { Panel } from "@/components/panel";

type Model = {
  id: string;
  latency: number;
  quality: number;
  costPerK: number;
  bestFor: string;
};

const models: Model[] = [
  { id: "astra-1", latency: 420, quality: 92, costPerK: 0.006, bestFor: "Fast production assistants" },
  { id: "nusa-agent", latency: 610, quality: 89, costPerK: 0.004, bestFor: "High-volume automation" },
  { id: "batik-reasoner", latency: 840, quality: 97, costPerK: 0.009, bestFor: "Complex reasoning workflows" },
];

export default function ModelsPage() {
  const [selected, setSelected] = useState<Model>(models[0]);
  const [tokens, setTokens] = useState(200_000);

  const estimatedCost = useMemo(
    () => ((tokens / 1000) * selected.costPerK).toFixed(2),
    [tokens, selected],
  );

  return (
    <AppFrame
      eyebrow="AnbiDev Models"
      title="Pick the right model for your product constraints."
      description="Compare latency, quality, and cost in one interactive view. Tune your token workload to estimate monthly usage impact."
    >
      <Panel className="stagger-in stagger-in-delay-2 lg:col-span-7">
        <h2 className="text-lg font-semibold text-white">Model Benchmark</h2>
        <div className="mt-4 space-y-3">
          {models.map((item) => (
            <button
              key={item.id}
              onClick={() => setSelected(item)}
              className={`w-full rounded-2xl border p-4 text-left transition ${
                selected.id === item.id
                  ? "border-emerald-300/70 bg-emerald-300/10"
                  : "border-white/10 bg-slate-950/60 hover:border-white/30"
              }`}
            >
              <div className="flex items-center justify-between gap-2">
                <p className="font-semibold uppercase tracking-[0.12em] text-white">{item.id}</p>
                <span className="text-xs text-slate-300">{item.bestFor}</span>
              </div>
              <div className="mt-3 grid grid-cols-3 gap-2 text-xs text-slate-300">
                <p>Latency: {item.latency}ms</p>
                <p>Quality: {item.quality}/100</p>
                <p>Cost: ${item.costPerK.toFixed(3)} / 1K</p>
              </div>
            </button>
          ))}
        </div>
      </Panel>

      <Panel className="stagger-in stagger-in-delay-3 lg:col-span-5">
        <h2 className="text-lg font-semibold text-white">Usage Estimator</h2>
        <p className="mt-2 text-sm text-slate-400">
          Adjust monthly token usage to estimate cost for the selected model.
        </p>
        <div className="mt-5 rounded-2xl border border-white/10 bg-slate-950/60 p-4">
          <label className="text-xs uppercase tracking-[0.14em] text-slate-400">
            Monthly Tokens: {tokens.toLocaleString()}
          </label>
          <input
            type="range"
            min={50_000}
            max={5_000_000}
            step={50_000}
            value={tokens}
            onChange={(event) => setTokens(Number(event.target.value))}
            className="mt-3 w-full accent-emerald-400"
          />
          <p className="mt-5 text-xs uppercase tracking-[0.14em] text-slate-400">
            Estimated Monthly Cost
          </p>
          <p className="mt-2 text-3xl font-semibold text-emerald-200">${estimatedCost}</p>
        </div>
      </Panel>

      <Panel className="stagger-in stagger-in-delay-4 lg:col-span-12">
        <h2 className="text-lg font-semibold text-white">Deployment Guidance</h2>
        <div className="mt-4 grid grid-cols-1 gap-3 md:grid-cols-3">
          <Advice
            title="Speed-sensitive flows"
            text="Use astra-1 for chat and inline copilots where response time impacts conversion."
          />
          <Advice
            title="Cost-sensitive operations"
            text="Use nusa-agent for repetitive generation and background automation tasks."
          />
          <Advice
            title="High-stakes reasoning"
            text="Use batik-reasoner for analysis-heavy and decision-support workflows."
          />
        </div>
      </Panel>
    </AppFrame>
  );
}

function Advice({ title, text }: { title: string; text: string }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-slate-950/60 p-4">
      <p className="font-medium text-white">{title}</p>
      <p className="mt-2 text-sm text-slate-400">{text}</p>
    </div>
  );
}
