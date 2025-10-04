import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, Github } from "lucide-react";
import FkIcon from "@/assets/FK-icon.png";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isDocsPage = location.pathname === "/docs";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
      setIsMobileMenuOpen(false);
    }
  };

  const navItems = [
    { label: "Home", id: "home", path: "/" },
    { label: "Features", id: "features", path: "/" },
    { label: "Demo", id: "demo", path: "/" },
    { label: "Installation", id: "installation", path: "/" },
    { label: "Configuration", id: "configuration", path: "/" },
    { label: "Commands", id: "commands", path: "/" },
    { label: "Docs", id: "docs", path: "/docs" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/80 backdrop-blur-lg border-b border-border shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <img src={FkIcon} alt="Fkthemes Logo" className="h-8 w-8" />
            <span className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              fkthemes.nvim
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            {navItems.map((item) =>
              item.path === "/docs" ? (
                <Link
                  key={item.id}
                  to={item.path}
                  className={`text-sm font-medium transition-colors hover:text-primary ${
                    isDocsPage ? "text-primary" : "text-muted-foreground"
                  }`}
                >
                  {item.label}
                </Link>
              ) : (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
                >
                  {item.label}
                </button>
              )
            )}
            <a
              href="https://github.com/flashcodes-themayankjha/fkthemes.nvim"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button size="sm" variant="outline" className="gap-2 transition-colors hover:bg-primary hover:text-primary-foreground">
                <Github className="w-4 h-4" />
                GitHub
              </Button>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-3">
            {navItems.map((item) =>
              item.path === "/docs" ? (
                <Link
                  key={item.id}
                  to={item.path}
                  className={`block text-sm font-medium transition-colors hover:text-primary ${
                    isDocsPage ? "text-primary" : "text-muted-foreground"
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ) : (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="block w-full text-left text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
                >
                  {item.label}
                </button>
              )
            )}
            <a
              href="https://github.com/flashcodes-themayankjha/fkthemes.nvim"
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <Button size="sm" variant="outline" className="gap-2 w-full transition-colors hover:bg-primary hover:text-primary-foreground">
                <Github className="w-4 h-4" />
                GitHub
              </Button>
            </a>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
