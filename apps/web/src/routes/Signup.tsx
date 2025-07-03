
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ArrowLeft, User } from "lucide-react";
import { Link } from "react-router";

const Signup = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    rollNumber: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords don't match!");
      return;
    }
    console.log("Signup attempt:", formData);
    // Add signup logic here
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
              <User className="w-6 h-6" />
              SIGN UP
            </CardTitle>
          </CardHeader>
          
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name" className="pixel-font text-sm text-foreground">
                  FULL NAME
                </Label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  className="border-4 border-muted focus:border-primary bg-background"
                  placeholder="Your Name"
                  required
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="rollNumber" className="pixel-font text-sm text-foreground">
                  ROLL NUMBER
                </Label>
                <Input
                  id="rollNumber"
                  name="rollNumber"
                  type="text"
                  value={formData.rollNumber}
                  onChange={handleChange}
                  className="border-4 border-muted focus:border-primary bg-background"
                  placeholder="BXXXXXX"
                  required
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="email" className="pixel-font text-sm text-foreground">
                  EMAIL
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
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
                  name="password"
                  type="password"
                  value={formData.password}
                  onChange={handleChange}
                  className="border-4 border-muted focus:border-primary bg-background"
                  placeholder="••••••••"
                  required
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="confirmPassword" className="pixel-font text-sm text-foreground">
                  CONFIRM PASSWORD
                </Label>
                <Input
                  id="confirmPassword"
                  name="confirmPassword"
                  type="password"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  className="border-4 border-muted focus:border-primary bg-background"
                  placeholder="••••••••"
                  required
                />
              </div>
              
              <Button 
                type="submit"
                className="w-full neo-brutal-button bg-primary text-black hover:bg-primary/90 border-primary py-3"
              >
                <User className="w-4 h-4 mr-2" />
                CREATE ACCOUNT
              </Button>
            </form>
            
            <div className="mt-6 text-center">
              <p className="text-sm text-muted-foreground">
                Already have an account?{" "}
                <Link to="/login" className="text-primary hover:underline pixel-font">
                  LOGIN
                </Link>
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Signup;