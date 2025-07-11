import FeaturesPage from "@/components/LandingPage/features";
import Footer from "@/components/LandingPage/footer";
import Header from "@/components/LandingPage/header";
import Hero from "@/components/LandingPage/hero";

export default function HomePage() {
	return (
		<div className="flex flex-col min-h-screen">
			<Header />
			<main className="flex-1">
				<Hero />
				<FeaturesPage />
			</main>
			<Footer />
		</div>
	);
}
