
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Calendar, MapPin, Clock } from "lucide-react";
import { Link } from "react-router";

const EventAnnouncements = () => {
  const events = [
    {
      id: 1,
      title: "Tech Talk: AI in Modern Development",
      date: "July 15, 2025",
      time: "6:00 PM",
      location: "Auditorium A",
      description: "Join us for an exciting discussion about AI's role in software development.",
      type: "Workshop",
      emoji: "🤖"
    },
    {
      id: 2,
      title: "Hackathon 2025: Code for Change",
      date: "July 20-21, 2025",
      time: "9:00 AM",
      location: "Main Campus",
      description: "48-hour coding marathon to solve real-world problems. Prizes worth ₹50,000!",
      type: "Competition",
      emoji: "💻"
    },
    {
      id: 3,
      title: "Career Fair - Summer Internships",
      date: "July 25, 2025",
      time: "10:00 AM",
      location: "Sports Complex",
      description: "Meet recruiters from top tech companies. Bring your resumes!",
      type: "Career",
      emoji: "💼"
    },
    {
      id: 4,
      title: "Cultural Night: Celebrating Diversity",
      date: "July 30, 2025",
      time: "7:00 PM",
      location: "Open Air Theatre",
      description: "An evening of music, dance, and cultural performances by students.",
      type: "Cultural",
      emoji: "🎭"
    }
  ];

  const getTypeColor = (type: string) => {
    switch (type) {
      case "Workshop": return "border-primary bg-primary-20";
      case "Competition": return "border-secondary bg-secondary-20";
      case "Career": return "border-accent bg-accent-20";
      case "Cultural": return "border-destructive bg-destructive-20";
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
            <div className="w-8 h-8 neo-brutal-card bg-accent-20 border-accent flex items-center justify-center">
              <Calendar className="w-4 h-4" />
            </div>
            <h1 className="pixel-font text-2xl text-accent">EVENT ANNOUNCEMENTS</h1>
          </div>
        </div>

        <div className="mb-6">
          <p className="text-muted-foreground mb-4">Stay updated with the latest campus events and activities!</p>
          <div className="flex gap-2 flex-wrap">
            {["All", "Workshop", "Competition", "Career", "Cultural"].map((filter) => (
              <Button key={filter} variant="outline" className="neo-brutal-button text-xs">
                {filter}
              </Button>
            ))}
          </div>
        </div>

        <div className="grid gap-6">
          {events.map((event) => (
            <Card key={event.id} className={`neo-brutal-card ${getTypeColor(event.type)} hover:scale-[1.02] transition-transform`}>
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <div className="text-3xl">{event.emoji}</div>
                    <div>
                      <CardTitle className="text-lg mb-1">{event.title}</CardTitle>
                      <span className={`neo-brutal-card px-2 py-1 text-xs pixel-font ${getTypeColor(event.type)}`}>
                        {event.type}
                      </span>
                    </div>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent>
                <p className="text-muted-foreground mb-4">{event.description}</p>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-primary" />
                    <span className="text-sm">{event.date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-secondary" />
                    <span className="text-sm">{event.time}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-accent" />
                    <span className="text-sm">{event.location}</span>
                  </div>
                </div>
                
                <div className="flex gap-2">
                  <Button className="neo-brutal-button bg-primary text-black hover:bg-primary/90 border-primary">
                    📅 Add to Calendar
                  </Button>
                  <Button variant="outline" className="neo-brutal-button border-secondary text-secondary hover:bg-secondary hover:text-black">
                    📧 Get Notified
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

export default EventAnnouncements;
