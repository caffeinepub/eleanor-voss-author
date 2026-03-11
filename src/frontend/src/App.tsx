import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import {
  BookOpen,
  ExternalLink,
  FlaskConical,
  GraduationCap,
  Headphones,
  Mail,
  Menu,
  PenLine,
  Quote,
  X,
} from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";

const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Books", href: "#books" },
  { label: "Upcoming", href: "#upcoming" },
  { label: "Quotes", href: "#quotes" },
  { label: "Illustrations", href: "#illustrations" },
  { label: "Research", href: "#research" },
  { label: "Listen", href: "#listen" },
  { label: "Writing", href: "#writing" },
  { label: "Contact", href: "#contact" },
];

const BOOKS = [
  {
    title: "The Positronic Paradox",
    genre: "Science Fiction",
    cover: "/assets/uploads/Mutinies-of-Binary-Cover-v3-01-1.jpg",
    description:
      "A gripping science fiction journey exploring the boundaries of artificial intelligence, consciousness, and what it means to be human in a binary world.",
  },
  {
    title: "Is Science Completely Dependent on Research Papers?",
    genre: "Science",
    cover: "/assets/uploads/My-project-copy-1-5--2.jpg",
    description:
      "A thought-provoking exploration of how science evolves beyond academic publications and what truly drives discovery.",
  },
  {
    title: "The Kid Scientists Build Their Own Lab",
    genre: "Children's Science",
    cover: "/assets/uploads/Cover-v1-01-3.jpg",
    description:
      "An inspiring children's book that encourages young minds to explore science through hands-on experiments and curiosity.",
  },
  {
    title: "Andy's Journey Into the Realm of Research",
    genre: "Educational",
    cover: "/assets/uploads/The-real-cover-v2-Thin-4.jpg",
    description:
      "Follow Andy on an educational adventure as he discovers the exciting world of scientific research and experimentation.",
  },
  {
    title: "A Comprehensive Guide to Conducting Full-Fledged Research Work",
    genre: "Academic",
    cover: "/assets/uploads/Cover-v2-01-5.jpg",
    description:
      "An essential academic resource providing step-by-step guidance for researchers at every stage of their scientific journey.",
  },
  {
    title: "The Dialogues of Socrata and Plata",
    genre: "Philosophy",
    cover:
      "/assets/uploads/The-dialogues-of-socreta-and-plata-Cover-v7-01-6.jpg",
    description:
      "A philosophical dialogue exploring timeless questions of existence, knowledge, and the nature of truth through two brilliant minds.",
  },
  {
    title: "Ghost Catcher Club",
    genre: "Mystery / Adventure",
    cover: "/assets/uploads/Main-Full-Cover-V2-01-7.jpg",
    description:
      "A thrilling mystery-adventure following a group of young investigators as they uncover supernatural secrets lurking in their town.",
  },
  {
    title: "Thoughts & Reflections",
    genre: "Non-Fiction",
    cover: "/assets/uploads/Picture1mnk-1.jpg",
    description:
      "A collection of insightful reflections on science, life, and the pursuit of knowledge from the perspective of a researcher and storyteller.",
  },
];

const UPCOMING_BOOKS = [
  {
    title: "An Investigation of The Graduate Detectives",
    series: "The Graduate Detective Series #1",
    cover: "/assets/uploads/1-English-3.jpg",
  },
  {
    title: "An Investigation of Antibiotic Mystery",
    series: "The Graduate Detective Series #2",
    cover: "/assets/uploads/2-English-2.jpg",
  },
  {
    title: "Death of a Researcher",
    series: "The Graduate Detective Series #3",
    cover: "/assets/uploads/3-English-1.jpg",
  },
];

const QUOTES = [
  {
    text: "All the aquatic creatures trapped in the nets of pollution,\nThose children of Minamata Bay who were poisoned,\nDo you not see? It is humans who harm humans.",
    source: "The Wonderful Journey of Achiya",
  },
  {
    text: "Even if you live for a hundred years, you still walk the path toward extinction.\nTo be born in such a time is a deep misfortune.\nYou wander through space with the whole world in your imagination,\nYet today, you stand helpless in the act of reproduction.",
    source: "The Wonderful Journey of Achiya",
  },
  {
    text: "When Little Boy and Fat Man struck Hiroshima,\nthousands of children were playing peacefully in all parts of the world.\nIt was said that children of every nation would grow and play like this,\nyet some remained above the ground,\nwhile others were torn from the earth and vanished.",
    source: "The Wonderful Journey of Achiya",
  },
];

const RESEARCH_LINKS = [
  {
    label: "GUSTO A Research Group",
    url: "http://mshkabir.myfreesites.net",
    icon: FlaskConical,
  },
  {
    label: "Biggan Barta",
    url: "https://bigganbarta.org/author/mshkabir",
    icon: BookOpen,
  },
  {
    label: "Google Scholar",
    url: "https://scholar.google.com/citations?hl=en&user=YO6y-jYAAAAJ",
    icon: GraduationCap,
  },
  {
    label: "ResearchGate",
    url: "https://researchgate.net/profile/Mohammad_Kabir9",
    icon: FlaskConical,
  },
  {
    label: "PubMed",
    url: "https://ncbi.nlm.nih.gov/pubmed/?term=Mohammad%20Shah%20Hafez%20Kabir",
    icon: FlaskConical,
  },
  {
    label: "Scopus",
    url: "https://scopus.com/authid/detail.uri?authorId=56769012400",
    icon: FlaskConical,
  },
  {
    label: "ORCID",
    url: "https://orcid.org/0000-0003-4952-8730",
    icon: GraduationCap,
  },
  {
    label: "LinkedIn",
    url: "https://linkedin.com/in/mohammad-shah-hafez-kabir-8b214888",
    icon: GraduationCap,
  },
  {
    label: "Academia.edu",
    url: "https://iiuc.academia.edu/MohammadShahHafezKabir",
    icon: GraduationCap,
  },
  {
    label: "ResearcherID",
    url: "https://researcherid.com/ProfileView.action?returnCode=ROUTER.Unauthorized&queryString=KG0UuZjN5WlQELVsM3UeW4OLAxPn6UbJ3X1vXsiMnZI%3D&SrcApp=CR&Init=Yes",
    icon: GraduationCap,
  },
  {
    label: "YouTube: MSHK Audio Books",
    url: "https://www.youtube.com/channel/UCo5u2oyH9GA5ynvAMNGc1Rw",
    icon: Headphones,
  },
  {
    label: "YouTube: Bookish Becomes Travelholic",
    url: "https://www.youtube.com/@bookishbecomestravelholic",
    icon: Headphones,
  },
  {
    label: "YouTube: Hyperpolarized Brains",
    url: "https://www.youtube.com/@hyperpolarizedbrains",
    icon: Headphones,
  },
  {
    label: "Spotify",
    url: "https://open.spotify.com/show/0wYBdJ7RXpAZlcGoNjKrHq?si=f6430ba8dda742",
    icon: Headphones,
  },
  {
    label: "SoundCloud",
    url: "https://soundcloud.com/user-203299441",
    icon: Headphones,
  },
];

const ILLUSTRATIONS = [
  { src: "/assets/uploads/illustration12-1.jpg", alt: "Book illustration 1" },
  { src: "/assets/uploads/illustration8-2.jpg", alt: "Book illustration 2" },
  { src: "/assets/uploads/inner7-3.jpg", alt: "Book illustration 3" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.1 } },
};

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const year = new Date().getFullYear();

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <header
        className="sticky top-0 z-50 bg-background/95 backdrop-blur border-b border-border"
        id="home"
      >
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <a
            href="#home"
            className="font-display text-lg font-semibold text-primary tracking-tight"
            data-ocid="nav.link"
          >
            Dr. Ashfy
          </a>
          {/* Desktop nav */}
          <ul className="hidden lg:flex items-center gap-1">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="px-3 py-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors rounded-md hover:bg-muted"
                  data-ocid="nav.link"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          {/* Mobile menu button */}
          <button
            type="button"
            className="lg:hidden p-2 rounded-md hover:bg-muted transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            data-ocid="nav.toggle"
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </nav>
        {/* Mobile menu */}
        {menuOpen && (
          <div className="lg:hidden border-t border-border bg-background px-4 py-3">
            <ul className="flex flex-col gap-1">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="block px-3 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-muted rounded-md transition-colors"
                    onClick={() => setMenuOpen(false)}
                    data-ocid="nav.link"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </header>

      <main>
        {/* Hero */}
        <section className="py-20 lg:py-28 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial="hidden"
                animate="visible"
                variants={stagger}
                className="order-2 lg:order-1"
              >
                <motion.p
                  variants={fadeUp}
                  className="text-sm font-medium text-accent uppercase tracking-widest mb-4"
                >
                  Author · Scientist · Storyteller
                </motion.p>
                <motion.h1
                  variants={fadeUp}
                  className="font-display text-4xl sm:text-5xl lg:text-6xl font-semibold leading-tight mb-6"
                >
                  Dr. Mohammad Shah Hafez Kabir
                  <span className="block text-primary mt-2">(Ashfy)</span>
                </motion.h1>
                <motion.p
                  variants={fadeUp}
                  className="text-lg text-muted-foreground leading-relaxed mb-8 max-w-xl"
                >
                  Bridging the worlds of science, literature, and imagination.
                  Author of over eight published works spanning science fiction,
                  philosophy, children's education, and academic research.
                </motion.p>
                <motion.div variants={fadeUp} className="flex flex-wrap gap-3">
                  <Button
                    asChild
                    size="lg"
                    className="bg-primary text-primary-foreground hover:opacity-90"
                  >
                    <a href="#books" data-ocid="hero.primary_button">
                      Explore Books
                    </a>
                  </Button>
                  <Button asChild variant="outline" size="lg">
                    <a href="#about" data-ocid="hero.secondary_button">
                      About the Author
                    </a>
                  </Button>
                </motion.div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="order-1 lg:order-2 flex justify-center"
              >
                <div className="relative">
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 blur-3xl scale-110" />
                  <img
                    src="/assets/uploads/20251022_134705295_iOS-1--1.jpg"
                    alt="Dr. Mohammad Shah Hafez Kabir (Ashfy)"
                    className="relative w-72 h-96 lg:w-80 lg:h-[28rem] object-cover rounded-2xl shadow-2xl"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* About */}
        <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/40">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={stagger}
            >
              <motion.h2
                variants={fadeUp}
                className="font-display text-3xl sm:text-4xl font-semibold mb-12 text-center"
              >
                About the Author
              </motion.h2>
              <div className="grid lg:grid-cols-2 gap-12 items-start">
                <motion.div variants={fadeUp}>
                  <img
                    src="/assets/uploads/20251022_134705295_iOS-1--1.jpg"
                    alt="Dr. Mohammad Shah Hafez Kabir (Ashfy)"
                    className="w-full max-w-md mx-auto rounded-2xl shadow-xl object-cover aspect-[3/4]"
                  />
                </motion.div>
                <motion.div variants={stagger} className="space-y-5">
                  <motion.p
                    variants={fadeUp}
                    className="text-muted-foreground leading-relaxed"
                  >
                    Dr. Mohammad Shah Hafez Kabir, known by his pen name{" "}
                    <strong>Ashfy</strong>, is a multifaceted personality — a
                    scientist, academic researcher, author, and passionate
                    storyteller. He holds a distinguished academic profile with
                    extensive publications in internationally recognized
                    journals.
                  </motion.p>
                  <motion.p
                    variants={fadeUp}
                    className="text-muted-foreground leading-relaxed"
                  >
                    His literary works span an impressive range: from science
                    fiction novels questioning the nature of consciousness, to
                    children's books igniting a love for science, to
                    philosophical dialogues exploring timeless human questions.
                  </motion.p>
                  <motion.p
                    variants={fadeUp}
                    className="text-muted-foreground leading-relaxed"
                  >
                    As the founder of the GUSTO A Research Group and an active
                    voice in Bangladesh's science communication community
                    through Biggan Barta, Dr. Ashfy is committed to making
                    science accessible, engaging, and meaningful for everyone.
                  </motion.p>
                  <motion.p
                    variants={fadeUp}
                    className="text-muted-foreground leading-relaxed"
                  >
                    Through his audio stories, YouTube channels, and written
                    works, he continues to inspire the next generation of
                    thinkers, dreamers, and scientists — proving that the
                    pursuit of knowledge and the art of storytelling are deeply
                    intertwined.
                  </motion.p>
                  <motion.div
                    variants={fadeUp}
                    className="flex flex-wrap gap-2 pt-2"
                  >
                    {[
                      "Science Fiction",
                      "Academic Research",
                      "Philosophy",
                      "Children's Education",
                      "Science Communication",
                    ].map((tag) => (
                      <Badge key={tag} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Books */}
        <section id="books" className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={stagger}
            >
              <motion.div variants={fadeUp} className="text-center mb-12">
                <h2 className="font-display text-3xl sm:text-4xl font-semibold mb-3">
                  Published Books
                </h2>
                <p className="text-muted-foreground max-w-xl mx-auto">
                  A diverse collection spanning science, fiction, philosophy,
                  and education.
                </p>
              </motion.div>
              <motion.div
                variants={stagger}
                className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
              >
                {BOOKS.map((book, idx) => (
                  <motion.div
                    key={book.title}
                    variants={fadeUp}
                    data-ocid={`books.item.${idx + 1}`}
                  >
                    <Card className="h-full flex flex-col overflow-hidden hover:shadow-lg transition-shadow duration-300 group">
                      <div className="overflow-hidden aspect-[2/3] bg-muted">
                        <img
                          src={book.cover}
                          alt={book.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                      <CardContent className="flex flex-col flex-1 p-4 gap-3">
                        <div>
                          <Badge variant="secondary" className="text-xs mb-2">
                            {book.genre}
                          </Badge>
                          <h3 className="font-display text-sm font-semibold leading-snug line-clamp-2">
                            {book.title}
                          </h3>
                        </div>
                        <p className="text-xs text-muted-foreground leading-relaxed line-clamp-3 flex-1">
                          {book.description}
                        </p>
                        <Button
                          asChild
                          size="sm"
                          className="w-full mt-auto bg-primary text-primary-foreground hover:opacity-90"
                          data-ocid={`books.item.${idx + 1}`}
                        >
                          <a
                            href="https://www.rokomari.com/book/author/119963/dr-muhammad-sah-hafez-kobir"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            Buy on Rokomari
                          </a>
                        </Button>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Upcoming Books */}
        <section
          id="upcoming"
          className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/40"
        >
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={stagger}
            >
              <motion.div variants={fadeUp} className="text-center mb-12">
                <div className="flex items-center justify-center gap-3 mb-3">
                  <h2 className="font-display text-3xl sm:text-4xl font-semibold">
                    Upcoming: The Graduate Detective Series
                  </h2>
                  <Badge className="bg-accent text-accent-foreground text-xs shrink-0">
                    Coming Soon
                  </Badge>
                </div>
                <p className="text-muted-foreground max-w-xl mx-auto">
                  A thrilling new series blending academic intrigue with
                  detective fiction.
                </p>
              </motion.div>
              <motion.div
                variants={stagger}
                className="grid sm:grid-cols-3 gap-8 max-w-3xl mx-auto"
              >
                {UPCOMING_BOOKS.map((book, idx) => (
                  <motion.div
                    key={book.title}
                    variants={fadeUp}
                    data-ocid={`upcoming.item.${idx + 1}`}
                    className="group"
                  >
                    <div className="relative overflow-hidden rounded-xl shadow-md">
                      <div className="aspect-[2/3] overflow-hidden bg-muted">
                        <img
                          src={book.cover}
                          alt={book.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                        <p className="text-white text-sm font-medium">
                          {book.title}
                        </p>
                      </div>
                    </div>
                    <div className="mt-3 text-center">
                      <p className="text-xs text-accent font-medium">
                        {book.series}
                      </p>
                      <p className="text-sm font-semibold mt-1 leading-snug">
                        {book.title}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Quotes */}
        <section id="quotes" className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={stagger}
            >
              <motion.div variants={fadeUp} className="text-center mb-12">
                <h2 className="font-display text-3xl sm:text-4xl font-semibold mb-3">
                  Quotes & Poems
                </h2>
                <p className="text-muted-foreground italic">
                  From the children's book "The Wonderful Journey of Achiya"
                </p>
              </motion.div>
              <div className="space-y-8">
                {QUOTES.map((quote, idx) => (
                  <motion.div
                    key={quote.text.slice(0, 20)}
                    variants={fadeUp}
                    data-ocid={`quotes.item.${idx + 1}`}
                  >
                    <Card className="p-8 border-l-4 border-l-primary bg-card">
                      <Quote className="text-primary mb-4" size={28} />
                      <blockquote className="font-display text-lg leading-relaxed whitespace-pre-line mb-4">
                        {quote.text}
                      </blockquote>
                      <p className="text-sm text-muted-foreground italic">
                        — {quote.source}
                      </p>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Illustrations */}
        <section
          id="illustrations"
          className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/40"
        >
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={stagger}
            >
              <motion.h2
                variants={fadeUp}
                className="font-display text-3xl sm:text-4xl font-semibold mb-12 text-center"
              >
                Illustrated Pages
              </motion.h2>
              <motion.div
                variants={stagger}
                className="grid sm:grid-cols-3 gap-6"
              >
                {ILLUSTRATIONS.map((ill, idx) => (
                  <motion.div
                    key={ill.src}
                    variants={fadeUp}
                    data-ocid={`illustrations.item.${idx + 1}`}
                    className="overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 group"
                  >
                    <img
                      src={ill.src}
                      alt={ill.alt}
                      className="w-full aspect-square object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Research */}
        <section id="research" className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={stagger}
            >
              <motion.div variants={fadeUp} className="text-center mb-12">
                <h2 className="font-display text-3xl sm:text-4xl font-semibold mb-3">
                  Academic Presence & Research Profiles
                </h2>
                <p className="text-muted-foreground max-w-xl mx-auto">
                  Explore Dr. Ashfy's academic contributions across major
                  research platforms.
                </p>
              </motion.div>
              <motion.div
                variants={stagger}
                className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4"
              >
                {RESEARCH_LINKS.map((link, idx) => {
                  const Icon = link.icon;
                  return (
                    <motion.a
                      key={link.label}
                      variants={fadeUp}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      data-ocid={`research.item.${idx + 1}`}
                      className="flex items-center gap-3 p-4 rounded-xl border border-border bg-card hover:border-primary hover:shadow-md transition-all duration-200 group"
                    >
                      <div className="p-2 rounded-lg bg-muted group-hover:bg-primary/10 transition-colors">
                        <Icon
                          size={18}
                          className="text-muted-foreground group-hover:text-primary transition-colors"
                        />
                      </div>
                      <span className="text-sm font-medium flex-1">
                        {link.label}
                      </span>
                      <ExternalLink
                        size={14}
                        className="text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity"
                      />
                    </motion.a>
                  );
                })}
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Audio Stories */}
        <section id="listen" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/40">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={stagger}
            >
              <motion.div variants={fadeUp}>
                <Headphones size={48} className="text-primary mx-auto mb-6" />
                <h2 className="font-display text-3xl sm:text-4xl font-semibold mb-4">
                  Audio Stories
                </h2>
                <p className="text-muted-foreground mb-10 max-w-lg mx-auto">
                  Listen to Dr. Ashfy's captivating audio stories on your
                  favourite platform.
                </p>
              </motion.div>
              <motion.div
                variants={fadeUp}
                className="flex flex-wrap justify-center gap-4"
              >
                <Button
                  asChild
                  size="lg"
                  className="bg-red-600 hover:bg-red-700 text-white"
                  data-ocid="listen.primary_button"
                >
                  <a
                    href="https://www.youtube.com/channel/UCo5u2oyH9GA5ynvAMNGc1Rw"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink size={16} className="mr-2" />
                    Listen on YouTube
                  </a>
                </Button>
                <Button
                  asChild
                  size="lg"
                  className="bg-green-600 hover:bg-green-700 text-white"
                  data-ocid="listen.secondary_button"
                >
                  <a
                    href="https://open.spotify.com/show/0wYBdJ7RXpAZlcGoNjKrHq?si=f6430ba8dda742"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink size={16} className="mr-2" />
                    Listen on Spotify
                  </a>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-orange-500 text-orange-600 hover:bg-orange-50"
                  data-ocid="listen.button"
                >
                  <a
                    href="https://soundcloud.com/user-203299441"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink size={16} className="mr-2" />
                    Listen on SoundCloud
                  </a>
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Reading & Writing */}
        <section id="writing" className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={stagger}
            >
              <motion.div variants={fadeUp} className="text-center mb-10">
                <PenLine size={40} className="text-primary mx-auto mb-4" />
                <h2 className="font-display text-3xl sm:text-4xl font-semibold mb-3">
                  Reading & Writing
                </h2>
                <p className="text-muted-foreground">
                  Read Dr. Ashfy's ongoing stories on Wattpad.
                </p>
              </motion.div>
              <motion.a
                variants={fadeUp}
                href="https://www.wattpad.com/1518822085-the-positronic-paradox-shadow-of-intention"
                target="_blank"
                rel="noopener noreferrer"
                data-ocid="writing.card"
                className="block"
              >
                <Card className="p-8 hover:shadow-lg transition-all duration-300 border-2 hover:border-primary group">
                  <div className="flex items-start gap-5">
                    <div className="p-3 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors">
                      <BookOpen size={32} className="text-primary" />
                    </div>
                    <div className="flex-1">
                      <Badge variant="secondary" className="text-xs mb-2">
                        Wattpad · Online Story
                      </Badge>
                      <h3 className="font-display text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                        The Positronic Paradox: Shadow of Intention
                      </h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        An immersive science fiction story exploring the shadow
                        between artificial intelligence and human consciousness.
                        Read it on Wattpad.
                      </p>
                    </div>
                    <ExternalLink
                      size={18}
                      className="text-muted-foreground group-hover:text-primary transition-colors mt-1 shrink-0"
                    />
                  </div>
                </Card>
              </motion.a>
            </motion.div>
          </div>
        </section>

        {/* Contact */}
        <section
          id="contact"
          className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/40"
        >
          <div className="max-w-2xl mx-auto text-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={stagger}
            >
              <motion.div variants={fadeUp}>
                <Mail size={48} className="text-primary mx-auto mb-6" />
                <h2 className="font-display text-3xl sm:text-4xl font-semibold mb-4">
                  Get in Touch
                </h2>
                <p className="text-muted-foreground mb-8 max-w-md mx-auto">
                  Have a question, collaboration proposal, or just want to say
                  hello? Dr. Ashfy would love to hear from you.
                </p>
              </motion.div>
              <motion.a
                variants={fadeUp}
                href="mailto:mdshkofficial@gmail.com"
                data-ocid="contact.button"
                className="inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-primary text-primary-foreground font-semibold hover:opacity-90 transition-all duration-200 text-lg shadow-lg hover:shadow-xl"
              >
                <Mail size={22} />
                mdshkofficial@gmail.com
              </motion.a>
            </motion.div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-foreground text-background py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid sm:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="font-display text-xl font-semibold mb-3">
                Dr. Ashfy
              </h3>
              <p className="text-sm opacity-70 leading-relaxed">
                Author, scientist, and storyteller. Bridging knowledge and
                imagination.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-sm uppercase tracking-wider mb-3 opacity-70">
                Navigation
              </h4>
              <ul className="space-y-2">
                {NAV_LINKS.slice(0, 5).map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="text-sm opacity-70 hover:opacity-100 transition-opacity"
                      data-ocid="footer.link"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-sm uppercase tracking-wider mb-3 opacity-70">
                More
              </h4>
              <ul className="space-y-2">
                {NAV_LINKS.slice(5).map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="text-sm opacity-70 hover:opacity-100 transition-opacity"
                      data-ocid="footer.link"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <Separator className="mb-6 opacity-20" />
          <div className="flex flex-col sm:flex-row justify-between items-center gap-3 text-sm opacity-60">
            <p>
              © {year} Dr. Mohammad Shah Hafez Kabir (Ashfy). All rights
              reserved.
            </p>
            <a
              href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(typeof window !== "undefined" ? window.location.hostname : "")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-100 transition-opacity"
            >
              Built with ❤️ using caffeine.ai
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
