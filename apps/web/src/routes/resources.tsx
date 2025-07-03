
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Book, ExternalLink, Download, Star } from "lucide-react";
import { Link } from "react-router";

const StudyResources = () => {
  const [resources] = useState([
    {
      id: 1,
      title: "Data Structures and Algorithms Cheat Sheet",
      description: "Comprehensive guide covering all major DSA concepts with examples",
      type: "PDF",
      subject: "Computer Science",
      rating: 4.8,
      downloads: 245,
      link: "#",
      author: "Alex Chen",
      emoji: "📊"
    },
    {
      id: 2,
      title: "Database Design Tutorial Series",
      description: "Step-by-step video tutorials on database normalization and design",
      type: "Video",
      subject: "Database",
      rating: 4.9,
      downloads: 189,
      link: "#",
      author: "Sarah Kumar",
      emoji: "🗄️"
    },
    {
      id: 3,
      title: "Previous Year Question Papers - OS",
      description: "Collection of operating systems exam papers from 2020-2024",
      type: "PDF",
      subject: "Operating Systems",
      rating: 4.7,
      downloads: 312,
      link: "#",
      author: "Mike Rodriguez",
      emoji: "⚙️"
    },
    {
      id: 4,
      title: "Machine Learning Practical Notebooks",
      description: "Jupyter notebooks with hands-on ML exercises and solutions",
      type: "Notebook",
      subject: "Machine Learning",
      rating: 4.6,
      downloads: 156,
      link: "#",
      author: "Priya Patel",
      emoji: "🤖"
    },
    {
      id: 5,
      title: "Web Development Bootcamp Resources",
      description: "HTML, CSS, JavaScript, React - everything you need to get started",
      type: "Link Collection",
      subject: "Web Development",
      rating: 4.8,
      downloads: 287,
      link: "#",
      author: "David Kim",
      emoji: "🌐"
    }
  ]);

  const getTypeColor = (type: string) => {
    switch (type) {
      case "PDF": return "border-primary bg-primary-20";
      case "Video": return "border-secondary bg-secondary-20";
      case "Notebook": return "border-accent bg-accent-20";
      case "Link Collection": return "border-destructive bg-destructive-20";
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
            <div className="w-8 h-8 neo-brutal-card bg-destructive-20 border-destructive flex items-center justify-center">
              <Book className="w-4 h-4" />
            </div>
            <h1 className="pixel-font text-2xl text-destructive">STUDY RESOURCES</h1>
          </div>
        </div>

        <div className="flex justify-between items-center mb-6">
          <p className="text-muted-foreground">Shared notes, papers, and study materials from the community</p>
          <Button className="neo-brutal-button bg-destructive text-white hover:bg-destructive/90 border-destructive">
            📚 Share Resource
          </Button>
        </div>

        <div className="flex gap-2 flex-wrap mb-6">
          {["All", "Computer Science", "Database", "Operating Systems", "Machine Learning", "Web Development"].map((filter) => (
            <Button key={filter} variant="outline" className="neo-brutal-button text-xs">
              {filter}
            </Button>
          ))}
        </div>

        <div className="grid gap-4">
          {resources.map((resource) => (
            <Card key={resource.id} className={`neo-brutal-card ${getTypeColor(resource.type)} hover:scale-[1.01] transition-transform`}>
              <CardContent className="p-6">
                <div className="flex gap-4">
                  <div className="text-4xl">{resource.emoji}</div>
                  
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <h3 className="text-lg font-semibold mb-1">{resource.title}</h3>
                        <p className="text-sm text-muted-foreground mb-2">{resource.description}</p>
                      </div>
                      <span className={`neo-brutal-card px-2 py-1 text-xs pixel-font ${getTypeColor(resource.type)}`}>
                        {resource.type}
                      </span>
                    </div>
                    
                    <div className="flex items-center gap-4 mb-3 text-sm text-muted-foreground">
                      <span>Subject: <span className="text-primary">{resource.subject}</span></span>
                      <span>By: <span className="text-secondary">{resource.author}</span></span>
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        <span>{resource.rating}</span>
                      </div>
                      <span>{resource.downloads} downloads</span>
                    </div>
                    
                    <div className="flex gap-2">
                      <Button className="neo-brutal-button bg-primary text-black hover:bg-primary/90 border-primary">
                        <Download className="w-4 h-4 mr-2" />
                        Download
                      </Button>
                      <Button variant="outline" className="neo-brutal-button border-secondary text-secondary hover:bg-secondary hover:text-black">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        View
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StudyResources;