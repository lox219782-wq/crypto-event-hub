import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Countdown } from "@/components/Countdown";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { toast } from "sonner";
import { z } from "zod";
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
  Send,
  Copy,
  Check,
  Twitter,
  MessageCircle,
  Mail,
  Quote,
  Mic,
  Network,
  Trophy,
} from "lucide-react";

const EVENT_URL = "https://offgrid26.com";
const EVENT_SHARE_TEXT =
  "OFFGRID/26 — крипто-саммит в Downtown Dubai, 15-17 ноября 2026. Присоединяйся:";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "OFFGRID/26 — Crypto Summit · Downtown Dubai · 15-17 Nov 2026" },
      {
        name: "description",
        content:
          "OFFGRID/26 — главный крипто-саммит года в Downtown Dubai. 3 дня, 120+ спикеров, 60+ фондов, 5 000+ участников. 15-17 ноября 2026.",
      },
      { property: "og:title", content: "OFFGRID/26 — Dubai Crypto Summit" },
      {
        property: "og:description",
        content: "15-17 ноября 2026 · Downtown Dubai · 120+ спикеров",
      },
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
    title: "Opening · Macro & Capital",
    bullets: [
      "Keynote: состояние крипто-рынка в 2026",
      "Панель фондов: Paradigm, a16z, Pantera, Multicoin",
      "Открытие экспо-зоны на 4 000 м²",
      "Welcome dinner для VIP",
    ],
  },
  {
    day: "Day 02 · 16 Nov",
    title: "Builders · DeFi · Infra",
    bullets: [
      "Technical deep-dives: ZK, modular, restaking",
      "Demo Day — 24 проекта pitch перед фондами",
      "Закрытые 1-на-1 встречи (по заявкам)",
      "Networking hub весь день",
    ],
  },
  {
    day: "Day 03 · 17 Nov",
    title: "Trading · Gaming · Afterparty",
    bullets: [
      "Workshops: market making, on-chain analytics",
      "Web3 Gaming showcase",
      "Closing keynote",
      "Sunset yacht party в Dubai Marina",
    ],
  },
];

const stats = [
  { v: "5 000+", l: "Участников" },
  { v: "120+", l: "Спикеров" },
  { v: "60+", l: "Фондов" },
  { v: "$2B+", l: "AUM партнёров" },
];

const proofs = [
  { v: "4", l: "Год подряд", icon: Trophy },
  { v: "85%", l: "Возвращаются", icon: Users },
  { v: "210+", l: "Сделок на ивенте 2025", icon: Network },
  { v: "94 NPS", l: "Оценка участников", icon: Sparkles },
];

const partners = [
  "BINANCE", "TON", "PARADIGM", "LEDGER", "ARBITRUM",
  "CHAINLINK", "POLYGON", "OKX", "SOLANA", "AAVE", "UNISWAP", "LIDO",
];

const press = ["CoinDesk", "The Block", "Bloomberg", "Decrypt", "Forbes", "Cointelegraph"];

const testimonials = [
  {
    quote:
      "Лучший крипто-ивент в регионе. Качество нетворкинга — другого уровня. Закрыли два раунда прямо на площадке.",
    name: "Daniel R.",
    role: "Founder, L2 Protocol",
  },
  {
    quote:
      "OFFGRID — это не про маркетинг, это про deals. Все, кто реально двигают индустрию, здесь.",
    name: "Elena K.",
    role: "Partner, Crypto Fund",
  },
  {
    quote:
      "Программа выверена до минуты, спикеры топ, организация — швейцарские часы. Возвращаюсь третий год.",
    name: "Mark T.",
    role: "Head of Trading, Market Maker",
  },
];

const faqs = [
  {
    q: "Где и когда проходит OFFGRID/26?",
    a: "15-17 ноября 2026 года, Address Downtown Hotel, Downtown Dubai, ОАЭ. В шаге от Burj Khalifa и Dubai Mall.",
  },
  {
    q: "Сколько стоит билет и что входит?",
    a: "Standard — $890, Pro (+1-на-1 встречи и afterparty) — $1 990, VIP (полный пакет + yacht) — $4 500. В стоимость входят все 3 дня, питание, welcome kit и доступ к networking-платформе.",
  },
  {
    q: "Есть ли визовая поддержка?",
    a: "Да. После оплаты мы отправляем приглашение, которое подходит для туристической визы ОАЭ. Граждане 60+ стран получают визу по прилёту.",
  },
  {
    q: "Будет ли перевод на русский?",
    a: "Все mainstage сессии — синхронный перевод EN ↔ RU. Технические workshops — на английском.",
  },
  {
    q: "Можно ли стать спикером или партнёром?",
    a: "Да. Заполни форму ниже или напиши на partners@offgrid26.com — ответим в течение 48 часов.",
  },
  {
    q: "Возврат билета?",
    a: "Полный возврат до 1 сентября 2026, 50% до 15 октября, после — перенос на следующий год.",
  },
];

const inviteSchema = z.object({
  name: z
    .string()
    .trim()
    .min(1, "Введите имя")
    .max(80, "Максимум 80 символов"),
  contact: z
    .string()
    .trim()
    .min(3, "Введите email или @telegram")
    .max(120, "Слишком длинно"),
  message: z.string().trim().max(280, "Максимум 280 символов").optional(),
});

function Landing() {
  return (
    <div className="min-h-screen relative overflow-x-hidden">
      <Nav />
      <Hero />
      <Marquee />
      <About />
      <Proof />
      <Speakers />
      <Agenda />
      <Venue />
      <Testimonials />
      <Invite />
      <Press />
      <Faq />
      <Cta />
      <Footer />
    </div>
  );
}

function Nav() {
  return (
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
            <a href="#faq" className="hover:text-foreground transition">FAQ</a>
          </nav>
          <Button asChild size="sm" className="bg-gradient-neon text-neon-foreground hover:opacity-90 font-semibold rounded-full">
            <a href="#tickets">Билеты <ArrowRight className="ml-1 size-4" /></a>
          </Button>
        </div>
      </div>
    </header>
  );
}

function Hero() {
  return (
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
            15 — 17 ноября · 2026 · Downtown Dubai
          </span>
        </div>

        <h1 className="font-display font-bold leading-[0.85] tracking-tighter text-6xl md:text-8xl lg:text-[10rem]">
          <span className="block">OFF</span>
          <span className="block text-gradient">GRID/26</span>
        </h1>

        <p className="mt-8 max-w-2xl text-lg md:text-xl text-muted-foreground">
          Главный крипто-саммит года. Три дня, 120+ спикеров мирового уровня, 60+ фондов и 5 000+
          founders, traders и builders в сердце Дубая.
        </p>

        <div className="mt-10 flex flex-wrap gap-4">
          <Button asChild size="lg" className="bg-gradient-neon text-neon-foreground hover:opacity-90 font-semibold rounded-full px-8 shadow-neon animate-pulse-glow">
            <a href="#tickets">Купить билет <ArrowRight className="ml-2 size-5" /></a>
          </Button>
          <Button asChild size="lg" variant="outline" className="rounded-full border-primary/40 hover:bg-primary/10">
            <a href="#agenda">Программа</a>
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
  );
}

function Marquee() {
  return (
    <section className="border-y border-border/50 bg-card/30 py-6 overflow-hidden">
      <div className="flex animate-marquee whitespace-nowrap">
        {[...partners, ...partners, ...partners].map((p, i) => (
          <span key={i} className="mx-10 font-mono text-xl md:text-2xl font-bold text-muted-foreground/60 hover:text-primary transition">
            {p} <span className="text-primary mx-4">/</span>
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
        <div className="grid md:grid-cols-2 gap-12 items-end mb-16">
          <div>
            <div className="font-mono text-xs uppercase tracking-[0.3em] text-primary mb-4">/ 01 — About</div>
            <h2 className="font-display text-4xl md:text-6xl font-bold tracking-tight">
              Где встречаются <span className="text-gradient">capital</span> и <span className="text-gradient">code</span>.
            </h2>
          </div>
          <p className="text-lg text-muted-foreground">
            OFFGRID — закрытая экосистема, где основатели, фонды и разработчики строят следующее
            поколение Web3. С 2023 года мы провели 4 саммита, на которых было закрыто более 400
            сделок и анонсировано 80+ новых протоколов.
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
            { icon: Zap, t: "Mainstage", d: "8 часов keynotes и панелей с мировыми лидерами индустрии." },
            { icon: Users, t: "Private Rooms", d: "Закрытые встречи 1-на-1 с фондами и founders по заявкам." },
            { icon: Sparkles, t: "Afterparty", d: "Yacht & rooftop события в Marina и на Palm Jumeirah." },
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
  );
}

function Proof() {
  return (
    <section className="py-24 md:py-32 relative">
      <div className="absolute inset-0 -z-10">
        <img src={stageImg} alt="" width={1920} height={1080} loading="lazy" className="w-full h-full object-cover opacity-20" />
        <div className="absolute inset-0 bg-background/70" />
      </div>
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="font-mono text-xs uppercase tracking-[0.3em] text-primary mb-4">/ 02 — Track record</div>
        <h2 className="font-display text-4xl md:text-6xl font-bold tracking-tight max-w-3xl mb-12">
          Не первый год. <span className="text-gradient">Не на словах.</span>
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {proofs.map((p) => (
            <div key={p.l} className="glass rounded-2xl p-6 md:p-8 relative">
              <p.icon className="size-6 text-primary mb-4" />
              <div className="font-display text-3xl md:text-4xl font-bold text-gradient">{p.v}</div>
              <div className="mt-2 text-sm text-muted-foreground">{p.l}</div>
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
      <div className="absolute inset-0 grid-pattern opacity-30 -z-10" />
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="flex items-end justify-between mb-12 flex-wrap gap-4">
          <div>
            <div className="font-mono text-xs uppercase tracking-[0.3em] text-primary mb-4">/ 03 — Speakers</div>
            <h2 className="font-display text-4xl md:text-6xl font-bold tracking-tight">
              Лица <span className="text-gradient">индустрии</span>
            </h2>
          </div>
          <p className="text-muted-foreground max-w-md">
            120+ confirmed: founders топ-протоколов, partners ведущих фондов, исследователи DeFi
            и L2.
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

        <p className="mt-8 text-center text-xs text-muted-foreground font-mono">
          + 112 confirmed speakers · full list published monthly
        </p>
      </div>
    </section>
  );
}

function Agenda() {
  return (
    <section id="agenda" className="py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="mb-12">
          <div className="font-mono text-xs uppercase tracking-[0.3em] text-primary mb-4">/ 04 — Agenda</div>
          <h2 className="font-display text-4xl md:text-6xl font-bold tracking-tight">
            Три дня <span className="text-gradient">погружения</span>
          </h2>
        </div>

        <div className="space-y-4">
          {agenda.map((a, i) => (
            <div
              key={a.day}
              className="glass rounded-2xl p-6 md:p-10 grid md:grid-cols-[auto_1fr] gap-6 md:gap-10 hover:border-primary/40 transition group"
            >
              <div className="font-mono text-5xl md:text-7xl font-bold text-primary/30 group-hover:text-primary/70 transition md:w-32">
                0{i + 1}
              </div>
              <div>
                <div className="font-mono text-xs uppercase tracking-widest text-primary mb-2">{a.day}</div>
                <div className="font-display text-2xl md:text-3xl font-bold mb-4">{a.title}</div>
                <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-2 text-muted-foreground">
                  {a.bullets.map((b) => (
                    <li key={b} className="flex gap-2 items-start text-sm">
                      <Check className="size-4 text-primary mt-0.5 shrink-0" />
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
          <div className="font-mono text-xs uppercase tracking-[0.3em] text-primary mb-4">/ 05 — Venue</div>
          <h2 className="font-display text-4xl md:text-6xl font-bold tracking-tight mb-6">
            Downtown <span className="text-gradient">Dubai</span>
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Address Downtown — пятизвёздочный отель в шаге от Burj Khalifa с панорамным видом на
            DIFC и Dubai Fountain. 4 000 м² экспо-площадки, 6 залов, premium-кейтеринг.
          </p>

          <div className="space-y-3">
            {[
              { icon: MapPin, l: "Локация", v: "Address Downtown · Sheikh Mohammed bin Rashid Blvd" },
              { icon: Calendar, l: "Даты", v: "15 — 17 ноября 2026 · 09:00 — late" },
              { icon: Globe, l: "Язык", v: "EN · синхронный перевод на RU" },
              { icon: Shield, l: "Безопасность", v: "Personal security & medical on-site 24/7" },
            ].map((row) => (
              <div key={row.l} className="flex items-start gap-4 glass rounded-xl p-4">
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
  );
}

function Testimonials() {
  return (
    <section className="py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="font-mono text-xs uppercase tracking-[0.3em] text-primary mb-4">/ 06 — Reviews</div>
        <h2 className="font-display text-4xl md:text-6xl font-bold tracking-tight mb-12 max-w-3xl">
          Что говорят <span className="text-gradient">участники</span>
        </h2>
        <div className="grid md:grid-cols-3 gap-4">
          {testimonials.map((t) => (
            <figure key={t.name} className="glass rounded-2xl p-8 relative">
              <Quote className="size-8 text-primary/40 mb-4" />
              <blockquote className="text-foreground/90 leading-relaxed mb-6">
                "{t.quote}"
              </blockquote>
              <figcaption className="border-t border-border/50 pt-4">
                <div className="font-semibold">{t.name}</div>
                <div className="text-xs text-muted-foreground mt-1">{t.role}</div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

function Invite() {
  const [form, setForm] = useState({ name: "", contact: "", message: "" });
  const [copied, setCopied] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const parsed = inviteSchema.safeParse(form);
    if (!parsed.success) {
      toast.error(parsed.error.issues[0]?.message ?? "Проверьте поля");
      return;
    }
    toast.success(`Приглашение для ${parsed.data.name} отправлено!`);
    setForm({ name: "", contact: "", message: "" });
  };

  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(EVENT_URL);
      setCopied(true);
      toast.success("Ссылка скопирована");
      setTimeout(() => setCopied(false), 2000);
    } catch {
      toast.error("Не удалось скопировать");
    }
  };

  const shareOn = (url: string) => window.open(url, "_blank", "noopener,noreferrer");

  const shareTargets = [
    {
      label: "Telegram",
      icon: Send,
      url: `https://t.me/share/url?url=${encodeURIComponent(EVENT_URL)}&text=${encodeURIComponent(EVENT_SHARE_TEXT)}`,
    },
    {
      label: "X / Twitter",
      icon: Twitter,
      url: `https://twitter.com/intent/tweet?text=${encodeURIComponent(EVENT_SHARE_TEXT)}&url=${encodeURIComponent(EVENT_URL)}`,
    },
    {
      label: "WhatsApp",
      icon: MessageCircle,
      url: `https://wa.me/?text=${encodeURIComponent(`${EVENT_SHARE_TEXT} ${EVENT_URL}`)}`,
    },
    {
      label: "Email",
      icon: Mail,
      url: `mailto:?subject=${encodeURIComponent("OFFGRID/26 · Dubai")}&body=${encodeURIComponent(`${EVENT_SHARE_TEXT} ${EVENT_URL}`)}`,
    },
  ];

  return (
    <section id="invite" className="py-24 md:py-32 relative">
      <div className="absolute inset-0 grid-pattern opacity-30 -z-10" />
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="font-mono text-xs uppercase tracking-[0.3em] text-primary mb-4">/ 07 — Invite</div>
        <h2 className="font-display text-4xl md:text-6xl font-bold tracking-tight mb-4">
          Позови <span className="text-gradient">своего</span>
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mb-12">
          OFFGRID силён комьюнити. Поделись событием с founder-другом, инвестором или командой —
          мы пришлём им персональное приглашение.
        </p>

        <div className="grid lg:grid-cols-2 gap-6">
          <form onSubmit={handleSubmit} className="glass rounded-2xl p-6 md:p-8 space-y-4">
            <div>
              <label className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">Имя</label>
              <Input
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                placeholder="Кого приглашаешь?"
                maxLength={80}
                className="mt-1 bg-input/50"
              />
            </div>
            <div>
              <label className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">Email или @telegram</label>
              <Input
                value={form.contact}
                onChange={(e) => setForm({ ...form, contact: e.target.value })}
                placeholder="friend@example.com или @username"
                maxLength={120}
                className="mt-1 bg-input/50"
              />
            </div>
            <div>
              <label className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">Сообщение (опционально)</label>
              <Textarea
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                placeholder="Привет, держи приглашение на OFFGRID/26..."
                maxLength={280}
                rows={3}
                className="mt-1 bg-input/50"
              />
              <div className="mt-1 text-right text-[10px] font-mono text-muted-foreground">
                {form.message.length}/280
              </div>
            </div>
            <Button type="submit" className="w-full bg-gradient-neon text-neon-foreground hover:opacity-90 font-semibold rounded-full shadow-glow">
              Отправить приглашение <Send className="ml-2 size-4" />
            </Button>
          </form>

          <div className="glass rounded-2xl p-6 md:p-8 flex flex-col">
            <div className="font-display text-xl font-bold mb-2">Поделиться напрямую</div>
            <p className="text-sm text-muted-foreground mb-6">
              Один клик — отправит приглашение в любую соцсеть или скопирует ссылку.
            </p>
            <div className="grid grid-cols-2 gap-3 mb-6">
              {shareTargets.map((s) => (
                <button
                  key={s.label}
                  onClick={() => shareOn(s.url)}
                  className="glass rounded-xl p-4 flex items-center gap-3 hover:border-primary/60 hover:bg-primary/5 transition group"
                >
                  <s.icon className="size-5 text-primary group-hover:scale-110 transition" />
                  <span className="font-medium text-sm">{s.label}</span>
                </button>
              ))}
            </div>
            <div className="mt-auto glass rounded-xl p-4 flex items-center gap-3 font-mono text-xs">
              <code className="flex-1 truncate text-muted-foreground">{EVENT_URL}</code>
              <button
                onClick={copyLink}
                className="flex items-center gap-1 text-primary hover:text-foreground transition shrink-0"
              >
                {copied ? <Check className="size-4" /> : <Copy className="size-4" />}
                {copied ? "Готово" : "Копировать"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Press() {
  return (
    <section className="py-16 md:py-24 border-y border-border/50">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="text-center mb-8 font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground">
          Featured in
        </div>
        <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6">
          {press.map((p) => (
            <span key={p} className="font-display text-xl md:text-2xl font-bold text-muted-foreground/60 hover:text-foreground transition">
              {p}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

function Faq() {
  return (
    <section id="faq" className="py-24 md:py-32">
      <div className="mx-auto max-w-4xl px-4 md:px-8">
        <div className="font-mono text-xs uppercase tracking-[0.3em] text-primary mb-4">/ 08 — FAQ</div>
        <h2 className="font-display text-4xl md:text-6xl font-bold tracking-tight mb-12">
          Частые <span className="text-gradient">вопросы</span>
        </h2>
        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((f, i) => (
            <AccordionItem
              key={i}
              value={`item-${i}`}
              className="glass rounded-2xl px-6 border-0"
            >
              <AccordionTrigger className="font-display text-left text-lg font-semibold hover:no-underline py-5">
                {f.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-5 leading-relaxed">
                {f.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}

function Cta() {
  const tiers = [
    { name: "Standard", price: "$890", perks: ["3 дня доступа", "Все mainstage", "Welcome kit", "Coffee & lunch"] },
    { name: "Pro", price: "$1 990", perks: ["Всё из Standard", "1-на-1 встречи", "Workshops", "Afterparty"], highlight: true },
    { name: "VIP", price: "$4 500", perks: ["Всё из Pro", "Yacht party", "Speakers dinner", "Personal concierge"] },
  ];

  return (
    <section id="tickets" className="py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="text-center mb-12">
          <div className="font-mono text-xs uppercase tracking-[0.3em] text-primary mb-4">/ 09 — Tickets</div>
          <h2 className="font-display text-4xl md:text-6xl font-bold tracking-tight">
            Выбери <span className="text-gradient">формат</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-4 md:gap-6">
          {tiers.map((t) => (
            <div
              key={t.name}
              className={`glass rounded-3xl p-8 relative ${
                t.highlight ? "border-primary/60 shadow-neon" : ""
              }`}
            >
              {t.highlight && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-neon text-neon-foreground font-mono text-[10px] uppercase tracking-widest px-3 py-1 rounded-full">
                  Most popular
                </div>
              )}
              <div className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-2">
                {t.name}
              </div>
              <div className="font-display text-5xl font-bold mb-6 text-gradient">{t.price}</div>
              <ul className="space-y-2 mb-8">
                {t.perks.map((p) => (
                  <li key={p} className="flex gap-2 text-sm">
                    <Check className="size-4 text-primary mt-0.5 shrink-0" />
                    {p}
                  </li>
                ))}
              </ul>
              <Button
                className={`w-full rounded-full font-semibold ${
                  t.highlight
                    ? "bg-gradient-neon text-neon-foreground hover:opacity-90 shadow-glow"
                    : "bg-secondary hover:bg-secondary/80"
                }`}
              >
                Купить {t.name} <ArrowRight className="ml-2 size-4" />
              </Button>
            </div>
          ))}
        </div>

        <p className="text-center mt-8 text-sm text-muted-foreground">
          Стать спикером или партнёром? Напиши на{" "}
          <a href="mailto:partners@offgrid26.com" className="text-primary hover:underline">
            partners@offgrid26.com
          </a>
        </p>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border/50 py-12">
      <div className="mx-auto max-w-7xl px-4 md:px-8 grid md:grid-cols-3 gap-8 text-sm">
        <div>
          <div className="flex items-center gap-2 font-mono font-bold mb-3">
            <span className="size-2 rounded-full bg-primary shadow-glow" />
            OFFGRID/26
          </div>
          <p className="text-muted-foreground">
            Главный крипто-саммит года.<br />Downtown Dubai · 15-17 ноября 2026.
          </p>
        </div>
        <div>
          <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground mb-3">Навигация</div>
          <ul className="space-y-1.5">
            <li><a href="#about" className="hover:text-primary">About</a></li>
            <li><a href="#speakers" className="hover:text-primary">Speakers</a></li>
            <li><a href="#agenda" className="hover:text-primary">Agenda</a></li>
            <li><a href="#tickets" className="hover:text-primary">Tickets</a></li>
          </ul>
        </div>
        <div>
          <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground mb-3">Контакты</div>
          <ul className="space-y-1.5 text-muted-foreground">
            <li><a href="mailto:hello@offgrid26.com" className="hover:text-primary">hello@offgrid26.com</a></li>
            <li><a href="mailto:partners@offgrid26.com" className="hover:text-primary">partners@offgrid26.com</a></li>
            <li><a href="mailto:press@offgrid26.com" className="hover:text-primary">press@offgrid26.com</a></li>
          </ul>
        </div>
      </div>
      <div className="mx-auto max-w-7xl px-4 md:px-8 mt-8 pt-6 border-t border-border/50 text-xs text-muted-foreground flex flex-wrap justify-between gap-3">
        <div>© 2026 OFFGRID Summit. All systems online.</div>
        <div className="font-mono">Made in Dubai, UAE</div>
      </div>
    </footer>
  );
}
