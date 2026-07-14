import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { toast } from "sonner";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const services = ["Website", "App", "Ecommerce", "Other"];

const GetInTouch = () => {
  const [form, setForm] = useState({ name: "", email: "", phone: "", service: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const { name, email, phone, service, message } = form;
    if (!name.trim() || !email.trim() || !message.trim()) {
      toast.error("Please fill in all required fields.");
      return;
    }
    
    const emailSubject = encodeURIComponent(`New Contact Form Submission from ${name.trim()}`);
    const emailBody = encodeURIComponent(
      `Name: ${name.trim()}\nEmail: ${email.trim()}\nPhone: ${phone.trim()}\nService: ${service}\n\nMessage: ${message.trim()}`
    );
    
    const gmailLink = `mailto:internetifyio@gmail.com?subject=${emailSubject}&body=${emailBody}`;
    window.open(gmailLink, '_blank');
    
    // Show success message after delay to allow user to send email
    setTimeout(() => {
      toast.success("Mail sent successfully! Will reach you soon!");
    }, 3000);
  };

  const inputClass =
    "w-full bg-muted/50 border border-border rounded-xl px-4 py-3 text-foreground placeholder:text-muted-foreground font-body text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all duration-200";

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main>
        {/* Hero Section */}
        <section className="relative py-24 md:py-32 px-6">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_hsl(250_80%_62%_/_0.04)_0%,_transparent_60%)]" />
          <div className="max-w-4xl mx-auto relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <h1 className="font-display text-4xl md:text-5xl font-bold tracking-tight mb-6">
                <span className="text-gradient">Get In Touch</span>
              </h1>
              <p className="text-muted-foreground font-body text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
                Ready to start your next project? Let's discuss how we can help bring your ideas to life.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="relative py-24 md:py-32 px-6">
          <div className="max-w-2xl mx-auto relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center mb-16"
            >
              <h2 className="section-heading">Send us a message</h2>
              <p className="text-muted-foreground font-body text-lg max-w-lg mx-auto mb-8">
                Fill out the form below and we'll get back to you as soon as possible.
              </p>
            </motion.div>

            <motion.form
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              onSubmit={handleSubmit}
              className="glass-card p-8 space-y-6"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className={inputClass}
                    placeholder="Your name"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className={inputClass}
                    placeholder="your@email.com"
                    required
                  />
                </div>
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                  Phone
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  className={inputClass}
                  placeholder="+91 98765 43210"
                />
              </div>

              <div>
                <label htmlFor="service" className="block text-sm font-medium text-foreground mb-2">
                  Service
                </label>
                <select
                  id="service"
                  name="service"
                  value={form.service}
                  onChange={(e) => setForm({ ...form, service: e.target.value })}
                  className={inputClass}
                >
                  <option value="">Select a service</option>
                  {services.map((service) => (
                    <option key={service} value={service}>
                      {service}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className={inputClass}
                  rows={5}
                  placeholder="Tell us about your project..."
                  maxLength={1000}
                  required
                />
              </div>

              <button type="submit" className="glow-button w-full flex items-center justify-center gap-2 text-lg font-display">
                <Send className="w-5 h-5" />
                Send Message
              </button>
            </motion.form>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="mt-16 space-y-6"
            >
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="flex items-start gap-3">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Phone</h3>
                    <a 
                      href="tel:+918667787621" 
                      className="text-muted-foreground text-sm hover:text-primary transition-colors"
                    >
                      +91 8667787621
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Email</h3>
                    <a 
                      href="mailto:internetifyio@gmail.com" 
                      className="text-muted-foreground text-sm hover:text-primary transition-colors"
                    >
                      internetifyio@gmail.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Location</h3>
                    <p className="text-muted-foreground text-sm">India</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default GetInTouch;
