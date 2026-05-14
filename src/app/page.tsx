"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Shield,
  Brain,
  Sparkles,
  Palette,
  Share2,
  BookOpen,
  Server,
  Container,
  Code,
  ArrowRight,
  Star,
  Terminal,
  ExternalLink,
  CheckCircle,
  GitBranch,
  Globe,
  MessageCircle,
} from "lucide-react";

const fadeUp = {
  initial: { y: 20, opacity: 0 },
  whileInView: { y: 0, opacity: 1 },
  viewport: { once: true, margin: "-60px" },
};

const staggerContainer = {
  initial: {},
  whileInView: { transition: { staggerChildren: 0.08 } },
  viewport: { once: true, margin: "-40px" },
};

const staggerItem = {
  initial: { y: 16, opacity: 0 },
  whileInView: { y: 0, opacity: 1 },
  viewport: { once: true },
};

function SectionLabel({ children }: { children: string }) {
  return (
    <motion.p
      {...fadeUp}
      className="text-xs font-mono text-lime-400/70 tracking-widest uppercase mb-4"
    >
      // {children}
    </motion.p>
  );
}

function GlowButton({
  href,
  children,
  primary = false,
}: {
  href: string;
  children: React.ReactNode;
  primary?: boolean;
}) {
  const base =
    "inline-flex items-center gap-2 px-6 py-3 rounded-lg font-mono text-sm font-medium transition-all duration-200";
  if (primary)
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={`${base} bg-lime-400 text-black hover:bg-lime-300 hover:shadow-[0_0_20px_rgba(163,230,53,0.4)]`}
      >
        {children}
      </a>
    );
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`${base} border border-lime-400/40 text-lime-400 hover:border-lime-400 hover:bg-lime-400/10 hover:shadow-[0_0_16px_rgba(163,230,53,0.15)]`}
    >
      {children}
    </a>
  );
}

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Manifesto />
      <Features />
      <HowItWorks />
      <Install />
      <Comparison />
      <FinalCTA />
      <Footer />
    </main>
  );
}

/* ─── NAVBAR ─── */
function Navbar() {
  const links = [
    { label: "Features", href: "#features" },
    { label: "How It Works", href: "#how-it-works" },
    { label: "Why", href: "#why" },
    { label: "Install", href: "#install" },
    { label: "Compare", href: "#compare" },
  ];

  return (
    <nav className="fixed top-0 inset-x-0 z-50 h-16 flex items-center px-6 md:px-10 border-b border-white/5 bg-[#0a0a0a]/70 backdrop-blur-lg">
      <div className="flex-1 flex items-center justify-between max-w-6xl mx-auto w-full">
        <a href="#" className="flex items-center gap-2 font-mono text-sm font-semibold text-white">
          <span className="text-lime-400 text-lg">&gt;_</span>
          CarouselAI
        </a>
        <div className="hidden md:flex items-center gap-8 text-sm text-zinc-400 font-medium">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="hover:text-lime-400 transition-colors"
            >
              {l.label}
            </a>
          ))}
        </div>
        <GlowButton href="https://github.com/SREEGEETHES/Carousel-AI.git">
          <Star className="w-4 h-4" />
          Star on GitHub
        </GlowButton>
      </div>
    </nav>
  );
}

/* ─── HERO ─── */
function Hero() {
  return (
    <section className="relative pt-32 pb-24 md:pt-40 md:pb-32 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(163,230,53,0.08),transparent_60%)] pointer-events-none" />
      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ y: 16, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <span className="inline-flex items-center gap-1.5 mb-6 px-3 py-1 rounded text-[11px] font-mono bg-lime-900/20 text-lime-400 border border-lime-400/15">
            v1.0 <span className="text-zinc-600">//</span> open source &middot; FREE
          </span>
        </motion.div>

        <motion.h1
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight tracking-tight text-white"
        >
          AI Carousels<br />
          <span className="text-lime-400 italic">shouldn&apos;t cost a subscription.</span>
        </motion.h1>

        <motion.p
          initial={{ y: 16, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-6 text-base md:text-lg text-zinc-400 max-w-2xl mx-auto leading-relaxed"
        >
          CarouselAI is a self-hosted, open-source carousel generator powered by your
          choice of AI provider. Run it locally. Own your content pipeline. Free forever.
        </motion.p>

        <motion.div
          initial={{ y: 16, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <GlowButton href="https://github.com/SREEGEETHES/Carousel-AI.git" primary>
            <GitBranch className="w-4 h-4" />
            View on GitHub
          </GlowButton>
          <a
            href="#how-it-works"
            className="inline-flex items-center gap-2 text-sm font-mono text-zinc-400 hover:text-lime-400 transition-colors"
          >
            See How It Works <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </motion.div>

        {/* Terminal mockup */}
        <motion.div
          initial={{ y: 24, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 max-w-2xl mx-auto"
        >
          <div className="bg-[#0d1117] rounded-xl overflow-hidden border border-[#222] shadow-2xl">
            <div className="flex items-center gap-2 px-4 py-3 border-b border-[#222] bg-[#010409]">
              <span className="w-3 h-3 rounded-full bg-red-500/80" />
              <span className="w-3 h-3 rounded-full bg-yellow-400/80" />
              <span className="w-3 h-3 rounded-full bg-lime-500/80" />
              <span className="ml-2 text-[11px] font-mono text-zinc-500">carouselai ~ $</span>
            </div>
            <div className="p-5 text-left">
              <code className="text-sm font-mono text-lime-400/90">
                # Generate a carousel from a topic<br />
                <span className="text-zinc-400">carouselai</span> generate \
                --topic &quot;5 AI trends for 2026&quot; \<br />
                &nbsp;&nbsp;--provider anthropic --sizes 1:1,4:5<br /><br />
                <span className="text-lime-400">✓</span> Generated 5 slides
                <span className="text-zinc-500">  Educational style</span><br />
                <span className="text-lime-400">✓</span> Exported 10 PNGs
                <span className="text-zinc-500">  (1080×1080, 1080×1350)</span>
              </code>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ─── MANIFESTO ─── */
function Manifesto() {
  const points = [
    {
      icon: Shield,
      title: "Your data, your machine",
      desc: "No content leaves your environment",
    },
    {
      icon: Brain,
      title: "Multi-provider AI",
      desc: "Use Claude, GPT, Gemini, or any provider you prefer",
    },
    {
      icon: Sparkles,
      title: "Beautiful output",
      desc: "Export ready-to-post carousels in seconds",
    },
    {
      icon: Share2,
      title: "Postiz & Obsidian integration",
      desc: "Built for your existing workflow",
    },
  ];

  return (
    <section id="why" className="py-24 border-t border-white/5">
      <div className="max-w-4xl mx-auto px-6">
        <SectionLabel>why we built this</SectionLabel>
        <motion.blockquote
          {...fadeUp}
          className="text-xl md:text-2xl font-light italic text-zinc-300 leading-relaxed mb-14 max-w-3xl"
        >
          &ldquo;Content creation tools charge you per generation, per seat, per month.
          We think your AI carousel pipeline should be infrastructure you own &mdash;
          running on your machine, answering only to you.&rdquo;
        </motion.blockquote>

        <motion.div
          {...staggerContainer}
          className="grid gap-6 sm:grid-cols-2"
        >
          {points.map((p) => (
            <motion.div
              key={p.title}
              {...staggerItem}
              className="flex items-start gap-4 p-4 rounded-lg bg-white/[0.02] border border-white/5"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-lime-900/20 text-lime-400">
                <p.icon className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-medium text-white mb-0.5">{p.title}</h3>
                <p className="text-sm text-zinc-500">{p.desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

/* ─── FEATURES ─── */
const featureList = [
  { icon: Brain, title: "Multi-provider AI support", desc: "Claude, GPT, Gemini, Ollama — switch providers anytime without changing your workflow." },
  { icon: Sparkles, title: "Carousel generation", desc: "Generate from a topic or URL — AI handles research, structure, and slide content." },
  { icon: Palette, title: "Beautiful slide templates", desc: "Educational, hot-take, tips & tricks — or bring your own style reference." },
  { icon: Share2, title: "One-click Postiz publishing", desc: "Connect your Postiz instance and publish to LinkedIn, MessageCircle, and beyond." },
  { icon: BookOpen, title: "Obsidian export", desc: "Export approved carousels as Markdown with frontmatter for your knowledge base." },
  { icon: Server, title: "Self-hosted, no cloud dependency", desc: "Run on your laptop, VPS, or Raspberry Pi — zero ongoing costs." },
  { icon: Container, title: "Docker-ready setup", desc: "One-command deployment with docker-compose — works everywhere." },
  { icon: Code, title: "Open source, fork it anytime", desc: "MIT licensed. View, modify, and redistribute the code however you like." },
];

function Features() {
  return (
    <section id="features" className="py-24 border-t border-white/5">
      <div className="max-w-5xl mx-auto px-6">
        <SectionLabel>capabilities</SectionLabel>
        <motion.h2
          {...fadeUp}
          className="text-2xl md:text-3xl font-bold text-white mb-12"
        >
          Everything you need. <span className="text-lime-400 italic">Nothing you don&apos;t.</span>
        </motion.h2>

        <motion.div
          {...staggerContainer}
          className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4"
        >
          {featureList.map((f) => (
            <motion.div
              key={f.title}
              {...staggerItem}
              className="group bg-[#0d1117] rounded-xl border border-[#1a1a1a] p-6 hover:border-lime-400/20 transition-all duration-300"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-lime-900/15 text-lime-400 mb-4 group-hover:bg-lime-900/25 transition-colors">
                <f.icon className="w-5 h-5" />
              </div>
              <h3 className="font-medium text-white mb-2 text-sm">{f.title}</h3>
              <p className="text-xs text-zinc-500 leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

/* ─── HOW IT WORKS ─── */
const steps = [
  { num: "01", icon: Terminal, title: "Enter your topic", desc: "Paste a URL or describe what you want — AI handles the rest." },
  { num: "02", icon: Brain, title: "AI generates slides", desc: "Your chosen provider creates structured, engaging carousel content." },
  { num: "03", icon: ExternalLink, title: "Export & share", desc: "Download, publish to Postiz, or export to Obsidian — your choice." },
];

function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 border-t border-white/5">
      <div className="max-w-4xl mx-auto px-6">
        <SectionLabel>workflow</SectionLabel>
        <motion.h2
          {...fadeUp}
          className="text-2xl md:text-3xl font-bold text-white mb-14"
        >
          From idea to carousel <span className="text-lime-400 italic">in minutes</span>.
        </motion.h2>

        <motion.div
          {...staggerContainer}
          className="grid gap-8 md:grid-cols-3"
        >
          {steps.map((s, i) => (
            <motion.div
              key={s.num}
              {...staggerItem}
              className="relative text-center"
            >
              <span className="text-[48px] font-bold font-mono text-white/5 absolute -top-3 left-1/2 -translate-x-1/2 select-none">
                {s.num}
              </span>
              <div className="flex h-14 w-14 items-center justify-center mx-auto mb-5 rounded-full bg-lime-900/20 text-lime-400 border border-lime-400/10 relative z-10">
                <s.icon className="w-6 h-6" />
              </div>
              <h3 className="font-medium text-white mb-2">{s.title}</h3>
              <p className="text-sm text-zinc-500 leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

/* ─── INSTALL ─── */
function Install() {
  const code = `git clone https://github.com/SREEGEETHES/Carousel-AI.git
cd carouselai && docker compose up`;

  return (
    <section id="install" className="py-24 border-t border-white/5">
      <div className="max-w-4xl mx-auto px-6">
        <SectionLabel>install</SectionLabel>
        <motion.h2
          {...fadeUp}
          className="text-2xl md:text-3xl font-bold text-white mb-10"
        >
          Up and running <span className="text-lime-400 italic">in two commands</span>.
        </motion.h2>

        <motion.div
          {...fadeUp}
          className="bg-[#0d1117] rounded-xl border border-[#222] p-6 md:p-8"
        >
          <div className="flex items-center gap-3 mb-5">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-lime-900/20 text-lime-400">
              <Terminal className="w-4 h-4" />
            </div>
            <h3 className="font-medium text-white text-sm">Quick start</h3>
          </div>

          <pre className="bg-[#010409] p-4 rounded-lg overflow-x-auto text-sm font-mono text-lime-400/90 leading-relaxed border border-[#1a1a1a]">
{code}
          </pre>

          <button
            onClick={() => navigator.clipboard.writeText(code)}
            className="mt-5 w-full inline-flex items-center justify-center gap-2 bg-lime-400/10 hover:bg-lime-400/20 border border-lime-400/20 text-lime-400 font-mono text-sm py-3 px-4 rounded-lg transition-all duration-200"
          >
            <CheckCircle className="w-4 h-4" />
            Copy commands
          </button>

          <p className="mt-5 text-sm text-zinc-500">
            Full setup instructions available in the{" "}
            <a
              href="https://github.com/SREEGEETHES/Carousel-AI.git#readme"
              className="text-lime-400 hover:text-lime-300 transition-colors"
            >
              GitHub README
            </a>
            .
          </p>
        </motion.div>
      </div>
    </section>
  );
}

/* ─── COMPARISON ─── */
const rows = [
  { feature: "Cost", canva: "Subscription", taplio: "Subscription", ours: "Free forever" },
  { feature: "Self-hosted", canva: "No", taplio: "No", ours: "Yes" },
  { feature: "Open source", canva: "No", taplio: "No", ours: "Yes" },
  { feature: "AI provider", canva: "Fixed", taplio: "Fixed", ours: "Your choice" },
  { feature: "Postiz support", canva: "No", taplio: "No", ours: "Yes" },
  { feature: "Data privacy", canva: "Cloud", taplio: "Cloud", ours: "Fully local" },
];

function Comparison() {
  return (
    <section id="compare" className="py-24 border-t border-white/5">
      <div className="max-w-4xl mx-auto px-6">
        <SectionLabel>the landscape</SectionLabel>
        <motion.h2
          {...fadeUp}
          className="text-2xl md:text-3xl font-bold text-white mb-3"
        >
          How it <span className="text-lime-400 italic">stacks up</span>.
        </motion.h2>
        <motion.p {...fadeUp} className="text-zinc-500 max-w-xl mb-12">
          Great carousel tools exist. They&apos;re also cloud-locked and metered.
          We built the alternative.
        </motion.p>

        <motion.div {...fadeUp} className="overflow-x-auto">
          <table className="w-full bg-[#0d1117] rounded-xl border border-[#222] text-sm">
            <thead>
              <tr className="bg-[#010409] border-b border-[#222]">
                <th className="px-5 py-4 text-left text-[11px] font-mono text-zinc-500 uppercase tracking-wider">Feature</th>
                <th className="px-5 py-4 text-left text-[11px] font-mono text-zinc-500 uppercase tracking-wider">Canva AI</th>
                <th className="px-5 py-4 text-left text-[11px] font-mono text-zinc-500 uppercase tracking-wider">Taplio</th>
                <th className="px-5 py-4 text-left text-[11px] font-mono text-lime-400 uppercase tracking-wider">CarouselAI</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((r) => (
                <tr key={r.feature} className="border-b border-[#1a1a1a] last:border-0">
                  <td className="px-5 py-4 text-zinc-300 font-mono text-xs">{r.feature}</td>
                  <td className="px-5 py-4 text-zinc-500 font-mono text-xs">{r.canva}</td>
                  <td className="px-5 py-4 text-zinc-500 font-mono text-xs">{r.taplio}</td>
                  <td className="px-5 py-4 text-lime-400 font-mono text-xs">{r.ours}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </motion.div>
      </div>
    </section>
  );
}

/* ─── FINAL CTA ─── */
function FinalCTA() {
  return (
    <section className="py-24 border-t border-white/5 text-center">
      <div className="max-w-2xl mx-auto px-6">
        <SectionLabel>get started</SectionLabel>
        <motion.h2
          {...fadeUp}
          className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight"
        >
          Stop renting <span className="text-lime-400 italic">your content pipeline</span>.
        </motion.h2>
        <motion.p {...fadeUp} className="text-zinc-500 max-w-lg mx-auto mb-10">
          Clone the repo. Run the installer. Own your carousel workflow before lunch.
        </motion.p>

        <motion.div {...fadeUp}>
          <GlowButton href="https://github.com/SREEGEETHES/Carousel-AI.git" primary>
            <GitBranch className="w-4 h-4" />
            Star on GitHub
          </GlowButton>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mt-14 inline-block"
        >
          <pre className="font-mono text-lg text-lime-400/70 leading-relaxed">
            <code>{`┌──────────────────────────────────┐
│  OPEN.  LOCAL.  YOURS.  FREE.   │
└──────────────────────────────────┘`}</code>
          </pre>
        </motion.div>
      </div>
    </section>
  );
}

/* ─── FOOTER ─── */
function Footer() {
  return (
    <footer className="border-t border-white/5 bg-[#070707]">
      <div className="max-w-5xl mx-auto px-6 py-14">
        <div className="flex flex-col md:flex-row justify-between gap-10">
          <div className="max-w-xs">
            <a href="#" className="flex items-center gap-2 font-mono text-sm font-semibold text-white mb-3">
              <span className="text-lime-400">&gt;_</span>
              CarouselAI
            </a>
            <p className="text-sm text-zinc-500 leading-relaxed">
              Open-source AI carousel generator.
            </p>
          </div>

          <div className="grid grid-cols-3 gap-10 text-sm">
            <div className="space-y-3">
              <p className="font-medium text-white text-xs uppercase tracking-wider text-zinc-400">Product</p>
              <a href="#features" className="block text-zinc-500 hover:text-lime-400 transition-colors">Features</a>
              <a href="#install" className="block text-zinc-500 hover:text-lime-400 transition-colors">Install</a>
              <a href="#how-it-works" className="block text-zinc-500 hover:text-lime-400 transition-colors">How it works</a>
            </div>
            <div className="space-y-3">
              <p className="font-medium text-white text-xs uppercase tracking-wider text-zinc-400">Source</p>
              <a href="https://github.com/SREEGEETHES/Carousel-AI.git" className="flex items-center gap-1.5 text-zinc-500 hover:text-lime-400 transition-colors" target="_blank" rel="noopener noreferrer">
                <GitBranch className="w-3.5 h-3.5" /> GitHub
              </a>
              <a href="https://github.com/SREEGEETHES/Carousel-AI.git#readme" className="block text-zinc-500 hover:text-lime-400 transition-colors" target="_blank" rel="noopener noreferrer">Docs</a>
              <a href="https://github.com/SREEGEETHES/Carousel-AI.git/issues" className="block text-zinc-500 hover:text-lime-400 transition-colors" target="_blank" rel="noopener noreferrer">Issues</a>
            </div>
            <div className="space-y-3">
              <p className="font-medium text-white text-xs uppercase tracking-wider text-zinc-400">Connect</p>
              <a href="#" className="flex items-center gap-1.5 text-zinc-500 hover:text-lime-400 transition-colors">
                <Globe className="w-3.5 h-3.5" /> LinkedIn
              </a>
              <a href="#" className="flex items-center gap-1.5 text-zinc-500 hover:text-lime-400 transition-colors">
                <MessageCircle className="w-3.5 h-3.5" /> MessageCircle / X
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-white/5 text-center text-xs text-zinc-600">
          &copy; {new Date().getFullYear()} CarouselAI. MIT Licensed.
        </div>
      </div>
    </footer>
  );
}
