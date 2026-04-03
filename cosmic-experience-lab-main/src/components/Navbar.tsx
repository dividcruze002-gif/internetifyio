import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleClick = (href: string) => {
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: "smooth" });
    setMobileMenuOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/80 backdrop-blur-xl border-b border-border/50 shadow-lg shadow-black/20"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16">
        <button
          onClick={() => handleClick("#home")}
          className="font-display text-lg sm:text-xl font-bold tracking-tight"
        >
          <span className="text-gradient">internetify</span>
        </button>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-1">
          <button
            onClick={() => handleClick("#why-us")}
            className="px-4 py-2 text-sm font-body text-muted-foreground hover:text-foreground transition-colors rounded-lg hover:bg-secondary/50"
          >
            Why Us
          </button>
          <button
            onClick={() => handleClick("#contact")}
            className="px-4 py-2 text-sm font-body text-muted-foreground hover:text-foreground transition-colors rounded-lg hover:bg-secondary/50"
          >
            Contact
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-muted-foreground hover:text-foreground transition-colors"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-background/95 backdrop-blur-xl border-b border-border/50"
          >
            <div className="px-4 py-4 space-y-2">
              <button
                onClick={() => handleClick("#why-us")}
                className="w-full text-left px-4 py-3 text-sm font-body text-muted-foreground hover:text-foreground hover:bg-secondary/50 transition-colors rounded-lg"
              >
                Why Us
              </button>
              <button
                onClick={() => handleClick("#contact")}
                className="w-full text-left px-4 py-3 text-sm font-body text-muted-foreground hover:text-foreground hover:bg-secondary/50 transition-colors rounded-lg"
              >
                Contact
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
