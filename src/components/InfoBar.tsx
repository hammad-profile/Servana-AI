// If lucide-react is in your project, keep the import.
// If not, delete the Megaphone import + the <Megaphone /> line below.
import { Megaphone } from "lucide-react";

export default function InfoBar() {
  return (
    <div className="px-4">
      <div className="mx-auto max-w-5xl rounded-xl border bg-card p-4 md:p-5 flex items-start gap-3 text-sm md:text-base">
        <Megaphone className="h-5 w-5 mt-0.5 text-primary" aria-hidden="true" />
        <p className="leading-relaxed">
          <strong>Servana AI</strong> is built for <strong>Restaurants</strong> and
          <strong> Home Services</strong> companies. <br className="hidden sm:block" />
          We are integrated with <strong>Square POS</strong> and <strong>Jobber</strong>,
          and a lot of other integrations are coming soon.
        </p>
      </div>
    </div>
  );
}
