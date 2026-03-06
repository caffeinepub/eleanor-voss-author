import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Skeleton } from "@/components/ui/skeleton";
import { Toaster } from "@/components/ui/sonner";
import { Textarea } from "@/components/ui/textarea";
import {
  ArrowRight,
  BookOpen,
  ExternalLink,
  FlaskConical,
  GraduationCap,
  Headphones,
  Loader2,
  Menu,
  Microscope,
  PenLine,
  X,
} from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";
import {
  SiGooglescholar,
  SiInstagram,
  SiLinkedin,
  SiOrcid,
  SiResearchgate,
  SiSoundcloud,
  SiSpotify,
  SiX,
  SiYoutube,
} from "react-icons/si";
import { toast } from "sonner";
import { useGetBooks, useSubmitContact } from "./hooks/useQueries";

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
    { label: "Research", target: "research" },
    { label: "Books", target: "books" },
    { label: "Listen", target: "audio-stories" },
    { label: "Contact", target: "contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-border/60"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <button
          type="button"
          onClick={() => scrollTo("hero")}
          className="font-display text-lg font-semibold text-foreground hover:text-primary transition-colors"
          data-ocid="nav.link"
        >
          Dr. Ashfy
        </button>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-7">
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

        {/* Subscribe CTA */}
        <Button
          size="sm"
          onClick={() => scrollTo("contact")}
          className="hidden md:flex bg-foreground text-background hover:bg-foreground/90 font-ui font-medium text-sm rounded-full px-5"
          data-ocid="nav.primary_button"
        >
          Get in Touch
        </Button>

        {/* Mobile hamburger */}
        <button
          type="button"
          className="md:hidden p-2 text-foreground"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          data-ocid="nav.toggle"
        >
          {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden overflow-hidden bg-white border-b border-border"
          >
            <ul className="flex flex-col py-4 px-6 gap-1">
              {links.map((link) => (
                <li key={link.target}>
                  <button
                    type="button"
                    onClick={() => {
                      scrollTo(link.target);
                      setMenuOpen(false);
                    }}
                    className="w-full text-left py-2.5 font-ui text-base font-medium text-foreground hover:text-primary transition-colors"
                    data-ocid="nav.link"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
              <li className="pt-3 border-t border-border mt-2">
                <Button
                  onClick={() => {
                    scrollTo("contact");
                    setMenuOpen(false);
                  }}
                  className="w-full bg-foreground text-background hover:bg-foreground/90 rounded-full"
                  data-ocid="nav.primary_button"
                >
                  Get in Touch
                </Button>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

// ─── Hero Section ─────────────────────────────────────────────
function HeroSection() {
  const featuredIn = [
    "Wayne State University",
    "GUSTO Research Group",
    "Detroit Science Community",
    "Scientific Conferences",
    "Inquiry Ink Series",
  ];

  return (
    <section
      id="hero"
      className="hero-mesh pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Left: text */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-flex items-center gap-2 bg-primary/10 text-primary font-ui font-semibold text-sm px-4 py-1.5 rounded-full mb-6">
                Hey Friends 👋
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="font-display font-semibold text-foreground leading-tight mb-5"
              style={{ fontSize: "clamp(2.25rem, 5vw, 3.5rem)" }}
            >
              I'm Dr. Ashfy.
              <br />
              <span className="text-primary">Educator, Researcher,</span>
              <br />
              and Author.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="font-body text-lg text-muted-foreground leading-relaxed mb-8 max-w-md"
            >
              A chemist and educator from Detroit who writes both fiction and
              non-fiction — from robo-stories to research guides — and helps
              students fall in love with science.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-3 mb-12"
            >
              <Button
                size="lg"
                onClick={() => scrollTo("books")}
                className="bg-foreground text-background hover:bg-foreground/90 font-ui font-semibold rounded-full px-7 shadow-md"
                data-ocid="hero.primary_button"
              >
                Explore My Books
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={() => scrollTo("about")}
                className="border-border hover:border-primary/50 hover:bg-primary/5 font-ui font-semibold rounded-full px-7"
                data-ocid="hero.secondary_button"
              >
                About Me
              </Button>
            </motion.div>

            {/* As featured in */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.5 }}
            >
              <p className="font-ui text-xs text-muted-foreground/60 uppercase tracking-widest mb-3">
                Associated With
              </p>
              <div className="flex flex-wrap gap-x-6 gap-y-2">
                {featuredIn.map((name) => (
                  <span
                    key={name}
                    className="font-ui text-sm text-muted-foreground/70 font-medium"
                  >
                    {name}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right: author photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative flex justify-center md:justify-end"
          >
            {/* Decorative shape behind photo */}
            <div
              className="absolute inset-0 rounded-3xl"
              style={{
                background:
                  "radial-gradient(ellipse at 60% 40%, oklch(0.65 0.14 75 / 0.15) 0%, transparent 65%)",
                transform: "scale(1.1)",
              }}
            />
            <div className="relative z-10 w-full max-w-sm">
              {/* Decorative dots */}
              <div
                className="absolute -top-4 -right-4 w-24 h-24 opacity-30"
                style={{
                  backgroundImage:
                    "radial-gradient(circle, oklch(0.65 0.14 75) 1.5px, transparent 1.5px)",
                  backgroundSize: "12px 12px",
                }}
                aria-hidden="true"
              />
              <div className="relative overflow-hidden rounded-2xl shadow-card-hover">
                <img
                  src="/assets/uploads/Ashfy-Photo-1.jpg"
                  alt="Dr. Mohammad Shah Hafez Kabir (Ashfy)"
                  className="w-full aspect-[4/5] object-cover"
                />
                {/* Subtle overlay at bottom */}
                <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-foreground/10 to-transparent pointer-events-none" />
              </div>
              {/* Floating badge */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.5 }}
                className="absolute -bottom-4 -left-4 bg-white border border-border rounded-xl px-4 py-3 shadow-card-light"
              >
                <p className="font-ui text-xs text-muted-foreground mb-0.5">
                  Award Winning
                </p>
                <p className="font-ui text-sm font-semibold text-foreground">
                  Research Excellence 🏆
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// ─── Help Section ─────────────────────────────────────────────
function HelpSection() {
  const categories = [
    {
      icon: FlaskConical,
      title: "Science Education",
      desc: "Learn chemistry and scientific concepts explained clearly — for students, educators, and curious minds.",
      color: "text-blue-500",
      bg: "bg-blue-50",
    },
    {
      icon: Microscope,
      title: "Research",
      desc: "Guidance for undergraduate students doing research via GUSTO A Research Group, founded in 2014.",
      color: "text-green-600",
      bg: "bg-green-50",
    },
    {
      icon: PenLine,
      title: "Fiction Writing",
      desc: "Imaginative stories spanning robo-fiction, philosophical dialogues, and children's adventures.",
      color: "text-purple-500",
      bg: "bg-purple-50",
    },
    {
      icon: GraduationCap,
      title: "Non-Fiction Books",
      desc: "Academic and educational writing on science, research methodology, and knowledge building.",
      color: "text-amber-600",
      bg: "bg-amber-50",
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-muted/40">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="section-label mb-3">What I Do</p>
          <h2
            className="font-display font-semibold text-foreground leading-tight"
            style={{ fontSize: "clamp(1.75rem, 4vw, 2.75rem)" }}
          >
            How Can I Help You?
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="help-card group"
            >
              <div
                className={`w-10 h-10 rounded-xl ${cat.bg} flex items-center justify-center mb-4`}
              >
                <cat.icon className={`h-5 w-5 ${cat.color}`} />
              </div>
              <h3 className="font-ui font-semibold text-foreground text-base mb-2">
                {cat.title}
              </h3>
              <p className="font-body text-sm text-muted-foreground leading-relaxed mb-4">
                {cat.desc}
              </p>
              <button
                type="button"
                onClick={() => scrollTo("books")}
                className="inline-flex items-center gap-1 font-ui text-sm font-semibold text-primary hover:gap-2 transition-all"
                data-ocid="help.primary_button"
              >
                Get started <ArrowRight className="h-3.5 w-3.5" />
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── About Section ────────────────────────────────────────────
function AboutSection() {
  const stats = [
    { value: "2014", label: "GUSTO Founded" },
    { value: "PhD", label: "Wayne State" },
    { value: "7+", label: "Books Published" },
    { value: "Detroit", label: "Educator" },
  ];

  return (
    <section id="about" className="py-20 md:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="grid md:grid-cols-2 gap-14 items-start"
        >
          {/* Left: bio text */}
          <div>
            <p className="section-label mb-4">About the Author</p>
            <h2
              className="font-display font-semibold text-foreground leading-tight mb-7"
              style={{ fontSize: "clamp(1.75rem, 4vw, 2.75rem)" }}
            >
              Educator, Researcher
              <br />
              <span className="text-primary">&amp; Author</span>
            </h2>
            <div className="space-y-4 font-body text-base text-muted-foreground leading-relaxed">
              <p>
                Dr. Mohammad Shah Hafez Kabir (Ashfy) is an educator currently
                teaching in Detroit. He holds a PhD in Physical and Analytical
                Chemistry from Wayne State University and is passionate about
                science education, research, and creative writing.
              </p>
              <p>
                In addition to his academic career, he writes both fiction and
                non-fiction books covering topics such as science, education,
                and imaginative storytelling. He has made numerous YouTube
                videos to explain scientific topics and methods.
              </p>
              <p>
                In 2014, he founded the{" "}
                <span className="text-foreground font-semibold">
                  GUSTO A Research Group
                </span>
                , a non-profit organization dedicated to helping young
                undergraduate students conduct research in their fields.
              </p>
              <p>
                Kabir has received many awards for research excellence at
                several scientific conferences.
              </p>
            </div>

            {/* Stats row */}
            <div className="grid grid-cols-4 gap-4 mt-10 pt-8 border-t border-border">
              {stats.map(({ value, label }) => (
                <div key={label} className="text-center">
                  <p className="font-display text-2xl font-semibold text-primary leading-tight">
                    {value}
                  </p>
                  <p className="font-ui text-xs text-muted-foreground mt-1 leading-tight">
                    {label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right: photo */}
          <div className="relative flex justify-center md:justify-end">
            <div className="relative w-full max-w-md">
              {/* Background blob */}
              <div
                className="absolute -inset-6 rounded-3xl opacity-40"
                style={{
                  background:
                    "radial-gradient(ellipse at 50% 50%, oklch(0.65 0.14 75 / 0.12) 0%, transparent 70%)",
                }}
                aria-hidden="true"
              />
              <div className="relative overflow-hidden rounded-2xl shadow-md">
                <img
                  src="/assets/uploads/20251022_134705295_iOS-1--1.jpg"
                  alt="Dr. Ashfy"
                  className="w-full object-cover"
                  style={{ aspectRatio: "4/5" }}
                />
              </div>
              {/* Floating award */}
              <motion.div
                initial={{ opacity: 0, scale: 0.85 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.5 }}
                className="absolute -bottom-5 -left-5 bg-white border border-border rounded-xl px-4 py-3 shadow-card-light"
              >
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
                    <BookOpen className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <p className="font-ui text-xs text-muted-foreground">
                      Award Winning
                    </p>
                    <p className="font-ui text-sm font-semibold text-foreground">
                      Research Excellence
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// ─── Research Profiles Section ────────────────────────────────
function ResearchSection() {
  const profiles = [
    {
      name: "GUSTO A Research Group",
      url: "https://youtube.com/channel/UCmPk5xXlzpamJefZa33YG8Q/featured",
      icon: SiYoutube,
      color: "text-red-500",
      bg: "bg-red-50",
      desc: "Non-profit research organization helping undergrad students conduct research",
    },
    {
      name: "Google Scholar",
      url: "https://scholar.google.com/citations?hl=en&user=YO6y-jYAAAAJ&scilu=15000173386196379264:0&scisig=AMstHGQAAAAAWHZWvxHP4uC2nkF0PViX4Rr_OgLDWX4m&gmla=AJsN-F7wWyWbQ9vXmgVtIkn9S7ZnhekS3mikqhBrgKZkzt9LeBbsC-jxt16ThhModGr3d_myRa_SFrX3B2siDs89mxYm1_Jz9cd6iePvo8ahMuapSyyYkUw&sciund=1619457198548083007",
      icon: SiGooglescholar,
      color: "text-blue-600",
      bg: "bg-blue-50",
      desc: "Published research papers and citation metrics",
    },
    {
      name: "ResearchGate",
      url: "https://researchgate.net/profile/Mohammad_Kabir9",
      icon: SiResearchgate,
      color: "text-teal-600",
      bg: "bg-teal-50",
      desc: "Research profile, publications, and collaborations",
    },
    {
      name: "PubMed",
      url: "https://ncbi.nlm.nih.gov/pubmed/?term=Mohammad Shah Hafez Kabir",
      icon: null,
      color: "text-blue-700",
      bg: "bg-blue-50",
      desc: "Biomedical literature and research publications",
    },
    {
      name: "Scopus",
      url: "https://scopus.com/authid/detail.uri?authorId=56769012400",
      icon: null,
      color: "text-orange-600",
      bg: "bg-orange-50",
      desc: "Abstract and citation database profile",
    },
    {
      name: "ORCID",
      url: "https://orcid.org/0000-0003-4952-8730",
      icon: SiOrcid,
      color: "text-green-600",
      bg: "bg-green-50",
      desc: "Unique researcher identifier: 0000-0003-4952-8730",
    },
    {
      name: "LinkedIn",
      url: "https://linkedin.com/in/mohammad-shah-hafez-kabir-8b214888?trk=nav_responsive_tab_profile_pic",
      icon: SiLinkedin,
      color: "text-blue-700",
      bg: "bg-blue-50",
      desc: "Professional profile and academic network",
    },
    {
      name: "Academia.edu",
      url: "https://iiuc.academia.edu/MohammadShahHafezKabir",
      icon: null,
      color: "text-gray-700",
      bg: "bg-gray-100",
      desc: "Academic papers and research sharing platform",
    },
    {
      name: "ResearcherID",
      url: "https://researcherid.com/ProfileView.action?returnCode=ROUTER.Unauthorized&queryString=KG0UuZjN5WlQELVsM3UeW4OLAxPn6UbJ3X1vXsiMnZI%3D&SrcApp=CR&Init=Yes",
      icon: null,
      color: "text-purple-600",
      bg: "bg-purple-50",
      desc: "Web of Science researcher profile",
    },
    {
      name: "Personal Website",
      url: "https://mshkabir.myfreesites.net",
      icon: null,
      color: "text-indigo-600",
      bg: "bg-indigo-50",
      desc: "Personal academic website",
    },
    {
      name: "MSHK Audio Books (আশফীর বই)",
      url: "https://youtube.com/channel/UCo5u2oyH9GA5ynvAMNGc1Rw",
      icon: SiYoutube,
      color: "text-red-500",
      bg: "bg-red-50",
      desc: "Audio books and spoken word content in Bengali",
    },
    {
      name: "Bookish Becomes Travelholic",
      url: "https://youtube.com/@bookishbecomestravelholic",
      icon: SiYoutube,
      color: "text-red-500",
      bg: "bg-red-50",
      desc: "Travel and books YouTube channel",
    },
    {
      name: "Hyperpolarized Brains",
      url: "https://youtube.com/@hyperpolarizedbrains",
      icon: SiYoutube,
      color: "text-red-500",
      bg: "bg-red-50",
      desc: "Science and brain-focused YouTube channel",
    },
    {
      name: "Soundcloud",
      url: "https://soundcloud.com/user-203299441",
      icon: SiSoundcloud,
      color: "text-orange-500",
      bg: "bg-orange-50",
      desc: "Audio tracks and spoken content on Soundcloud",
    },
    {
      name: "Spotify",
      url: "https://open.spotify.com/show/0wYBdJ7RXpAZlcGoNjKrHq?si=f6430ba8dda742",
      icon: SiSpotify,
      color: "text-green-500",
      bg: "bg-green-50",
      desc: "Podcast and audio content on Spotify",
    },
  ];

  return (
    <section id="research" className="py-20 md:py-28 bg-muted/40">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="section-label mb-3">Academic Presence</p>
          <h2
            className="font-display font-semibold text-foreground leading-tight"
            style={{ fontSize: "clamp(1.75rem, 4vw, 2.75rem)" }}
          >
            Research Profiles &amp; Links
          </h2>
          <p className="font-body text-base text-muted-foreground mt-4 max-w-xl mx-auto">
            Find Dr. Ashfy's published research, academic profiles, and content
            across platforms.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {profiles.map((profile, i) => (
            <motion.a
              key={profile.name}
              href={profile.url}
              target="_blank"
              rel="noopener noreferrer"
              data-ocid={`research.item.${i + 1}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: (i % 3) * 0.07 }}
              className="group flex items-start gap-4 bg-white border border-border rounded-xl p-5 hover:border-primary/40 hover:shadow-md transition-all duration-200"
            >
              <div
                className={`w-10 h-10 rounded-xl ${profile.bg} flex items-center justify-center shrink-0 mt-0.5`}
              >
                {profile.icon ? (
                  <profile.icon className={`h-5 w-5 ${profile.color}`} />
                ) : (
                  <ExternalLink className={`h-4 w-4 ${profile.color}`} />
                )}
              </div>
              <div className="min-w-0 flex-1">
                <div className="flex items-center gap-1.5 mb-1">
                  <h3 className="font-ui text-sm font-semibold text-foreground group-hover:text-primary transition-colors truncate">
                    {profile.name}
                  </h3>
                  <ExternalLink className="h-3 w-3 text-muted-foreground/40 shrink-0 group-hover:text-primary/60 transition-colors" />
                </div>
                <p className="font-body text-xs text-muted-foreground leading-relaxed line-clamp-2">
                  {profile.desc}
                </p>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Books Section ────────────────────────────────────────────
function BooksSection() {
  const { data: books, isLoading, isError } = useGetBooks();

  const sampleBooks = [
    {
      id: BigInt(1),
      title: "The Positronic Paradox",
      genre: "Robo-Fiction Stories",
      publishedYear: BigInt(2024),
      description:
        "A captivating robo-fiction adventure that explores the boundary between machine intelligence and human consciousness, asking what it truly means to think and feel.",
      coverUrl: "/assets/uploads/Mutinies-of-Binary-Cover-v3-01-1.jpg",
    },
    {
      id: BigInt(2),
      title: "Is Science Completely Dependent on Research Papers?",
      genre: "Non-Fiction / Science",
      publishedYear: BigInt(2023),
      description:
        "A thought-provoking examination of how scientific knowledge is built, communicated, and validated — and whether research papers are the only measure of scientific truth.",
      coverUrl: "/assets/uploads/My-project-copy-1-5--2.jpg",
    },
    {
      id: BigInt(3),
      title: "The Kid Scientists Build Their Own Lab",
      genre: "Children's Fiction",
      publishedYear: BigInt(2023),
      description:
        "A fun and inspiring story for young readers about a team of curious kids who band together to construct their very own science laboratory and make amazing discoveries.",
      coverUrl: "/assets/uploads/Cover-v1-01-3.jpg",
    },
    {
      id: BigInt(4),
      title: "Andy's Journey Into the Realm of Research",
      genre: "Inquiry Ink Series",
      publishedYear: BigInt(2022),
      description:
        "Book One of the Path to Wisdom: Inquiry Ink Series. Andy embarks on a transformative journey into the world of research, uncovering the joy and rigor of scientific inquiry.",
      coverUrl: "/assets/uploads/The-real-cover-v2-Thin-4.jpg",
    },
    {
      id: BigInt(5),
      title: "A Comprehensive Guide to Conducting Full-Fledged Research Work",
      genre: "Academic / Non-Fiction",
      publishedYear: BigInt(2021),
      description:
        "An authoritative guide covering every stage of the research process — from formulating questions and reviewing literature to data analysis and publishing findings.",
      coverUrl: "/assets/uploads/Cover-v2-01-5.jpg",
    },
    {
      id: BigInt(6),
      title: "The Dialogues of Socrata and Plata",
      genre: "Philosophical Fiction",
      publishedYear: BigInt(2022),
      description:
        "Book One of the Socreta and Plata Series. Two philosophical companions meet at a quaint café and engage in rich, witty dialogues that challenge the reader's assumptions about truth, knowledge, and the good life.",
      coverUrl:
        "/assets/uploads/The-dialogues-of-socreta-and-plata-Cover-v7-01-6.jpg",
    },
    {
      id: BigInt(7),
      title: "Ghost Catcher Club",
      genre: "Children's Stories",
      publishedYear: BigInt(2023),
      description:
        "A spooky and exciting children's tale following a brave group of young friends who form the Ghost Catcher Club and set out to solve the mysterious haunting of an old mansion.",
      coverUrl: "/assets/uploads/Main-Full-Cover-V2-01-7.jpg",
    },
    {
      id: BigInt(8),
      title: "The Wonderful Journey of Achiya",
      genre: "Children's Fiction",
      publishedYear: BigInt(2025),
      description:
        "A magical and enchanting children's story following young Achiya on a wonderful journey filled with mystical creatures, colorful birds, and the beauty of nature and imagination.",
      coverUrl: "/assets/uploads/Picture1mnk-1.jpg",
    },
  ];

  const displayBooks = books && books.length > 0 ? books : sampleBooks;

  return (
    <section id="books" className="py-20 md:py-32 bg-muted/40">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12"
        >
          <div>
            <p className="section-label mb-3">Published Works</p>
            <h2
              className="font-display font-semibold text-foreground leading-tight"
              style={{ fontSize: "clamp(1.75rem, 4vw, 2.75rem)" }}
            >
              My Books
            </h2>
          </div>
          <p className="font-body text-base text-muted-foreground max-w-xs">
            Fiction, non-fiction, and children's books spanning science,
            research, philosophy, and imagination.
          </p>
        </motion.div>

        {isLoading && (
          <div
            data-ocid="books.loading_state"
            className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          >
            {["sk1", "sk2", "sk3", "sk4"].map((k) => (
              <div key={k} className="space-y-3">
                <Skeleton className="w-full aspect-[2/3] rounded-xl skeleton-shimmer" />
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
            <p className="font-ui text-sm font-medium mb-1">
              Unable to load books
            </p>
            <p className="font-body text-base">Please try again later.</p>
          </div>
        )}

        {!isLoading && !isError && (
          <div
            data-ocid="books.list"
            className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          >
            {displayBooks.map((book, idx) => (
              <motion.article
                key={book.id.toString()}
                data-ocid={`books.item.${idx + 1}`}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: (idx % 4) * 0.06 }}
                className="group"
              >
                <div className="overflow-hidden rounded-xl book-card-shadow mb-4 transition-transform duration-300 group-hover:-translate-y-1.5">
                  <img
                    src={book.coverUrl}
                    alt={book.title}
                    className="w-full aspect-[2/3] object-cover"
                    loading="lazy"
                  />
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1.5">
                    <Badge
                      variant="secondary"
                      className="font-ui text-xs font-medium text-muted-foreground bg-muted/60 border-0"
                    >
                      {book.genre}
                    </Badge>
                    <span className="font-ui text-xs text-muted-foreground/60">
                      {book.publishedYear.toString()}
                    </span>
                  </div>
                  <h3 className="font-ui text-base font-semibold text-foreground leading-snug mb-1.5 group-hover:text-primary transition-colors duration-200 line-clamp-2">
                    {book.title}
                  </h3>
                  <p className="font-body text-sm text-muted-foreground leading-relaxed line-clamp-2 mb-3">
                    {book.description}
                  </p>
                  <a
                    href="https://www.rokomari.com/book/author/119963/dr-muhammad-sah-hafez-kobir"
                    target="_blank"
                    rel="noopener noreferrer"
                    data-ocid="books.primary_button"
                    className="inline-flex items-center gap-1.5 font-ui text-xs font-semibold text-primary border border-primary/30 bg-primary/5 hover:bg-primary/10 hover:border-primary/50 px-3 py-1.5 rounded-full transition-all duration-200"
                  >
                    <ExternalLink className="h-3 w-3" />
                    Buy on Rokomari
                  </a>
                </div>
              </motion.article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

// ─── Quotes Section ───────────────────────────────────────────
function QuotesSection() {
  const quotes = [
    {
      id: "q1",
      text: "All the aquatic creatures trapped in the nets of pollution,\nThose children of Minamata Bay who were poisoned,\nDo you not see? It is humans who harm humans.",
    },
    {
      id: "q2",
      text: "Even if you live for a hundred years, you still walk the path toward extinction.\nTo be born in such a time is a deep misfortune.\nYou wander through space with the whole world in your imagination,\nYet today, you stand helpless in the act of reproduction.",
    },
    {
      id: "q3",
      text: "When Little Boy and Fat Man struck Hiroshima,\nthousands of children were playing peacefully in all parts of the world.\nIt was said that children of every nation would grow and play like this,\nyet some remained above the ground,\nwhile others were torn from the earth and vanished.",
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-foreground text-background">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p className="font-ui text-xs font-semibold text-background/40 uppercase tracking-widest mb-3">
            From the Author's Pen
          </p>
          <h2
            className="font-display font-semibold text-background leading-tight mb-3"
            style={{ fontSize: "clamp(1.75rem, 4vw, 2.75rem)" }}
          >
            Poems by Dr. Ashfy
          </h2>
          <p className="font-body text-sm text-background/50 italic">
            From the children's book "The Wonderful Journey of Achiya"
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {quotes.map((quote, i) => (
            <motion.div
              key={quote.id}
              data-ocid={`quotes.item.${i + 1}`}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.55, delay: i * 0.1 }}
              className="relative bg-background/5 border border-background/10 rounded-2xl p-7 flex flex-col"
            >
              {/* Opening quotation mark */}
              <span
                className="font-display text-6xl leading-none text-primary/60 mb-3 block"
                aria-hidden="true"
              >
                "
              </span>
              <p className="font-body text-base text-background/80 leading-relaxed whitespace-pre-line flex-1">
                {quote.text}
              </p>
              {/* Closing quotation mark */}
              <span
                className="font-display text-4xl leading-none text-primary/40 mt-3 block text-right"
                aria-hidden="true"
              >
                "
              </span>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center font-ui text-xs text-background/30 mt-10 uppercase tracking-widest"
        >
          — Dr. Ashfy
        </motion.p>
      </div>
    </section>
  );
}

// ─── Achiya Sketches Section ──────────────────────────────────
function AchiyaSketchesSection() {
  const sketches = [
    {
      src: "/assets/uploads/illustration12-1.jpg",
      alt: "A wooden boat resting on land with birds perched on its edge and a leafy branch — from The Wonderful Journey of Achiya",
      caption: "The Boat & the Birds",
    },
    {
      src: "/assets/uploads/illustration8-2.jpg",
      alt: "Achiya running through a forest with a tortoise and birds around her — from The Wonderful Journey of Achiya",
      caption: "Achiya's Forest Adventure",
    },
    {
      src: "/assets/uploads/inner7-3.jpg",
      alt: "A majestic whale with a forest growing on its back — from The Wonderful Journey of Achiya",
      caption: "The Whale Carries the World",
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="section-label mb-3">Illustrated Pages</p>
          <h2
            className="font-display font-semibold text-foreground leading-tight mb-3"
            style={{ fontSize: "clamp(1.75rem, 4vw, 2.75rem)" }}
          >
            Sketches from{" "}
            <span className="text-primary italic">
              The Wonderful Journey of Achiya
            </span>
          </h2>
          <p className="font-body text-base text-muted-foreground mt-3 max-w-xl mx-auto">
            Original illustrations from the children's book — pencil-sketch art
            that brings Achiya's magical world to life.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-3 gap-6 md:gap-8">
          {sketches.map((sketch, i) => (
            <motion.figure
              key={sketch.src}
              data-ocid={`achiya.item.${i + 1}`}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.55, delay: i * 0.1 }}
              className="group flex flex-col items-center"
            >
              <div className="w-full overflow-hidden rounded-2xl border border-border/60 bg-gray-50 shadow-sm group-hover:shadow-md transition-shadow duration-300">
                <img
                  src={sketch.src}
                  alt={sketch.alt}
                  className="w-full object-contain mix-blend-multiply"
                  style={{ aspectRatio: "3/4" }}
                  loading="lazy"
                />
              </div>
              <figcaption className="mt-3 font-ui text-sm text-muted-foreground text-center italic">
                {sketch.caption}
              </figcaption>
            </motion.figure>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-10"
        >
          <a
            href="https://www.rokomari.com/book/author/119963/dr-muhammad-sah-hafez-kobir"
            target="_blank"
            rel="noopener noreferrer"
            data-ocid="achiya.primary_button"
            className="inline-flex items-center gap-2 font-ui text-sm font-semibold text-primary border border-primary/30 bg-primary/5 hover:bg-primary/10 hover:border-primary/50 px-5 py-2.5 rounded-full transition-all duration-200"
          >
            <ExternalLink className="h-4 w-4" />
            Get the Book on Rokomari
          </a>
        </motion.div>
      </div>
    </section>
  );
}

// ─── Audio Stories Section ────────────────────────────────────
function AudioStoriesSection() {
  const videos = [
    {
      id: "4RjVfVu0GsI",
      title: "The Wonderful Journey of Achiya - Part 1",
    },
    {
      id: "8sKnjQ6AV0s",
      title: "Ghost Catcher Club - Audio Story",
    },
    {
      id: "VgMB-YJbHWw",
      title: "The Dialogues of Socrata and Plata",
    },
    {
      id: "Hk9mHCsBOd8",
      title: "Andy's Journey Into the Realm of Research",
    },
    {
      id: "xvFZjo5PgG0",
      title: "Kid Scientists Build Their Own Lab",
    },
    {
      id: "dQw4w9WgXcQ",
      title: "Science Education Series - Episode 1",
    },
  ];

  return (
    <section
      id="audio-stories"
      data-ocid="audio-stories.section"
      className="py-20 md:py-28"
      style={{
        background:
          "linear-gradient(135deg, oklch(0.97 0.02 75 / 1) 0%, oklch(0.95 0.03 55 / 1) 50%, oklch(0.97 0.015 85 / 1) 100%)",
      }}
    >
      <div className="max-w-5xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.65 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-primary/12 mb-5">
            <Headphones className="h-6 w-6 text-primary" />
          </div>
          <p className="section-label mb-3">Listen &amp; Watch</p>
          <h2
            className="font-display font-semibold text-foreground leading-tight mb-4"
            style={{ fontSize: "clamp(1.75rem, 4vw, 2.75rem)" }}
          >
            Audio Stories
          </h2>
          <p className="font-body text-base text-muted-foreground max-w-lg mx-auto leading-relaxed">
            Narrated stories and books from Dr. Ashfy's{" "}
            <span className="text-foreground font-semibold">
              MSHK Audio Books (আশফীর বই)
            </span>{" "}
            channel — bringing words to life through voice.
          </p>
        </motion.div>

        {/* Video thumbnail grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-5 mb-10"
        >
          {videos.map((video, i) => (
            <motion.a
              key={video.id}
              href={`https://www.youtube.com/watch?v=${video.id}`}
              target="_blank"
              rel="noopener noreferrer"
              data-ocid={`audio-stories.item.${i + 1}`}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-20px" }}
              transition={{ duration: 0.45, delay: (i % 3) * 0.07 }}
              className="group block bg-white border border-border/60 rounded-xl overflow-hidden shadow-sm hover:shadow-md hover:border-primary/30 transition-all duration-200"
            >
              {/* Thumbnail */}
              <div className="relative overflow-hidden aspect-video bg-gray-100">
                <img
                  src={`https://img.youtube.com/vi/${video.id}/hqdefault.jpg`}
                  alt={video.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  loading="lazy"
                />
                {/* Play overlay */}
                <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/30 transition-colors duration-200">
                  <div className="w-10 h-10 rounded-full bg-red-500 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-200">
                    <SiYoutube className="h-5 w-5 text-white" />
                  </div>
                </div>
              </div>
              {/* Title */}
              <div className="px-3 py-2.5">
                <p className="font-ui text-xs font-semibold text-foreground leading-snug line-clamp-2 group-hover:text-primary transition-colors duration-200">
                  {video.title}
                </p>
                <p className="font-ui text-xs text-muted-foreground mt-1">
                  Watch on YouTube
                </p>
              </div>
            </motion.a>
          ))}
        </motion.div>

        {/* CTA row — YouTube + Spotify */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="flex flex-col sm:flex-row items-center justify-between gap-6 bg-white border border-border/60 rounded-2xl px-7 py-6 shadow-sm"
        >
          <div className="text-center sm:text-left">
            <h3 className="font-ui text-base font-semibold text-foreground mb-1">
              More stories on YouTube &amp; Spotify
            </h3>
            <p className="font-body text-sm text-muted-foreground">
              Subscribe to the channel or listen on Spotify — explore the full
              library of Bengali audio stories and books.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 shrink-0">
            <a
              href="https://www.youtube.com/@MSHKBOOKS/videos"
              target="_blank"
              rel="noopener noreferrer"
              data-ocid="audio-stories.primary_button"
              className="inline-flex items-center gap-2 font-ui text-sm font-semibold bg-red-500 hover:bg-red-600 text-white px-5 py-2.5 rounded-full transition-all duration-200 shadow-sm hover:shadow-md whitespace-nowrap"
            >
              <SiYoutube className="h-4 w-4" />
              Browse All Audio Stories
            </a>
            <a
              href="https://open.spotify.com/show/0wYBdJ7RXpAZlcGoNjKrHq?si=f6430ba8dda742"
              target="_blank"
              rel="noopener noreferrer"
              data-ocid="audio-stories.secondary_button"
              className="inline-flex items-center gap-2 font-ui text-sm font-semibold bg-green-500 hover:bg-green-600 text-white px-5 py-2.5 rounded-full transition-all duration-200 shadow-sm hover:shadow-md whitespace-nowrap"
            >
              <SiSpotify className="h-4 w-4" />
              Listen on Spotify
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// ─── Contact Section ──────────────────────────────────────────
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
          toast.success("Message sent! Dr. Ashfy will be in touch.");
        },
        onError: () => {
          setSubmitStatus("error");
          toast.error("Something went wrong. Please try again.");
        },
      },
    );
  }

  return (
    <section id="contact" className="py-20 md:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-14 items-start">
          {/* Left: copy */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
          >
            <p className="section-label mb-4">Get in Touch</p>
            <h2
              className="font-display font-semibold text-foreground leading-tight mb-6"
              style={{ fontSize: "clamp(1.75rem, 4vw, 2.75rem)" }}
            >
              Write to
              <br />
              <span className="text-primary">Dr. Ashfy</span>
            </h2>
            <div className="space-y-4 font-body text-base text-muted-foreground leading-relaxed mb-8">
              <p>
                For reader mail, speaking engagements, media enquiries, or
                collaborations — Dr. Ashfy reads every message personally and
                responds to as many as he can.
              </p>
              <p>
                Interested in research mentorship or the GUSTO Research Group?
                Feel free to reach out for more information.
              </p>
            </div>

            {/* Quote */}
            <blockquote className="border-l-4 border-primary/40 pl-5 bg-primary/5 py-4 pr-4 rounded-r-xl">
              <p className="font-display text-lg italic text-foreground/80 leading-relaxed">
                "Every question from a student is a seed that can grow into
                something extraordinary."
              </p>
              <footer className="mt-2 font-ui text-xs text-muted-foreground uppercase tracking-wider">
                — Dr. Ashfy
              </footer>
            </blockquote>
          </motion.div>

          {/* Right: form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            {submitStatus === "success" ? (
              <div
                data-ocid="contact.success_state"
                className="bg-card border border-border rounded-2xl p-10 text-center"
              >
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BookOpen className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="font-display text-2xl font-semibold text-foreground mb-3">
                  Message Sent!
                </h3>
                <p className="font-body text-base text-muted-foreground mb-6">
                  Thank you for reaching out. Dr. Ashfy will read your message
                  and get back to you soon.
                </p>
                <button
                  type="button"
                  onClick={() => setSubmitStatus("idle")}
                  className="font-ui text-sm font-semibold text-primary hover:text-primary/80 transition-colors"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                noValidate
                className="bg-card border border-border rounded-2xl p-8 space-y-5"
              >
                <div>
                  <label
                    htmlFor="contact-name"
                    className="font-ui text-sm font-semibold text-foreground block mb-2"
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
                    className="bg-background border-border focus:border-primary h-11 font-body text-base"
                    disabled={isPending}
                  />
                  {errors.name && (
                    <p
                      data-ocid="contact.error_state"
                      className="font-ui text-xs text-destructive mt-1.5"
                    >
                      {errors.name}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="contact-email"
                    className="font-ui text-sm font-semibold text-foreground block mb-2"
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
                    className="bg-background border-border focus:border-primary h-11 font-body text-base"
                    disabled={isPending}
                  />
                  {errors.email && (
                    <p
                      data-ocid="contact.error_state"
                      className="font-ui text-xs text-destructive mt-1.5"
                    >
                      {errors.email}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="contact-message"
                    className="font-ui text-sm font-semibold text-foreground block mb-2"
                  >
                    Your Message
                  </label>
                  <Textarea
                    id="contact-message"
                    data-ocid="contact.textarea"
                    placeholder="What's on your mind..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="bg-background border-border focus:border-primary font-body text-base min-h-32 resize-none"
                    disabled={isPending}
                  />
                  {errors.message && (
                    <p
                      data-ocid="contact.error_state"
                      className="font-ui text-xs text-destructive mt-1.5"
                    >
                      {errors.message}
                    </p>
                  )}
                </div>

                {submitStatus === "error" && (
                  <div
                    data-ocid="contact.error_state"
                    className="bg-destructive/10 border border-destructive/30 rounded-lg px-4 py-3"
                  >
                    <p className="font-ui text-sm text-destructive">
                      Something went wrong. Please try again.
                    </p>
                  </div>
                )}

                <Button
                  data-ocid="contact.submit_button"
                  type="submit"
                  size="lg"
                  disabled={isPending}
                  className="w-full bg-foreground text-background hover:bg-foreground/90 font-ui font-semibold h-12 rounded-xl"
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
    <footer className="bg-foreground text-background/80">
      <div className="max-w-6xl mx-auto px-6 py-14">
        {/* Top: 4 columns */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 mb-12">
          {/* Col 1: Brand */}
          <div className="col-span-2 md:col-span-1">
            <p className="font-display text-xl font-semibold text-background mb-2">
              Dr. Ashfy
            </p>
            <p className="font-body text-sm text-background/60 leading-relaxed mb-5">
              Educator, Researcher, and Author based in Detroit.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="https://x.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="X / Twitter"
                className="text-background/50 hover:text-background transition-colors"
                data-ocid="footer.link"
              >
                <SiX className="h-4 w-4" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="text-background/50 hover:text-background transition-colors"
                data-ocid="footer.link"
              >
                <SiInstagram className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Books */}
          <div>
            <p className="font-ui text-xs font-semibold text-background/40 uppercase tracking-widest mb-4">
              Books
            </p>
            <ul className="space-y-2.5">
              {["All Books", "Fiction", "Non-Fiction", "Children's Books"].map(
                (label) => (
                  <li key={label}>
                    <button
                      type="button"
                      onClick={() => scrollTo("books")}
                      className="font-ui text-sm text-background/60 hover:text-background transition-colors"
                      data-ocid="footer.link"
                    >
                      {label}
                    </button>
                  </li>
                ),
              )}
            </ul>
          </div>

          {/* Col 4: About */}
          <div>
            <p className="font-ui text-xs font-semibold text-background/40 uppercase tracking-widest mb-4">
              About
            </p>
            <ul className="space-y-2.5">
              {[
                { label: "About Dr. Ashfy", target: "about" },
                { label: "GUSTO Research", target: "about" },
                { label: "Audio Stories", target: "audio-stories" },
                { label: "Contact", target: "contact" },
              ].map(({ label, target }) => (
                <li key={label}>
                  <button
                    type="button"
                    onClick={() => scrollTo(target)}
                    className="font-ui text-sm text-background/60 hover:text-background transition-colors"
                    data-ocid="footer.link"
                  >
                    {label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-background/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-ui text-sm text-background/40">
            © {year} Dr. Mohammad Shah Hafez Kabir (Ashfy). All rights reserved.
          </p>
          <p className="font-ui text-sm text-background/40">
            <a
              href={caffeineUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-background/70 transition-colors"
            >
              Built with ♥ using caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}

// ─── App ──────────────────────────────────────────────────────
export default function App() {
  return (
    <div className="min-h-screen bg-background">
      <Toaster richColors position="top-right" />
      <Navbar />
      <main>
        <HeroSection />
        <HelpSection />
        <AboutSection />
        <BooksSection />
        <QuotesSection />
        <AchiyaSketchesSection />
        <AudioStoriesSection />
        <ResearchSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
