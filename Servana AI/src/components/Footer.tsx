import logo from "@/assets/logo.png";
const Footer = () => {
  return (
    <footer className="bg-background border-t border-white/10 text-foreground">
      <div className="container px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <img src={logo} alt="Logo" className="h-8 w-auto object-contain" />
              {/* <span className="font-bold text-xl">servana</span> */}
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Sections</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#how-it-works" className="text-muted-foreground hover:text-foreground transition-colors">
                  How It Works
                </a>
              </li>
              <li>
                <a href="#benefits" className="text-muted-foreground hover:text-foreground transition-colors">
                  Benefits
                </a>
              </li>
              <li>
                <a href="#pricing" className="text-muted-foreground hover:text-foreground transition-colors">
                  Pricing
                </a>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Information</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                  FAQ
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border/20 mt-12 pt-8">
          <p className="text-muted-foreground text-sm">
            © 2025 Servana AI - Dream Beyond. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;