import Link from "next/link";
import { Header } from "@/components/Header";
import { Button } from "@/components/ui/button";
import {
  Play,
  Sparkles,
  Link as LinkIcon,
  Clock,
  Brain,
  Search,
  CheckSquare,
  Video,
  Edit,
  ArrowRight,
  ChevronRight,
} from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-[#0B0E14] text-[#E5E2E1]">
      {/* Premium Header */}
      <Header />

      <main className="flex-1">
        {/* HERO SECTION */}
        <section className="relative pt-20 pb-16 md:pt-28 md:pb-24 overflow-hidden px-6">
          {/* Subtle Ambient Background Gradients */}
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#8B5CF6]/5 rounded-full blur-[120px] pointer-events-none" />
          <div className="absolute top-1/3 left-1/3 w-[300px] h-[300px] bg-[#0D9488]/5 rounded-full blur-[100px] pointer-events-none" />

          <div className="mx-auto max-w-5xl text-center flex flex-col items-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white leading-[1.1] mb-6 max-w-4xl">
              Master any lecture with{" "}
              <span className="text-gradient-purple-teal block sm:inline">
                AI-assisted active learning.
              </span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-[#CBC3D7] max-w-3xl mb-10 leading-relaxed font-normal">
              The first note-taking app that watches with you. AI pauses the
              video, asks questions, and fills the gaps in your notes.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 items-center justify-center w-full sm:w-auto mb-16">
              <Link href="/notes" className="w-full sm:w-auto">
                <Button className="w-full sm:w-auto px-6 py-5 bg-[#8B5CF6] hover:bg-[#8B5CF6]/85 text-white font-semibold rounded-sm border-none shadow-none ai-glow cursor-pointer transition-all duration-300">
                  Get Started for Free{" "}
                  <ArrowRight className="ml-2 h-4.5 w-4.5" />
                </Button>
              </Link>
              <a href="#workflow" className="w-full sm:w-auto">
                <Button
                  variant="outline"
                  className="w-full sm:w-auto px-6 py-5 border-white/10 hover:bg-white/5 text-[#E5E2E1] font-semibold rounded-sm cursor-pointer transition-colors duration-300"
                >
                  <Play className="mr-2 h-4 w-4 fill-current text-[#0D9488]" />{" "}
                  Watch Demo
                </Button>
              </a>
            </div>

            {/* Premium Application Live Mockup Card */}
            <div className="w-full rounded-md bg-[#121212] ghost-border p-4 ai-glow-subtle relative max-w-4xl select-none">
              {/* Browser bar */}
              <div className="flex items-center justify-between border-b border-white/5 pb-3 mb-4 text-xs text-[#CBC3D7]/60">
                <div className="flex gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-white/10" />
                  <span className="w-2.5 h-2.5 rounded-full bg-white/10" />
                  <span className="w-2.5 h-2.5 rounded-full bg-white/10" />
                </div>
                <div className="bg-[#0B0E14] px-4 py-1 rounded-sm border border-white/5 tracking-wide flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#0D9488]" />
                  app.conote.ai/study
                </div>
                <div className="w-12" />
              </div>

              {/* Application Internal Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-5 gap-4 text-left">
                {/* Left pane: Video player (3 columns) */}
                <div className="lg:col-span-3 rounded-sm bg-[#0B0E14] border border-white/5 overflow-hidden flex flex-col justify-between aspect-video relative group">
                  {/* Decorative Video Mockup Background */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-tr from-[#0B0E14] via-[#121212] to-[#1e1430] p-6 text-center">
                    <div className="w-16 h-16 rounded-full bg-[#0B0E14]/85 border border-[#0D9488]/30 flex items-center justify-center text-[#0D9488] mb-4">
                      <Play className="h-6 w-6 fill-current ml-1" />
                    </div>
                    <span className="text-xs uppercase tracking-widest text-[#0D9488]/80 font-bold mb-1">
                      Lecture Video Active
                    </span>
                    <span className="text-sm text-[#E5E2E1] font-medium max-w-sm">
                      Synaptic Transmission & Learning Mechanisms
                    </span>
                  </div>

                  {/* Top-right review indicator */}
                  <div className="absolute top-3 right-3 z-10">
                    <span className="inline-flex items-center gap-1 text-[10px] uppercase font-bold tracking-widest text-[#8B5CF6] bg-[#8B5CF6]/15 px-2.5 py-1 rounded-sm border border-[#8B5CF6]/20 shadow-lg">
                      <Sparkles className="h-3 w-3 animate-pulse" /> Paused for
                      Review
                    </span>
                  </div>

                  {/* Bottom playback bar mockup */}
                  <div className="absolute bottom-0 inset-x-0 bg-[#0B0E14]/90 border-t border-white/5 px-4 py-2 flex items-center justify-between text-[10px] text-[#CBC3D7]/70 select-none">
                    <div className="flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-[#8B5CF6]" />
                      <span>05:14 / 20:00</span>
                    </div>
                    <div className="flex-1 mx-4 h-1 bg-white/10 rounded-full relative">
                      <div className="absolute left-0 top-0 bottom-0 w-[26%] bg-gradient-to-r from-[#8B5CF6] to-[#0D9488] rounded-full" />
                    </div>
                    <div className="flex gap-2">
                      <span className="px-1 rounded-sm border border-white/10 bg-white/5">
                        HD
                      </span>
                      <span className="px-1 rounded-sm border border-white/10 bg-white/5">
                        Focus Mode
                      </span>
                    </div>
                  </div>
                </div>

                {/* Right pane: Active Study Recall Questionnaire (2 columns) */}
                <div className="lg:col-span-2 flex flex-col justify-between p-4 rounded-sm bg-[#1C1B1B] border border-white/5 relative">
                  <div>
                    {/* Header */}
                    <div className="flex items-center gap-2 text-xs font-semibold text-[#8B5CF6] mb-3">
                      <span className="w-5 h-5 rounded-sm bg-[#8B5CF6]/10 flex items-center justify-center">
                        <Brain className="h-3.5 w-3.5" />
                      </span>
                      Knowledge Check
                    </div>

                    {/* Question prompt */}
                    <p className="text-sm font-semibold text-white leading-relaxed mb-4">
                      Based on the last 5 minutes, how does the release of BDNF
                      affect synaptic strength?
                    </p>

                    {/* Text field */}
                    <div className="relative mb-4">
                      <textarea
                        rows={4}
                        placeholder="Type your answer here..."
                        disabled
                        className="w-full text-xs p-3 rounded-sm bg-[#121212] border border-white/5 text-[#E5E2E1] placeholder-[#CBC3D7]/40 focus:outline-none resize-none"
                      />
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex flex-col gap-3">
                    <div className="flex justify-end gap-2">
                      <button className="text-[10px] uppercase font-bold tracking-wider text-[#CBC3D7]/60 hover:text-white px-3 py-1.5 transition-colors cursor-default">
                        Skip
                      </button>
                      <button className="text-[10px] uppercase font-bold tracking-wider bg-[#8B5CF6] text-white px-4 py-1.5 rounded-sm cursor-default">
                        Submit
                      </button>
                    </div>

                    {/* Key detected chips */}
                    <div className="border-t border-white/5 pt-3">
                      <span className="text-[10px] uppercase tracking-wider text-[#CBC3D7]/40 block mb-2 font-medium">
                        Key Concepts Detected
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        <span className="inline-flex items-center gap-1 text-[10px] font-semibold text-[#8B5CF6] bg-[#8B5CF6]/15 px-2 py-0.5 rounded-sm border border-[#8B5CF6]/20">
                          <Sparkles className="h-2.5 w-2.5" /> LTP
                        </span>
                        <span className="inline-flex items-center gap-1 text-[10px] font-semibold text-[#8B5CF6] bg-[#8B5CF6]/15 px-2 py-0.5 rounded-sm border border-[#8B5CF6]/20">
                          <Sparkles className="h-2.5 w-2.5" /> Synaptic
                          Plasticity
                        </span>
                        <span className="inline-flex items-center gap-1 text-[10px] font-semibold text-[#8B5CF6] bg-[#8B5CF6]/15 px-2 py-0.5 rounded-sm border border-[#8B5CF6]/20">
                          BDNF
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* HOW IT WORKS SECTION */}
        <section
          id="workflow"
          className="py-20 border-t border-white/5 bg-[#0e0e0e] relative px-6"
        >
          <div className="mx-auto max-w-5xl">
            <div className="text-center mb-16">
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white mb-4">
                How it Works
              </h2>
              <p className="text-sm sm:text-base text-[#CBC3D7] max-w-2xl mx-auto leading-relaxed">
                A seamless workflow designed to transform passive watching into
                active retention.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Step 1 */}
              <div className="flex flex-col items-center text-center p-6 bg-[#121212] rounded-md ghost-border relative">
                {/* Number Badge */}
                <div className="absolute -top-4 w-8 h-8 rounded-full bg-[#8B5CF6]/20 border border-[#8B5CF6]/30 flex items-center justify-center text-xs font-bold text-[#8B5CF6]">
                  1
                </div>
                <div className="w-12 h-12 rounded-sm bg-white/5 border border-white/10 flex items-center justify-center text-[#8B5CF6] mb-6 mt-2">
                  <LinkIcon className="h-5 w-5" />
                </div>
                <h3 className="text-base font-semibold text-white mb-2">
                  Paste URL
                </h3>
                <p className="text-xs text-[#CBC3D7] leading-relaxed">
                  Drop in any YouTube lecture or educational video link to
                  begin.
                </p>
              </div>

              {/* Step 2 */}
              <div className="flex flex-col items-center text-center p-6 bg-[#121212] rounded-md ghost-border relative">
                {/* Number Badge */}
                <div className="absolute -top-4 w-8 h-8 rounded-full bg-[#8B5CF6]/20 border border-[#8B5CF6]/30 flex items-center justify-center text-xs font-bold text-[#8B5CF6]">
                  2
                </div>
                <div className="w-12 h-12 rounded-sm bg-white/5 border border-white/10 flex items-center justify-center text-[#0D9488] mb-6 mt-2">
                  <Clock className="h-5 w-5" />
                </div>
                <h3 className="text-base font-semibold text-white mb-2">
                  Set Interval
                </h3>
                <p className="text-xs text-[#CBC3D7] leading-relaxed">
                  Choose how often AI should pause for review (e.g., every 5
                  minutes).
                </p>
              </div>

              {/* Step 3 */}
              <div className="flex flex-col items-center text-center p-6 bg-[#121212] rounded-md ghost-border relative">
                {/* Number Badge */}
                <div className="absolute -top-4 w-8 h-8 rounded-full bg-[#8B5CF6]/20 border border-[#8B5CF6]/30 flex items-center justify-center text-xs font-bold text-[#8B5CF6]">
                  3
                </div>
                <div className="w-12 h-12 rounded-sm bg-[#8B5CF6]/10 border border-[#8B5CF6]/20 flex items-center justify-center text-[#8B5CF6] mb-6 mt-2 ai-glow-subtle">
                  <Sparkles className="h-5 w-5" />
                </div>
                <h3 className="text-base font-semibold text-white mb-2">
                  AI Handles the Rest
                </h3>
                <p className="text-xs text-[#CBC3D7] leading-relaxed">
                  Watch and type, conote pauses for questions and analyzes gaps
                  in real-time.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* BUILT FOR DEEP FOCUS SECTION */}
        <section
          id="features"
          className="py-20 border-t border-white/5 bg-[#0B0E14] relative px-6"
        >
          <div className="mx-auto max-w-5xl">
            <div className="text-center md:text-left mb-16">
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white mb-4">
                Built for Deep Focus
              </h2>
              <p className="text-sm sm:text-base text-[#CBC3D7] max-w-2xl leading-relaxed">
                Everything you need to master complex topics, unified in one
                minimal interface.
              </p>
            </div>

            {/* Asymmetric Assembled Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* 1. Active Gap Analysis (Span 2 horizontally) */}
              <div className="md:col-span-2 rounded-md bg-[#121212] ghost-border p-6 flex flex-col justify-between">
                <div>
                  <div className="w-10 h-10 rounded-sm bg-[#8B5CF6]/10 flex items-center justify-center text-[#8B5CF6] mb-4">
                    <Search className="h-5 w-5" />
                  </div>
                  <h3 className="text-base font-semibold text-white mb-2">
                    Active Gap Analysis
                  </h3>
                  <p className="text-xs text-[#CBC3D7] leading-relaxed mb-6 max-w-lg">
                    While you take notes, our AI silently maps your text against
                    the video transcript. It instantly highlights critical
                    concepts you missed or misunderstood, offering concise
                    summaries to fill the gaps.
                  </p>
                </div>

                {/* Decorative UI element representing visual note progress */}
                <div className="bg-[#0B0E14] rounded-sm p-4 border border-white/5 space-y-3 select-none">
                  <div className="flex items-center gap-2 border-b border-white/5 pb-2 text-[10px] text-[#CBC3D7]/50 font-bold uppercase tracking-wider">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#8B5CF6]" />
                    AI Note Alignment Analysis
                  </div>
                  <div className="space-y-1.5">
                    <div className="h-1.5 w-full bg-white/5 rounded-full relative">
                      <div className="absolute left-0 top-0 bottom-0 w-[85%] bg-[#0D9488]/80 rounded-full" />
                    </div>
                    <div className="flex justify-between text-[9px] text-[#CBC3D7]/60">
                      <span>Covered: LTP, Action Potential, Receptors</span>
                      <span className="text-[#0D9488] font-bold">
                        85% Alignment
                      </span>
                    </div>
                  </div>
                  <div className="bg-[#8B5CF6]/5 border border-[#8B5CF6]/15 rounded-sm p-2 text-[10px] text-[#CBC3D7]/90 leading-normal flex gap-2">
                    <Sparkles className="h-3.5 w-3.5 text-[#8B5CF6] shrink-0 mt-0.5" />
                    <span>
                      <strong>AI Gap Note:</strong> You did not mention the role
                      of <strong>Magnesium ions</strong> blocking NMDA
                      receptors. Would you like to review this detail?
                    </span>
                  </div>
                </div>
              </div>

              {/* 2. Smart Quizzing (Span 1) */}
              <div className="rounded-md bg-[#121212] ghost-border p-6 flex flex-col justify-between">
                <div>
                  <div className="w-10 h-10 rounded-sm bg-[#0D9488]/10 flex items-center justify-center text-[#0D9488] mb-4">
                    <CheckSquare className="h-5 w-5" />
                  </div>
                  <h3 className="text-base font-semibold text-white mb-2">
                    Smart Quizzing
                  </h3>
                  <p className="text-xs text-[#CBC3D7] leading-relaxed mb-6">
                    Implement retrieval practice on the fly. The app interrupts
                    playback with contextual questions based on the exact
                    segment you just watched.
                  </p>
                </div>

                {/* Decorative UI element representing player controls toggle */}
                <div className="bg-[#0B0E14] rounded-sm p-3.5 border border-white/5 flex items-center justify-between text-[10px]">
                  <span className="text-[#E5E2E1] font-semibold">
                    Pause video and quiz
                  </span>
                  {/* Custom Toggle Switch */}
                  <span className="w-8 h-4 rounded-full bg-[#0D9488] relative flex items-center px-0.5 cursor-default">
                    <span className="w-3.5 h-3.5 rounded-full bg-white absolute right-0.5" />
                  </span>
                </div>
              </div>

              {/* 3. Deep YouTube Integration */}
              <div className="rounded-md bg-[#121212] ghost-border p-6 flex flex-col justify-between">
                <div>
                  <div className="w-10 h-10 rounded-sm bg-white/5 flex items-center justify-center text-[#CBC3D7] mb-4">
                    <Video className="h-5 w-5" />
                  </div>
                  <h3 className="text-base font-semibold text-white mb-2">
                    Deep YouTube Integration
                  </h3>
                  <p className="text-xs text-[#CBC3D7] leading-relaxed">
                    Seamlessly embeds any YouTube video. Notes are time-stamped
                    automatically, allowing you to click any note to jump
                    directly back to that moment in the lecture.
                  </p>
                </div>
                <div className="h-2" />
              </div>

              {/* 4. Distraction-Free Editor */}
              <div className="rounded-md bg-[#121212] ghost-border p-6 flex flex-col justify-between">
                <div>
                  <div className="w-10 h-10 rounded-sm bg-white/5 flex items-center justify-center text-[#CBC3D7] mb-4">
                    <Edit className="h-5 w-5" />
                  </div>
                  <h3 className="text-base font-semibold text-white mb-2">
                    Distraction-Free Editor
                  </h3>
                  <p className="text-xs text-[#CBC3D7] leading-relaxed">
                    A center-weighted, pure typography environment. The dark
                    charcoal palette reduces eye strain during long study
                    sessions, letting you focus entirely on synthesis.
                  </p>
                </div>
                <div className="h-2" />
              </div>

              {/* 5. Pure Quote Panel */}
              <div className="rounded-md bg-gradient-to-b from-[#121212] to-[#0B0E14] ghost-border p-6 flex flex-col justify-center items-center text-center relative overflow-hidden select-none">
                <div className="absolute inset-0 bg-[#8B5CF6]/5 rounded-full blur-[80px] pointer-events-none" />
                <p className="text-xs italic text-[#CBC3D7] leading-relaxed max-w-[200px]">
                  &ldquo;A digital study hall that feels both sophisticated and
                  infinitely capable.&rdquo;
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* READY TO TRANSFORM SECTION */}
        <section className="py-24 border-t border-white/5 bg-[#0e0e0e] text-center px-6 relative overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-[#8B5CF6]/5 rounded-full blur-[100px] pointer-events-none" />

          <div className="mx-auto max-w-3xl relative z-10">
            <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-white mb-6">
              Ready to transform how you learn?
            </h2>
            <p className="text-sm sm:text-base text-[#CBC3D7] max-w-xl mx-auto mb-10 leading-relaxed">
              Join thousands of students and researchers using conote for deep
              scholarship.
            </p>

            <Link href="/notes">
              <Button className="px-8 py-6 bg-[#8B5CF6] hover:bg-[#8B5CF6]/85 text-white font-semibold rounded-sm border-none shadow-none ai-glow cursor-pointer transition-all duration-300">
                Get Started for Free
              </Button>
            </Link>
          </div>
        </section>
      </main>

      {/* ACADEMIC MINIMAL FOOTER */}
      <footer className="border-t border-white/5 bg-[#0B0E14] px-6 py-12">
        <div className="mx-auto max-w-7xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <span className="text-lg font-bold tracking-tight text-gradient-purple-teal block mb-1">
              conote
            </span>
            <p className="text-[11px] text-[#CBC3D7]/50">
              &copy; {new Date().getFullYear()} conote. Designed for deep
              scholarship.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-x-8 gap-y-2 text-[11px] font-medium text-[#CBC3D7]/60">
            <a href="#" className="hover:text-[#E5E2E1] transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-[#E5E2E1] transition-colors">
              Terms of Service
            </a>
            <a href="#" className="hover:text-[#E5E2E1] transition-colors">
              Research Papers
            </a>
            <a href="#" className="hover:text-[#E5E2E1] transition-colors">
              Twitter
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
