import { motion } from "framer-motion";
import { MessageSquare, Users, BarChart3 } from "lucide-react";

const features = [
  {
    icon: <MessageSquare className="w-8 h-8" />,
    title: "Invite Customers Effortlessly",
    description: "Send review requests via email, SMS, or WhatsApp using after a job. In-store visits or follow-ups."
  },
  {
    icon: <BarChart3 className="w-8 h-8" />,
    title: "Route By Sentiment",
    description: "Customer feedback is automatically sorted so you right-size what they say, understanding their satisfaction levels."
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: "Publish & Grow",
    description: "Feedback moves through a workflow that helps you respond, influence and leverage your customer experience."
  }
];

const HowItWorks = () => {
  return (
    <section className="container px-4 py-24">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Everything You Need To Turn Reviews Into Revenue
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            From collecting customer feedback to publishing business reviews, Servana handles the heavy lifting so you can focus on your business.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-8 text-center hover:border-primary/30 transition-colors"
            >
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <div className="text-primary">
                  {feature.icon}
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;