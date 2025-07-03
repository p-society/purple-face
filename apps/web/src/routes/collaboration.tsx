
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Users, Calendar, MapPin, User } from "lucide-react";
import { Link } from "react-router";

const CollaborationHub = () => {
  const projects = [
    {
      id: 1,
      title: "E-Commerce Web App",
      description: "Building a full-stack e-commerce platform using React and Node.js",
      skills: ["React", "Node.js", "MongoDB"],
      members: 3,
      maxMembers: 5,
      deadline: "Aug 15, 2025",
      type: "Academic Project",
      author: "Aman Raj",
      emoji: "🛒"
    },
    {
      id: 2,
      title: "AI Study Group",
      description: "Weekly meetups to discuss machine learning concepts and work on projects together",
      skills: ["Python", "TensorFlow", "Data Science"],
      members: 8,
      maxMembers: 12,
      deadline: "Ongoing",
      type: "Study Group",
      author: "UJSquared",
      emoji: "🧠"
    },
    {
      id: 3,
      title: "Mobile Game Development",
      description: "Creating a 2D mobile game using Unity. Looking for artists and developers!",
      skills: ["Unity", "C#", "Game Design"],
      members: 2,
      maxMembers: 6,
      deadline: "Sep 30, 2025",
      type: "Personal Project",
      author: "Burgerphilic",
      emoji: "🎮"
    },
    {
      id: 4,
      title: "Open Source Contribution Team",
      description: "Contributing to popular open source projects and learning together",
      skills: ["Git", "JavaScript", "Python"],
      members: 5,
      maxMembers: 10,
      deadline: "Ongoing",
      type: "Open Source",
      author: "MBxd",
      emoji: "🌟"
    }
  ];

  const getTypeColor = (type: string) => {
    switch (type) {
      case "Academic Project": return "border-primary bg-primary-20";
      case "Study Group": return "border-secondary bg-secondary-20";
      case "Personal Project": return "border-accent bg-accent-20";
      case "Open Source": return "border-destructive bg-destructive-20";
      default: return "border-muted bg-muted";
    }
  };

  return (
    <div className="min-h-screen bg-background p-4">
      <div className="container mx-auto max-w-4xl">
        <div className="flex items-center gap-4 mb-6">
          <Link to="/">
            <Button variant="outline" className="neo-brutal-button border-secondary text-secondary hover:bg-secondary hover:text-black">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Button>
          </Link>
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 neo-brutal-card bg-primary-20 border-primary flex items-center justify-center">
              <Users className="w-4 h-4" />
            </div>
            <h1 className="pixel-font text-2xl text-primary">COLLABORATION HUB</h1>
          </div>
        </div>

        <div className="flex justify-between items-center mb-6">
          <p className="text-muted-foreground">Find project partners and form study groups!</p>
          <Button className="neo-brutal-button bg-primary text-black hover:bg-primary/90 border-primary">
            🤝 Start Collaboration
          </Button>
        </div>

        <div className="flex gap-2 flex-wrap mb-6">
          {["All", "Academic Project", "Study Group", "Personal Project", "Open Source"].map((filter) => (
            <Button key={filter} variant="outline" className="neo-brutal-button text-xs">
              {filter}
            </Button>
          ))}
        </div>

        <div className="grid gap-6">
          {projects.map((project) => (
            <Card key={project.id} className={`neo-brutal-card ${getTypeColor(project.type)} hover:scale-[1.02] transition-transform`}>
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <div className="text-3xl">{project.emoji}</div>
                    <div >
                      <CardTitle className="text-lg mb-1">{project.title}</CardTitle>
                      <span className={`neo-brutal-card px-4 py-2 text-xs  pixel-font ${getTypeColor(project.type)}`}>
                        {project.type}
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Users className="w-4 h-4" />
                    <span>{project.members}/{project.maxMembers}</span>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent>
                <p className="text-muted-foreground mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.skills.map((skill) => (
                    <span key={skill} className="neo-brutal-card px-2 py-1 text-xs bg-accent-20 border-accent pixel-font">
                      {skill}
                    </span>
                  ))}
                </div>
                
                <div className="flex items-center justify-between mb-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <User className="w-4 h-4" />
                    <span>Created by <span className="text-primary">{project.author}</span></span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <span>Deadline: {project.deadline}</span>
                  </div>
                </div>
                
                <div className="flex gap-2">
                  <Button className="neo-brutal-button bg-secondary text-black hover:bg-secondary/90 border-secondary">
                    🚀 Join Project
                  </Button>
                  <Button variant="outline" className="neo-brutal-button border-primary text-primary hover:bg-primary hover:text-black">
                    📧 Contact Creator
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CollaborationHub;