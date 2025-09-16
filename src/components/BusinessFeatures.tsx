import { motion } from "framer-motion";
import { Shield, Send, Zap, CheckCircle } from "lucide-react";

const features = [
  {
    icon: <Shield className="w-12 h-12" />,
    title: "Smart Compliant Routing",
    description: "While you purchase, Servana comes to follow-up on your customers and more revenue. Follow the customer from your experience."
  },
  {
    icon: <Send className="w-12 h-12" />,
    title: "Multi-Channel Reach",
    description: "Send invitations via SMS or WhatsApp, complimented by region requirements."
  },
  {
    icon: <Zap className="w-12 h-12" />,
    title: "Integrations Hub",
    description: "Sync our sales automation workflows, and manage customer data across all your favorite business platforms."
  },
  {
    icon: <CheckCircle className="w-12 h-12" />,
    title: "Automated Follow-Ups",
    description: "Servana creates tasks and reminders, updated status automatically, and closes the loop when the response is complete."
  }
];

const BusinessFeatures = () => {
  return (
    <section className="container px-4 py-24">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Unlock Your Business Potential
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            Practical automation that respects your customers and your workflow.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-sm border border-border/50 rounded-3xl p-8 hover:border-primary/30 transition-all duration-300"
            >
              <div className="w-20 h-20 bg-primary/10 rounded-2xl flex items-center justify-center mb-6">
                <div className="text-primary">
                  {feature.icon}
                </div>
              </div>
              <h3 className="text-2xl font-semibold mb-4">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed text-lg">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BusinessFeatures;