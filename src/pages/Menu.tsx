import { Link } from "react-router-dom";
import { Phone, ArrowLeft, Flame, Star } from "lucide-react";
import pizzaMargherita from "@/assets/pizza-margherita.jpg";
import pizzaSeafood from "@/assets/pizza-seafood.jpg";
import pizzaRegina from "@/assets/pizza-regina.jpg";
import pizza4fromages from "@/assets/pizza-4fromages.jpg";
import lasagna from "@/assets/lasagna.jpg";
import fauxFilet from "@/assets/faux-filet.jpg";
import tarteFlambee from "@/assets/tarte-flambee.jpg";

type Item = { name: string; desc?: string; price: string; img?: string; tag?: string };

const pizzas: Item[] = [
  { name: "Margherita", desc: "Tomate, mozzarella, basilic.", price: "9,50 €", img: pizzaMargherita, tag: "Populaire" },
  { name: "Regina", desc: "Tomate, mozzarella, jambon, champignons.", price: "11,00 €", img: pizzaRegina, tag: "Populaire" },
  { name: "Napolitaine", desc: "Tomate, mozzarella, anchois, câpres, olives.", price: "12,00 €" },
  { name: "Calzone", desc: "Tomate, mozzarella, jambon, champignons, œuf.", price: "12,50 €" },
  { name: "4 Fromages", desc: "Tomate, gorgonzola, mozzarella, chèvre, emmental.", price: "13,50 €", img: pizza4fromages, tag: "Populaire" },
  { name: "4 Saisons", desc: "Tomate, mozzarella, jambon, olives, champignons, poivrons, artichaut.", price: "13,00 €" },
  { name: "Hawaï", desc: "Tomate, mozzarella, jambon, ananas.", price: "11,50 €" },
  { name: "Romana", desc: "Tomate, mozzarella, jambon, olives.", price: "11,00 €" },
  { name: "Fruits de mer", desc: "Tomate, mozzarella, fruits de mer, ail, persillade.", price: "13,00 €", img: pizzaSeafood, tag: "Signature" },
  { name: "Sicilienne", desc: "Tomate, mozzarella, merguez, œuf.", price: "12,00 €" },
  { name: "Végétarienne", desc: "Tomate, mozzarella, poivrons, maïs, champignons, artichaut, olives.", price: "11,50 €" },
  { name: "Milan", desc: "Tomate, mozzarella, jambon, gorgonzola, olives.", price: "13,00 €" },
  { name: "Bolognaise", desc: "Tomate, mozzarella, viande hachée, œuf.", price: "11,50 €" },
  { name: "Petit Bonheur", desc: "Tomate, mozzarella, salami, coppa, œuf, oignons.", price: "11,00 €" },
  { name: "Felicita", desc: "Tomate, mozzarella, chorizo, champignons, poivrons, olives.", price: "13,50 €" },
  { name: "Paysanne", desc: "Fromage blanc, lardons, oignons, œuf.", price: "13,50 €" },
  { name: "Mexicaine", desc: "Tomate, mozzarella, poivrons, chorizo, viande hachée, merguez.", price: "14,50 €" },
  { name: "Parma", desc: "Tomate, mozzarella, jambon de Parme, copeaux de Grana.", price: "14,50 €" },
  { name: "Amoré", desc: "Tomate, mozzarella, tomate fraîche, jambon de Parme, chèvre, copeaux de Grana.", price: "16,00 €" },
];

const tartes: Item[] = [
  { name: "Nature", desc: "Crème, oignons, lardons.", price: "9,00 €", img: tarteFlambee, tag: "Tradition" },
  { name: "Champignons", price: "11,50 €" },
  { name: "Gratinée", price: "11,00 €" },
  { name: "Munster", price: "12,50 €" },
];

const viandes: Item[] = [
  { name: "Faux-Filet nature", price: "18,00 €" },
  { name: "Faux-Filet poivre", price: "22,00 €" },
  { name: "Faux-Filet Maître d'Hôtel", price: "20,00 €" },
  { name: "Faux-Filet au four", desc: "Beurre, ail, persil, parmesan râpé.", price: "25,00 €", img: fauxFilet, tag: "Signature" },
  { name: "Escalope de veau à la crème", desc: "Champignons.", price: "20,00 €" },
  { name: "Escalope de veau Viennoise", price: "20,00 €" },
  { name: "Escalope de veau nature", price: "18,00 €" },
  { name: "Cordon bleu de veau nature", price: "20,00 €" },
  { name: "Cordon bleu de veau à la crème", desc: "Champignons.", price: "22,00 €" },
  { name: "Cordon bleu de veau au Munster", price: "24,00 €" },
  { name: "Jarret de porc braisé", price: "17,50 €" },
  { name: "Carpaccio de bœuf, frites", price: "15,00 €" },
  { name: "Tartare à l'italienne", price: "18,00 €" },
];

const pates: Item[] = [
  { name: "Lasagnes maison", desc: "Pâtes fraîches, ragù mijoté, béchamel et parmesan.", price: "15,00 €", img: lasagna, tag: "Populaire" },
];

function MenuPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <MenuHeader />
      <main className="pb-24">
        <MenuHero />
        <Section
          id="pizzas"
          eyebrow="Pizzas — 29 cm"
          title="Nos pizzas au feu de bois."
          note="Supplément ingrédient : 1 €"
          items={pizzas}
        />
        <Section
          id="tartes"
          eyebrow="Tradition alsacienne"
          title="Tartes flambées."
          items={tartes}
        />
        <Section
          id="viandes"
          eyebrow="Spécialités"
          title="Viandes."
          note="Toutes nos viandes sont accompagnées de légumes, de pâtes ou de frites."
          items={viandes}
        />
        <Section
          id="pates"
          eyebrow="Maison"
          title="Pâtes & gratins."
          items={pates}
        />
        <Bambino />
        <OrderCTA />
      </main>
      <MenuFooter />
    </div>
  );
}

function MenuHeader() {
  return (
    <header className="sticky top-0 z-30 border-b border-border bg-background/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link to="/" className="flex items-center gap-2">
          <Flame className="h-5 w-5 text-primary" />
          <span className="font-display text-2xl tracking-wide">Le Florentin</span>
        </Link>
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-muted-foreground hover:text-foreground"
        >
          <ArrowLeft className="h-4 w-4" /> Accueil
        </Link>
        <a
          href="tel:+33981183587"
          className="hidden rounded-sm bg-primary px-5 py-2.5 text-sm font-semibold uppercase tracking-widest text-primary-foreground transition hover:opacity-90 md:inline-flex md:items-center md:gap-2"
        >
          <Phone className="h-4 w-4" /> Commander
        </a>
      </div>
    </header>
  );
}

function MenuHero() {
  return (
    <section className="border-b border-border" style={{ background: "var(--gradient-warm)" }}>
      <div className="mx-auto max-w-7xl px-6 py-20 md:py-28">
        <span className="text-xs uppercase tracking-[0.25em] text-primary">La carte</span>
        <h1 className="mt-4 max-w-3xl" style={{ fontSize: "clamp(2.5rem, 5vw, 4.5rem)", lineHeight: 1.02 }}>
          Notre carte, généreuse et de saison.
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
          Pizzas cuites au feu de bois, tartes flambées, viandes grillées et pâtes
          maison. À déguster sur place ou à emporter — un appel suffit.
        </p>
        <nav className="mt-10 flex flex-wrap gap-2 text-sm">
          {[
            ["#pizzas", "Pizzas"],
            ["#tartes", "Tartes flambées"],
            ["#viandes", "Viandes"],
            ["#pates", "Pâtes"],
            ["#bambino", "Menu Bambino"],
          ].map(([href, label]) => (
            <a
              key={href}
              href={href}
              className="rounded-full border border-foreground/15 bg-background/60 px-4 py-2 font-medium uppercase tracking-widest text-foreground transition hover:bg-foreground hover:text-background"
            >
              {label}
            </a>
          ))}
        </nav>
      </div>
    </section>
  );
}

function Section({
  id,
  eyebrow,
  title,
  note,
  items,
}: {
  id: string;
  eyebrow: string;
  title: string;
  note?: string;
  items: Item[];
}) {
  const featured = items.filter((i) => i.img);
  const rest = items.filter((i) => !i.img);
  return (
    <section id={id} className="border-b border-border py-20 md:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <span className="text-xs uppercase tracking-[0.25em] text-primary">{eyebrow}</span>
            <h2 className="mt-3" style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)", lineHeight: 1.05 }}>
              {title}
            </h2>
          </div>
          {note && <p className="max-w-sm text-sm italic text-muted-foreground">{note}</p>}
        </div>

        {featured.length > 0 && (
          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {featured.map((s) => (
              <article
                key={s.name}
                className="group flex flex-col overflow-hidden rounded-sm bg-card transition hover:-translate-y-1"
                style={{ boxShadow: "var(--shadow-warm)" }}
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={s.img}
                    alt={s.name}
                    width={896}
                    height={672}
                    loading="lazy"
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                  />
                  {s.tag && (
                    <span className="absolute top-3 left-3 inline-flex items-center gap-1 rounded-full bg-primary px-3 py-1 text-[10px] font-semibold uppercase tracking-widest text-primary-foreground">
                      <Star className="h-3 w-3 fill-current" /> {s.tag}
                    </span>
                  )}
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <div className="flex items-baseline justify-between gap-4">
                    <h3 className="text-xl">{s.name}</h3>
                    <span className="font-display text-xl text-primary">{s.price}</span>
                  </div>
                  {s.desc && (
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
                  )}
                </div>
              </article>
            ))}
          </div>
        )}

        {rest.length > 0 && (
          <ul className="mt-12 grid gap-x-12 gap-y-5 md:grid-cols-2">
            {rest.map((s) => (
              <li
                key={s.name}
                className="flex items-baseline gap-4 border-b border-dashed border-border pb-4"
              >
                <div className="flex-1">
                  <p className="text-base font-semibold">{s.name}</p>
                  {s.desc && (
                    <p className="mt-1 text-sm text-muted-foreground">{s.desc}</p>
                  )}
                </div>
                <span className="font-display text-lg text-primary">{s.price}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
}

function Bambino() {
  return (
    <section id="bambino" className="border-b border-border py-20 md:py-24" style={{ background: "var(--gradient-warm)" }}>
      <div className="mx-auto max-w-4xl px-6 text-center">
        <span className="text-xs uppercase tracking-[0.25em] text-primary">Pour les enfants</span>
        <h2 className="mt-3" style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)", lineHeight: 1.05 }}>
          Menu Bambino
        </h2>
        <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
          Spaghetti carbonara ou bolognaise · Pizza jambon mozzarella ·
          Pizza merguez mozzarella · Jambon-frites
        </p>
        <p className="mt-4 text-muted-foreground">+ Glace 2 boules</p>
        <p className="mt-8 font-display text-4xl text-primary">8,50 €</p>
      </div>
    </section>
  );
}

function OrderCTA() {
  return (
    <section className="bg-foreground py-20 text-background">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <h2 className="text-background" style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)", lineHeight: 1.05 }}>
          Envie d'une pizza ce soir ?
        </h2>
        <p className="mt-4 text-background/80">
          Commandez à emporter en un appel — service de 11h00 à 14h30 et de 18h00 à 22h00, 7j/7.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <a
            href="tel:+33981183587"
            className="inline-flex items-center gap-2 rounded-sm bg-primary px-7 py-4 text-sm font-semibold uppercase tracking-widest text-primary-foreground transition hover:opacity-90"
          >
            <Phone className="h-4 w-4" /> 09 81 18 35 87
          </a>
          <Link
            to="/"
            className="inline-flex items-center gap-2 rounded-sm border border-background/30 px-7 py-4 text-sm font-semibold uppercase tracking-widest text-background transition hover:bg-background/10"
          >
            Retour à l'accueil
          </Link>
        </div>
      </div>
    </section>
  );
}

function MenuFooter() {
  return (
    <footer className="border-t border-border bg-background py-10">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-6 text-sm text-muted-foreground">
        <div className="flex items-center gap-2">
          <Flame className="h-4 w-4 text-primary" />
          <span className="font-display text-lg text-foreground">Le Florentin</span>
        </div>
        <p>1 Pl. de la République · 68127 Sainte-Croix-en-Plaine · 09 81 18 35 87</p>
      </div>
    </footer>
  );
}
export default MenuPage;
