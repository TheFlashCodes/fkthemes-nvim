import { Github, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="py-12 px-6 border-t border-border">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-2">
              fkthemes.nvim
            </h3>
            <p className="text-muted-foreground text-sm">
              Made with <Heart className="w-4 h-4 inline text-destructive" /> by{" "}
              <a
                href="https://github.com/flashcodes-themayankjha"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:text-primary-glow transition-colors"
              >
                flashcodes-themayankjha
              </a>
            </p>
          </div>

          <div className="flex items-center gap-4">
            <Button
              variant="outline"
              size="sm"
              className="border-primary/30 hover:border-primary hover:bg-primary/10"
              asChild
            >
              <a
                href="https://github.com/flashcodes-themayankjha/fkthemes.nvim"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="w-4 h-4 mr-2" />
                GitHub
              </a>
            </Button>
            <Button
              variant="outline"
              size="sm"
              className="border-primary/30 hover:border-primary hover:bg-primary/10"
              asChild
            >
              <a
                href="https://github.com/flashcodes-themayankjha/fkthemes.nvim/issues"
                target="_blank"
                rel="noopener noreferrer"
              >
                Report Issue
              </a>
            </Button>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border text-center">
          <p className="text-sm text-muted-foreground">
            Part of the{" "}
            <a
              href="https://github.com/TheFlashCodes/FKvim"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:text-primary-glow transition-colors"
            >
              FkVim Ecosystem
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
