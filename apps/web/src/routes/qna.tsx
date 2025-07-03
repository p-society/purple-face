
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, HelpCircle, ThumbsUp, MessageCircle } from "lucide-react";
import { Link } from "react-router";

const QnAPage = () => {
  const [questions] = useState([
    {
      id: 1,
      question: "How do I implement binary search in C++?",
      author: "Aman Raj",
      time: "2 hours ago",
      upvotes: 12,
      answers: 3,
      tags: ["C++", "Algorithms"],
      avatar: "/images/avatar1.png"
    },
    {
      id: 2,
      question: "What's the difference between pass by value and pass by reference?",
      author: "Burgerphilic",
      time: "4 hours ago",
      upvotes: 8,
      answers: 5,
      tags: ["Programming", "Fundamentals"],
      avatar: "/images/avatar3.png"
    },
    {
      id: 3,
      question: "Best practices for database normalization?",
      author: "Tirtha",
      time: "1 day ago",
      upvotes: 15,
      answers: 7,
      tags: ["Database", "SQL"],
      avatar: "/images/avatar2.png"
    }
  ]);

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
            <div className="w-8 h-8 neo-brutal-card bg-secondary-20 border-secondary flex items-center justify-center">
              <HelpCircle className="w-4 h-4" />
            </div>
            <h1 className="pixel-font text-2xl text-secondary">Q&A SECTION</h1>
          </div>
        </div>

        <div className="flex justify-between items-center mb-6">
          <p className="text-muted-foreground">Get answers to your burning questions!</p>
          <Button className="neo-brutal-button bg-secondary text-black hover:bg-secondary/90 border-secondary">
            ❓ Ask Question
          </Button>
        </div>

        <div className="space-y-4">
          {questions.map((q) => (
            <Card key={q.id} className="neo-brutal-card border-secondary hover:scale-[1.02] transition-transform">
              <CardContent className="p-6">
                <div className="flex gap-4">
                  
                  <div className="flex flex-col items-center gap-2">
                    
                    <div className="w-12 h-12 neo-brutal-card bg-accent-20 border-accent flex items-center justify-center overflow-hidden rounded">
                      <img
                        src={q.avatar}
                        alt={q.author}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          e.currentTarget.src = "/images/fallback.png"; 
                        }}
                      />
                    </div>
              
                    <div className="flex flex-col items-center gap-1 py-2">
                      <Button variant="ghost" className="p-1 h-auto">
                        <ThumbsUp className="w-4 h-4" />
                      </Button>
                      <span className="pixel-font text-xs text-primary">{q.upvotes}</span>
                    </div>
                  </div>
              
                  {/* Question body */}
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold mb-2 text-foreground hover:text-primary cursor-pointer">
                      {q.question}
                    </h3>
              
                    <div className="flex flex-wrap gap-2 mb-3">
                      {q.tags.map((tag) => (
                        <span key={tag} className="neo-brutal-card px-4 py-2 text-xs bg-destructive-20 border-destructive pixel-font">
                          {tag}
                        </span>
                      ))}
                    </div>
              
                    <div className="flex items-center justify-between text-sm text-muted-foreground py-4">
                      <span>
                        Asked by <span className="text-secondary">{q.author}</span> • {q.time}
                      </span>
                      <div className="flex items-center gap-4">
                        <div className="flex items-center gap-1">
                          <MessageCircle className="w-4 h-4" />
                          <span>{q.answers} answers</span>
                        </div>
                      </div>
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

export default QnAPage;