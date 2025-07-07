import { Link } from "react-router";

const ComingSoon = () => {
	return (
		<div className="min-h-screen flex items-center justify-center bg-background px-4 text-center">
			<div className="neo-brutal-card border-foreground text-foreground p-8 rounded-2xl shadow-lg max-w-md w-half">
				<h1 className="pixel-font text-3xl mb-4">🚧 Coming Soon 🚧</h1>
				<p className="text-muted-foreground mb-6">
					We’re working hard behind the scenes to bring this feature to life.
				</p>
				<Link
					to="/"
					className="inline-block px-6 py-2 text-sm pixel-font rounded-xl bg-foreground text-primary hover:scale-105 transition-transform"
				>
					⬅ Go Back Home
				</Link>
			</div>
		</div>
	);
};

export default ComingSoon;
