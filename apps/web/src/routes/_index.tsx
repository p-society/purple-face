import type { Route } from "./+types/_index";
import { Button } from "../components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "../components/ui/card";
import { Link } from "react-router-dom";

/**
 * TITLE_TEXT is an ASCII art banner displayed at the top of the home page.
 * It visually represents the application's branding in a stylized format.
 */
const TITLE_TEXT = `

 _______          ______          ______          ______  
/       \        /      \        /      \        /      \ 
$$$$$$$  |      /$$$$$$  |      /$$$$$$  |      /$$$$$$  |
$$ |__$$ |      $$ \__$$/       $$ |  $$ |      $$ |  $$/ 
$$    $$/       $$      \       $$ |  $$ |      $$ |      
$$$$$$$/         $$$$$$  |      $$ |  $$ |      $$ |   __ 
$$ |            /  \__$$ |      $$ \__$$ |      $$ \__/  |
$$ |            $$    $$/       $$    $$/       $$    $$/ 
$$/              $$$$$$/         $$$$$$/         $$$$$$/  
                                                          
                            
                                
`;

// Feature list for landing page cards
const features = [
	{ icon: "💬", title: "Discussion Boards", description: "Engage in topic-based discussions with your peers." },
	{ icon: "❓", title: "Q&A Sections", description: "Ask questions and get answers from the community." },
	{ icon: "📅", title: "Event Announcements", description: "Stay updated with the latest campus events and activities." },
	{ icon: "📚", title: "Study Resources", description: "Access and share notes, guides, and helpful materials." },
];

// Footer links for the landing page
const footerLinks = [
	{ to: "/about", label: "About" },
	{ to: "/contact", label: "Contact" },
	{ to: "/privacy", label: "Privacy Policy" },
	{ to: "/terms", label: "Terms of Service" },
];

export function meta(_: Route.MetaArgs) {
	return [
		{ title: "IIITBuzz - Community Forum" },
		{ name: "description", content: "IIITBuzz is a community forum for IIIT students. Join discussions, ask questions, find events, and access study resources." },
	];
}

export default function LandingPage() {
	return (
		<main className="flex flex-col min-h-[100dvh] justify-between bg-background">
			<section className="flex flex-col items-center justify-center flex-1 px-4 py-12 text-center gap-6">
				<h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-2">Welcome to IIITBuzz</h1>
				<p className="max-w-xl mx-auto text-lg md:text-xl text-muted-foreground mb-4">
					A vibrant community forum for IIIT students. Connect, discuss, learn, and grow together!
				</p>
				<div className="grid gap-4 md:grid-cols-2 max-w-2xl w-full mx-auto mb-6">
					{features.map((feature) => (
						<Card key={feature.title}>
							<CardHeader>
								<CardTitle>{`${feature.icon} ${feature.title}`}</CardTitle>
							</CardHeader>
							<CardContent>
								<CardDescription>{feature.description}</CardDescription>
							</CardContent>
						</Card>
					))}
				</div>
				<div className="flex flex-col sm:flex-row gap-4 justify-center">
					<Link to="/signup">
						<Button size="lg" variant="default" className="w-40">Sign Up</Button>
					</Link>
					<Link to="/login">
						<Button size="lg" variant="outline" className="w-40">Log In</Button>
					</Link>
				</div>
			</section>
			<footer className="w-full border-t py-4 text-center text-sm text-muted-foreground bg-background">
				<nav className="flex flex-wrap justify-center gap-4 mb-2">
					{footerLinks.map((link) => (
						<Link key={link.to} to={link.to} className="hover:underline">
							{link.label}
						</Link>
					))}
				</nav>
				<span>&copy; {new Date().getFullYear()} IIITBuzz. All rights reserved.</span>
			</footer>
		</main>
	);
}
