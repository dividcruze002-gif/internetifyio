import { motion } from "framer-motion";
import { Zap, Palette, TrendingUp, Headphones } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const features = [
  { icon: Zap, title: "Fast Delivery", description: "Rapid development cycles without compromising quality. Your project, delivered on time.", color: "from-blue-500 to-cyan-400" },
  { icon: Palette, title: "Premium Design", description: "Stunning, pixel-perfect interfaces that captivate users and elevate your brand.", color: "from-violet-500 to-purple-400" },
  { icon: TrendingUp, title: "Growth Focused", description: "Every pixel is optimized for conversions, SEO, and measurable business results.", color: "from-emerald-500 to-teal-400" },
  { icon: Headphones, title: "Full Support", description: "Dedicated support from concept to launch and beyond. We're always here for you.", color: "from-orange-500 to-amber-400" },
];

const WhyUs = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main>
        {/* Hero Section */}
        <section className="relative py-24 md:py-32 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="font-display text-4xl md:text-6xl font-bold tracking-tight mb-6"
            >
              <span className="text-gradient">Why Choose</span>
              <span className="text-foreground"> Internetify.io</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto leading-relaxed"
            >
              We don't just build websites. We craft digital experiences that drive results and exceed expectations.
            </motion.p>
          </div>
        </section>

        {/* Features Section */}
        <section className="relative py-24 md:py-32 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {features.map((feature, i) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="glass-card p-8 group hover:scale-105 transition-all duration-300"
                >
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-display text-2xl font-bold text-foreground mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground font-body leading-relaxed">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default WhyUs;
