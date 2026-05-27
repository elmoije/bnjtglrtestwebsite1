import { Link } from "react-router-dom";
import heroPizza from "@/assets/hero-pizza.jpg";
import oven from "@/assets/oven.jpg";
import pizzaSeafood from "@/assets/pizza-seafood.jpg";
import lasagna from "@/assets/lasagna.jpg";
import pizzaMargherita from "@/assets/pizza-margherita.jpg";
import { MapPin, Phone, Clock, Star, Utensils, ShoppingBag, Flame } from "lucide-react";

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <Hero />
        <Story />
        <Specialites />
        <Avis />
        <Infos />
      </main>
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <header className="absolute top-0 left-0 right-0 z-20">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
        <Link to="/" className="flex items-center gap-2 text-background">
          <Flame className="h-5 w-5" style={{ color: "var(--ember)" }} />
          <span className="font-display text-2xl tracking-wide" style={{ fontFamily: "var(--font-display)" }}>
            Le Florentin
          </span>
        </Link>
        <nav className="hidden gap-8 text-sm uppercase tracking-widest text-background/80 md:flex">
          <a href="#histoire" className="hover:text-background">Histoire</a>
          <Link to="/menu" className="hover:text-background">Carte</Link>
          <a href="#avis" className="hover:text-background">Avis</a>
          <a href="#infos" className="hover:text-background">Contact</a>
        </nav>
        <a
          href="tel:+33981183587"
          className="hidden rounded-sm bg-primary px-5 py-2.5 text-sm font-semibold uppercase tracking-widest text-primary-foreground transition hover:opacity-90 md:inline-block"
        >
          Réserver
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative isolate min-h-[100svh] overflow-hidden">
      <img
        src={heroPizza}
        alt="Pizza artisanale cuite au feu de bois chez Le Florentin"
        width={1920}
        height={1080}
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-foreground/70 via-foreground/40 to-foreground/85" />
      <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-7xl flex-col justify-center px-6 pt-32 pb-20">
        <span className="mb-6 inline-flex w-fit items-center gap-2 rounded-full border border-background/30 bg-background/10 px-4 py-1.5 text-xs uppercase tracking-[0.2em] text-background backdrop-blur">
          <Flame className="h-3.5 w-3.5" style={{ color: "var(--ember)" }} />
          Pizzeria · Sainte-Croix-en-Plaine
        </span>
        <h1 className="max-w-3xl text-background" style={{ fontSize: "clamp(2.75rem, 7vw, 6rem)", lineHeight: 1.02 }}>
          La vraie pizza,<br />
          <span style={{ color: "var(--secondary)" }}>cuite au feu de bois.</span>
        </h1>
        <p className="mt-6 max-w-xl text-lg text-background/85">
          Pâte levée 48 h, produits frais et lasagnes maison. Une cuisine
          italienne généreuse, à savourer sur place ou à emporter.
        </p>
        <div className="mt-10 flex flex-wrap gap-3">
          <a
            href="tel:+33981183587"
            className="inline-flex items-center gap-2 rounded-sm bg-primary px-6 py-3.5 text-sm font-semibold uppercase tracking-widest text-primary-foreground transition hover:opacity-90"
          >
            <Phone className="h-4 w-4" /> Commander · 09 81 18 35 87
          </a>
          <Link
            to="/menu"
            className="inline-flex items-center gap-2 rounded-sm border border-background/40 px-6 py-3.5 text-sm font-semibold uppercase tracking-widest text-background backdrop-blur transition hover:bg-background/10"
          >
            Voir la carte
          </Link>
        </div>
        <div className="mt-14 flex flex-wrap items-center gap-x-10 gap-y-4 text-background/85">
          <Rating />
          <Pill icon={<Utensils className="h-4 w-4" />}>Sur place</Pill>
          <Pill icon={<ShoppingBag className="h-4 w-4" />}>À emporter</Pill>
          <Pill icon={<Clock className="h-4 w-4" />}>11h – 22h</Pill>
        </div>
      </div>
    </section>
  );
}

function Rating() {
  return (
    <div className="flex items-center gap-3">
      <div className="flex" aria-label="Note 4,4 sur 5">
        {[0, 1, 2, 3, 4].map((i) => (
          <Star key={i} className="h-4 w-4 fill-current" style={{ color: "var(--secondary)" }} />
        ))}
      </div>
      <span className="text-sm">
        <strong>4,4/5</strong> · 61 avis Google
      </span>
    </div>
  );
}

function Pill({ icon, children }: { icon: React.ReactNode; children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 text-sm">
      {icon}
      {children}
    </span>
  );
}

function Story() {
  return (
    <section id="histoire" className="relative overflow-hidden py-24 md:py-32">
      <div className="mx-auto grid max-w-7xl gap-16 px-6 md:grid-cols-2 md:items-center">
        <div>
          <span className="text-xs uppercase tracking-[0.25em] text-primary">Notre maison</span>
          <h2 className="mt-4" style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)", lineHeight: 1.05 }}>
            Une tradition italienne au cœur de l'Alsace.
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            Depuis des années, Le Florentin régale les habitants de
            Sainte-Croix-en-Plaine avec une cuisine italienne sincère. Notre
            chef sélectionne chaque ingrédient avec soin : tomates San Marzano,
            mozzarella fior di latte, huile d'olive du sud et farine italienne.
          </p>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            Le résultat ? Des pizzas à la pâte fine et croustillante, des
            lasagnes maison réconfortantes et l'accueil chaleureux d'une vraie
            trattoria de quartier.
          </p>
          <div className="mt-10 grid grid-cols-3 gap-6 border-t border-border pt-8">
            <Stat value="4,4★" label="Note Google" />
            <Stat value="48h" label="Pâte levée" />
            <Stat value="10+" label="Années" />
          </div>
        </div>
        <div className="relative">
          <img
            src={oven}
            alt="Four à bois de la pizzeria Le Florentin"
            width={1200}
            height={900}
            loading="lazy"
            className="h-[32rem] w-full rounded-sm object-cover"
            style={{ boxShadow: "var(--shadow-warm)" }}
          />
          <div className="absolute -bottom-6 -left-6 hidden rounded-sm bg-primary px-6 py-5 text-primary-foreground shadow-lg md:block">
            <p className="font-display text-3xl leading-none">350°C</p>
            <p className="mt-1 text-xs uppercase tracking-widest">Au feu de bois</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <p className="font-display text-3xl text-primary">{value}</p>
      <p className="mt-1 text-xs uppercase tracking-widest text-muted-foreground">{label}</p>
    </div>
  );
}

const specialites = [
  {
    name: "Pizza Margherita",
    desc: "Tomate San Marzano, mozzarella fior di latte, basilic frais, huile d'olive extra vierge.",
    price: "12 €",
    img: pizzaMargherita,
    tag: "Classique",
  },
  {
    name: "Pizza Fruits de Mer",
    desc: "Crevettes, moules, calamars, sauce tomate maison et persillade. Notre signature.",
    price: "18 €",
    img: pizzaSeafood,
    tag: "Signature",
  },
  {
    name: "Lasagnes Maison",
    desc: "Pâtes fraîches, ragù mijoté longuement, béchamel onctueuse et parmesan gratiné.",
    price: "15 €",
    img: lasagna,
    tag: "Maison",
  },
];

function Specialites() {
  return (
    <section
      id="specialites"
      className="relative py-24 md:py-32"
      style={{ background: "var(--gradient-warm)" }}
    >
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs uppercase tracking-[0.25em] text-primary">La carte</span>
          <h2 className="mt-4" style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)", lineHeight: 1.05 }}>
            Nos spécialités préférées.
          </h2>
          <p className="mt-4 text-muted-foreground">
            Une sélection plébiscitée par nos clients · 10 – 30 € par personne.
          </p>
        </div>
        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {specialites.map((s) => (
            <article
              key={s.name}
              className="group flex flex-col overflow-hidden rounded-sm bg-card transition hover:-translate-y-1"
              style={{ boxShadow: "var(--shadow-warm)" }}
            >
              <div className="relative aspect-square overflow-hidden">
                <img
                  src={s.img}
                  alt={s.name}
                  width={900}
                  height={900}
                  loading="lazy"
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                />
                <span className="absolute top-4 left-4 rounded-full bg-primary px-3 py-1 text-[10px] font-semibold uppercase tracking-widest text-primary-foreground">
                  {s.tag}
                </span>
              </div>
              <div className="flex flex-1 flex-col p-7">
                <div className="flex items-baseline justify-between gap-4">
                  <h3 className="text-2xl">{s.name}</h3>
                  <span className="font-display text-2xl text-primary">{s.price}</span>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
              </div>
            </article>
          ))}
        </div>
        <div className="mt-14 text-center">
          <div className="flex flex-wrap justify-center gap-3">
            <Link
              to="/menu"
              className="inline-flex items-center gap-2 rounded-sm bg-foreground px-7 py-4 text-sm font-semibold uppercase tracking-widest text-background transition hover:opacity-90"
            >
              <Utensils className="h-4 w-4" /> Voir toute la carte
            </Link>
            <a
              href="tel:+33981183587"
              className="inline-flex items-center gap-2 rounded-sm bg-primary px-7 py-4 text-sm font-semibold uppercase tracking-widest text-primary-foreground transition hover:opacity-90"
            >
              <Phone className="h-4 w-4" /> Commander à emporter
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

const reviews = [
  {
    text: "Très satisfait des pizzas proposées avec des produits de qualité. Le chef et la serveuse très sympathiques.",
    author: "Fabien D.",
    meta: "Local Guide · 125 avis",
  },
  {
    text: "Très sympas. Bonne cuisine, bon rapport qualité prix. Bon accueil.",
    author: "Emmanuel B.",
    meta: "Local Guide · 116 avis",
  },
  {
    text: "Nous cherchons des pizzas à emporter. Très bonnes, mais également les viandes et les salades.",
    author: "Pierrette L.",
    meta: "Local Guide · 69 avis",
  },
];

function Avis() {
  return (
    <section id="avis" className="bg-foreground py-24 text-background md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <span className="text-xs uppercase tracking-[0.25em]" style={{ color: "var(--secondary)" }}>
              Ils nous aiment
            </span>
            <h2 className="mt-4 max-w-2xl" style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)", lineHeight: 1.05 }}>
              4,4 sur 5 · 61 avis Google.
            </h2>
          </div>
          <div className="flex items-center gap-2">
            {[0, 1, 2, 3, 4].map((i) => (
              <Star key={i} className="h-6 w-6 fill-current" style={{ color: "var(--secondary)" }} />
            ))}
          </div>
        </div>
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {reviews.map((r) => (
            <figure
              key={r.author}
              className="flex h-full flex-col rounded-sm border border-background/10 p-8"
              style={{ backgroundColor: "oklch(0.28 0.04 40)" }}
            >
              <div className="flex gap-1">
                {[0, 1, 2, 3, 4].map((i) => (
                  <Star key={i} className="h-3.5 w-3.5 fill-current" style={{ color: "var(--secondary)" }} />
                ))}
              </div>
              <blockquote className="mt-5 flex-1 text-lg leading-relaxed text-background/90">
                « {r.text} »
              </blockquote>
              <figcaption className="mt-6 border-t border-background/10 pt-5">
                <p className="font-semibold">{r.author}</p>
                <p className="text-xs uppercase tracking-widest text-background/60">{r.meta}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

function Infos() {
  return (
    <section id="infos" className="py-24 md:py-32">
      <div className="mx-auto grid max-w-7xl gap-16 px-6 md:grid-cols-2">
        <div>
          <span className="text-xs uppercase tracking-[0.25em] text-primary">Nous trouver</span>
          <h2 className="mt-4" style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)", lineHeight: 1.05 }}>
            Venez nous rendre visite.
          </h2>
          <div className="mt-10 space-y-7">
            <InfoRow icon={<MapPin className="h-5 w-5" />} title="Adresse">
              1 Place de la République<br />
              68127 Sainte-Croix-en-Plaine
            </InfoRow>
            <InfoRow icon={<Phone className="h-5 w-5" />} title="Téléphone">
              <a href="tel:+33981183587" className="hover:text-primary">09 81 18 35 87</a>
            </InfoRow>
            <InfoRow icon={<Clock className="h-5 w-5" />} title="Horaires">
              7j/7 — lundi au dimanche<br />
              11h00 – 14h30 · 18h00 – 22h00
            </InfoRow>
            <InfoRow icon={<Utensils className="h-5 w-5" />} title="Services">
              Repas sur place · Vente à emporter
            </InfoRow>
          </div>
          <div className="mt-10 flex flex-wrap gap-3">
            <a
              href="tel:+33981183587"
              className="inline-flex items-center gap-2 rounded-sm bg-primary px-6 py-3.5 text-sm font-semibold uppercase tracking-widest text-primary-foreground hover:opacity-90"
            >
              <Phone className="h-4 w-4" /> Appeler
            </a>
            <a
              href="https://www.google.com/maps/dir/?api=1&destination=1+Place+de+la+R%C3%A9publique+68127+Sainte-Croix-en-Plaine"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-sm border border-foreground/20 px-6 py-3.5 text-sm font-semibold uppercase tracking-widest hover:bg-foreground/5"
            >
              <MapPin className="h-4 w-4" /> Itinéraire
            </a>
          </div>
        </div>
        <div className="overflow-hidden rounded-sm" style={{ boxShadow: "var(--shadow-warm)" }}>
          <iframe
            title="Plan d'accès Le Florentin"
            src="https://www.google.com/maps?q=1+Place+de+la+R%C3%A9publique+68127+Sainte-Croix-en-Plaine&output=embed"
            className="h-full min-h-[28rem] w-full border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
}

function InfoRow({
  icon,
  title,
  children,
}: {
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex gap-5">
      <span className="mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-sm bg-primary/10 text-primary">
        {icon}
      </span>
      <div>
        <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">{title}</p>
        <p className="mt-1 leading-relaxed">{children}</p>
      </div>
    </div>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border bg-background py-10">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-6 text-sm text-muted-foreground">
        <div className="flex items-center gap-2">
          <Flame className="h-4 w-4 text-primary" />
          <span className="font-display text-lg text-foreground">Le Florentin</span>
        </div>
        <p>© {new Date().getFullYear()} Le Florentin · Pizzeria artisanale à Sainte-Croix-en-Plaine</p>
      </div>
    </footer>
  );
}

export default Index;
