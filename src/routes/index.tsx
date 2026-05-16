import { createFileRoute } from "@tanstack/react-router";
import { Countdown } from "@/components/Countdown";
import { Button } from "@/components/ui/button";
import heroImg from "@/assets/hero-dubai.jpg";
import speaker1 from "@/assets/speaker-1.jpg";
import speaker2 from "@/assets/speaker-2.jpg";
import speaker3 from "@/assets/speaker-3.jpg";
import speaker4 from "@/assets/speaker-4.jpg";
import { ArrowRight, MapPin, Calendar, Users, Zap, Globe, Shield, Sparkles } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "OFFGRID 2026 — Crypto Summit · Downtown Dubai · Nov 15-17" },
      {
        name: "description",
        content:
          "OFFGRID — главный крипто-ивент года в Downtown Dubai. 15-17 ноября 2026. Топ-спикеры, инвесторы, builders. Telegram Mini App.",
      },
      { property: "og:title", content: "OFFGRID 2026 — Dubai Crypto Summit" },
      { property: "og:description", content: "15-17 ноября 2026 · Downtown Dubai" },
      { property: "og:image", content: heroImg },
    ],
  }),
  component: Landing,
});

const speakers = [
  { name: "Alex Korbin", role: "Founder, Nexus Protocol", img: speaker1, tag: "L2 Scaling" },
  { name: "Sofia Renz", role: "CEO, BlockHaus Capital", img: speaker2, tag: "VC / Funds" },
  { name: "Marc Veller", role: "Partner, Paradigm West", img: speaker3, tag: "Investments" },
  { name: "Iris Halden", role: "Head of Research, DeFiLab", img: speaker4, tag: "DeFi" },
];

const agenda = [
  { day: "Day 01 · 15 Nov", title: "Mainstage Opening", desc: "Keynotes от лидеров индустрии, открытие выставки, networking lounge." },
  { day: "Day 02 · 16 Nov", title: "Builders & Capital", desc: "Питч-сессии, закрытые встречи с фондами, technical deep-dives." },
  { day: "Day 03 · 17 Nov", title: "Afterparty & Yacht", desc: "Закрытая вечеринка в Marina, sunset yacht для VIP участников." },
];

const stats = [
  { v: "5 000+", l: "Участников" },
  { v: "120+", l: "Спикеров" },
  { v: "60+", l: "Фондов" },
  { v: "$2B+", l: "Под управлением" },
];

const partners = ["BINANCE", "TON", "PARADIGM", "LEDGER", "ARBITRUM", "CHAINLINK", "POLYGON", "OKX"];

function Landing() {
  return (
    <div className="min-h-screen relative overflow-x-hidden">
      {/* Nav */}
      <header className="fixed top-0 inset-x-0 z-50">
        <div className="mx-auto max-w-7xl px-4 md:px-8 mt-4">
          <div className="glass rounded-full px-5 py-3 flex items-center justify-between">
            <a href="#top" className="flex items-center gap-2 font-mono font-bold tracking-tight">
              <span className="size-2 rounded-full bg-primary shadow-glow animate-pulse-glow" />
              OFFGRID<span className="text-primary">/26</span>
            </a>
            <nav className="hidden md:flex items-center gap-7 text-sm text-muted-foreground">
              <a href="#about" className="hover:text-foreground transition">About</a>
              <a href="#speakers" className="hover:text-foreground transition">Speakers</a>
              <a href="#agenda" className="hover:text-foreground transition">Agenda</a>
              <a href="#venue" className="hover:text-foreground transition">Venue</a>
            </nav>
            <Button asChild size="sm" className="bg-gradient-neon text-neon-foreground hover:opacity-90 font-semibold rounded-full">
              <a href="https://t.me" target="_blank" rel="noreferrer">Open Mini App <ArrowRight className="ml-1 size-4" /></a>
            </Button>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section id="top" className="relative min-h-screen flex items-center pt-32 pb-20">
        <div className="absolute inset-0 -z-10">
          <img src={heroImg} alt="Downtown Dubai" width={1920} height={1280} className="w-full h-full object-cover opacity-40" />
          <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/40 to-background" />
          <div className="absolute inset-0 grid-pattern opacity-60" />
        </div>

        <div className="mx-auto max-w-7xl px-4 md:px-8 w-full">
          <div className="flex items-center gap-2 mb-6">
            <span className="size-2 rounded-full bg-primary animate-pulse" />
            <span className="font-mono text-xs uppercase tracking-[0.3em] text-primary">
              Nov 15-17 · 2026 · Downtown Dubai
            </span>
          </div>

          <h1 className="font-display font-bold leading-[0.9] tracking-tighter text-6xl md:text-8xl lg:text-[10rem]">
            <span className="block">OFF</span>
            <span className="block text-gradient">GRID</span>
          </h1>

          <p className="mt-8 max-w-2xl text-lg md:text-xl text-muted-foreground">
            Три дня. Один город. Главный крипто-саммит года для founders, фондов и builders.
            Закрытая программа, networking и afterparty в сердце Дубая.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <Button asChild size="lg" className="bg-gradient-neon text-neon-foreground hover:opacity-90 font-semibold rounded-full px-8 shadow-neon animate-pulse-glow">
              <a href="https://t.me" target="_blank" rel="noreferrer">
                Получить билет в Telegram <ArrowRight className="ml-2 size-5" />
              </a>
            </Button>
            <Button asChild size="lg" variant="outline" className="rounded-full border-primary/40 hover:bg-primary/10">
              <a href="#agenda">Смотреть программу</a>
            </Button>
          </div>

          <div className="mt-16 max-w-2xl">
            <div className="mb-3 font-mono text-xs uppercase tracking-widest text-muted-foreground">
              До старта осталось
            </div>
            <Countdown />
          </div>
        </div>
      </section>

      {/* Marquee */}
      <section className="border-y border-border/50 bg-card/30 py-6 overflow-hidden">
        <div className="flex animate-marquee whitespace-nowrap">
          {[...partners, ...partners, ...partners].map((p, i) => (
            <span key={i} className="mx-10 font-mono text-xl md:text-2xl font-bold text-muted-foreground/60 hover:text-primary transition">
              {p} <span className="text-primary mx-4">/</span>
            </span>
          ))}
        </div>
      </section>

      {/* Stats / About */}
      <section id="about" className="py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-end mb-16">
            <div>
              <div className="font-mono text-xs uppercase tracking-[0.3em] text-primary mb-4">/ 01 — About</div>
              <h2 className="font-display text-4xl md:text-6xl font-bold tracking-tight">
                Где встречаются <span className="text-gradient">capital</span> и <span className="text-gradient">code</span>.
              </h2>
            </div>
            <p className="text-lg text-muted-foreground">
              OFFGRID — это не просто конференция. Это закрытая экосистема, где основатели, фонды и
              разработчики строят следующее поколение Web3-продуктов. Telegram Mini App для
              networking, расписания и доступа к закрытым событиям.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {stats.map((s) => (
              <div key={s.l} className="glass rounded-2xl p-6 md:p-8 scanline relative">
                <div className="font-display text-3xl md:text-5xl font-bold text-gradient">{s.v}</div>
                <div className="mt-2 text-sm text-muted-foreground uppercase tracking-wider">{s.l}</div>
              </div>
            ))}
          </div>

          <div className="grid md:grid-cols-3 gap-4 mt-6">
            {[
              { icon: Zap, t: "Mainstage", d: "8 часов keynotes и панелей с мировыми лидерами." },
              { icon: Users, t: "Private Rooms", d: "Закрытые встречи 1-на-1 с фондами через mini app." },
              { icon: Sparkles, t: "Afterparty", d: "Yacht & rooftop события в Marina и Palm." },
            ].map((f) => (
              <div key={f.t} className="glass rounded-2xl p-8 group hover:border-primary/40 transition">
                <f.icon className="size-8 text-primary mb-4 group-hover:scale-110 transition" />
                <div className="font-display text-xl font-bold mb-2">{f.t}</div>
                <p className="text-muted-foreground text-sm">{f.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Speakers */}
      <section id="speakers" className="py-24 md:py-32 relative">
        <div className="absolute inset-0 grid-pattern opacity-30 -z-10" />
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <div className="flex items-end justify-between mb-12 flex-wrap gap-4">
            <div>
              <div className="font-mono text-xs uppercase tracking-[0.3em] text-primary mb-4">/ 02 — Speakers</div>
              <h2 className="font-display text-4xl md:text-6xl font-bold tracking-tight">
                Лица <span className="text-gradient">индустрии</span>
              </h2>
            </div>
            <p className="text-muted-foreground max-w-md">
              120+ спикеров: founders топ-протоколов, partners ведущих фондов, исследователи DeFi и L2.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {speakers.map((s) => (
              <article key={s.name} className="group relative overflow-hidden rounded-2xl glass">
                <div className="aspect-[3/4] overflow-hidden">
                  <img
                    src={s.img}
                    alt={s.name}
                    width={768}
                    height={896}
                    loading="lazy"
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
                </div>
                <div className="absolute top-3 left-3">
                  <span className="font-mono text-[10px] uppercase tracking-widest bg-primary/20 text-primary px-2 py-1 rounded-full border border-primary/30">
                    {s.tag}
                  </span>
                </div>
                <div className="absolute bottom-0 inset-x-0 p-5">
                  <div className="font-display font-bold text-lg">{s.name}</div>
                  <div className="text-xs text-muted-foreground mt-1">{s.role}</div>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Button variant="outline" className="rounded-full border-primary/40 hover:bg-primary/10">
              Все 120+ спикеров <ArrowRight className="ml-2 size-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Agenda */}
      <section id="agenda" className="py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <div className="mb-12">
            <div className="font-mono text-xs uppercase tracking-[0.3em] text-primary mb-4">/ 03 — Agenda</div>
            <h2 className="font-display text-4xl md:text-6xl font-bold tracking-tight">
              Три дня <span className="text-gradient">погружения</span>
            </h2>
          </div>

          <div className="space-y-4">
            {agenda.map((a, i) => (
              <div
                key={a.day}
                className="glass rounded-2xl p-6 md:p-10 grid md:grid-cols-[auto_1fr_auto] gap-6 items-center hover:border-primary/40 transition group"
              >
                <div className="font-mono text-5xl md:text-7xl font-bold text-primary/30 group-hover:text-primary/70 transition w-24">
                  0{i + 1}
                </div>
                <div>
                  <div className="font-mono text-xs uppercase tracking-widest text-primary mb-2">{a.day}</div>
                  <div className="font-display text-2xl md:text-3xl font-bold mb-2">{a.title}</div>
                  <p className="text-muted-foreground max-w-2xl">{a.desc}</p>
                </div>
                <ArrowRight className="size-6 text-primary opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition hidden md:block" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Venue */}
      <section id="venue" className="py-24 md:py-32 relative">
        <div className="mx-auto max-w-7xl px-4 md:px-8 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="font-mono text-xs uppercase tracking-[0.3em] text-primary mb-4">/ 04 — Venue</div>
            <h2 className="font-display text-4xl md:text-6xl font-bold tracking-tight mb-6">
              Downtown <span className="text-gradient">Dubai</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Центр мировой крипто-сцены. Закрытая площадка в шаге от Burj Khalifa с панорамным
              видом на DIFC и Marina.
            </p>

            <div className="space-y-4">
              {[
                { icon: MapPin, l: "Локация", v: "Address Downtown · Dubai, UAE" },
                { icon: Calendar, l: "Даты", v: "15 — 17 ноября 2026" },
                { icon: Globe, l: "Язык", v: "EN / RU · синхронный перевод" },
                { icon: Shield, l: "Доступ", v: "По верификации в Telegram Mini App" },
              ].map((row) => (
                <div key={f.t} className="flex items-start gap-4 glass rounded-xl p-4">
                  <row.icon className="size-5 text-primary mt-0.5 shrink-0" />
                  <div>
                    <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">{row.l}</div>
                    <div className="font-medium">{row.v}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative aspect-square rounded-3xl overflow-hidden glass shadow-neon">
            <img src={heroImg} alt="Dubai" width={1920} height={1280} loading="lazy" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 glass rounded-xl p-4 font-mono text-xs">
              <div className="text-primary">25.1972° N · 55.2744° E</div>
              <div className="text-muted-foreground mt-1">Downtown Dubai, UAE</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-5xl px-4 md:px-8">
          <div className="glass rounded-3xl p-10 md:p-20 text-center relative overflow-hidden scanline shadow-neon">
            <div className="absolute inset-0 grid-pattern opacity-40 -z-10" />
            <div className="font-mono text-xs uppercase tracking-[0.3em] text-primary mb-4">
              / Ready to join
            </div>
            <h2 className="font-display text-4xl md:text-7xl font-bold tracking-tighter mb-6">
              Войди в <span className="text-gradient">OFFGRID</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10">
              Регистрация открыта только через Telegram Mini App. Ограниченное количество мест,
              верификация и подбор слотов автоматически.
            </p>
            <Button asChild size="lg" className="bg-gradient-neon text-neon-foreground hover:opacity-90 font-semibold rounded-full px-10 h-14 text-base shadow-neon animate-pulse-glow">
              <a href="https://t.me" target="_blank" rel="noreferrer">
                Открыть Mini App <ArrowRight className="ml-2 size-5" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/50 py-10">
        <div className="mx-auto max-w-7xl px-4 md:px-8 flex flex-wrap items-center justify-between gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-2 font-mono">
            <span className="size-2 rounded-full bg-primary shadow-glow" />
            OFFGRID/26 · Dubai
          </div>
          <div>© 2026 OFFGRID Summit. All systems online.</div>
        </div>
      </footer>
    </div>
  );
}
