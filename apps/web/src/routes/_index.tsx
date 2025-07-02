import type { Route } from "./+types/_index";
import { Button } from "../components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "../components/ui/card";
import { Link } from "react-router";

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
					<Card>
						<CardHeader>
							<CardTitle>💬 Discussion Boards</CardTitle>
						</CardHeader>
						<CardContent>
							<CardDescription>Engage in topic-based discussions with your peers.</CardDescription>
						</CardContent>
					</Card>
					<Card>
						<CardHeader>
							<CardTitle>❓ Q&amp;A Sections</CardTitle>
						</CardHeader>
						<CardContent>
							<CardDescription>Ask questions and get answers from the community.</CardDescription>
						</CardContent>
					</Card>
					<Card>
						<CardHeader>
							<CardTitle>📅 Event Announcements</CardTitle>
						</CardHeader>
						<CardContent>
							<CardDescription>Stay updated with the latest campus events and activities.</CardDescription>
						</CardContent>
					</Card>
					<Card>
						<CardHeader>
							<CardTitle>📚 Study Resources</CardTitle>
						</CardHeader>
						<CardContent>
							<CardDescription>Access and share notes, guides, and helpful materials.</CardDescription>
						</CardContent>
					</Card>
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
					<Link to="/about" className="hover:underline">About</Link>
					<Link to="/contact" className="hover:underline">Contact</Link>
					<Link to="/privacy" className="hover:underline">Privacy Policy</Link>
					<Link to="/terms" className="hover:underline">Terms of Service</Link>
				</nav>
				<span>&copy; {new Date().getFullYear()} IIITBuzz. All rights reserved.</span>
			</footer>
		</main>
	);
}
