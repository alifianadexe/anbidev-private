import { AppFrame } from "@/components/app-frame";
import { Panel } from "@/components/panel";

export default function AboutPage() {
  return (
    <AppFrame
      eyebrow="About AnbiDev"
      title="From education blog to AI product and learning ecosystem."
      description="AnbiDev started as a technology learning platform and now evolves into an AI-first studio focused on practical use, local impact, and builder growth."
    >
      <Panel className="stagger-in stagger-in-delay-2 lg:col-span-8">
        <h2 className="text-lg font-semibold text-white">Our Mission</h2>
        <p className="mt-3 text-sm leading-7 text-slate-300 md:text-base">
          We help Indonesian teams and creators adopt AI with confidence. Every
          program, experiment, and solution is designed to be useful in real work,
          not only in demos.
        </p>
        <div className="mt-5 grid grid-cols-1 gap-3 md:grid-cols-3">
          <ValueCard title="Practical" text="Build workflows that solve daily operational problems." />
          <ValueCard title="Accessible" text="Make AI understandable for technical and non-technical teams." />
          <ValueCard title="Responsible" text="Prioritize safety, quality, and clear governance." />
        </div>
      </Panel>

      <Panel className="stagger-in stagger-in-delay-3 lg:col-span-4">
        <h2 className="text-lg font-semibold text-white">Team Signal</h2>
        <div className="mt-4 space-y-3">
          <Stat title="Community Members" value="15K+" />
          <Stat title="AI Projects Guided" value="200+" />
          <Stat title="Workshops Delivered" value="70+" />
        </div>
      </Panel>

      <Panel className="stagger-in stagger-in-delay-4 lg:col-span-12">
        <h2 className="text-lg font-semibold text-white">Roadmap</h2>
        <div className="mt-4 grid grid-cols-1 gap-3 md:grid-cols-4">
          <RoadmapStep phase="Q2" title="Launch Academy Tracks" />
          <RoadmapStep phase="Q3" title="Publish AI Use-Case Blueprints" />
          <RoadmapStep phase="Q4" title="Open Model Ops Dashboard" />
          <RoadmapStep phase="Q1" title="Scale Partner Builder Program" />
        </div>
      </Panel>
    </AppFrame>
  );
}

function ValueCard({ title, text }: { title: string; text: string }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-slate-950/60 p-4">
      <p className="font-medium text-white">{title}</p>
      <p className="mt-2 text-sm text-slate-400">{text}</p>
    </div>
  );
}

function Stat({ title, value }: { title: string; value: string }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-slate-950/60 p-4">
      <p className="text-xs uppercase tracking-[0.14em] text-slate-400">{title}</p>
      <p className="mt-2 text-2xl font-semibold text-white">{value}</p>
    </div>
  );
}

function RoadmapStep({ phase, title }: { phase: string; title: string }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-slate-950/60 p-4">
      <p className="font-mono text-xs uppercase tracking-[0.14em] text-emerald-200">{phase}</p>
      <p className="mt-2 font-medium text-slate-100">{title}</p>
    </div>
  );
}
