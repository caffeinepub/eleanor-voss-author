import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Skeleton } from "@/components/ui/skeleton";
import { Toaster } from "@/components/ui/sonner";
import { Textarea } from "@/components/ui/textarea";
import { ArrowRight, BookOpen, ChevronDown, Loader2 } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";
import { SiGoodreads, SiInstagram, SiX } from "react-icons/si";
import { toast } from "sonner";
import {
  useGetBlogPosts,
  useGetBooks,
  useSubmitContact,
} from "./hooks/useQueries";

// ─── Smooth scroll helper ──────────────────────────────────────
function scrollTo(id: string) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth" });
}

// ─── Navbar ───────────────────────────────────────────────────
function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const links = [
    { label: "About", target: "about" },
    { label: "Books", target: "books" },
    { label: "Blog", target: "blog" },
    { label: "Contact", target: "contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-background/95 backdrop-blur-md border-b border-border/60"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <button
          type="button"
          onClick={() => scrollTo("hero")}
          className="font-display text-lg font-semibold tracking-wide text-foreground hover:text-gold transition-colors"
          data-ocid="nav.link"
        >
          Eleanor Voss
        </button>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <li key={link.target}>
              <button
                type="button"
                onClick={() => scrollTo(link.target)}
                className="nav-link"
                data-ocid="nav.link"
              >
                {link.label}
              </button>
            </li>
          ))}
        </ul>

        {/* Mobile hamburger */}
        <button
          type="button"
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          data-ocid="nav.toggle"
        >
          <span
            className={`block w-5 h-px bg-foreground transition-all ${menuOpen ? "rotate-45 translate-y-2" : ""}`}
          />
          <span
            className={`block w-5 h-px bg-foreground transition-all ${menuOpen ? "opacity-0" : ""}`}
          />
          <span
            className={`block w-5 h-px bg-foreground transition-all ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`}
          />
        </button>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden overflow-hidden bg-background/98 border-b border-border"
          >
            <ul className="flex flex-col py-4 px-6 gap-4">
              {links.map((link) => (
                <li key={link.target}>
                  <button
                    type="button"
                    onClick={() => {
                      scrollTo(link.target);
                      setMenuOpen(false);
                    }}
                    className="nav-link text-sm"
                    data-ocid="nav.link"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

// ─── Hero ─────────────────────────────────────────────────────
function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('/assets/generated/hero-bg-texture.dim_1920x1080.jpg')",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/50 to-background" />
      <div className="absolute inset-0 bg-grain" />

      {/* Radial glow behind name */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 40% at 50% 45%, oklch(0.75 0.12 75 / 0.07) 0%, transparent 70%)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        {/* Ornamental rule above name */}
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 1 }}
          transition={{ duration: 1, delay: 0.1, ease: "easeOut" }}
          className="flex items-center justify-center gap-5 mb-7"
        >
          <div className="h-px w-16 bg-gradient-to-r from-transparent to-primary/50" />
          <p className="section-label" style={{ fontSize: "0.625rem" }}>
            Author · Novelist · Storyteller
          </p>
          <div className="h-px w-16 bg-gradient-to-l from-transparent to-primary/50" />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="mb-8 select-none"
          aria-label="Eleanor Voss"
        >
          <span
            className="hero-name-first block text-foreground"
            style={{ fontSize: "clamp(4.5rem, 13vw, 10.5rem)" }}
          >
            Eleanor
          </span>
          <span
            className="hero-name-last block text-gold"
            style={{ fontSize: "clamp(5rem, 15vw, 12rem)" }}
          >
            Voss
          </span>
        </motion.h1>

        {/* Thin rule below name */}
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="w-12 h-px bg-primary/50 mx-auto mb-8"
        />

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="font-body text-lg md:text-xl text-muted-foreground max-w-lg mx-auto mb-10 leading-relaxed tracking-wide"
          style={{ fontStyle: "italic" }}
        >
          Bestselling author of literary fiction and psychological thrillers
          that linger long after the final page.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.05 }}
          className="flex flex-col sm:flex-row gap-5 justify-center items-center"
        >
          <Button
            size="lg"
            onClick={() => scrollTo("books")}
            className="bg-primary text-primary-foreground hover:bg-primary/90 font-ui font-medium tracking-widest text-xs uppercase px-10 py-6 shadow-gold-md transition-all hover:-translate-y-0.5 hover:shadow-gold-md"
            data-ocid="hero.primary_button"
          >
            Explore My Books
            <ArrowRight className="ml-2 h-3.5 w-3.5" />
          </Button>
          <button
            type="button"
            onClick={() => scrollTo("about")}
            className="font-ui text-xs uppercase tracking-widest text-muted-foreground hover:text-gold transition-colors flex items-center gap-2 group"
          >
            About Eleanor
            <span className="block h-px w-5 bg-current transition-all group-hover:w-8" />
          </button>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{
            repeat: Number.POSITIVE_INFINITY,
            duration: 2,
            ease: "easeInOut",
          }}
        >
          <ChevronDown className="h-5 w-5 text-muted-foreground/60" />
        </motion.div>
      </motion.div>
    </section>
  );
}

// ─── About ────────────────────────────────────────────────────
function AboutSection() {
  return (
    <section id="about" className="py-28 md:py-40">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8 }}
          className="grid md:grid-cols-2 gap-16 items-center"
        >
          {/* Photo */}
          <div className="relative">
            <div className="relative overflow-hidden">
              <img
                src="/assets/generated/author-portrait.dim_600x750.jpg"
                alt="Eleanor Voss"
                className="w-full max-w-sm mx-auto md:mx-0 object-cover aspect-[4/5] grayscale hover:grayscale-0 transition-all duration-700"
                style={{ filter: "contrast(1.05) brightness(0.92)" }}
              />
              {/* Decorative frame */}
              <div className="absolute inset-0 border border-primary/20 translate-x-3 translate-y-3 pointer-events-none" />
            </div>
            {/* Floating award badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="absolute -bottom-4 -right-0 md:right-8 bg-card border border-border/80 px-5 py-3 shadow-card-dark"
            >
              <p className="section-label text-xs mb-0.5">Award Winning</p>
              <p className="font-display text-sm font-semibold">
                6 Novels · 3 Awards
              </p>
            </motion.div>
          </div>

          {/* Bio */}
          <div>
            <p className="section-label mb-4">About the Author</p>
            <h2
              className="font-display font-light leading-tight mb-8"
              style={
                {
                  fontSize: "clamp(2.25rem, 5vw, 3.5rem)",
                  fontOpticalSizing: "auto",
                } as React.CSSProperties
              }
            >
              Stories that
              <br />
              <span className="text-gold italic">hold you breathless</span>
            </h2>
            <div className="space-y-5 font-body text-lg text-muted-foreground leading-relaxed">
              <p>
                Eleanor Voss grew up between the fog-draped moors of Yorkshire
                and the neon-lit streets of Manhattan, and both worlds haunt her
                fiction. She is the author of six critically acclaimed novels,
                most recently{" "}
                <em className="text-foreground">The Narrowing Dark</em>, a
                psychological thriller named one of The Guardian's Best Books of
                the Year.
              </p>
              <p>
                Her work has been translated into twenty-three languages and
                adapted for two acclaimed television series. She has received
                the Hammett Prize, the International Thriller Writers Award, and
                was longlisted for the Booker Prize in 2022.
              </p>
              <p>
                When she is not writing, Eleanor teaches a masterclass in
                narrative tension at Columbia University and mentors emerging
                voices through the PEN America fellowship.
              </p>
            </div>

            {/* Divider ornament */}
            <div className="flex items-center gap-4 mt-10">
              <div className="h-px flex-1 bg-border" />
              <BookOpen className="h-4 w-4 text-primary" />
              <div className="h-px flex-1 bg-border" />
            </div>

            <div className="grid grid-cols-3 gap-6 mt-8">
              {[
                { value: "6", label: "Novels" },
                { value: "23", label: "Languages" },
                { value: "2M+", label: "Readers" },
              ].map(({ value, label }) => (
                <div key={label} className="text-center">
                  <p className="font-display text-3xl font-light text-gold">
                    {value}
                  </p>
                  <p className="font-ui text-xs uppercase tracking-widest text-muted-foreground mt-1">
                    {label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// ─── Book Cover Placeholder ────────────────────────────────────
const COVER_DESIGNS = [
  {
    bg: "linear-gradient(160deg, oklch(0.24 0.06 28) 0%, oklch(0.14 0.04 20) 100%)",
    accent: "oklch(0.78 0.14 75)",
    pattern: "lines",
  },
  {
    bg: "linear-gradient(135deg, oklch(0.16 0.05 210) 0%, oklch(0.10 0.03 220) 100%)",
    accent: "oklch(0.72 0.10 72)",
    pattern: "circle",
  },
  {
    bg: "linear-gradient(170deg, oklch(0.18 0.06 290) 0%, oklch(0.11 0.04 280) 100%)",
    accent: "oklch(0.80 0.13 78)",
    pattern: "lines",
  },
  {
    bg: "linear-gradient(145deg, oklch(0.14 0.04 140) 0%, oklch(0.10 0.02 150) 100%)",
    accent: "oklch(0.74 0.11 76)",
    pattern: "circle",
  },
  {
    bg: "linear-gradient(155deg, oklch(0.22 0.07 12) 0%, oklch(0.13 0.05 8) 100%)",
    accent: "oklch(0.80 0.14 75)",
    pattern: "lines",
  },
  {
    bg: "linear-gradient(140deg, oklch(0.16 0.04 245) 0%, oklch(0.10 0.02 250) 100%)",
    accent: "oklch(0.73 0.10 73)",
    pattern: "circle",
  },
];

function BookCoverPlaceholder({
  title,
  index,
}: { title: string; index: number }) {
  const design = COVER_DESIGNS[index % COVER_DESIGNS.length];
  const words = title.split(" ");
  // Split title: first word(s) lighter, rest heavier — for visual variation
  const mid = Math.max(1, Math.ceil(words.length / 2));
  const line1 = words.slice(0, mid).join(" ");
  const line2 = words.slice(mid).join(" ");

  return (
    <div
      className="w-full aspect-[2/3] flex flex-col justify-between p-5 relative overflow-hidden"
      style={{ background: design.bg }}
    >
      {/* Top author name band */}
      <div>
        <p
          className="font-ui text-[0.6rem] uppercase tracking-[0.25em] font-medium mb-3"
          style={{ color: design.accent, opacity: 0.8 }}
        >
          Eleanor Voss
        </p>
        <div
          className="h-px w-full opacity-20"
          style={{ background: design.accent }}
        />
      </div>

      {/* Centre: decorative motif + title */}
      <div className="flex-1 flex flex-col items-start justify-center py-4">
        {design.pattern === "circle" ? (
          <div
            className="mb-4 w-10 h-10 rounded-full opacity-15 border"
            style={{ borderColor: design.accent }}
          />
        ) : (
          <div className="mb-4 space-y-1">
            <div
              className="h-px w-10 opacity-30"
              style={{ background: design.accent }}
            />
            <div
              className="h-px w-6 opacity-20"
              style={{ background: design.accent }}
            />
          </div>
        )}

        <p
          className="font-display font-light leading-[1.05] mb-0.5"
          style={
            {
              color: "oklch(0.92 0.014 65)",
              fontSize: line1.length > 8 ? "1.1rem" : "1.3rem",
              fontOpticalSizing: "auto",
            } as React.CSSProperties
          }
        >
          {line1}
        </p>
        {line2 && (
          <p
            className="font-display font-semibold italic leading-tight"
            style={
              {
                color: design.accent,
                fontSize: line2.length > 8 ? "1rem" : "1.2rem",
                fontOpticalSizing: "auto",
              } as React.CSSProperties
            }
          >
            {line2}
          </p>
        )}
      </div>

      {/* Bottom rule */}
      <div>
        <div
          className="h-px w-full opacity-20 mb-2"
          style={{ background: design.accent }}
        />
        <div
          className="h-px w-1/2 opacity-10"
          style={{ background: design.accent }}
        />
      </div>

      {/* Grain texture */}
      <div className="absolute inset-0 bg-grain opacity-60 pointer-events-none" />

      {/* Left spine shadow */}
      <div
        className="absolute inset-y-0 left-0 w-3 pointer-events-none"
        style={{
          background:
            "linear-gradient(to right, rgba(0,0,0,0.45), transparent)",
        }}
      />
    </div>
  );
}

// ─── Books ────────────────────────────────────────────────────
function BooksSection() {
  const { data: books, isLoading, isError } = useGetBooks();

  // Sample books if backend returns nothing
  const sampleBooks = [
    {
      id: BigInt(1),
      title: "The Narrowing Dark",
      genre: "Psychological Thriller",
      publishedYear: BigInt(2023),
      description:
        "A forensic linguist is drawn into a deadly game when a serial killer begins leaving messages only she can decode—messages that seem to predict her own death.",
      coverUrl: "",
    },
    {
      id: BigInt(2),
      title: "Everything That Burns",
      genre: "Literary Fiction",
      publishedYear: BigInt(2021),
      description:
        "Two women, separated by a century, are bound together by a house that refuses to let its secrets die. A searing meditation on memory, grief, and survival.",
      coverUrl: "",
    },
    {
      id: BigInt(3),
      title: "The Glass Meridian",
      genre: "Thriller",
      publishedYear: BigInt(2019),
      description:
        "An architect discovers blueprints hidden in the walls of her renovation project that suggest the house was built to trap—not shelter—its inhabitants.",
      coverUrl: "",
    },
    {
      id: BigInt(4),
      title: "Bitter Latitude",
      genre: "Literary Fiction",
      publishedYear: BigInt(2017),
      description:
        "A retired detective returns to the northern town she fled as a teenager to investigate a drowning that everyone insists was accidental—but nothing in this town ever is.",
      coverUrl: "",
    },
    {
      id: BigInt(5),
      title: "Cold Meridian",
      genre: "Psychological Thriller",
      publishedYear: BigInt(2015),
      description:
        "A translator working at a high-security diplomacy summit realizes she is being fed deliberately mistranslated intelligence—and someone will kill to keep it that way.",
      coverUrl: "",
    },
    {
      id: BigInt(6),
      title: "Where the Light Went",
      genre: "Literary Fiction",
      publishedYear: BigInt(2013),
      description:
        "Eleanor Voss's debut novel: a luminous, heartbreaking story about a woman who returns to her coastal hometown after her twin sister vanishes without a trace.",
      coverUrl: "",
    },
  ];

  const displayBooks = books && books.length > 0 ? books : sampleBooks;

  return (
    <section id="books" className="py-24 md:py-32 bg-card/40">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <p className="section-label mb-4">Published Works</p>
          <h2 className="font-display text-4xl md:text-5xl font-light leading-tight">
            The
            <br />
            <span className="text-gold italic">Novels</span>
          </h2>
        </motion.div>

        {isLoading && (
          <div
            data-ocid="books.loading_state"
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {["sk1", "sk2", "sk3", "sk4", "sk5", "sk6"].map((k) => (
              <div key={k} className="space-y-3">
                <Skeleton className="w-full aspect-[2/3] skeleton-shimmer" />
                <Skeleton className="h-4 w-3/4 skeleton-shimmer" />
                <Skeleton className="h-3 w-1/2 skeleton-shimmer" />
              </div>
            ))}
          </div>
        )}

        {isError && (
          <div
            data-ocid="books.error_state"
            className="text-center py-16 text-muted-foreground"
          >
            <p className="font-ui text-sm uppercase tracking-widest mb-2">
              Unable to load books
            </p>
            <p className="font-body text-lg">Please try again later.</p>
          </div>
        )}

        {!isLoading && !isError && (
          <div
            data-ocid="books.list"
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10"
          >
            {displayBooks.map((book, idx) => (
              <motion.article
                key={book.id.toString()}
                data-ocid={`books.item.${idx + 1}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.6, delay: (idx % 3) * 0.1 }}
                className="group"
              >
                <div className="overflow-hidden mb-5 book-card-shadow transition-all duration-500 group-hover:-translate-y-2">
                  {book.coverUrl ? (
                    <img
                      src={book.coverUrl}
                      alt={book.title}
                      className="w-full aspect-[2/3] object-cover"
                    />
                  ) : (
                    <BookCoverPlaceholder title={book.title} index={idx} />
                  )}
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <Badge
                      variant="outline"
                      className="font-ui text-xs uppercase tracking-wider border-primary/30 text-primary/80"
                    >
                      {book.genre}
                    </Badge>
                    <span className="font-ui text-xs text-muted-foreground/70">
                      {book.publishedYear.toString()}
                    </span>
                  </div>
                  <h3 className="font-display text-xl font-semibold mb-2 group-hover:text-gold transition-colors duration-300">
                    {book.title}
                  </h3>
                  <p className="font-body text-sm text-muted-foreground leading-relaxed line-clamp-3">
                    {book.description}
                  </p>
                </div>
              </motion.article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

// ─── Blog ─────────────────────────────────────────────────────
function BlogSection() {
  const { data: posts, isLoading, isError } = useGetBlogPosts();

  const samplePosts = [
    {
      id: BigInt(1),
      title: "On Writing Silence: What Your Characters Don't Say",
      date: "February 14, 2026",
      excerpt:
        "The most powerful moments in fiction often live in the negative space—the words unspoken, the gestures withheld. I've been thinking about silence as a narrative force.",
      body: "",
    },
    {
      id: BigInt(2),
      title: "Research Trips and the Ethics of Dark Places",
      date: "January 28, 2026",
      excerpt:
        "For The Narrowing Dark, I spent three days inside a maximum-security facility. Here's what that experience taught me about empathy, fear, and the cost of storytelling.",
      body: "",
    },
    {
      id: BigInt(3),
      title: "The Books That Broke Me Open: A Reading List",
      date: "December 19, 2025",
      excerpt:
        "Every writer is a collage of their influences. These ten novels didn't just teach me craft—they dismantled my assumptions about what fiction is allowed to do.",
      body: "",
    },
    {
      id: BigInt(4),
      title: "Against Comfort: Why I Write Difficult Characters",
      date: "November 3, 2025",
      excerpt:
        "Readers often ask why my protagonists are so hard to love. The short answer: because easy love asks nothing of us. Literature should ask everything.",
      body: "",
    },
  ];

  const displayPosts = posts && posts.length > 0 ? posts : samplePosts;

  return (
    <section id="blog" className="py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <p className="section-label mb-4">Words & Thoughts</p>
          <h2 className="font-display text-4xl md:text-5xl font-light leading-tight">
            From the
            <br />
            <span className="text-gold italic">Journal</span>
          </h2>
        </motion.div>

        {isLoading && (
          <div data-ocid="blog.loading_state" className="space-y-6">
            {["bsk1", "bsk2", "bsk3"].map((k) => (
              <div key={k} className="border border-border/60 p-6 space-y-3">
                <Skeleton className="h-5 w-3/4 skeleton-shimmer" />
                <Skeleton className="h-3 w-1/4 skeleton-shimmer" />
                <Skeleton className="h-4 w-full skeleton-shimmer" />
                <Skeleton className="h-4 w-2/3 skeleton-shimmer" />
              </div>
            ))}
          </div>
        )}

        {isError && (
          <div
            data-ocid="blog.error_state"
            className="text-center py-16 text-muted-foreground"
          >
            <p className="font-ui text-sm uppercase tracking-widest mb-2">
              Unable to load posts
            </p>
            <p className="font-body text-lg">Please try again later.</p>
          </div>
        )}

        {!isLoading && !isError && (
          <div data-ocid="blog.list" className="grid md:grid-cols-2 gap-8">
            {displayPosts.map((post, idx) => (
              <motion.article
                key={post.id.toString()}
                data-ocid={`blog.item.${idx + 1}`}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.6, delay: (idx % 2) * 0.1 }}
                className="group border border-border/60 hover:border-primary/40 p-7 transition-all duration-300 hover:bg-card/60"
              >
                <p className="font-ui text-xs uppercase tracking-widest text-muted-foreground/60 mb-3">
                  {post.date}
                </p>
                <h3 className="font-display text-xl font-semibold leading-snug mb-3 group-hover:text-gold transition-colors duration-300">
                  {post.title}
                </h3>
                <p className="font-body text-base text-muted-foreground leading-relaxed mb-5 line-clamp-3">
                  {post.excerpt}
                </p>
                <button
                  type="button"
                  className="font-ui text-xs uppercase tracking-widest text-primary/70 hover:text-primary flex items-center gap-2 transition-colors group/btn"
                >
                  Read More
                  <ArrowRight className="h-3 w-3 transition-transform group-hover/btn:translate-x-1" />
                </button>
              </motion.article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

// ─── Contact ──────────────────────────────────────────────────
function ContactSection() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState<{
    name?: string;
    email?: string;
    message?: string;
  }>({});
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const { mutate: submitContact, isPending } = useSubmitContact();

  function validate() {
    const newErrors: typeof errors = {};
    if (!name.trim()) newErrors.name = "Name is required";
    if (!email.trim()) newErrors.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
      newErrors.email = "Enter a valid email";
    if (!message.trim()) newErrors.message = "Message is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!validate()) return;

    submitContact(
      { name, email, message },
      {
        onSuccess: () => {
          setSubmitStatus("success");
          setName("");
          setEmail("");
          setMessage("");
          setErrors({});
          toast.success("Message sent! Eleanor will be in touch.");
        },
        onError: () => {
          setSubmitStatus("error");
          toast.error("Something went wrong. Please try again.");
        },
      },
    );
  }

  return (
    <section id="contact" className="py-24 md:py-32 bg-card/40">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16">
          {/* Left: text */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8 }}
          >
            <p className="section-label mb-4">Get in Touch</p>
            <h2 className="font-display text-4xl md:text-5xl font-light leading-tight mb-8">
              Write to
              <br />
              <span className="text-gold italic">Eleanor</span>
            </h2>
            <div className="space-y-5 font-body text-lg text-muted-foreground leading-relaxed">
              <p>
                For reader mail, speaking engagements, media enquiries, or
                collaborations — Eleanor reads every message personally and
                responds to as many as she can.
              </p>
              <p>
                For rights and licensing, please contact her literary agent at{" "}
                <span className="text-foreground">
                  Greene &amp; Heaton Ltd.
                </span>
              </p>
            </div>

            {/* Quote */}
            <blockquote className="mt-10 border-l-2 border-primary pl-6">
              <p className="font-display text-xl italic leading-relaxed text-foreground/80">
                "Every letter I receive reminds me why I write—you are the
                reason these stories matter."
              </p>
              <footer className="mt-3 font-ui text-xs uppercase tracking-widest text-muted-foreground">
                — Eleanor Voss
              </footer>
            </blockquote>
          </motion.div>

          {/* Right: form */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            {submitStatus === "success" && (
              <div
                data-ocid="contact.success_state"
                className="h-full flex flex-col items-center justify-center text-center py-16 border border-primary/30 bg-card"
              >
                <div className="mb-5 text-gold">
                  <BookOpen className="h-10 w-10 mx-auto mb-3 opacity-70" />
                </div>
                <h3 className="font-display text-2xl font-light mb-3">
                  Message Sent
                </h3>
                <p className="font-body text-muted-foreground mb-8">
                  Eleanor will read your message and reply when she surfaces
                  from whatever dark story she's currently writing.
                </p>
                <button
                  type="button"
                  onClick={() => setSubmitStatus("idle")}
                  className="font-ui text-xs uppercase tracking-widest text-primary/70 hover:text-primary transition-colors"
                >
                  Send another message
                </button>
              </div>
            )}

            {submitStatus !== "success" && (
              <form onSubmit={handleSubmit} noValidate className="space-y-6">
                <div>
                  <label
                    htmlFor="contact-name"
                    className="font-ui text-xs uppercase tracking-widest text-muted-foreground block mb-2"
                  >
                    Your Name
                  </label>
                  <Input
                    id="contact-name"
                    data-ocid="contact.input"
                    type="text"
                    placeholder="Full name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="bg-input/50 border-border/60 focus:border-primary/60 font-body text-base h-12 placeholder:text-muted-foreground/40"
                    disabled={isPending}
                  />
                  {errors.name && (
                    <p className="font-ui text-xs text-destructive mt-1.5">
                      {errors.name}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="contact-email"
                    className="font-ui text-xs uppercase tracking-widest text-muted-foreground block mb-2"
                  >
                    Email Address
                  </label>
                  <Input
                    id="contact-email"
                    data-ocid="contact.search_input"
                    type="email"
                    placeholder="you@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="bg-input/50 border-border/60 focus:border-primary/60 font-body text-base h-12 placeholder:text-muted-foreground/40"
                    disabled={isPending}
                  />
                  {errors.email && (
                    <p className="font-ui text-xs text-destructive mt-1.5">
                      {errors.email}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="contact-message"
                    className="font-ui text-xs uppercase tracking-widest text-muted-foreground block mb-2"
                  >
                    Your Message
                  </label>
                  <Textarea
                    id="contact-message"
                    data-ocid="contact.textarea"
                    placeholder="What's on your mind..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="bg-input/50 border-border/60 focus:border-primary/60 font-body text-base min-h-36 resize-none placeholder:text-muted-foreground/40"
                    disabled={isPending}
                  />
                  {errors.message && (
                    <p className="font-ui text-xs text-destructive mt-1.5">
                      {errors.message}
                    </p>
                  )}
                </div>

                {submitStatus === "error" && (
                  <div
                    data-ocid="contact.error_state"
                    className="bg-destructive/10 border border-destructive/30 px-4 py-3"
                  >
                    <p className="font-ui text-xs text-destructive">
                      Something went wrong. Please try again.
                    </p>
                  </div>
                )}

                <Button
                  data-ocid="contact.submit_button"
                  type="submit"
                  size="lg"
                  disabled={isPending}
                  className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-ui font-medium tracking-wide text-sm uppercase h-12 shadow-gold-sm hover:shadow-gold-md transition-all"
                >
                  {isPending ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      <span data-ocid="contact.loading_state">Sending...</span>
                    </>
                  ) : (
                    "Send Message"
                  )}
                </Button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// ─── Footer ───────────────────────────────────────────────────
function Footer() {
  const year = new Date().getFullYear();
  const hostname =
    typeof window !== "undefined" ? window.location.hostname : "";
  const caffeineUrl = `https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(hostname)}`;

  return (
    <footer className="border-t border-border/60 py-12 md:py-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand */}
          <div className="text-center md:text-left">
            <p className="font-display text-xl font-light text-gold mb-1">
              Eleanor Voss
            </p>
            <p className="font-ui text-xs uppercase tracking-widest text-muted-foreground/60">
              Author · Novelist · Storyteller
            </p>
          </div>

          {/* Social icons */}
          <div className="flex items-center gap-5">
            <a
              href="https://x.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter / X"
              className="text-muted-foreground/50 hover:text-gold transition-colors"
            >
              <SiX className="h-4 w-4" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="text-muted-foreground/50 hover:text-gold transition-colors"
            >
              <SiInstagram className="h-4 w-4" />
            </a>
            <a
              href="https://goodreads.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Goodreads"
              className="text-muted-foreground/50 hover:text-gold transition-colors"
            >
              <SiGoodreads className="h-4 w-4" />
            </a>
          </div>

          {/* Copyright */}
          <p className="font-ui text-xs text-muted-foreground/50 text-center md:text-right">
            © {year} Eleanor Voss.{" "}
            <a
              href={caffeineUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-muted-foreground transition-colors"
            >
              Built with ♥ using caffeine.ai
            </a>
          </p>
        </div>

        {/* Nav */}
        <div className="mt-8 pt-8 border-t border-border/30 flex flex-wrap justify-center gap-6">
          {["About", "Books", "Blog", "Contact"].map((item) => (
            <button
              key={item}
              type="button"
              onClick={() => scrollTo(item.toLowerCase())}
              className="font-ui text-xs uppercase tracking-widest text-muted-foreground/50 hover:text-muted-foreground transition-colors"
            >
              {item}
            </button>
          ))}
        </div>
      </div>
    </footer>
  );
}

// ─── Pull-Quote Band ──────────────────────────────────────────
function PullQuoteBand() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 1 }}
      className="pull-quote-band py-20 md:py-28 overflow-hidden relative"
    >
      {/* Large decorative quote mark */}
      <div
        className="absolute top-4 left-1/2 -translate-x-1/2 font-display text-[18rem] leading-none text-primary/5 select-none pointer-events-none"
        aria-hidden="true"
      >
        "
      </div>

      <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
        <div className="flex items-center justify-center gap-5 mb-10">
          <div className="h-px w-12 bg-primary/30" />
          <div className="w-1.5 h-1.5 rounded-full bg-primary/50" />
          <div className="h-px w-12 bg-primary/30" />
        </div>

        <motion.blockquote
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.2 }}
        >
          <p
            className="font-display font-light text-foreground/90 leading-snug mb-8"
            style={
              {
                fontSize: "clamp(1.5rem, 3.5vw, 2.5rem)",
                fontStyle: "italic",
                fontOpticalSizing: "auto",
              } as React.CSSProperties
            }
          >
            "I write because the dark places deserve a witness — and because the
            light only means something when you know how long you were without
            it."
          </p>
          <footer className="font-ui text-xs uppercase tracking-[0.2em] text-primary/70">
            Eleanor Voss · From The Guardian Interview, 2024
          </footer>
        </motion.blockquote>

        <div className="flex items-center justify-center gap-5 mt-10">
          <div className="h-px w-12 bg-primary/30" />
          <div className="w-1.5 h-1.5 rounded-full bg-primary/50" />
          <div className="h-px w-12 bg-primary/30" />
        </div>
      </div>
    </motion.section>
  );
}

// ─── App ──────────────────────────────────────────────────────
export default function App() {
  return (
    <div className="min-h-screen">
      <Toaster richColors position="top-right" />
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <BooksSection />
        <PullQuoteBand />
        <BlogSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
