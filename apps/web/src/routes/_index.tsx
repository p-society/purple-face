import Header from "@/components/header";
import Hero from "@/components/hero";
import FeaturesPage from "@/components/features";
import Footer from "@/components/footer";

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
