import { Button } from "@/components/ui/button";
import { Link, NavLink } from "react-router";
import { ModeToggle } from "./mode-toggle";

const Header = () => {
  return (
    <header className="border-b-4 border-primary bg-background/95 backdrop-blur-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        
        <Link to="/" className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-secondary border-2 border-primary pixel-pulse"></div>
          <h1 className="pixel-font text-xl text-primary">IIITBuzz</h1>
        </Link>

        
        <nav className="hidden md:flex items-center space-x-6 text-lg">
          <a href="#features" className="text-foreground hover:text-primary transition-colors">Features</a>
          <a href="#hero" className="text-foreground hover:text-primary transition-colors">About</a>
          <a href="#footer" className="text-foreground hover:text-primary transition-colors">Contact</a>
          
          {/* 
          {[
            { to: "/", label: "Home" }
          ].map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              className={({ isActive }) => `hover:text-primary transition-colors ${isActive ? "font-bold text-primary" : "text-foreground"}`}
              end
            >
              {label}
            </NavLink>
          ))} 
          */} 
        </nav>

        
        <div className="flex items-center space-x-3">
          <ModeToggle />
          <Link to="/login">
            <Button variant="outline" className="neo-brutal-button border-secondary text-secondary hover:bg-secondary hover:text-black">
              Log In
            </Button>
          </Link>
          <Link to="/signup">
            <Button className="neo-brutal-button bg-primary text-black hover:bg-primary/90 border-primary">
              Sign Up
            </Button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
