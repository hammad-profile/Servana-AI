import { useState } from "react";
import { supabase } from "@/lib/supabase";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function WaitlistSection() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    const form = e.currentTarget;
    const data = new FormData(form);

    const businessName = (data.get("businessName") || "").toString().trim();
    const email       = (data.get("email") || "").toString().trim();
    const platform    = (data.get("platform") || "").toString().trim();
    const phone       = (data.get("phone") || "").toString().trim();
    const message     = (data.get("message") || "").toString().trim();

    if (!businessName || !email) {
      setStatus("error");
      setErrorMsg("Please enter Business Name and Email.");
      return;
    }

    const { error } = await supabase.from("waitlist").insert([
      { business_name: businessName, email, platform, phone, message },
    ]);

    if (error) {
      // Friendly message for duplicate email (unique constraint)
      if ((error as any).code === "23505" || /duplicate key|unique/i.test(error.message)) {
        setErrorMsg("That email is already on the list 👍");
      } else {
        setErrorMsg("Something went wrong. Please try again.");
      }
      setStatus("error");
      return;
    }

    setStatus("success");
    form.reset();
  }

  return (
    <section id="waitlist" className="px-4 py-24">
      <div className="mx-auto w-full max-w-3xl rounded-2xl border bg-card p-8 shadow md:p-10">
        <div className="text-center space-y-2">
          <h2 className="text-3xl font-bold tracking-tight">Not using Square POS or Jobber?</h2>
          <p className="text-muted-foreground">
            Join the waitlist below, and we’ll update you as soon as your preferred
            platform is integrated into Servana AI.
          </p>
        </div>

        {/* Show the form until success; then hide it and show success box */}
        {status !== "success" ? (
          <form onSubmit={handleSubmit} className="mt-8 grid gap-6" noValidate>
            <div className="grid gap-2">
              <Label htmlFor="businessName">Business Name</Label>
              <Input id="businessName" name="businessName" placeholder="Acme Barbers" required />
            </div>

            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" name="email" type="email" placeholder="you@company.com" required />
            </div>

            <div className="grid gap-2">
              <Label htmlFor="platform">Platform you’re using</Label>
              <Input id="platform" name="platform" placeholder="e.g., Toast, Lightspeed, Clover…"  required />
            </div>

            <div className="grid gap-2">
              <Label htmlFor="phone">Phone (optional)</Label>
              <Input id="phone" name="phone" type="tel" placeholder="+1 555 123 4567" />
            </div>

            <div className="grid gap-2">
              <Label htmlFor="message">Message (optional)</Label>
              <textarea
                id="message"
                name="message"
                placeholder="Tell us anything we should know…"
                className="min-h-28 w-full rounded-md border bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              />
            </div>

            {/* FULL-WIDTH submit button */}
            <Button type="submit" className="w-full px-8" disabled={status === "loading"}>
              {status === "loading" ? "Saving…" : "Join the waitlist"}
            </Button>

            {status === "error" && (
              <p className="text-sm text-red-600 text-center" aria-live="polite">
                {errorMsg}
              </p>
            )}
          </form>
        ) : (
          <div className="mt-8 rounded-md border border-green-500/30 bg-green-500/10 p-6 text-center">
            <p className="text-base font-medium">✅ You’re on the list!</p>
            <p className="text-sm text-muted-foreground mt-1">
              We’ll email you as soon as your platform is ready.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
