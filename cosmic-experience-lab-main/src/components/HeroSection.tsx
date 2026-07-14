import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";
import StarField from "./StarField";

const HeroSection = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      const offset = 80; // Account for fixed navbar height
      const elementPosition = contactSection.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Deep space gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/30 to-background" />
      {/* Radial glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_hsl(217_91%_60%_/_0.08)_0%,_transparent_70%)]" />
      <StarField />

      {/* Animated gradient blobs */}
      <motion.div
        className="absolute top-20 -left-32 w-96 h-96 rounded-full bg-primary/5 blur-3xl"
        animate={{ x: [0, 60, 0], y: [0, 40, 0], scale: [1, 1.2, 1] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-20 -right-32 w-80 h-80 rounded-full bg-accent/5 blur-3xl"
        animate={{ x: [0, -50, 0], y: [0, -30, 0], scale: [1, 1.15, 1] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative z-10 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-screen">
          {/* Left Content */}
          <div className="space-y-6 lg:space-y-8">

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="font-display text-3xl md:text-4xl lg:text-6xl font-bold tracking-tight leading-tight"
            >
              We Build Websites That
              <span className="block text-gradient">Actually Grow Your</span>
              Business
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-muted-foreground font-body text-sm md:text-lg lg:text-xl max-w-lg leading-relaxed"
            >
              Stunning, high-performance websites crafted for businesses across industries — Restuarants, landing page, ecommerce & more. Results you can measure.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="flex justify-center"
            >
              <button 
                onClick={scrollToContact}
                className="glow-button text-white font-semibold px-8 py-3 rounded-lg transition-all duration-200 flex items-center justify-center gap-2 w-full sm:w-auto"
              >
                Book Free Call
                <ArrowRight className="w-4 h-4" />
              </button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1 }}
              className="flex items-center gap-3 text-sm text-muted-foreground lg:hidden"
            >
              <div className="flex -space-x-2">
                <div className="w-8 h-8 bg-emerald-500 rounded-full flex items-center justify-center text-white text-xs font-bold">R</div>
                <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">S</div>
                <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center text-white text-xs font-bold">A</div>
              </div>
              <span className="text-emerald-500 font-semibold">50+</span>
              <span>businesses trust us</span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1 }}
              className="hidden lg:flex items-center gap-2 text-sm text-muted-foreground"
            >
              <span className="text-emerald-500 font-semibold">50+</span>
              <span>businesses trust us</span>
            </motion.div>
          </div>

          {/* Right Visual Elements */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="relative space-y-6 hidden lg:block"
          >
            {/* Main UI Mockup */}
            <div className="bg-card rounded-2xl p-6 shadow-2xl border border-border">
              <div className="flex gap-2 mb-4">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <div className="space-y-3">
                <div className="h-4 bg-muted rounded w-3/4"></div>
                <div className="h-4 bg-muted rounded w-1/2"></div>
                <div className="h-8 bg-primary rounded w-1/3"></div>
              </div>
            </div>

            {/* Stats Badges */}
            <div className="flex gap-4">
              <div className="bg-primary/10 border border-primary/20 rounded-xl px-4 py-3">
                <div className="text-primary font-bold text-lg">+312%</div>
                <div className="text-xs text-muted-foreground">bookings</div>
              </div>
              <div className="bg-accent/10 border border-accent/20 rounded-xl px-4 py-3">
                <div className="text-accent font-bold text-lg">90+</div>
                <div className="text-xs text-muted-foreground">PageSpeed</div>
              </div>
            </div>

            {/* Delivery Badge */}
            <div className="absolute -top-4 -right-4 bg-primary text-primary-foreground rounded-full px-4 py-2 text-sm font-semibold">
              4 Week delivery
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <div className="w-6 h-10 rounded-full border-2 border-foreground/20 flex justify-center pt-2">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1.5 h-1.5 rounded-full bg-primary"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
