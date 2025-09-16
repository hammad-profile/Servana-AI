import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqItems = [
  {
    question: "Can I control where reviews are posted?",
    answer: "Absolutely, you decide which platforms to push to."
  },
  {
    question: "Can I switch plans later?",
    answer: "Yes, instantly in the Customer Portal."
  },
  {
    question: "Do unused review requests roll over?",
    answer: "No, unused review requests don't roll over to the next month. Each plan includes a monthly allocation."
  },
  {
    question: "Will Servana work with my CRM?",
    answer: "Yes, you can integrate it via n8n or API. "
  },
  {
    question: "Can I control where reviews are posted?",
    answer: "Absolutely, you decide which platforms to push to."
  },
  {
    question: "Do I need technical skills?",
    answer: "No, you’ll be up and running in minutes."
  },
  {
    question: "Is my data secure?",
    answer: "Yes, we use encrypted, secure storage via Supabase."
  }
];

const FAQ = () => {
  return (
    <section className="container px-4 py-24">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-muted-foreground text-lg">
            Still have questions? We've got answers.
          </p>
        </div>
        
        <div className="border border-primary/20 rounded-2xl p-8 bg-card/50 backdrop-blur-sm">
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqItems.map((item, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="border-b border-border/50 last:border-b-0"
              >
                <AccordionTrigger className="text-left hover:no-underline py-6">
                  <span className="text-lg font-medium">{item.question}</span>
                </AccordionTrigger>
                <AccordionContent className="pb-6">
                  <p className="text-muted-foreground">{item.answer}</p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;