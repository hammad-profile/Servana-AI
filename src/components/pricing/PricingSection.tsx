import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CardSpotlight } from "./CardSpotlight";



const LOGIN_URL = "https://servana-ai.vercel.app/login";

const plans = [
  {
    name: "Starter",
    price: "$49.99",
    period: "/Month",
    description: "For businesses just getting started.",
    features: [
      "Up to 100 review requests/month",
      "WhatsApp review requests",
      "Sentiment routing",
      "Google push"
    ],
    popular: false,
    buttonText: "Start Free",
     href: LOGIN_URL,
  },
  {
    name: "Pro",
    price: "$79.99",
    period: "/Month",
    description: "For small businesses looking momentum.",
    features: [
      "All Starter features",
      "Up to 300 review requests/month",
      "WhatsApp/SMS review requests",
      "Custom branding"
    ],
    popular: true,
    buttonText: "Start Free",
      href: LOGIN_URL,
  },
  {
    name: "Business",
    price: "$129.99",
    period: "/Month",
    description: "For large-volume businesses.",
    features: [
      "All Pro features",
      "Up to 800 review requests/month",
      "WhatsApp/SMS review requests",
      "Advanced Analytics"
    ],
    popular: false,
    buttonText: "Start Free",
     href: LOGIN_URL,
  }
];

const PricingTier = ({
  name,
  price,
  period,
  description,
  features,
  popular,
  buttonText,
  href, 
}: {
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  popular?: boolean;
  buttonText: string;
  href: string;
}) => (
  <CardSpotlight className={`h-full ${popular ? "border-primary" : "border-border/50"} border-2`}>
    <div className="relative h-full p-8 flex flex-col">
      {popular && (
        <span className="text-xs font-medium bg-primary/10 text-primary rounded-full px-3 py-1 w-fit mb-4">
          Most Popular
        </span>
      )}
      <h3 className="text-2xl font-semibold mb-2">{name}</h3>
      <div className="mb-4">
        <span className="text-4xl font-bold">{price}</span>
        <span className="text-muted-foreground">{period}</span>
      </div>
      <p className="text-muted-foreground mb-6">{description}</p>
      <ul className="space-y-3 mb-8 flex-grow">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center gap-3">
            <Check className="w-5 h-5 text-primary flex-shrink-0" />
            <span className="text-sm">{feature}</span>
          </li>
        ))}
      </ul>
      <Button asChild className="button-gradient w-full">
  <a href={href}> {buttonText}
     </a>
  
</Button>

    </div>
  </CardSpotlight>
);

export const PricingSection = () => {
  return (
    <section className="container px-4 py-24">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            Find The Perfect Plan
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-muted-foreground text-lg max-w-2xl mx-auto"
          >
            You'll receive an email with your login after checkout.<br />
            Manage your subscription anytime in the Customer Portal
          </motion.p>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto"
        >
          {plans.map((plan, index) => (
            <PricingTier
              key={plan.name}
              name={plan.name}
              price={plan.price}
              period={plan.period}
              description={plan.description}
              features={plan.features}
              popular={plan.popular}
              buttonText={plan.buttonText}
              href={plan.href}
              
              
            />
          ))}
        </motion.div>
    </section>
  );
};