
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ArrowLeft, LogIn } from "lucide-react";
import { Link } from "react-router";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Login attempt:", { email, password });
    // Add login logic here
  };

  return (
    <div className="min-h-screen bg-transparent flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="flex items-center gap-4 mb-6">
          <Link to="/">
            <Button variant="outline" className="neo-brutal-button border-secondary text-secondary hover:bg-secondary hover:text-black">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Button>
          </Link>
        </div>

        <Card className="neo-brutal-card border-primary">
          <CardHeader className="text-center">
            <div className="flex items-center justify-center gap-2 mb-4">
              <div className="w-8 h-8 bg-secondary border-2 border-primary pixel-pulse"></div>
              <h1 className="pixel-font text-xl text-primary">IIITBuzz</h1>
            </div>
            <CardTitle className="pixel-font text-2xl text-primary flex items-center justify-center gap-2">
              <LogIn className="w-6 h-6" />
              LOGIN
            </CardTitle>
          </CardHeader>
          
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="email" className="pixel-font text-sm text-foreground">
                  EMAIL
                </Label>
                <Input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="border-4 border-muted focus:border-primary bg-background"
                  placeholder="your@iiit-bh.ac.in"
                  required
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="password" className="pixel-font text-sm text-foreground">
                  PASSWORD
                </Label>
                <Input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="border-4 border-muted focus:border-primary bg-background"
                  placeholder="••••••••"
                  required
                />
              </div>
              
              <Button 
                type="submit"
                className="w-full neo-brutal-button bg-primary text-black hover:bg-primary/90 border-primary py-3"
              >
                <LogIn className="w-4 h-4 mr-2" />
                LOGIN
              </Button>
            </form>
            
            <div className="mt-6 text-center">
              <p className="text-sm text-muted-foreground">
                Don't have an account?{" "}
                <Link to="/signup" className="text-primary hover:underline pixel-font">
                  SIGN UP
                </Link>
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Login;
