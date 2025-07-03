import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Send, MessageSquare } from "lucide-react";
import { Link } from "react-router";

const DiscussionBoard = () => {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([
    { id: 1, user: "UJSquared", message: "Hey everyone! Anyone else struggling with the algorithms assignment?", time: "2:30 PM", avatar: "/images/avatar1.png" },
    { id: 2, user: "Kalra", message: "Yes! The dynamic programming part is really confusing 😅", time: "2:32 PM", avatar: "/images/avatar2.png" },
    { id: 3, user: "Aman", message: "I found this great resource that helped me understand it better. Want me to share?", time: "2:35 PM", avatar: "/images/avatar3.png" },
    { id: 4, user: "MBxd", message: "That would be amazing! Thanks Aman 🙏", time: "2:36 PM", avatar: "/images/avatar4.png" }
  ]);

  const handleSendMessage = () => {
    if (message.trim()) {
      const newMessage = {
        id: messages.length + 1,
        user: "You", 
        message: message,
        time: new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'}),
        avatar: "✨"
      };
      setMessages([...messages, newMessage]);
      setMessage("");
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
              <MessageSquare className="w-4 h-4" />
            </div>
            <h1 className="pixel-font text-2xl text-primary">DISCUSSION BOARD</h1>
          </div>
        </div>

        <Card className="neo-brutal-card border-primary h-[600px] flex flex-col">
          <CardHeader className="border-b-4 border-primary">
            <CardTitle className="pixel-font text-lg flex items-center gap-2">
              💬 General Discussion
              <span className="text-sm text-muted-foreground">• {messages.length} messages</span>
            </CardTitle>
          </CardHeader>
          
          <CardContent className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((msg) => (
              <div key={msg.id} className="flex gap-3">
                <div className="w-10 h-10 neo-brutal-card bg-secondary-20 border-secondary flex items-center justify-center flex-shrink-0 overflow-hidden rounded">
                  {/* Image avatar */}
                  <img
                    src={msg.avatar}
                    alt={msg.user}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.currentTarget.src = "/images/fallback.png";
                    }}
                  />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="pixel-font text-sm text-primary">{msg.user}</span>
                    <span className="text-xs text-muted-foreground">{msg.time}</span>
                  </div>
                  <div className="neo-brutal-card px-4 py-2 bg-card border-2 border-muted">
                    <p className="text-sm">{msg.message}</p>
                  </div>
                </div>
              </div>
            ))}
          </CardContent>

          
          <div className="border-t-4 border-primary p-4">
            <div className="flex gap-2">
              <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                placeholder="Type your message..."
                className="flex-1 p-3 border-4 border-muted bg-background focus:border-primary outline-none"
              />
              <Button 
                onClick={handleSendMessage}
                className="neo-brutal-button bg-primary text-black hover:bg-primary/90 border-primary px-6"
              >
                <Send className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default DiscussionBoard;