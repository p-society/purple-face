import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router";
const FeaturesPage = () => {
  const featuresPage = [
    {
      icon: "💬",
      title: "Discussion Boards",
      description: "Engage in meaningful conversations about academics, projects, and campus life with your peers.",
      color: "border-primary-custom",
      
      link: "/discussion"
    },
    {
      icon: "❓",
      title: "Q&A Sections",
      description: "Get quick answers to your questions from seniors, peers, and subject experts.",
      color: "border-secondary-custom",
      
      link: "/qna"
    },
    {
      icon: "📅",
      title: "Event Announcements",
      description: "Stay updated with the latest campus events, workshops, and important announcements.",
      color: "border-accent-custom",
      
      link: "/events"
    },
    {
      icon: "📚",
      title: "Study Resources",
      description: "Access shared notes, previous year papers, and study materials contributed by the community.",
      color: "border-destructive-custom",
      
      link: "/resources"
    },
    {
      icon: "🤝",
      title: "Collaboration Hub",
      description: "Find project partners, form study groups, and collaborate on academic endeavors.",
      color: "border-primary-custom",
     
      link: "/collaboration"
    },
    {
      icon: "🏆",
      title: "Achievement Showcase",
      description: "Celebrate your wins, share achievements, and inspire fellow students.",
      color: "border-secondary-custom",
     
      link: "/achievements"
    }
  ];

  return (
    <section id="features" className="py-20 bg-transparent relative overflow-hidden">
      

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="pixel-font text-3xl md:text-4xl mb-4 text-primary ghibli-title">
            POWER-UP YOUR COLLEGE EXPERIENCE
          </h2>
          <p className="text-xl text-grey-200 max-w-2xl mx-auto">
            Level up your academic journey with features designed for the modern IIIT student
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuresPage.map((feature, index) => (
            <Link key={index} to={feature.link}>
              <Card className={`neo-brutal-card ${feature.color} hover:scale-105 transition-transform duration-200 ghibli-feature-card relative overflow-hidden cursor-pointer`} style={{ animationDelay: `${index * 0.2}s` }}>
                
                
                
                <CardHeader className="text-center">
                  <div className="text-4xl mb-4 avatar-float" style={{ animationDelay: `${index * 0.1}s` }}>
                    {feature.icon}
                  </div>
                  <CardTitle className="pixel-font text-lg">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-grey-400 text-center">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesPage;
