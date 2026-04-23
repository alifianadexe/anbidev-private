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
        <h2 className="display-title text-4xl text-white">Our Mission</h2>
        <p className="mt-3 text-sm leading-7 text-[#999999] md:text-base">
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
        <h2 className="display-title text-4xl text-white">Team Signal</h2>
        <div className="mt-4 space-y-3">
          <Stat title="Community Members" value="15K+" />
          <Stat title="AI Projects Guided" value="200+" />
          <Stat title="Workshops Delivered" value="70+" />
        </div>
      </Panel>

      <Panel className="stagger-in stagger-in-delay-4 lg:col-span-12">
        <h2 className="display-title text-4xl text-white">Roadmap</h2>
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
    <div className="rounded-[6px] border border-[#999999] p-4">
      <p className="mono-ui text-[12px] text-white">{title}</p>
      <p className="mt-2 text-sm text-[#999999]">{text}</p>
    </div>
  );
}

function Stat({ title, value }: { title: string; value: string }) {
  return (
    <div className="rounded-[6px] border border-[#999999] p-4">
      <p className="mono-ui text-[12px] text-[#999999]">{title}</p>
      <p className="mt-2 text-2xl text-white">{value}</p>
    </div>
  );
}

function RoadmapStep({ phase, title }: { phase: string; title: string }) {
  return (
    <div className="rounded-[6px] border border-[#999999] p-4">
      <p className="mono-ui text-[12px] text-[#999999]">{phase}</p>
      <p className="mt-2 text-white">{title}</p>
    </div>
  );
}
