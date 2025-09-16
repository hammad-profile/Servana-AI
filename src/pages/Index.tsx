import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import { PricingSection } from "@/components/pricing/PricingSection";
import HowItWorks from "@/components/HowItWorks";
import BusinessFeatures from "@/components/BusinessFeatures";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import dashboardImage from "@/assets/dashboard.png";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      
      {/* Hero Section */}
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative px-4 pt-32 pb-20 hero-gradient overflow-hidden"
      >
        <div className="container max-w-6xl mx-auto text-center relative z-10">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
          >
            Turn customers into public
            <br />
            proof. <span className="text-gradient">Automatically.</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed"
          >
            Servana requests, reminds, routes, and publishes reviews. All of them go public, 
            but the bad ones get resolved first.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 items-center justify-center"
          >
            <Button size="lg" className="button-gradient px-8">
              Start Free
            </Button>
            <Button size="lg" variant="link" className="text-foreground hover:text-primary">
              See Pricing
            </Button>
          </motion.div>
        </div>

        {/* Dashboard Preview */}
<div className="container max-w-6xl mx-auto mt-20 px-4">
  <img
    src={dashboardImage}
    alt="Review Ordering Dashboard"
    className="block w-full h-auto"
  />
</div>
      </motion.section>

      {/* How It Works Section */}
      <div id="how-it-works" className="bg-background">
        <HowItWorks />
      </div>

      {/* Business Features Section */}
      <div id="benefits" className="bg-background">
        <BusinessFeatures />
      </div>

      {/* Pricing Section */}
      <div id="pricing" className="bg-background">
        <PricingSection />
      </div>

      {/* FAQ Section */}
      <div id="faq" className="bg-background">
        <FAQ />
      </div>

      {/* CTA Section */}
      {/* CTA Section */}
<section className="px-4 py-24">
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    viewport={{ once: true }}
    className="hero-gradient rounded-3xl border border-white/10 shadow-2xl mx-auto max-w-6xl w-full text-center p-10 md:p-16"
  >
    <h2 className="text-5xl md:text-6xl font-bold mb-6">
      Simple Plans That Scale With Your Business.
    </h2>
    <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
      Ready to perfect your reputation and grow with confidence?
    </p>
    <Button size="lg" className="button-gradient px-8">
      Start Free
      <ArrowRight className="ml-2 w-4 h-4" />
    </Button>
  </motion.div>
</section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;
