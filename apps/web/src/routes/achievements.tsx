
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Trophy, Star, ThumbsUp, Calendar } from "lucide-react";
import { Link } from "react-router";

const AchievementShowcase = () => {
  const achievements = [
    {
      id: 1,
      title: "1st Prize-National Coding Championship",
      description: "Won the prestigious national coding competition with a perfect score in algorithmic problem solving!",
      author: "Chirantan Behura",
      date: "June 25, 2025",
      category: "Competition",
      likes: 45,
      image: "🏆",
      tags: ["Coding", "Algorithm", "Championship"]
    },
    {
      id: 2,
      title: "Published Research Paper on AI",
      description: "My paper on 'Deep Learning Applications in Healthcare' got accepted in IEEE conference!",
      author: "Sipra Mohanty",
      date: "June 20, 2025",
      category: "Research",
      likes: 38,
      image: "📄",
      tags: ["AI", "Research", "Healthcare"]
    },
    {
      id: 3,
      title: "Secured Internship at Google",
      description: "Excited to announce my summer internship at Google as a Software Development Engineer!",
      author: "MBxd",
      date: "June 18, 2025",
      category: "Career",
      likes: 67,
      image: "💼",
      tags: ["Internship", "Google", "SDE"]
    },
    {
      id: 4,
      title: "Hackathon Winner - Smart City Solutions",
      description: "Our team developed an IoT-based traffic management system and won the 48-hour hackathon!",
      author: "Team Cypher Shades",
      date: "June 15, 2025",
      category: "Hackathon",
      likes: 29,
      image: "💡",
      tags: ["IoT", "Smart City", "Innovation"]
    },
    {
      id: 5,
      title: "Open Source Contribution Milestone",
      description: "Reached 1000+ contributions to open source projects on GitHub this year!",
      author: "Aman Raj",
      date: "June 12, 2025",
      category: "Open Source",
      likes: 42,
      image: "🌟",
      tags: ["GitHub", "Open Source", "Contribution"]
    }
  ];

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Competition": return "border-primary bg-primary-20";
      case "Research": return "border-secondary bg-secondary-20";
      case "Career": return "border-accent bg-accent-20";
      case "Hackathon": return "border-destructive bg-destructive-20";
      case "Open Source": return "border-muted bg-muted";
      default: return "border-muted bg-muted";
    }
  };

  return (
    <div className="min-h-screen bg-transparent p-4">
      <div className="container mx-auto max-w-4xl">
        <div className="flex items-center gap-4 mb-6">
          <Link to="/">
            <Button variant="outline" className="neo-brutal-button border-secondary text-secondary hover:bg-secondary hover:text-black">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Button>
          </Link>
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 neo-brutal-card bg-secondary-20 border-secondary flex items-center justify-center">
              <Trophy className="w-4 h-4" />
            </div>
            <h1 className="pixel-font text-2xl text-secondary">ACHIEVEMENT SHOWCASE</h1>
          </div>
        </div>

        <div className="flex justify-between items-center mb-6">
          <p className="text-muted-foreground">Celebrate wins and inspire fellow students!</p>
          <Button className="neo-brutal-button bg-secondary text-black hover:bg-secondary/90 border-secondary">
            🏆 Share Achievement
          </Button>
        </div>

        <div className="flex gap-2 flex-wrap mb-6">
          {["All", "Competition", "Research", "Career", "Hackathon", "Open Source"].map((filter) => (
            <Button key={filter} variant="outline" className="neo-brutal-button text-xs">
              {filter}
            </Button>
          ))}
        </div>

        <div className="grid gap-6">
          {achievements.map((achievement) => (
            <Card key={achievement.id} className={`neo-brutal-card ${getCategoryColor(achievement.category)} hover:scale-[1.02] transition-transform`}>
              <CardHeader>
                <div className="flex items-start gap-4">
                  <div className="text-4xl">{achievement.image}</div>
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-2">
                      <CardTitle className="text-lg">{achievement.title}</CardTitle>
                      <span className={`neo-brutal-card px-2 py-1 text-xs pixel-font ${getCategoryColor(achievement.category)}`}>
                        {achievement.category}
                      </span>
                    </div>
                    <p className="text-muted-foreground mb-3">{achievement.description}</p>
                    
                    <div className="flex flex-wrap gap-2 mb-3">
                      {achievement.tags.map((tag) => (
                        <span key={tag} className="neo-brutal-card px-2 py-1 text-xs bg-accent-20 border-accent pixel-font">
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    <div className="flex items-center justify-between text-sm text-muted-foreground ">
                      <div className="flex items-center gap-4 py-4">
                        <span>By <span className="text-primary">{achievement.author}</span></span>
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          <span>{achievement.date}</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Button variant="ghost" className="p-1 h-auto">
                          <ThumbsUp className="w-4 h-4" />
                        </Button>
                        <span className="pixel-font text-xs">{achievement.likes}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AchievementShowcase;